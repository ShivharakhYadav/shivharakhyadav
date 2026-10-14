import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import TextLinks from "@/components/ui/TextLinks";
import Reveal from "@/components/Reveal";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading title="Contact" />
          <p className="max-w-xl text-lg leading-relaxed">
            I&apos;m open to full-stack and frontend engineer roles. The best
            way to reach me is by email — I usually reply within a day.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="link mt-6 inline-block text-lg font-medium"
          >
            {profile.email}
          </a>
          <TextLinks className="mt-6" />
        </Reveal>
      </Container>
    </section>
  );
}
