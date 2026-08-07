export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js (App Router, SSR)",
      "TypeScript",
      "Redux Toolkit",
      "Zustand",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "NestJS", "REST API design"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    category: "DevOps & Tools",
    items: [
      "Docker",
      "Git",
      "GitHub Actions",
      "CI/CD",
      "Socket.IO",
      "Micro-frontend (Piral)",
    ],
  },
];
