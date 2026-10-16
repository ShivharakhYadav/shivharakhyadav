import Link from "next/link";
import Container from "@/components/ui/Container";
import RotatingWords from "@/components/home/RotatingWords";
import Portrait from "@/components/ui/Portrait";
import { profile, stats } from "@/data/profile";

export default function Hero() {
  return (
    <Container>
      <section className="grid items-center gap-12 pb-16 pt-12 lg:grid-cols-[1fr_auto] lg:pt-20">
        <div className="max-w-[640px] space-y-7">
          {profile.showAvailability && (
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 text-sm font-medium">
              <span className="h-2 w-2 rounded-full bg-coral" aria-hidden="true" />
              {profile.availability}
            </span>
          )}

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

        <Portrait priority />
      </section>
    </Container>
  );
}
