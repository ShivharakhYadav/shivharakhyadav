import Container from "@/components/ui/Container";
import SocialIcon from "@/components/ui/SocialIcon";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="relative border-t border-border/70 py-8">
      {/* Accent hairline along the footer's top edge */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 mx-auto h-px w-2/3 bg-gradient-to-r from-transparent via-accent/40 to-transparent"
      />
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted">
            © {profile.name}. Built with Next.js & Tailwind CSS.
          </p>
          <div className="flex items-center gap-3">
            {profile.socials.map((social) => (
              <SocialIcon key={social.label} social={social} />
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
