import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import Container from "@/components/ui/Container";
import Reveal from "@/components/Reveal";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section id="home" aria-label="Introduction" className="pt-16 sm:pt-24">
      <Container>
        <div className="flex flex-col-reverse items-center gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-xl text-center sm:text-left">
            <Reveal>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Available for full-stack / frontend roles
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-display text-4xl font-bold leading-tight text-balance sm:text-5xl xl:text-6xl">
                Hi, I&apos;m <span className="text-gradient">{profile.name}</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-3 font-display text-xl font-medium text-accent">
                {profile.role}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-5 text-base leading-relaxed text-muted">
                {profile.intro}
              </p>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:justify-start">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
                >
                  View my work <FaArrowRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
                >
                  Get in touch
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="shrink-0">
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-accent/20 blur-2xl" />
              <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-accent/40 sm:h-72 sm:w-72">
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
