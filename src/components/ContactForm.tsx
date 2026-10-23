"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import EmailText from "@/components/ui/EmailText";

// job-related options only while the availability pill is shown
const jobReasons = ["Full-time role", "Freelance project", "Just saying hi"];
const projectReasons = ["A project", "Collaboration", "Just saying hi"];

// what makes a first message easy to answer well
const brief = [
  "What you're building and who it's for",
  "Where it stands today: an idea, a prototype or a live product",
  "Your timeline",
];

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-2xl border border-line bg-bg px-4 py-3.5 text-[16px] text-ink placeholder:text-muted/70 transition focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20";

/**
 * Posts to our own /api/contact route, which emails the message from the owner's Gmail.
 * `enabled` is false when SMTP_USER/SMTP_PASS aren't set; then it offers email instead.
 * `email` and `showAvailability` come in as props: importing profile here would
 * ship all the site data (every job and project) to the browser.
 */
export default function ContactForm({
  enabled,
  email,
  showAvailability,
}: {
  enabled: boolean;
  email: string;
  showAvailability: boolean;
}) {
  const reasons = showAvailability ? jobReasons : projectReasons;
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  // when the form appeared; the API ignores posts sent faster than a person could type
  const startedAt = useRef(0);
  useEffect(() => {
    startedAt.current = Date.now();
  }, [status]);

  if (!enabled) {
    return (
      <div className="card flex flex-col items-start gap-4 self-start rounded-[32px] p-8">
        <h2 className="font-display text-2xl font-semibold tracking-[-0.03em]">Email me directly</h2>
        <p className="leading-relaxed text-muted">
          Tell me a little about what you have in mind and I'll get back to you within a day.
        </p>
        <a href={`mailto:${email}`} className="btn-primary max-w-full px-6 text-[15px] sm:px-7 sm:text-base">
          <EmailText email={email} />
        </a>
        <div className="mt-2 w-full border-t border-line pt-5">
          <p className="eyebrow text-muted">Helpful to include</p>
          <ul className="mt-3 space-y-2">
            {brief.map((b) => (
              <li key={b} className="flex gap-3 leading-relaxed">
                <span aria-hidden="true" className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...Object.fromEntries(new FormData(form)), startedAt: startedAt.current }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        // validation messages (400) are worth showing; anything else gets the email fallback text
        setError(res.status === 400 && typeof data.error === "string" ? data.error : "");
        setStatus("error");
        return;
      }
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="card flex flex-col items-start gap-3 self-start rounded-[32px] p-8" role="status">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-seaglass text-xl text-teal" aria-hidden="true">
          ✓
        </span>
        <h2 className="font-display text-2xl font-semibold tracking-[-0.03em]">Thanks, message sent!</h2>
        <p className="leading-relaxed text-muted">I'll reply to your email within a day.</p>
        <button type="button" onClick={() => setStatus("idle")} className="text-link mt-2">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-5 self-start rounded-[32px] p-6 sm:p-8">
      <h2 className="font-display text-2xl font-semibold tracking-[-0.03em]">Send a message</h2>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block space-y-2">
          <span className="text-sm font-medium">Your name</span>
          <input name="name" required autoComplete="name" className={field} placeholder="Jane Smith" />
        </label>
        <label className="block space-y-2">
          <span className="text-sm font-medium">Email</span>
          <input name="email" type="email" required autoComplete="email" className={field} placeholder="jane@company.com" />
        </label>
      </div>

      <fieldset className="space-y-2">
        <legend className="mb-2 text-sm font-medium">What are you looking for?</legend>
        <div className="flex flex-wrap gap-2">
          {reasons.map((r, i) => (
            <label key={r} className="cursor-pointer">
              <input type="radio" name="reason" value={r} defaultChecked={i === 0} className="peer sr-only" />
              <span className="block rounded-full border border-line bg-bg px-4 py-2 text-sm font-medium transition peer-checked:border-teal peer-checked:bg-seaglass peer-checked:text-teal peer-focus-visible:ring-2 peer-focus-visible:ring-teal">
                {r}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="block space-y-2">
        <span className="text-sm font-medium">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          className={`${field} resize-y`}
          placeholder="A few lines about what you have in mind, timeline and anything else useful."
        />
      </label>

      {/* honeypot: real people never fill this in, bots often do */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={status === "sending"} className="btn-primary disabled:opacity-60">
          {status === "sending" ? "Sending…" : "Send message →"}
        </button>
        <p aria-live="polite" className="text-sm text-coral-ink">
          {status === "error" && error}
          {status === "error" && !error && (
            <>
              Something went wrong. Please email me at{" "}
              <a href={`mailto:${email}`} className="underline">
                {email}
              </a>
              .
            </>
          )}
        </p>
      </div>
    </form>
  );
}
