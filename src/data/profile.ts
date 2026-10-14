export interface SocialLink {
  label: string;
  href: string;
  /** link kind — used to tell email apart from external profiles */
  icon: "linkedin" | "github" | "email";
}

export const profile = {
  name: "Shivharakh Yadav",
  role: "Full-Stack Developer",
  tagline: "React · Next.js · TypeScript · Node.js",
  location: "Ahmedabad, Gujarat, India",
  email: "yadavshivharakhyadav@gmail.com",
  // Birth/career-start markers reused by getCount() for live stats
  birth: { day: 18, month: 6, year: 2000 },
  careerStart: { day: 1, month: 2, year: 2022 },
  intro:
    "Full-stack developer with 4+ years of experience building and shipping production web applications — from clean, type-safe frontends to secure backend APIs.",
  bio: [
    "I've delivered multi-tenant B2B/B2C SaaS, e-learning, and energy-management products, with platforms currently serving 1,200+ users combined.",
    "I enjoy taking end-to-end ownership — from requirement discussions and architecture to development, CI/CD, and direct client communication across Australia and the US.",
  ],
  currentlyExploring:
    "Diving into the AI/LLM ecosystem — AI agents, agentic workflows, and AI developer tools — and building AI-integrated applications.",
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

export interface Stat {
  label: string;
  value: string;
}

export const stats: Stat[] = [
  { label: "Years Experience", value: "4+" },
  { label: "Users Served", value: "1,200+" },
  { label: "Organizations", value: "10+" },
  { label: "Contributions / yr", value: "1,200+" },
];
