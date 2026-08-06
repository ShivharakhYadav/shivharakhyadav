import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6";
import type { SocialLink } from "@/data/profile";

const icons = {
  linkedin: FaLinkedin,
  github: FaGithub,
  email: FaEnvelope,
} as const;

export default function SocialIcon({
  social,
  className = "",
}: {
  social: SocialLink;
  className?: string;
}) {
  const Icon = icons[social.icon];
  return (
    <a
      href={social.href}
      target={social.icon === "email" ? undefined : "_blank"}
      rel={social.icon === "email" ? undefined : "noopener noreferrer"}
      aria-label={social.label}
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-muted transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:text-accent hover:shadow-[0_8px_24px_-8px_rgba(34,211,238,0.4)] ${className}`}
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}
