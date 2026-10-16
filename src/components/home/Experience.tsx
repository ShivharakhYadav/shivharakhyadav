import Link from "next/link";
import Container from "@/components/ui/Container";
import JobCard from "@/components/ui/JobCard";
import { experience } from "@/data/experience";
import { profile, testimonial } from "@/data/profile";

export default function Experience() {
  return (
    <Container>
      <section id="experience" className="grid gap-10 pt-24 lg:grid-cols-[360px_1fr] lg:gap-24">
        <div className="space-y-4">
          <h2 className="font-display text-[38px] font-semibold tracking-[-0.04em] sm:text-[48px]">
            Experience
          </h2>
          <p className="text-[17px] leading-relaxed text-muted">
            4+ years building SaaS for clients in Australia &amp; the US, from
            requirement calls to production.
          </p>
          <ul className="max-w-[340px] pt-2">
            <RowLink href="/experience" label="Full experience" />
            <RowLink href="/about" label="More about me" />
            {profile.resumeUrl && <RowLink href={profile.resumeUrl} label="Résumé (PDF)" download />}
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

        <ol className="space-y-2">
          {experience.map((job) => (
            <li
              key={`${job.company}-${job.period}`}
              className="rounded-3xl border border-transparent px-6 py-4 transition hover:border-line hover:bg-card sm:px-7 sm:py-5"
            >
              <JobCard job={job} compact />
            </li>
          ))}
        </ol>
      </section>
    </Container>
  );
}

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
