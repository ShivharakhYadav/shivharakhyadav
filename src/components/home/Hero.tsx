import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import RotatingWords from "@/components/home/RotatingWords";
import { profile, stats } from "@/data/profile";

export default function Hero() {
  return (
    <Container>
      <section className="grid items-center gap-12 pb-16 pt-12 lg:grid-cols-[1fr_auto] lg:pt-20">
        <div className="max-w-[640px] space-y-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 text-sm font-medium">
            <span className="h-2 w-2 rounded-full bg-coral" aria-hidden="true" />
            {profile.availability}
          </span>

          <h1 className="font-display text-[40px] font-semibold leading-[1.1] tracking-[-0.04em] sm:text-[68px]">
            I turn ideas into
            <RotatingWords words={profile.heroWords} />
            people use{" "}
            <span className="coral-underline whitespace-nowrap">every day</span>.
          </h1>

          <p className="max-w-[560px] text-[17px] leading-relaxed text-muted sm:text-[19px]">
            I’m Shivharakh, a full-stack developer who owns the whole build:{" "}
            <span className="font-medium text-ink">UI, APIs, data and deploy.</span>{" "}
            For 4+ years I’ve shipped multi-tenant platforms for teams in
            Australia &amp; the US.
          </p>

          <div className="flex flex-wrap gap-3.5">
            <Link href="#work" className="btn-primary">
              View case studies →
            </Link>
            {profile.resumeUrl ? (
              <a href={profile.resumeUrl} className="btn-secondary" download>
                ↓ Download résumé
              </a>
            ) : (
              <Link href="#contact" className="btn-secondary">
                Get in touch
              </Link>
            )}
          </div>

          <dl className="flex gap-10 pt-4 sm:gap-12">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse">
                <dt className="text-sm text-muted">{s.label}</dt>
                <dd className="font-display text-[28px] font-semibold tracking-[-0.04em] text-teal sm:text-[36px]">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <Portrait />
      </section>
    </Container>
  );
}

/** Concentric frame: dashed coral ring → sea-glass halo → photo. */
function Portrait() {
  return (
    <div className="group relative mx-auto h-[320px] w-[320px] sm:h-[460px] sm:w-[460px]">
      <div
        className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-coral/60"
        aria-hidden="true"
      />
      <div className="absolute inset-[4%] rounded-full bg-seaglass" aria-hidden="true" />
      <div className="absolute inset-[8%] overflow-hidden rounded-full border-[6px] border-card bg-seaglass shadow-portrait">
        <Image
          src="/profile.png"
          alt={`${profile.name}, ${profile.role}`}
          width={460}
          height={460}
          priority
          className="h-full w-full origin-[50%_20%] scale-[1.12] object-cover object-[50%_10%] transition duration-700 group-hover:scale-[1.16]"
        />
      </div>
    </div>
  );
}
