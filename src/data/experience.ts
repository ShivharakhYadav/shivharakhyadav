export interface Job {
  /** Shown as-is, e.g. "Aug 2022 - Oct 2025" or "Oct 2025 - Present". */
  period: string;
  role: string;
  company: string;
  /** Optional logo in /public (e.g. "/logos/ifour.png"); initials are shown otherwise. */
  logo?: string;
  /** e.g. "Ahmedabad, India" */
  location?: string;
  /** One or two lines about the role. */
  summary?: string;
  /** What you did/achieved in this role; shown as bullets on /experience. */
  highlights?: string[];
  /** Slugs from src/data/projects.ts built in this role; shown as linked cards. */
  projects?: string[];
  /** Main tech used in this role; shown as chips. */
  tags?: string[];
  /** Awards received in this role; shown as badges and given to Google as structured data. */
  awards?: string[];
}

/** True while a value still holds a [bracketed] placeholder. */
export const isPlaceholder = (value: string) => /\[.*\]/.test(value);

/**
 * Work history, newest first. This is the only place to edit: the home page,
 * /experience and the structured data for Google all read from this list.
 * To add a role, copy an entry; to remove one, delete it.
 */
export const experience: Job[] = [
  {
    period: "Oct 2026 - Present",
    role: "Senior Software Engineer",
    company: "iProgrammer Solutions Pvt. Ltd.",
    logo: "/logos/iprogrammer.png",
    location: "Pune, Maharashtra, India",
    summary:
      "Senior full-stack engineer, building and shipping production web applications.",
  },
  {
    period: "Oct 2025 - Jul 2026",
    role: "Software Engineer",
    company: "ViitorCloud Technologies Pvt. Ltd.",
    logo: "/logos/viitorcloud.png",
    location: "Ahmedabad, Gujarat, India",
    summary:
      "Sole full-stack engineer on client SaaS projects, owning requirements, architecture, delivery and releases.",
    highlights: [
      "Designed the tenant data-isolation approach for a multi-tenant SaaS used by 944+ users across 10 organizations",
      "Built 16 interactive simulation modules and a B2B licensing workflow with concurrency-safe seat allocation",
      "Delivered the frontend and the questionnaire API for a coaching platform serving 329+ users, including 15 coaches",
      "Managed CI/CD pipelines and releases, working daily with PMs, backend engineers and client stakeholders",
    ],
    projects: ["dms-simulation-platform", "health-coaching-platform"],
    tags: ["Next.js", "TypeScript", "Node.js", "NestJS", "Python", "PostgreSQL", "Redis", "Socket.IO"],
  },
  {
    period: "Feb 2022 - Oct 2025",
    role: "Software Engineer",
    company: "iFour Technolabs Pvt. Ltd.",
    logo: "/logos/ifour.png",
    location: "Ahmedabad, Gujarat, India",
    summary:
      "Full-stack delivery for clients in Australia and the US, from requirement calls to deployment. Joined for a six-month training period in Feb 2022, then as Software Engineer from Aug 2022.",
    highlights: [
      "Built the API and storefront for Moto Venice, then grew it into a two-sided rental marketplace",
      "Architected a sports data platform from scratch on AWS and made it 40% faster through profiling and optimization",
      "Delivered a 4-role BOM approval workflow that improved approval efficiency by ~30%",
      "Mentored junior engineers and led daily client communication with Australia-based stakeholders",
    ],
    projects: [
      "moto-venice",
      "dagger-concept",
      "bom-workflow-system",
      "infosel-hub-excel-addin",
      "aumni-excel-addin",
      "diligent-equity-excel-addin",
      "calloquy",
      "my-ticket-solutions",
    ],
    tags: ["React", "Next.js", "Node.js", "NestJS", "PostgreSQL", "Socket.IO", "AWS", "Office.js"],
    awards: ["Client Excellence ×2", "Good Learner Award"],
  },
];

export interface Award {
  title: string;
  /** Who gave it, e.g. a company or event organiser. */
  issuer?: string;
  year?: string;
  /** One line of context, e.g. the project you built. */
  note?: string;
  /** Optional links shown under the award, e.g. the write-up and the repo. */
  links?: { label: string; href: string }[];
}

/**
 * Awards that don't belong to a job (hackathons, competitions…).
 * Awards won at a company go in that role's `awards` list above instead.
 */
export const otherAwards: Award[] = [
  {
    title: "Hackathon winner",
    issuer: "Port Mortem - Code Resurrection",
    year: "2026",
    note: "Track D (Python → Rust): price-parser-rs, a Rust port that passes all 1,059 original tests unmodified, plus 500,000 differential fuzz cases with zero divergences.",
    links: [
      {
        label: "Read the write-up",
        href: "https://medium.com/@yadavshivharakhyadav/i-ported-a-python-library-to-rust-all-1-059-original-tests-passed-and-it-was-still-broken-39a0a973d872",
      },
      { label: "View the code", href: "https://github.com/ShivharakhYadav/price-parser-rs" },
    ],
  },
];

/** Every award: hackathons and other awards first, then those from roles. */
export const awards: Award[] = [
  ...otherAwards,
  ...experience.flatMap((j) =>
    (j.awards ?? []).map((title) => ({ title, issuer: j.company }))
  ),
];

/** Award names for structured data, leaving out any still-[placeholder] entries. */
export const allAwards = awards
  .filter((a) => !isPlaceholder(`${a.title} ${a.issuer ?? ""} ${a.year ?? ""}`))
  .map((a) => (a.issuer ? `${a.title}, ${a.issuer}` : a.title));

/** Career-wide facts for /experience (from the profile and project data). */
export const careerHighlights = [
  { value: "4+", label: "years shipping production web apps" },
  { value: "1,200+", label: "users across the platforms I’ve built" },
  { value: "944+", label: "users on one multi-tenant SaaS, across 10 organizations" },
  { value: "AU & US", label: "clients I’ve worked with directly, from requirements to demos" },
];
