import { FaArrowRight } from "react-icons/fa6";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import SocialIcon from "@/components/ui/SocialIcon";
import Reveal from "@/components/Reveal";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="scroll-mt-24 py-24">
      <Container>
        <Reveal>
          <div className="relative mx-auto max-w-2xl overflow-hidden rounded-3xl border border-border bg-surface p-8 text-center sm:p-12">
            {/* Ambient accent glows inside the panel */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -right-16 h-48 w-72 rounded-full bg-accent-2/10 blur-3xl"
            />
            <div className="relative">
              <SectionHeading eyebrow="Get in touch" title="Let's Work Together" />
              <p className="mx-auto -mt-6 max-w-lg leading-relaxed text-muted">
                I&apos;m open to full-stack and frontend engineer roles, and I love
                collaborating with cross-functional teams. Drop me a line — I&apos;ll
                get back to you.
              </p>

              <a href={`mailto:${profile.email}`} className="btn-primary mt-8">
                Say hello <FaArrowRight className="h-3.5 w-3.5" />
              </a>

              <div className="mt-8 flex items-center justify-center gap-3">
                {profile.socials.map((social) => (
                  <SocialIcon key={social.label} social={social} />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
