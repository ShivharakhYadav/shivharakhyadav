import Image from "next/image";
import type { ReactNode } from "react";
import type { Job } from "@/data/experience";

const initials = (name: string) =>
  name
    .replace(/[^A-Za-z ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("") || "Co";

/** One role: logo, company, role, period/location, summary and tech chips. `children` adds detail (bullets, projects). */
export default function JobCard({
  job,
  compact = false,
  children,
}: {
  job: Job;
  /** Overview mode (home page): company, role, dates/location and awards only. */
  compact?: boolean;
  children?: ReactNode;
}) {
  const isCurrent = /present/i.test(job.period);
  return (
    <div className="flex gap-5 sm:gap-6">
      <span className="relative grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-2xl bg-seaglass font-display text-lg font-semibold text-teal">
        {job.logo ? (
          <Image src={job.logo} alt={`${job.company} logo`} fill sizes="56px" className="object-contain p-2" />
        ) : (
          initials(job.company)
        )}
      </span>
      <div className="min-w-0 flex-1 space-y-3">
        {/* company → role → dates/location, each with its own weight so they read apart */}
        <div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h3 className="font-display text-[22px] font-semibold leading-tight tracking-[-0.03em] sm:text-[24px]">
              {job.company}
            </h3>
            {isCurrent && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-seaglass px-2.5 py-1 text-xs font-semibold text-teal">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" />
                Current
              </span>
            )}
          </div>
          <p className="mt-1 text-[17px] font-semibold text-teal">{job.role}</p>
          <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="5" width="18" height="16" rx="2" />
                <path d="M3 10h18M8 3v4M16 3v4" />
              </svg>
              {job.period}
            </span>
            {job.location && (
              <span className="inline-flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
                  <circle cx="12" cy="9.5" r="2.5" />
                </svg>
                {job.location}
              </span>
            )}
          </p>
        </div>
        {!compact && job.summary && <p className="leading-relaxed text-muted">{job.summary}</p>}
        {job.awards && job.awards.length > 0 && (
          <ul className="flex flex-wrap gap-2 pt-1" aria-label="Awards">
            {job.awards.map((a) => (
              <li
                key={a}
                className="inline-flex items-center gap-1.5 rounded-full bg-linen px-3.5 py-1.5 text-[13px] font-semibold text-coral-ink"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                  <path d="M12 2l2.9 6.26L22 9.27l-5.2 4.9L18.2 22 12 18.27 5.8 22l1.4-7.83L2 9.27l7.1-1.01L12 2z" />
                </svg>
                {a}
              </li>
            ))}
          </ul>
        )}
        {children}
        {!compact && job.tags && job.tags.length > 0 && (
          <ul className="flex flex-wrap gap-2 pt-1">
            {job.tags.map((t) => (
              <li key={t} className="chip">
                {t}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
