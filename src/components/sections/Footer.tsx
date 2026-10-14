import Container from "@/components/ui/Container";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="py-10">
      <Container>
        <p className="border-t border-border pt-6 text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </Container>
    </footer>
  );
}
