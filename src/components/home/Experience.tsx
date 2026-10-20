import Link from "next/link";
import Container from "@/components/ui/Container";
import { CompanyLogo } from "@/components/ui/JobCard";
import { experience } from "@/data/experience";
import { profile, testimonial } from "@/data/profile";

export default function Experience() {
  return (
    <Container>
      <section id="experience" className="grid gap-10 pt-24 lg:grid-cols-[360px_1fr] lg:gap-24">
        <div className="space-y-4">
          <h2 className="font-display fs-section font-semibold tracking-[-0.04em]">
            Experience
          </h2>
          <p className="text-[17px] leading-relaxed text-muted">
            4+ years building SaaS for clients in Australia &amp; the US, from
            requirement calls to production.
          </p>
          <ul className="max-w-[340px] pt-2">
            <RowLink href="/experience" label="Full experience" />
            <RowLink href="/about" label="More about me" />
            {profile.resumeUrl && <RowLink href={profile.resumeUrl} label="Resume (PDF)" download />}
          </ul>
          {testimonial && (
            <figure className="mt-6 space-y-5 rounded-[28px] bg-linen p-7">
              <span className="block font-display text-5xl font-semibold leading-none text-coral-ink" aria-hidden="true">
                “
              </span>
              <blockquote className="font-display text-lg font-medium leading-snug">
                {testimonial.quote}
              </blockquote>
              <figcaption>
                <span className="block text-sm font-semibold">{testimonial.name}</span>
                <span className="block text-[13px] text-coral-ink">{testimonial.company}</span>
              </figcaption>
            </figure>
          )}
        </div>

        {/* timeline: the company logos are the nodes, joined by a line (teal from the current role) */}
        <ol>
          {experience.map((job, i) => {
            const current = /present/i.test(job.period);
            // "Pune, Maharashtra, India" -> "Pune, IN"
            const parts = job.location?.split(",").map((p) => p.trim()) ?? [];
            const place = parts.length > 0 ? [parts[0], countryCodes[parts[parts.length - 1]]].filter(Boolean).join(", ") : "";
            return (
              <li key={`${job.company}-${job.period}`} className="relative flex gap-4 pb-9 last:pb-0 sm:gap-5">
                {i < experience.length - 1 && (
                  <span
                    aria-hidden="true"
                    className={`absolute bottom-2 left-6 top-[60px] w-0.5 -translate-x-1/2 rounded-full sm:left-7 sm:top-[68px] ${
                      current ? "bg-teal/50" : "bg-line"
                    }`}
                  />
                )}
                <CompanyLogo
                  job={job}
                  className={`h-12 w-12 sm:h-14 sm:w-14 ${current ? "ring-2 ring-teal ring-offset-2 ring-offset-bg" : ""}`}
                />
                <div className="min-w-0 pt-0.5">
                  {/* LinkedIn order: role (what recruiters scan for), then company, then dates */}
                  <h3 className="font-display text-[20px] font-semibold leading-snug tracking-[-0.02em] sm:text-[22px]">
                    {job.role}
                  </h3>
                  <p className="mt-0.5 text-[15px]">
                    <span className="font-medium text-teal">{job.company.replace(/ Pvt\. Ltd\.$/, "")}</span>
                    {place && <span className="text-muted"> · {place}</span>}
                  </p>
                  <p className="mt-1.5 flex flex-wrap items-center gap-2 text-sm text-muted">
                    {job.period}
                    {current && (
                      <span className="rounded-full bg-seaglass px-2 py-0.5 text-xs font-semibold text-teal">Now</span>
                    )}
                  </p>
                  {job.awards && job.awards.length > 0 && (
                    <ul className="mt-3 space-y-1 text-sm font-semibold text-coral-ink" aria-label="Awards">
                      {job.awards.map((a) => (
                        <li key={a}>
                          <span aria-hidden="true">★ </span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </section>
    </Container>
  );
}

// Short country codes for the timeline's place line
const countryCodes: Record<string, string> = { India: "IN" };

// Full-width text row with a divider and a trailing arrow
function RowLink({ href, label, download }: { href: string; label: string; download?: boolean }) {
  const cls =
    "group flex items-center justify-between border-b border-line py-3.5 font-medium text-teal transition hover:text-ink";
  const arrow = (
    <span
      aria-hidden="true"
      className={`text-sm transition ${download ? "group-hover:translate-y-0.5" : "group-hover:-translate-y-0.5 group-hover:translate-x-0.5"}`}
    >
      {download ? "↓" : "↗"}
    </span>
  );
  return (
    <li>
      {download ? (
        <a href={href} className={cls}>
          {label}
          {arrow}
        </a>
      ) : (
        <Link href={href} className={cls}>
          {label}
          {arrow}
        </Link>
      )}
    </li>
  );
}
