import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import TextLinks from "@/components/ui/TextLinks";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section id="home" aria-label="Introduction" className="pt-16 sm:pt-24">
      <Container>
        <Image
          alt={`${profile.name} portrait`}
          src="/profile1.jpg"
          width={128}
          height={128}
          priority
          className="h-16 w-16 rounded-full object-cover"
        />
        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {profile.name}
        </h1>
        <p className="mt-1 text-muted">
          {profile.role} · {profile.location.split(",")[0]}
        </p>
        <p className="mt-6 max-w-xl text-lg leading-relaxed">
          {profile.intro}
        </p>
        <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Open to full-stack / frontend roles
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <Link href="#projects" className="link font-medium">
            Selected work
          </Link>
          <TextLinks />
        </div>
      </Container>
    </section>
  );
}
