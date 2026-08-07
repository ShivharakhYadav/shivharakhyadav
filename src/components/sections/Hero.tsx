import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import Container from "@/components/ui/Container";
import Reveal from "@/components/Reveal";
import SocialIcon from "@/components/ui/SocialIcon";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative pt-16 sm:pt-24"
    >
      {/* Blueprint grid backdrop, faded toward the bottom */}
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-x-0 -top-24 h-[36rem]"
      />

      <Container className="relative">
        <div className="flex flex-col-reverse items-center gap-12 sm:flex-row sm:justify-between">
          <div className="max-w-xl text-center sm:text-left">
            <Reveal>
              <span className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/70 px-4 py-1.5 text-sm text-muted backdrop-blur">
                <span className="status-dot h-2 w-2 rounded-full bg-emerald-400" />
                Available for full-stack / frontend roles
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-balance sm:text-5xl xl:text-6xl">
                Hi, I&apos;m <span className="text-gradient">{profile.name}</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-4 font-display text-xl font-medium text-accent">
                {profile.role}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-5 text-base leading-relaxed text-muted">
                {profile.intro}
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-4 text-sm font-medium tracking-wide text-muted/80">
                {profile.tagline}
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:justify-start">
                <a href="#projects" className="btn-primary">
                  View my work <FaArrowRight className="h-3.5 w-3.5" />
                </a>
                <a href="#contact" className="btn-ghost">
                  Get in touch
                </a>
              </div>
            </Reveal>
            <Reveal delay={440}>
              <div className="mt-8 flex items-center justify-center gap-3 sm:justify-start">
                {profile.socials.map((social) => (
                  <SocialIcon key={social.label} social={social} />
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="shrink-0">
            <div className="relative">
              {/* Ambient glow + rotating conic ring behind the portrait */}
              <div className="absolute -inset-4 rounded-full bg-accent/15 blur-3xl" />
              <div className="avatar-ring" aria-hidden="true" />
              <div className="relative h-56 w-56 overflow-hidden rounded-full border border-border/60 bg-bg sm:h-72 sm:w-72">
                <Image
                  alt={`${profile.name} portrait`}
                  src="/profile1.jpg"
                  width={320}
                  height={320}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
