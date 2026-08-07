export interface Project {
  slug: string;
  title: string;
  /** short one-liner for the card */
  summary: string;
  /** emoji shown on the card + case-study hero */
  emoji: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  /** Case-study fields */
  problem: string;
  role: string[];
  stack: string[];
  highlights: string[];
  outcome: string;
}

export const projects: Project[] = [
  {
    slug: "moto-venice",
    title: "Moto Venice — Motorcycle Rental & Sales Storefront",
    summary:
      "The complete customer-facing storefront for a Venice Beach luxury/exotic motorcycle rental business — browse the fleet, filter by rental dates and availability, view detailed bike pages, get instant delivery quotes, and book. Owned the frontend end to end.",
    emoji: "🏍️",
    tags: ["Next.js 15", "TypeScript", "Chakra UI v3", "React Query", "Auth0"],
    metrics: [
      { label: "Framework", value: "Next.js 15" },
      { label: "Ownership", value: "Solo Frontend" },
      { label: "Deployment", value: "Render CI/CD" },
    ],
    problem:
      "A luxury motorcycle rental business needed a premium, conversion-focused storefront built from the ground up against a REST API. It had to present a high-value fleet with rich galleries, let customers filter bikes by rental dates so they only see what's actually available, deliver instant address-based delivery quotes without phone back-and-forth, handle authenticated flows within Next.js's App Router, and be fast, SEO-friendly, responsive, and analytics-instrumented.",
    role: [
      "Set up the entire Next.js 15 App Router project — TypeScript config, path aliases, ESLint/Prettier, fonts, and the provider stack (Auth0 → React Query → Chakra → MainLayout)",
      "Built a reusable Chakra UI v3 design system — inputs, selects, comboboxes, date/time pickers, dialogs, carousels, accordions, toaster, and layout primitives used across every page",
      "Implemented the data layer — a typed Axios client and per-domain API clients (bikes, trips, contact, Mapbox) shaped as React Query queryFns with full request/response typing",
      "Built the core booking-discovery UX — fleet grid with brand/type filters and date-range availability filtering via query-key-driven refetching and derived date logic",
      "Built dynamic bike detail pages (/bike/[id]) with specs, pricing, and an interactive photo gallery + lightbox",
      "Implemented Auth0 authentication with a server-side withUser HOC to protect App Router pages, plus an authenticated \"My Trips\" view",
      "Built validated forms, all marketing & legal pages, a dynamic sitemap, and Google Analytics page-view + button-click tracking",
      "Deployed and maintained the app on Render with auto-deploy CI/CD",
      "Worked directly with the client, backend developer, and PM — gathering requirements, aligning on the REST API contract, running demos, and turning feedback into shipped features",
    ],
    stack: [
      "Next.js 15 (App Router)",
      "React 18",
      "TypeScript",
      "Chakra UI v3 + next-themes",
      "TanStack React Query",
      "Auth0 (@auth0/nextjs-auth0)",
      "Axios",
      "Swiper",
      "react-datepicker",
      "date-fns",
      "Mapbox",
      "Google Analytics (@next/third-parties)",
      "Render (CI/CD)",
    ],
    highlights: [
      "Delivered a fully typed, component-driven, responsive storefront from zero",
      "Real-time availability filtering so customers only see bikes bookable for their dates",
      "Reusable Chakra-based design system that kept the UI consistent and sped up page development",
      "Integrated auth, analytics, maps, and a REST API into one cohesive, production-deployed app",
      "Acted as the frontend point of contact — bridging client design intent with backend data and behavior",
    ],
    outcome:
      "A premium, production-deployed storefront where customers browse an exotic fleet, filter to only bikes available for their trip, get instant delivery quotes, authenticate, and submit rental inquiries — built end to end against a REST API and shipped continuously on Render.",
  },
  {
    slug: "e-learning-saas",
    title: "Multi-tenant E-Learning SaaS",
    summary:
      "A multi-tenant e-learning platform serving 944+ users across 10 organizations, with per-tenant branding and role-based access.",
    emoji: "⚡",
    tags: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "RBAC"],
    metrics: [
      { label: "Users", value: "944+" },
      { label: "Organizations", value: "10" },
      { label: "Model", value: "Multi-tenant" },
    ],
    problem:
      "Ten distinct organizations needed their own branded learning experience on a shared platform without data leaking across tenant boundaries, each with different roles and permissions.",
    role: [
      "End-to-end ownership from requirements to CI/CD",
      "Designed multi-tenant data model and RBAC layer",
      "Built type-safe Next.js frontend and NestJS APIs",
      "Direct client communication (Australia & US)",
    ],
    stack: [
      "Next.js (App Router, SSR)",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
    highlights: [
      "Tenant-scoped data isolation and per-organization theming",
      "Granular role-based access control across user types",
      "Server-side rendering for fast, SEO-friendly course pages",
      "CI/CD pipeline with GitHub Actions",
    ],
    outcome:
      "A production platform serving 944+ active learners across 10 organizations, with a scalable multi-tenant architecture that onboards new organizations without code changes.",
  },
  {
    slug: "health-coaching-platform",
    title: "Health & Coaching Platform",
    summary:
      "A health and coaching platform with real-time chat and a full-stack, dynamic questionnaire module.",
    emoji: "🏥",
    tags: ["React", "Node.js", "Socket.IO", "MongoDB"],
    metrics: [
      { label: "Realtime", value: "Socket.IO" },
      { label: "Module", value: "Questionnaire" },
      { label: "Type", value: "B2C" },
    ],
    problem:
      "Coaches and clients needed to communicate in real time and complete structured, evolving health assessments without a rigid, hardcoded form flow.",
    role: [
      "Built real-time chat with Socket.IO",
      "Designed a dynamic, full-stack questionnaire engine",
      "Implemented secure authentication and API layer",
    ],
    stack: ["React.js", "Node.js", "Express.js", "Socket.IO", "MongoDB"],
    highlights: [
      "Bi-directional real-time messaging between coaches and clients",
      "Configurable questionnaire module driven by data, not code",
      "Secure, role-aware API endpoints",
    ],
    outcome:
      "A responsive coaching experience where clients and coaches interact live and complete adaptable health questionnaires that can be reconfigured without redeploys.",
  },
  {
    slug: "energy-management-portal",
    title: "Energy-Management Portal",
    summary:
      "An energy-management portal built on a micro-frontend architecture for independent, scalable feature teams.",
    emoji: "🔋",
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

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);
