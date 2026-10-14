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
  location: "Ahmedabad, Gujarat, India",
  email: "yadavshivharakhyadav@gmail.com",
  /** Link to the résumé PDF (e.g. "/resume.pdf"). Résumé links stay hidden while empty. */
  resumeUrl: "",
  availability: "Available for full-stack & frontend roles",
  /** Rotating middle line of the hero headline — kinds of products actually shipped. */
  heroWords: ["booking platforms", "learning portals", "coaching apps", "SaaS products"],
  intro:
    "Full-stack developer with 4+ years of experience building and shipping production web applications — from clean, type-safe frontends to secure backend APIs.",
  currentlyExploring: "Exploring AI agents & building AI-integrated apps",
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

/** Proof numbers under the hero. */
export const stats: Stat[] = [
  { value: "4+", label: "years shipping" },
  { value: "1,200+", label: "users served" },
  { value: "10", label: "organizations" },
];

/** A client quote for the Experience section. The card is hidden while this is null. */
export const testimonial: Testimonial | null = null;
