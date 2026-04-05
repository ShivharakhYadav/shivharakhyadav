export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: "all" | "ai" | "saas" | "web" | "mobile";
  liveUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  avatar: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "tools" | "ai";
}
