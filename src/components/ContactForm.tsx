"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/data/profile";
import EmailText from "@/components/ui/EmailText";

// Free Formspree form that forwards messages to email. Set in .env.local and in Vercel.
const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

// job-related options only while the availability pill is shown
const reasons = profile.showAvailability
  ? ["Full-time role", "Freelance project", "Just saying hi"]
  : ["A project", "Collaboration", "Just saying hi"];

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-2xl border border-line bg-bg px-4 py-3.5 text-[16px] text-ink placeholder:text-muted/70 transition focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  // Without a form ID the form couldn't deliver anything, so offer email instead.
  if (!formId) {
    return (
      <div className="card flex flex-col items-start gap-4 self-start rounded-[32px] p-8">
        <h2 className="font-display text-2xl font-semibold tracking-[-0.03em]">Email me directly</h2>
        <p className="leading-relaxed text-muted">
          Tell me a little about what you have in mind and I’ll get back to you within a day.
        </p>
        <a href={`mailto:${profile.email}`} className="btn-primary max-w-full px-6 text-[15px] sm:px-7 sm:text-base">
          <EmailText email={profile.email} />
        </a>
      </div>
    );
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
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
        <p className="leading-relaxed text-muted">I’ll reply to your email within a day.</p>
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
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={status === "sending"} className="btn-primary disabled:opacity-60">
          {status === "sending" ? "Sending…" : "Send message →"}
        </button>
        <p aria-live="polite" className="text-sm text-coral-ink">
          {status === "error" && (
            <>
              Something went wrong. Please email me at{" "}
              <a href={`mailto:${profile.email}`} className="underline">
                {profile.email}
              </a>
              .
            </>
          )}
        </p>
      </div>
    </form>
  );
}
