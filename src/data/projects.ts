export interface Project {
  slug: string;
  title: string;
  /** small label above the title, e.g. "SaaS · E-learning" */
  eyebrow: string;
  /** one line for cards */
  tagline: string;
  /** longer intro for the case-study page */
  summary: string;
  /** the single result a card leads with */
  headline: { value: string; label: string };
  /** screenshot in /public (e.g. "/projects/moto-venice.png"); a framed placeholder shows while empty */
  image?: string;
  tags: string[];
  /** key facts shown beside the headline on the case-study page (don't repeat the headline) */
  metrics: { label: string; value: string }[];
  /** Case-study fields */
  problem: string;
  role: string[];
  stack: string[];
  highlights: string[];
  outcome: string;
}

// Facts here come from the résumé (public/Shivharakh_Yadav_FS.pdf) and the
// GitHub profile. Don't add numbers or claims that aren't in those sources.
export const projects: Project[] = [
  {
    slug: "dms-simulation-platform",
    title: "DMS Simulation Platform",
    eyebrow: "SaaS · Multi-tenant",
    tagline:
      "A multi-tenant SaaS for 10 organizations: 16 interactive simulation modules and a full B2B licensing workflow.",
    headline: { value: "944+", label: "users across 10 organizations" },
    summary:
      "A multi-tenant SaaS product delivering interactive simulations to 944+ users across 10 organizations. I was the sole full-stack engineer on the client project, owning everything from requirement gathering to architecture, delivery and releases.",
    tags: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB"],
    metrics: [
      { label: "Modules", value: "16 interactive" },
      { label: "My role", value: "Sole full-stack engineer" },
      { label: "Tested with", value: "Jest" },
    ],
    problem:
      "Ten organizations needed to share one SaaS product without their data ever mixing, while each of them bought and managed seats for their own people. The product had to run timed, interactive simulation sessions reliably, and hand out licences without two people ever claiming the same seat.",
    role: [
      "Engaged as the sole full-stack engineer on the client project, owning requirement gathering and day-to-day communication with a project manager, a backend engineer and client-side stakeholders",
      "Led the frontend architecture and designed the tenant data-isolation approach: a schema-per-tenant data model with tenant-scoped indexing, plus shared session and auth state via Context API",
      "Built the simulation-delivery frontend spanning 16 interactive modules, with real-time session timers and tab-close handling",
      "Delivered a full B2B licensing workflow: requests, approvals, seat allocation with concurrency-safe writes, and audit export, validated with Jest",
      "Managed CI/CD pipelines and release deployments, turning client feedback into sprint-level deliverables",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "Express (REST API)", "MongoDB", "Context API", "Jest", "Docker"],
    highlights: [
      "Safe B2B/B2C data isolation between 10 organizations on one platform",
      "Race-condition-safe seat and licence allocation using transactional writes, so a seat can never be claimed twice",
      "16 interactive simulation modules with real-time session timers",
      "End-to-end ownership as the only full-stack engineer on the project",
    ],
    outcome:
      "A production multi-tenant platform serving 944+ users across 10 organizations, with isolated tenant data, reliable timed simulations and a licensing workflow that hands out seats safely under concurrent requests.",
  },
  {
    slug: "moto-venice",
    title: "Moto Venice",
    eyebrow: "Commerce · Rentals",
    tagline:
      "A premium motorcycle rental marketplace with live availability, instant pricing and delivery quotes, and a consignment program for bike owners.",
    headline: { value: "2-sided", label: "marketplace: riders who rent, and owners who list their bikes" },
    summary:
      "The platform behind a Venice Beach luxury and exotic motorcycle rental business. I built the Swagger-documented REST API and the production Next.js storefront, then extended it with new rental modules and a consignment program that turned it into a two-sided marketplace.",
    tags: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Auth0"],
    metrics: [
      { label: "Built", value: "API + storefront" },
      { label: "Auth & KYC", value: "Auth0 + Veriff" },
      { label: "Deployment", value: "Render CI/CD" },
    ],
    problem:
      "A luxury motorcycle rental business needed a premium storefront where customers only ever see bikes that are actually free for their dates, can price a booking and its delivery instantly, and can sign up and verify their identity online. Later the business wanted to rent for photo and video shoots, offer detailing, and let private owners list their own bikes.",
    role: [
      "Built a Swagger-documented RESTful API and a production-scale Next.js storefront in TypeScript, with SEO-friendly slug-based routing",
      "Implemented date-range availability filtering using interval-overlap queries, so customers only see bikes they can actually book",
      "Developed a booking configurator with real-time availability calendars, live price calculation and a distance-based delivery-fee engine using the Mapbox Directions API",
      "Extended the platform with two full-stack rental modules: an hourly/daily “shoot rental” flow for photo and video shoots with its own pricing, and a motorcycle detailing service with flexible appointment scheduling",
      "Built the frontend for a consignment and rental management program, letting bike owners list their motorcycles with a 50-50 revenue-split display and storage/inspection tracking",
      "Integrated Auth0 end to end (RS256/JWKS JWT validation, webhook-driven user sync) and Veriff identity verification through HMAC-signed webhooks",
      "Set up GitHub Actions CI/CD with deployment on Render",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Swagger / OpenAPI",
      "Auth0",
      "Veriff (KYC)",
      "Mapbox Directions API",
      "Chakra UI",
      "TanStack React Query",
      "Jest",
      "GitHub Actions",
      "Render",
    ],
    highlights: [
      "Interval-overlap availability filtering: no customer is shown a bike that's already booked for their dates",
      "Instant, distance-based delivery quotes from the Mapbox Directions API",
      "Grew from a rental storefront into a two-sided marketplace with owner consignment and a 50-50 revenue split",
      "Secure by design: JWT validation against JWKS and HMAC-verified webhooks for user sync and KYC",
    ],
    outcome:
      "A production rental marketplace where riders browse an exotic fleet filtered to their dates, price their booking and delivery instantly, verify their identity and book, while bike owners list their motorcycles through the consignment program.",
  },
  {
    slug: "health-coaching-platform",
    title: "Saluta — Health & Coaching Platform",
    eyebrow: "Health · Real-time",
    tagline:
      "Coaches and clients in one place: real-time chat, a questionnaire engine, scheduling, habits and content.",
    headline: { value: "329+", label: "users, including 15 coaches" },
    summary:
      "A health and coaching platform serving 329+ users, including 15 coaches. I owned full-stack delivery: the admin/coach and coachee panels on the frontend, and the NestJS + PostgreSQL REST API behind the questionnaire module.",
    tags: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "Socket.IO"],
    metrics: [
      { label: "Core modules", value: "8+" },
      { label: "Real-time", value: "Socket.IO chat" },
      { label: "Deployment", value: "Vercel" },
    ],
    problem:
      "Coaches needed one place to run their whole practice: talk to clients in real time, send them structured health questionnaires, schedule appointments, and track habits and tasks, with each role seeing only what it should.",
    role: [
      "Owned full-stack delivery, building both the frontend (admin/coach and coachee panels) and the RESTful backend for the questionnaire module end to end",
      "Designed and built the questionnaire module's REST API and PostgreSQL schema: template creation, assignment and response collection, with role-based access control",
      "Implemented real-time chat with Socket.IO: channels, broadcast messaging, media sharing and reactions",
      "Built calendar and appointment scheduling, validated with Jest unit tests",
      "Delivered habit tracking, a content library (rich text and search), task management, notifications and subscription modules on the frontend",
    ],
    stack: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "TypeORM", "Socket.IO", "Redux Toolkit", "Tailwind CSS", "Jest", "Docker", "Vercel"],
    highlights: [
      "Questionnaire engine (templates, assignment, responses) designed from schema to UI",
      "Real-time chat with channels, broadcasts, media and reactions",
      "Role-based access control and responsive UI across 8+ core modules",
    ],
    outcome:
      "A live coaching platform used by 329+ people, including 15 coaches, who message their clients in real time, assign questionnaires, schedule sessions and track progress in one product.",
  },
  {
    slug: "dagger-concept",
    title: "Dagger Concept — Sports Data Platform",
    eyebrow: "Sports · Real-time",
    tagline:
      "A sports data platform built from scratch, with live chat and events over Socket.IO alongside a Python backend.",
    headline: { value: "40%", label: "faster app performance after profiling and optimization" },
    summary:
      "A full-stack sports data platform I architected from scratch (React, Node.js and PostgreSQL) and deployed on AWS, working daily with stakeholders in Australia.",
    tags: ["React", "Node.js", "Socket.IO", "PostgreSQL", "AWS"],
    metrics: [
      { label: "Built", value: "From scratch" },
      { label: "Deployment", value: "AWS" },
      { label: "Clients", value: "Australia" },
    ],
    problem:
      "The client needed a sports data platform with live chat and live events, built from scratch and working alongside a Python backend.",
    role: [
      "Architected the full-stack platform from scratch (React, Node.js, PostgreSQL) and deployed it on AWS, owning everything from database schema to deployment",
      "Designed the Socket.IO channel/room architecture powering real-time chat and live events, integrated with a Python backend in a multi-service architecture",
      "Improved application performance by 40% through code-splitting, lazy loading and React Query caching, verified by profiling with React DevTools",
      "Mentored junior engineers on code quality and best practices",
      "Drove daily client communication with Australia-based stakeholders, turning business requirements into sprint-level deliverables",
    ],
    stack: ["React.js", "Redux Toolkit", "React Query", "Node.js", "Socket.IO", "Python", "PostgreSQL", "AWS"],
    highlights: [
      "40% performance improvement, measured with profiling",
      "Real-time chat and live events on a Socket.IO room architecture",
      "Multi-service architecture combining Node.js and Python",
    ],
    outcome:
      "A production sports data platform on AWS with real-time chat and live events, running 40% faster after targeted performance work.",
  },
  {
    slug: "bom-workflow-system",
    title: "Bill of Materials (BOM) Workflow System",
    eyebrow: "Enterprise · Workflow",
    tagline:
      "BOM creation and a 4-role approval workflow, with an Excel-like costing grid that calculates as you type.",
    headline: { value: "~30%", label: "more efficient BOM approvals" },
    summary:
      "An end-to-end Bill of Materials creation and approval system with four approval roles and a spreadsheet-style costing interface. I owned delivery end to end, including daily client communication and sprint planning.",
    tags: ["React", "Redux Toolkit", "Zustand", "Material UI", "MySQL"],
    metrics: [
      { label: "Approval roles", value: "4" },
      { label: "Backend", value: ".NET + MySQL" },
      { label: "Deployment", value: "Vercel" },
    ],
    problem:
      "Creating and approving bills of materials involved several approvers and many cost calculations. The client needed one workflow that moved a BOM through every approval role and kept component costs, totals and margins correct as numbers changed.",
    role: [
      "Designed and developed the end-to-end BOM creation and approval workflow across 4 approval roles, with a modular, maintainable component architecture",
      "Built an Excel-like costing interface for real-time editing and calculation of component costs, totals and margins",
      "Backed the core calculation logic with unit tests",
      "Owned delivery end to end, including daily client communication, requirement gathering and sprint planning",
    ],
    stack: ["React.js", "Redux Toolkit", "Zustand", "Material UI", ".NET", "MySQL", "Vercel"],
    highlights: [
      "~30% improvement in BOM approval efficiency",
      "Spreadsheet-style costing with live totals and margins",
      "Unit-tested calculation logic",
    ],
    outcome:
      "A single BOM workflow that takes a bill of materials from creation through four approval roles, with costs calculated live, improving approval efficiency by around 30%.",
  },
  {
    slug: "energy-management-portal",
    title: "Energy-Management Portal",
    eyebrow: "Energy · Micro-frontends",
    tagline:
      "Feature teams ship independently, thanks to a micro-frontend architecture on Piral.",
    headline: { value: "Modular", label: "independently deployed micro-frontends" },
    summary:
      "An energy-management portal built on a micro-frontend architecture for independent, scalable feature teams.",
    tags: ["Micro-frontend", "Piral", "React", "TypeScript"],
    metrics: [
      { label: "Architecture", value: "Micro-frontend" },
      { label: "Framework", value: "Piral" },
      { label: "Domain", value: "Energy" },
    ],
    problem:
      "A growing energy product needed multiple teams to ship features independently without a monolithic frontend becoming a bottleneck.",
    role: [
      "Implemented micro-frontend modules with Piral",
      "Built shared UI and integration patterns across modules",
      "Ensured consistent auth and state across pilets",
    ],
    stack: ["React.js", "TypeScript", "Piral (micro-frontend)", "REST APIs"],
    highlights: [
      "Independently deployable micro-frontend modules (pilets)",
      "Shared design system and cross-module state",
      "Scalable architecture supporting parallel team workflows",
    ],
    outcome:
      "A modular energy-management portal where features are developed and deployed independently, reducing coupling and enabling faster iteration.",
  },
];

/** Featured projects, strongest first. */
export const featuredProjects: Project[] = ["dms-simulation-platform", "moto-venice", "health-coaching-platform"]
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter((p): p is Project => Boolean(p));

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);
