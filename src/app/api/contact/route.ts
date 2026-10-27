import { NextResponse } from 'next/server';
import nodemailer, { type Transporter } from 'nodemailer';
import { profile } from '@/data/profile';

/**
 * Contact form endpoint: validates the message, filters obvious spam and
 * emails it to the owner from their own mailbox over SMTP (Gmail by default).
 *
 * Env (Vercel → Settings → Environment Variables; see .env.example):
 *   SMTP_USER   the Gmail address that sends (and, by default, receives)
 *   SMTP_PASS   a Google App Password for it, not the account password
 *   CONTACT_TO  optional recipient, defaults to profile.email
 *   SMTP_HOST / SMTP_PORT  optional, for a provider other than Gmail
 * Without SMTP_USER and SMTP_PASS the page shows an email fallback instead.
 */

// Nodemailer needs Node APIs (sockets, TLS), not the Edge runtime
export const runtime = 'nodejs';

const MIN_FILL_MS = 3000; // a human takes longer than this to fill the form
const LIMIT = { max: 5, windowMs: 10 * 60 * 1000 }; // per IP
// Not the owner's own name: mail from another address using the recipient's
// name looks like impersonation to Gmail and lands in spam.
const SENDER_NAME = 'Portfolio contact form';

// Best-effort rate limit: serverless instances don't share memory, so this
// only slows down repeated posts that reach the same instance.
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < LIMIT.windowMs);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > LIMIT.max;
}

// one SMTP connection setup per server instance
let transporter: Transporter | undefined;
function mailer(user: string, pass: string) {
  if (!transporter) {
    const port = Number(process.env.SMTP_PORT) || 465;
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port,
      secure: port === 465,
      auth: { user, pass },
    });
  }
  return transporter;
}

const oneLine = (s: string) => s.replace(/[\r\n]+/g, ' ').trim();
const escapeHtml = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[
        c
      ]!,
  );

const fail = (status: number, error: string) =>
  NextResponse.json({ error }, { status });

/** A small card in the site's colours; inline styles and tables, which is what email clients support. */
function emailHtml({
  name,
  email,
  reason,
  message,
  subject,
}: Record<string, string>) {
  const reply = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(`Re: ${subject}`)}`;
  return `<!doctype html><html><body style="margin:0;padding:24px;background:#FBF6EE;font-family:Arial,Helvetica,sans-serif;color:#14303A">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#FFFCF7;border:1px solid #E8DDCC;border-radius:20px">
<tr><td style="padding:28px 28px 8px">
  <p style="margin:0;font-size:12px;font-weight:bold;letter-spacing:1.5px;text-transform:uppercase;color:#A34D2F">New enquiry · ${escapeHtml(reason || 'Message')}</p>
  <h1 style="margin:10px 0 0;font-size:22px;line-height:1.3;color:#14303A">${escapeHtml(name)}</h1>
  <p style="margin:4px 0 0;font-size:15px"><a href="mailto:${escapeHtml(email)}" style="color:#0F5C63;text-decoration:none">${escapeHtml(email)}</a></p>
</td></tr>
<tr><td style="padding:16px 28px">
  <div style="background:#F1E8DA;border-radius:14px;padding:18px 20px;font-size:15px;line-height:1.6;white-space:pre-wrap">${escapeHtml(message)}</div>
</td></tr>
<tr><td style="padding:4px 28px 28px">
  <a href="${escapeHtml(reply)}" style="display:inline-block;background:#0F5C63;color:#FFFFFF;text-decoration:none;font-weight:bold;font-size:15px;padding:12px 22px;border-radius:999px">Reply to ${escapeHtml(name.split(' ')[0])}</a>
</td></tr>
</table>
<p style="margin:16px 0 0;font-size:12px;color:#5A6B70">Sent from the contact form on your portfolio. Replying goes straight to the sender.</p>
</td></tr></table></body></html>`;
}

export async function POST(req: Request) {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!user || !pass) return fail(503, "The contact form isn't set up yet.");

  // only accept posts from this site's own pages
  const origin = req.headers.get('origin');
  if (origin && new URL(origin).host !== req.headers.get('host'))
    return fail(403, 'Forbidden.');

  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
  if (rateLimited(ip))
    return fail(
      429,
      'Too many messages. Please try again later or email me directly.',
    );

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return fail(400, 'Invalid request.');
  }
  const str = (k: string) =>
    typeof body[k] === 'string' ? (body[k] as string) : '';

  // bots: filled the hidden field, or submitted faster than a person could
  const startedAt = Number(body.startedAt);
  if (str('website') || !startedAt || Date.now() - startedAt < MIN_FILL_MS) {
    return NextResponse.json({ ok: true }); // look successful so they don't retry
  }

  const name = oneLine(str('name')).slice(0, 100);
  const email = oneLine(str('email')).slice(0, 200);
  const reason = oneLine(str('reason')).slice(0, 60);
  const message = str('message').trim().slice(0, 5000);

  if (!name) return fail(400, 'Please add your name.');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return fail(400, 'Please check your email address.');
  if (message.length < 10)
    return fail(400, 'Please write a little more in your message.');

  const subject = `New enquiry: ${reason || 'Message'} from ${name}`;
  const text = `${message}\n\n---\nFrom: ${name} <${email}>\nAbout: ${reason || '-'}\nReply to this email to answer ${name}.`;

  try {
    await mailer(user, pass).sendMail({
      from: { name: SENDER_NAME, address: user },
      to: process.env.CONTACT_TO || profile.email,
      replyTo: { name, address: email }, // hitting Reply answers the visitor
      subject,
      text,
      html: emailHtml({ name, email, reason, message, subject }),
    });
  } catch (err) {
    // the code only (e.g. EAUTH): the full error can include server responses
    console.error(
      `Contact mail failed: ${(err as { code?: string }).code ?? 'unknown error'}`,
    );
    return fail(502, "The message couldn't be sent.");
  }
  return NextResponse.json({ ok: true });
}
