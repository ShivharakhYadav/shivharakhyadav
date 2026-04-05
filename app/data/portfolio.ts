import { Project, Experience, Testimonial } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "AI Content Generator",
    description:
      "A SaaS platform powered by GPT-4 that generates high-quality content for blogs, social media, and marketing. Features include tone customization, SEO optimization, and multi-language support.",
    image:
      "https://images.unsplash.com/photo-1716436329836-208bea5a55e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzc0ODkwMTE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Next.js", "OpenAI", "TypeScript", "Tailwind", "Prisma"],
    category: "ai",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Project Management SaaS",
    description:
      "Modern project management tool with real-time collaboration, kanban boards, gantt charts, and team analytics. Built for distributed teams.",
    image:
      "https://images.unsplash.com/photo-1604536264507-020ce894daf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTYWFTJTIwYXBwbGljYXRpb24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc0ODgzODg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "Redux"],
    category: "saas",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with advanced filtering, payment integration, inventory management, and admin dashboard. Optimized for performance and SEO.",
    image:
      "https://images.unsplash.com/photo-1768987439382-894ea4e2a736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBwbGF0Zm9ybSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzQ4OTAxMTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Next.js", "Stripe", "PostgreSQL", "TypeScript", "Vercel"],
    category: "web",
    liveUrl: "https://example.com",
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    description:
      "Real-time analytics dashboard with beautiful data visualizations, custom reports, and predictive insights using machine learning algorithms.",
    image:
      "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBzY3JlZW58ZW58MXx8fHwxNzc0ODg1MjYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "D3.js", "Python", "FastAPI", "TensorFlow"],
    category: "ai",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 5,
    title: "Code Collaboration Platform",
    description:
      "Developer collaboration platform with code editor, version control, real-time pair programming, and integrated DevOps tools.",
    image:
      "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcHJvZ3JhbW1pbmclMjBzY3JlZW58ZW58MXx8fHwxNzc0ODMwNzkwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["TypeScript", "WebRTC", "Monaco Editor", "Docker", "Kubernetes"],
    category: "web",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 6,
    title: "Mobile Banking App",
    description:
      "Modern mobile banking interface with biometric authentication, instant transfers, budget tracking, and investment portfolio management.",
    image:
      "https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbnxlbnwxfHx8fDE3NzQ4NzUzNzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    category: "mobile",
    liveUrl: "https://example.com",
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Tech Innovators Inc.",
    position: "Senior Frontend Developer",
    duration: "Jan 2023 - Present",
    description:
      "Leading the development of enterprise SaaS applications using React and Next.js. Implemented micro-frontend architecture serving 100K+ users. Reduced load time by 60% through optimization.",
    technologies: ["React", "Next.js", "TypeScript", "GraphQL", "AWS"],
  },
  {
    id: 2,
    company: "Digital Solutions Ltd.",
    position: "Full Stack Developer",
    duration: "Jun 2021 - Dec 2022",
    description:
      "Built and maintained multiple client projects including e-commerce platforms and CRM systems. Collaborated with cross-functional teams to deliver high-quality solutions on time.",
    technologies: ["Node.js", "React", "MongoDB", "Express", "Docker"],
  },
  {
    id: 3,
    company: "StartupXYZ",
    position: "Frontend Developer",
    duration: "Mar 2020 - May 2021",
    description:
      "Developed responsive web applications from design mockups. Implemented reusable component library adopted across 5+ products. Mentored junior developers.",
    technologies: ["React", "Redux", "Sass", "Jest", "Webpack"],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CTO",
    company: "TechCorp",
    content:
      "Outstanding developer with exceptional problem-solving skills. Delivered our project ahead of schedule with remarkable code quality.",
    avatar: "👩‍💼",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Product Manager",
    company: "InnovateLabs",
    content:
      "A true professional who understands both technical and business requirements. The AI solution built exceeded our expectations.",
    avatar: "👨‍💼",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Founder",
    company: "StartupHub",
    content:
      "Incredible attention to detail and design sensibility. Transformed our vision into a beautiful, high-performing application.",
    avatar: "👩‍💻",
  },
  {
    id: 4,
    name: "David Park",
    position: "Lead Engineer",
    company: "CloudTech",
    content:
      "Highly skilled in modern web technologies. Great communicator and team player. Would definitely work together again.",
    avatar: "👨‍💻",
  },
];

export const skills = [
  // Frontend
  { name: "React", category: "frontend" as const },
  { name: "Next.js", category: "frontend" as const },
  { name: "TypeScript", category: "frontend" as const },
  { name: "Tailwind CSS", category: "frontend" as const },
  { name: "Redux", category: "frontend" as const },
  { name: "Vue.js", category: "frontend" as const },

  // Backend
  { name: "Node.js", category: "backend" as const },
  { name: "Express", category: "backend" as const },
  { name: "PostgreSQL", category: "backend" as const },
  { name: "MongoDB", category: "backend" as const },
  { name: "GraphQL", category: "backend" as const },
  { name: "REST APIs", category: "backend" as const },

  // Tools & DevOps
  { name: "Git", category: "tools" as const },
  { name: "Docker", category: "tools" as const },
  { name: "AWS", category: "tools" as const },
  { name: "Vercel", category: "tools" as const },
  { name: "Jest", category: "tools" as const },
  { name: "Figma", category: "tools" as const },

  // AI & ML
  { name: "OpenAI API", category: "ai" as const },
  { name: "LangChain", category: "ai" as const },
  { name: "Python", category: "ai" as const },
  { name: "TensorFlow", category: "ai" as const },
];
