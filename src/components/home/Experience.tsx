import Image from "next/image";
import Container from "@/components/ui/Container";
import { experience } from "@/data/experience";
import { profile, testimonial } from "@/data/profile";

const initials = (name: string) =>
  name
    .replace(/[^A-Za-z ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("") || "Co";

export default function Experience() {
  return (
    <Container>
      <section id="experience" className="grid gap-10 py-24 lg:grid-cols-[360px_1fr] lg:gap-24">
        <div className="space-y-4">
          <h2 className="font-display text-[38px] font-semibold tracking-[-0.04em] sm:text-[48px]">
            Experience
          </h2>
          <p className="text-[17px] leading-relaxed text-muted">
            4+ years building SaaS for clients in Australia &amp; the US, from
            requirement calls to production.
          </p>
          {profile.resumeUrl && (
            <a href={profile.resumeUrl} className="text-link inline-block">
              Full résumé (PDF) →
            </a>
          )}
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

        <ol className="space-y-4">
          {experience.map((job) => (
            <li
              key={`${job.company}-${job.period}`}
              className="flex gap-6 rounded-3xl border border-transparent p-6 transition hover:border-line hover:bg-card sm:p-7"
            >
              <span className="relative grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-2xl bg-seaglass font-display text-lg font-semibold text-teal">
                {job.logo ? (
                  <Image src={job.logo} alt={`${job.company} logo`} fill sizes="56px" className="object-contain p-2" />
                ) : (
                  initials(job.company)
                )}
              </span>
              <div className="flex-1 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-x-4">
                  <h3 className="font-display text-[22px] font-medium tracking-[-0.03em]">
                    {job.role} · {job.company}
                  </h3>
                  <span className="text-sm font-medium text-teal">{job.period}</span>
                </div>
                <p className="leading-relaxed text-muted">{job.summary}</p>
                <ul className="flex flex-wrap gap-2 pt-1">
                  {job.tags.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </Container>
  );
}
