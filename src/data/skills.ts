export interface SkillGroup {
  category: string;
  items: string[];
}

// From the résumé's Technical Skills and Core Engineering Strengths.
export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js (App Router)", "TypeScript", "Redux Toolkit", "Zustand", "React Query", "React Hook Form", "Tailwind CSS", "Material UI", "Fluent UI", "Office.js (Excel add-ins)"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "NestJS", "REST API design", "Socket.IO", "Microservices", "Stripe", "Twilio"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "PostgreSQL", "Redis"],
  },
  {
    category: "System design",
    items: ["Multi-tenant data isolation", "Race-condition-safe allocation", "Idempotent APIs", "Caching & query optimization", "Real-time systems"],
  },
  {
    category: "Security",
    items: ["Auth0 (RS256/JWKS JWT)", "HMAC-signed webhooks", "Role-based access control"],
  },
  {
    category: "Testing",
    items: ["Jest", "Vitest", "Playwright (E2E)", "React Testing Library"],
  },
  {
    category: "DevOps & cloud",
    items: ["Docker", "GitHub Actions", "CI/CD pipelines", "AWS", "Vercel", "Render", "Git"],
  },
  {
    category: "Ways of working",
    items: ["Agile & Scrum", "Jira", "ClickUp", "AI-assisted development (Cursor, Claude)"],
  },
];

/** Flat list for structured data (schema.org `knowsAbout`). */
export const allSkills = skillGroups.flatMap((g) => g.items);
