import { profile } from "@/data/profile";

/** Inline row of social links rendered as plain underlined text. */
export default function TextLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-x-5 gap-y-2 text-sm ${className}`}>
      {profile.socials.map((social) => {
        const external = !social.href.startsWith("mailto:");
        return (
          <li key={social.label}>
            <a
              href={social.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="link"
            >
              {social.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
