export interface SocialLink {
  label: string;
  href: string;
  /** link kind — used to tell email apart from external profiles */
  icon: "linkedin" | "github" | "email";
}

export interface Stat {
  label: string;
  value: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  company: string;
}

export const profile = {
  name: "Shivharakh Yadav",
  role: "Full-Stack Developer",
  location: "Pune, Maharashtra, India",
  email: "yadavshivharakhyadav@gmail.com",
  /** Link to the résumé PDF (e.g. "/resume.pdf"). Résumé links stay hidden while empty. */
  resumeUrl: "/Shivharakh_Yadav_FS.pdf",
  availability: "Available for full-stack & frontend roles",
  /** Shows the availability pill in the hero and on /contact. Hidden while employed. */
  showAvailability: false,
  /** Rotating middle line of the hero headline — kinds of products actually shipped. */
  heroWords: ["booking platforms", "learning portals", "coaching apps", "SaaS products"],
  intro:
    "Full-stack developer with 4+ years of experience building and shipping production web applications — from clean, type-safe frontends to secure backend APIs.",
  /** Longer bio for /about (facts from the GitHub profile README). */
  story: [
    "I’m a full-stack engineer with 4+ years of experience designing and shipping production SaaS platforms with React, Next.js, Node.js and MongoDB/PostgreSQL, across fintech, sports, transport and healthcare.",
    "I’m most at home with the hard parts of a product: multi-tenant data isolation, booking and allocation logic that stays correct under concurrent requests, caching and query performance, and real-time systems on Socket.IO. The platforms I’ve worked on serve 1,200+ users combined, including a multi-tenant SaaS used by 944+ people across 10 organizations.",
    "I like taking ambiguous requirements and turning them into scalable, production-ready architecture, then owning the work end to end: requirement calls, design, development, CI/CD and releases, in direct contact with clients in Australia and the US. Along the way I’ve mentored junior engineers on code quality and best practices.",
  ],
  currentlyExploring: "Exploring AI agents & building AI-integrated apps",
  currentlyExploringLong:
    "I’m diving into the AI/LLM ecosystem: AI agents, agentic workflows and AI developer tools, and building AI-integrated applications.",
  timezone: "IST (UTC+5:30)",
  socials: [
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/shivharakhyadav",
      icon: "linkedin",
    },
    {
      label: "GitHub",
      href: "https://github.com/ShivharakhYadav",
      icon: "github",
    },
    {
      label: "Email",
      href: "mailto:yadavshivharakhyadav@gmail.com",
      icon: "email",
    },
  ] satisfies SocialLink[],
};

export interface Education {
  degree: string;
  school: string;
  years: string;
  grade?: string;
}

export const education: Education[] = [
  {
    degree: "M.Sc. Computer Application & Information Technology",
    school: "Gujarat University",
    years: "2020 — 2022",
    grade: "GPA 3.8/5",
  },
  {
    degree: "B.Sc. Computer Application & Information Technology",
    school: "Gujarat University",
    years: "2017 — 2020",
    grade: "GPA 3.6/5",
  },
];

/** Proof numbers under the hero. */
export const stats: Stat[] = [
  { value: "4+", label: "years shipping" },
  { value: "1,200+", label: "users served" },
  { value: "10", label: "organizations" },
];

/** A client quote for the Experience section. The card is hidden while this is null. */
export const testimonial: Testimonial | null = null;

/** How I work: from the GitHub profile README. */
export const workingStyle = [
  {
    title: "End-to-end ownership",
    text: "From requirement discussions and architecture to development, CI/CD and production support.",
  },
  {
    title: "Direct client communication",
    text: "Experienced working straight with clients in Australia and the US: gathering requirements, running demos and turning feedback into shipped features.",
  },
  {
    title: "Team player",
    text: "Comfortable in cross-functional Agile teams of 5+ people, working alongside backend developers and project managers.",
  },
  {
    title: "Built to last",
    text: "Focused on clean code, scalability and long-term maintainability, not just getting the demo working.",
  },
];
