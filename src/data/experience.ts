export interface Job {
  period: string;
  role: string;
  company: string;
  /** Optional logo in /public (e.g. "/logos/acme.png"); initials are shown otherwise. */
  logo?: string;
  summary: string;
  tags: string[];
}

// TODO: replace the [bracketed] placeholders with real companies, roles and dates.
export const experience: Job[] = [
  {
    period: "[2024] — Present",
    role: "Full-Stack Developer",
    company: "[Company name]",
    summary:
      "Leading multi-tenant SaaS features end to end, with direct client communication across Australia & the US.",
    tags: ["Next.js", "NestJS", "PostgreSQL"],
  },
  {
    period: "2022 — [2024]",
    role: "Software Developer",
    company: "[Company name]",
    summary:
      "Real-time platforms, micro-frontends with Piral and CI/CD pipelines.",
    tags: ["React", "Socket.IO", "Piral"],
  },
];
