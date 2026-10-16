import Container from "@/components/ui/Container";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer>
      <Container className="flex flex-wrap justify-between gap-2 py-10 text-[13px] text-muted">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>Designed &amp; built with care in Pune</span>
      </Container>
    </footer>
  );
}
