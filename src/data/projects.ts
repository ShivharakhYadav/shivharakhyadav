export interface Project {
  slug: string
  title: string
  /** small label above the title, e.g. "SaaS · E-learning" */
  eyebrow: string
  /** one line for cards */
  tagline: string
  /** longer intro for the case-study page */
  summary: string
  /** the single result a card leads with */
  headline: { value: string; label: string }
  /** screenshot in /public (e.g. "/projects/moto-venice.png"); a framed placeholder shows while empty */
  image?: string
  tags: string[]
  /** key facts shown beside the headline on the case-study page (don't repeat the headline) */
  metrics: { label: string; value: string }[]
  /** Case-study fields */
  problem: string
  role: string[]
  stack: string[]
  highlights: string[]
  outcome: string
  /**
   * Left out of every listing (home, /projects, /experience, next-project links),
   * but the page still builds and stays in the sitemap, so search can find it.
   */
  unlisted?: boolean
}

// Facts here come from the résumé (public/Shivharakh_Yadav_FS.pdf) and the
// GitHub profile. Don't add numbers or claims that aren't in those sources.
export const projects: Project[] = [
  {
    slug: 'dms-simulation-platform',
    title: 'DMS Simulation Platform',
    eyebrow: 'SaaS · Multi-tenant',
    tagline:
      'A multi-tenant SaaS for 10 organizations: 16 interactive simulation modules and a full B2B licensing workflow.',
    headline: { value: '944+', label: 'users across 10 organizations' },
    summary:
      'A multi-tenant SaaS product delivering interactive simulations to 944+ users across 10 organizations. I was the sole full-stack engineer on the client project, owning everything from requirement gathering to architecture, delivery and releases.',
    tags: ['Next.js', 'TypeScript', 'Python', 'PostgreSQL', 'Redis'],
    metrics: [
      { label: 'Modules', value: '16 interactive' },
      { label: 'My role', value: 'Sole full-stack engineer' },
      { label: 'Tested with', value: 'Jest' },
    ],
    problem:
      'Five organizations needed to share one SaaS product without their data ever mixing, while each of them bought and managed seats for their own people. The product had to run timed, interactive simulation sessions reliably, and hand out licences without two people ever claiming the same seat.',
    role: [
      'Engaged as the sole full-stack engineer on the client project, owning requirement gathering and day-to-day communication with a project manager, a backend engineer and client-side stakeholders',
      'Led the frontend architecture and designed the tenant data-isolation approach: a schema-per-tenant data model with tenant-scoped indexing, plus shared session and auth state via Context API',
      'Built the simulation-delivery frontend spanning 16 interactive modules, with real-time session timers and tab-close handling',
      'Delivered a full B2B licensing workflow: requests, approvals, seat allocation with concurrency-safe writes, and audit export, validated with Jest',
      'Managed CI/CD pipelines and release deployments, turning client feedback into sprint-level deliverables',
    ],
    stack: [
      'Next.js',
      'TypeScript',
      'Redux Toolkit',
      'Python',
      'PostgreSQL',
      'Redis',
      'Docker',
      'Context API',
      'Jest',
    ],
    highlights: [
      'Safe B2B/B2C data isolation between 10 organizations on one platform',
      'Race-condition-safe seat and licence allocation using transactional writes, so a seat can never be claimed twice',
      '16 interactive simulation modules with real-time session timers',
      'End-to-end ownership as the only full-stack engineer on the project',
    ],
    outcome:
      'A production multi-tenant platform serving 944+ users across 10 organizations, with isolated tenant data, reliable timed simulations and a licensing workflow that hands out seats safely under concurrent requests.',
  },
  {
    slug: 'moto-venice',
    title: 'Moto Venice',
    eyebrow: 'Commerce · Rentals',
    tagline:
      'A premium motorcycle rental marketplace with live availability, instant pricing and delivery quotes, and a consignment program for bike owners.',
    headline: {
      value: '2-sided',
      label: 'marketplace: riders who rent, and owners who list their bikes',
    },
    summary:
      'The platform behind a Venice Beach luxury and exotic motorcycle rental business. I built the Swagger-documented REST API and the production Next.js storefront, then extended it with new rental modules and a consignment program that turned it into a two-sided marketplace.',
    tags: ['Next.js', 'TypeScript', 'NestJS', 'PostgreSQL', 'Auth0'],
    metrics: [
      { label: 'Built', value: 'API + storefront' },
      { label: 'Auth & KYC', value: 'Auth0 + Veriff' },
      { label: 'Deployment', value: 'Render CI/CD' },
    ],
    problem:
      'A luxury motorcycle rental business needed a premium storefront where customers only ever see bikes that are actually free for their dates, can price a booking and its delivery instantly, and can sign up and verify their identity online. Later the business wanted to rent for photo and video shoots, offer detailing, and let private owners list their own bikes.',
    role: [
      'Built a Swagger-documented RESTful API and a production-scale Next.js storefront in TypeScript, with SEO-friendly slug-based routing',
      'Implemented date-range availability filtering using interval-overlap queries, so customers only see bikes they can actually book',
      'Developed a booking configurator with real-time availability calendars, live price calculation and a distance-based delivery-fee engine using the Mapbox Directions API',
      'Extended the platform with two full-stack rental modules: an hourly/daily “shoot rental” flow for photo and video shoots with its own pricing, and a motorcycle detailing service with flexible appointment scheduling',
      'Built the frontend for a consignment and rental management program, letting bike owners list their motorcycles with a 50-50 revenue-split display and storage/inspection tracking',
      'Integrated Auth0 end to end (RS256/JWKS JWT validation, webhook-driven user sync) and Veriff identity verification through HMAC-signed webhooks',
      'Set up GitHub Actions CI/CD with deployment on Render',
    ],
    stack: [
      'Next.js',
      'TypeScript',
      'NestJS',
      'PostgreSQL',
      'Redis',
      'Redux Toolkit',
      'Auth0',
      'Veriff (KYC)',
      'Twilio',
      'Docker',
      'Swagger',
      'Mapbox',
      'Chakra UI',
      'React Query',
      'Jest',
      'Render',
      'GitHub',
      'GitHub Actions',
    ],
    highlights: [
      "Interval-overlap availability filtering: no customer is shown a bike that's already booked for their dates",
      'Instant, distance-based delivery quotes from the Mapbox Directions API',
      'Grew from a rental storefront into a two-sided marketplace with owner consignment and a 50-50 revenue split',
      'Secure by design: JWT validation against JWKS and HMAC-verified webhooks for user sync and KYC',
    ],
    outcome:
      'A live rental website where riders pick their dates, see only the bikes that are free, get the full price with delivery straight away, verify their ID and book. Bike owners can also list their own motorcycles for rent.',
  },
  {
    slug: 'health-coaching-platform',
    unlisted: true,
    title: 'Saluta - Health & Coaching Platform',
    eyebrow: 'Health · Real-time',
    tagline:
      'Coaches and clients in one place: real-time chat, a questionnaire engine, scheduling, habits and content.',
    headline: { value: '329+', label: 'users, including 15 coaches' },
    summary:
      'A health and coaching platform serving 329+ users, including 15 coaches. I owned full-stack delivery: the admin/coach and coachee panels on the frontend, and the NestJS + PostgreSQL REST API behind the questionnaire module.',
    tags: ['Next.js', 'TypeScript', 'NestJS', 'PostgreSQL', 'Socket.IO'],
    metrics: [
      { label: 'Core modules', value: '8+' },
      { label: 'Real-time', value: 'Socket.IO chat' },
      { label: 'Deployment', value: 'Vercel' },
    ],
    problem:
      'Coaches needed one place to run their whole practice: talk to clients in real time, send them structured health questionnaires, schedule appointments, and track habits and tasks, with each role seeing only what it should.',
    role: [
      'Owned full-stack delivery, building both the frontend (admin/coach and coachee panels) and the RESTful backend for the questionnaire module end to end',
      "Designed and built the questionnaire module's REST API and PostgreSQL schema: template creation, assignment and response collection, with role-based access control",
      'Implemented real-time chat with Socket.IO: channels, broadcast messaging, media sharing and reactions',
      'Built calendar and appointment scheduling, validated with Jest unit tests',
      'Delivered habit tracking, a content library (rich text and search), task management, notifications and subscription modules on the frontend',
    ],
    stack: [
      'Next.js',
      'TypeScript',
      'NestJS',
      'PostgreSQL',
      'TypeORM',
      'Socket.IO',
      'Redux Toolkit',
      'Tailwind CSS',
      'Jest',
      'Docker',
      'Vercel',
    ],
    highlights: [
      'Questionnaire engine (templates, assignment, responses) designed from schema to UI',
      'Real-time chat with channels, broadcasts, media and reactions',
      'Role-based access control and responsive UI across 8+ core modules',
    ],
    outcome:
      'A live coaching platform used by 329+ people, including 15 coaches, who message their clients in real time, assign questionnaires, schedule sessions and track progress in one product.',
  },
  {
    slug: 'dagger-concept',
    title: 'Dagger Concept - Sports Data Platform',
    eyebrow: 'Sports · Real-time',
    tagline:
      'A sports data platform built from scratch, with live chat and events over Socket.IO alongside a Python backend.',
    headline: {
      value: '40%',
      label: 'faster app performance after profiling and optimization',
    },
    summary:
      'A full-stack sports data platform I architected from scratch (React, Node.js and PostgreSQL) and deployed on AWS, working daily with stakeholders in Australia.',
    tags: ['React', 'Node.js', 'Socket.IO', 'PostgreSQL', 'AWS'],
    metrics: [
      { label: 'Built', value: 'From scratch' },
      { label: 'Deployment', value: 'AWS' },
      { label: 'Clients', value: 'Australia' },
    ],
    problem:
      'The client needed a sports data platform with live chat and live events, built from scratch and working alongside a Python backend.',
    role: [
      'Architected the full-stack platform from scratch (React, Node.js, PostgreSQL) and deployed it on AWS, owning everything from database schema to deployment',
      'Designed the Socket.IO channel/room architecture powering real-time chat and live events, integrated with a Python backend in a multi-service architecture',
      'Improved application performance by 40% through code-splitting, lazy loading and React Query caching, verified by profiling with React DevTools',
      'Mentored junior engineers on code quality and best practices',
      'Drove daily client communication with Australia-based stakeholders, turning business requirements into sprint-level deliverables',
    ],
    stack: [
      'React.js',
      'Redux Toolkit',
      'React Query',
      'Node.js',
      'Socket.IO',
      'Python',
      'PostgreSQL',
      'AWS',
    ],
    highlights: [
      '40% performance improvement, measured with profiling',
      'Real-time chat and live events on a Socket.IO room architecture',
      'Multi-service architecture combining Node.js and Python',
    ],
    outcome:
      'A production sports data platform on AWS with real-time chat and live events, running 40% faster after targeted performance work.',
  },
  {
    slug: 'bom-workflow-system',
    title: 'Bill of Materials (BOM) Workflow System',
    eyebrow: 'Enterprise · Workflow',
    tagline:
      'BOM creation and a 4-role approval workflow, with an Excel-like costing grid that calculates as you type.',
    headline: { value: '~30%', label: 'more efficient BOM approvals' },
    summary:
      'An end-to-end Bill of Materials creation and approval system with four approval roles and a spreadsheet-style costing interface. I owned delivery end to end, including daily client communication and sprint planning.',
    tags: ['React', 'Redux Toolkit', 'Zustand', 'Material UI', 'MySQL'],
    metrics: [
      { label: 'Approval roles', value: '4' },
      { label: 'Backend', value: '.NET + MySQL' },
      { label: 'Deployment', value: 'Vercel' },
    ],
    problem:
      'Creating and approving bills of materials involved several approvers and many cost calculations. The client needed one workflow that moved a BOM through every approval role and kept component costs, totals and margins correct as numbers changed.',
    role: [
      'Designed and developed the end-to-end BOM creation and approval workflow across 4 approval roles, with a modular, maintainable component architecture',
      'Built an Excel-like costing interface for real-time editing and calculation of component costs, totals and margins',
      'Backed the core calculation logic with unit tests',
      'Owned delivery end to end, including daily client communication, requirement gathering and sprint planning',
    ],
    stack: [
      'React.js',
      'Redux Toolkit',
      'Zustand',
      'Material UI',
      '.NET',
      'MySQL',
      'Vercel',
    ],
    highlights: [
      '~30% improvement in BOM approval efficiency',
      'Spreadsheet-style costing with live totals and margins',
      'Unit-tested calculation logic',
    ],
    outcome:
      'A single BOM workflow that takes a bill of materials from creation through four approval roles, with costs calculated live, improving approval efficiency by around 30%.',
  },
  // Client work under NDA: the owner approved showing client names (2026-10-20),
  // but internal details (hostnames, code, weaknesses) stay out.
  {
    slug: 'infosel-hub-excel-addin',
    title: 'Infosel Hub - Real-Time Market Data for Excel',
    eyebrow: 'Fintech · Real-time',
    tagline:
      'A market-data terminal inside Excel: live prices stream into cells as they tick, alongside saved tables and bulk historical downloads.',
    headline: {
      value: '19',
      label: 'market types streamed live into Excel cells',
    },
    summary:
      'Infosel Hub for Excel: two add-ins for the paying customers of Infosel, a Mexican financial-data provider. One is a task pane that inserts live, self-updating price tables; the other is a streaming worksheet formula that keeps a single cell ticking in real time. I worked on it as a frontend engineer.',
    tags: ['React', 'TypeScript', 'Office.js', 'WebSockets', 'Jest'],
    metrics: [
      { label: 'Add-ins', value: 'Task pane + live formula' },
      { label: 'Streaming fields', value: '~228 mapped' },
      { label: 'Release', value: 'Jenkins → Kubernetes' },
    ],
    problem:
      "Analysts and traders were copying prices out of a web terminal into their spreadsheets, so their numbers were stale the moment they pasted them. They needed live data from Mexican and US exchanges (equities, FX, fixed income, indices, funds and reference rates) directly in Excel, cells that keep updating on their own, and a way to pull history in bulk, all respecting each customer's real-time or delayed data licence.",
    role: [
      'Frontend engineer on the React and TypeScript add-ins, working across the Excel features listed under Highlights',
      'Took part in team discussions on design and implementation with the wider development team',
    ],
    stack: [
      'React',
      'TypeScript',
      'Office.js (Excel JavaScript API)',
      'Excel Custom Functions',
      'Lightstreamer (real-time push)',
      'WebSockets',
      'Material UI',
      'Fluent UI',
      'Jest',
      'React Testing Library',
      'Webpack',
      'Jenkins',
      'Docker',
      'Kubernetes',
    ],
    highlights: [
      'Live prices written straight into worksheet cells, flashing green or red on each tick, with only the changed fields written to keep Excel responsive',
      'A streaming worksheet formula: seeded from the REST API so the cell is never blank, then kept live over the push connection and cleaned up when the formula is removed',
      'Subscriptions that survive real spreadsheet use: sorting rows, or cutting, copying and pasting a live table, re-maps and re-subscribes every instrument',
      'Live tables saved in the workbook itself, so reopening a file reconnects its streams',
      'Licence rules enforced in the client: delayed-data users are routed to delayed feeds automatically',
      'Resilient sessions: proactive token refresh, retry-once on expiry, a heartbeat watchdog and automatic failover to a backup streaming server',
      'A 5-step bulk-download wizard for intraday and historical data, with drag-and-drop column ordering',
    ],
    outcome:
      'A shipped, versioned product for paying customers that turns Excel into a live market-data terminal, deployed through a branch-driven Jenkins pipeline with security scanning to Kubernetes clusters on more than one cloud.',
  },
  {
    slug: 'aumni-excel-addin',
    title: 'Aumni for Excel - VC Portfolio Data Add-in',
    eyebrow: 'Fintech · Excel add-in',
    tagline:
      'Venture-capital portfolio, cap-table and deal-term data synced straight into Excel through live formulas, one-click tables and a cap-table template.',
    headline: {
      value: '~380',
      label: 'API fields across 5 datasets, one click away in Excel',
    },
    summary:
      "The Excel add-in for Aumni, a venture-capital portfolio-analytics platform now part of J.P. Morgan. It connects fund teams' Aumni data to the spreadsheets they already model in, so deal and portfolio data no longer has to be retyped by hand.",
    tags: ['React', 'TypeScript', 'Office.js', 'Fluent UI'],
    metrics: [
      { label: 'Workflows', value: '3 in one task pane' },
      { label: 'Live formula', value: 'Custom Excel function' },
      { label: 'Users', value: 'VC & PE fund analysts' },
    ],
    problem:
      'Fund analysts kept their portfolio data in Aumni but built their financial models, schedules of investments and LP reports in Excel, so every update meant re-keying numbers by hand: slow and easy to get wrong.',
    role: [
      "Built the add-in's live =Aumni() Excel formula, so any cell can reference a single data point on a specific company, transaction, security or financing",
      'Built a searchable two-pane Formula Builder (data item → identifier) that writes the formula into the active cell',
      'Integrated the Aumni REST API across 5 datasets with token authentication, fetching every page of results automatically',
      'Built the bulk dataset export into native, formatted Excel tables, and a capitalization template that computes fully diluted ownership and liquidation preferences',
      'Mapped ~380 API fields to analyst-friendly names, and set up the manifest, the Webpack build and the Office add-in tooling for sideloading and deployment',
    ],
    stack: [
      'React',
      'TypeScript',
      'Office.js (Excel JavaScript API)',
      'Excel Custom Functions',
      'Fluent UI',
      'REST APIs',
      'Webpack',
    ],
    highlights: [
      'A shared-runtime bridge that lets Excel formulas read state written by the React task pane',
      'Bulk exports that reconcile inconsistent API records, including per-company custom fields, into one stable set of columns',
      "Reloads keep the user's own table styling, and a failed write is rolled back so a sheet is never left half-written",
      'Runs in older Office for Windows too, through an ES5 build with polyfills for its legacy web view',
    ],
    outcome:
      'Fund teams pull live portfolio, cap-table and deal-term data into their own workbooks in a few clicks, instead of re-keying it between Aumni and Excel.',
  },
  {
    slug: 'diligent-equity-excel-addin',
    title: 'Diligent Equity - Equity Reports in Excel',
    eyebrow: 'Fintech · Excel add-in',
    tagline:
      'Funding rounds, liquidation waterfalls, valuations and Black-Scholes option pricing, generated straight into Excel from Diligent Equity.',
    headline: {
      value: '4',
      label: 'report types: rounds, waterfalls, valuations and option pricing',
    },
    summary:
      "An Excel add-in for customers of Diligent Equity, an equity and cap-table management platform. It turns the platform's API into formatted, refreshable reports inside the spreadsheet. I worked on it as a frontend engineer.",
    tags: ['React', 'JavaScript', 'Office.js', 'Fluent UI', 'Material UI'],
    metrics: [
      { label: 'Ribbon actions', value: 'Get Data + Refresh' },
      { label: 'Waterfall output', value: '5 linked tables' },
      { label: 'Users', value: 'VC & PE fund teams' },
    ],
    problem:
      'Fund teams analysing their portfolio companies needed funding rounds, liquidation waterfalls, breakpoints and valuations in Excel, where they model, without rebuilding the reports by hand every time the numbers changed.',
    role: [
      'Frontend engineer on the React add-in, working across the Excel features listed under Highlights',
      'Took part in team discussions on design and implementation with the wider development team',
    ],
    stack: [
      'React',
      'JavaScript',
      'Office.js (Excel JavaScript API)',
      'Fluent UI',
      'Material UI',
      'Webpack',
    ],
    highlights: [
      'The worksheet is the form: parameters are typed into cells with in-cell dropdowns, and the add-in reacts to each edit',
      'Waterfall and option-pricing reports laid out as five stacked, styled tables that size and position themselves',
      "A one-click Refresh that remembers each worksheet's query and rebuilds it, with no backend needed",
      "Companies fetched one at a time with cancel support, so the API isn't flooded and Excel writes stay in order",
      'Clear messages when some companies have no data, and graceful fallbacks on older Excel versions',
    ],
    outcome:
      "Customers generate rounds, waterfall, valuation and option-pricing reports in Excel from the platform's live data, and refresh any sheet in one click.",
  },
  {
    slug: 'co4-energy-management-portal',
    title: 'Co4 - Energy-Management Portal',
    eyebrow: 'Energy · Frontend',
    tagline:
      'React frontend work on an existing energy-management portal built with micro-frontends: bug fixes, new features, and widgets and integrations across its apps.',
    headline: {
      value: 'Frontend',
      label: 'bug fixes and new features on an existing micro-frontend portal',
    },
    summary:
      'Co4, an energy-management portal built by another team on a Piral micro-frontend architecture. I joined as a React.js frontend developer, fixing bugs and implementing features.',
    tags: ['React', 'Piral', 'Micro-frontend'],
    metrics: [
      { label: 'My role', value: 'React frontend developer' },
      { label: 'Client contact', value: 'Daily task calls' },
      { label: 'Architecture', value: 'Micro-frontend (Piral)' },
    ],
    problem:
      'The portal was already built, by another team, on a micro-frontend architecture. It needed extra frontend help to fix bugs and deliver new features.',
    role: [
      "React.js frontend developer on the existing codebase; the portal's architecture and most of its code were built by others",
      'Fixed bugs and implemented new features',
      'Created widgets and integrations across multiple apps in the portal',
      'Joined daily client calls to discuss tasks and give progress updates',
      'Worked with the backend developers to resolve API questions',
    ],
    stack: [
      'React.js',
      'TypeScript',
      'Piral (micro-frontend)',
      'REST APIs',
      'Python',
      'PostgreSQL',
      'Docker',
      'Keycloak',
    ],
    highlights: [
      'Worked inside a Piral micro-frontend setup: an app shell with feature modules (pilets) loaded at runtime',
      'Widgets and integrations built across multiple apps in the portal',
      'Bug fixes and features agreed with the client in daily task discussions',
      'Close coordination with the backend developers on API questions',
    ],
    outcome:
      'Bug fixes and new features delivered to the portal, with the client kept up to date every day.',
  },
  {
    slug: 'calloquy',
    title: 'Calloquy - Meeting Management App',
    eyebrow: 'Productivity · Integrations',
    tagline:
      'Meetings in a calendar view, Microsoft sign-in through Auth0, and two-way scheduling with Outlook.',
    headline: {
      value: 'Outlook',
      label: 'calendar sync with Microsoft account sign-in',
    },
    summary:
      'A meeting management application focused on smooth integrations and secure sign-in, letting people plan meetings without leaving the calendar they already use.',
    tags: ['Auth0', 'Microsoft sign-in', 'Outlook Calendar'],
    metrics: [
      { label: 'Auth', value: 'Auth0' },
      { label: 'Sign-in', value: 'Microsoft accounts' },
      { label: 'Views', value: 'Calendar' },
    ],
    problem:
      "People needed one place to create and manage meetings that stayed in step with their Outlook calendar, with a sign-in that was secure but didn't make them create yet another account.",
    role: [
      'Developed and enhanced the meeting management features: create, update, delete and list meetings in a calendar view',
      'Integrated Auth0 for secure user login',
      'Enabled sign-in with Microsoft accounts',
      'Integrated synchronization with the Outlook calendar',
    ],
    stack: [
      'Auth0',
      'Microsoft account sign-in',
      'Outlook Calendar integration',
    ],
    highlights: [
      'Full meeting lifecycle in a calendar view',
      'Secure login through Auth0, with Microsoft accounts as a sign-in option',
      'Schedules kept in sync with Outlook',
    ],
    outcome:
      'Users manage their meetings in one calendar view that stays in sync with Outlook, signing in with the Microsoft account they already have.',
  },
  {
    slug: 'my-ticket-solutions',
    title: 'My Ticket Solutions (MTS) - Multilingual Support Portal',
    eyebrow: 'Customer support · Web app',
    tagline:
      'A support-ticket web app in 10 languages, with sign-up verified by OTP or an email link.',
    headline: { value: '10', label: 'languages supported across the portal' },
    summary:
      'A web application where customers create and manage support tickets for their problems, built to improve customer-service response times and efficiency.',
    tags: ['React', 'Node.js', 'Google Apps Script', 'Material UI'],
    metrics: [
      { label: 'Verification', value: 'OTP or email link' },
      { label: 'Backend', value: 'Node.js + Apps Script' },
      { label: 'UI', value: 'Material UI' },
    ],
    problem:
      'Customers needed a simple way to raise and follow up on support requests in their own language, and the support team needed those requests in one place to respond faster.',
    role: [
      'Enabled users to create and manage support tickets for their issues',
      'Implemented support for viewing the site in 10 languages',
      'Built sign-up with both OTP and email-link verification',
    ],
    stack: ['React.js', 'Node.js', 'Google Apps Script', 'Material UI'],
    highlights: [
      'Ticket creation and management for customers',
      'The whole site available in 10 languages',
      'A choice of OTP or email-link verification at sign-up, for security and convenience',
    ],
    outcome:
      'A multilingual support portal where customers raise and track tickets, helping the support team respond faster and more efficiently.',
  },
]

/** Featured projects, strongest first. */
export const featuredProjects: Project[] = [
  'dms-simulation-platform',
  'moto-venice',
  'dagger-concept',
]
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter((p): p is Project => Boolean(p) && !p?.unlisted)

/** Projects shown in listings; unlisted ones only have their own page. */
export const listedProjects: Project[] = projects.filter((p) => !p.unlisted)

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug)
