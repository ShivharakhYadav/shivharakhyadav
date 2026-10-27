export interface Service {
  title: string;
  text: string;
  /** Case-study slugs from src/data/projects.ts shown as examples. */
  projects: string[];
}

/**
 * "What I can help with" on the home page. Each service is backed by real
 * case studies; don't add a service without one.
 */
export const services: Service[] = [
  {
    title: 'Web apps & SaaS platforms',
    text: 'Multi-tenant SaaS, marketplaces and client portals built with React, Next.js, Node.js and NestJS.',
    projects: [
      'dms-simulation-platform',
      'moto-venice',
      'health-coaching-platform',
    ],
  },
  {
    title: 'Excel & Outlook add-ins',
    text: "Office.js add-ins that bring your platform's data into Excel and Outlook: live formulas, real-time updates and one-click reports.",
    projects: [
      'infosel-hub-excel-addin',
      'aumni-excel-addin',
      'diligent-equity-excel-addin',
      'calloquy',
    ],
  },
  {
    title: 'Real-time features',
    text: 'Chat, live events and streaming data that update instantly, built on Socket.IO and WebSockets.',
    projects: [
      'health-coaching-platform',
      'dagger-concept',
      'infosel-hub-excel-addin',
    ],
  },
  {
    title: 'Extra hands on your product',
    text: 'Need more hands on an existing product? I can join your team and codebase to ship new features, fixes and integrations, so your roadmap keeps moving.',
    projects: ['co4-energy-management-portal'],
  },
];
