import Container from "@/components/ui/Container";
import SocialIcon from "@/components/ui/SocialIcon";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
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
