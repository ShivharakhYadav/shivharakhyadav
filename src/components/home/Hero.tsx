import Link from "next/link";
import Container from "@/components/ui/Container";
import RotatingWords from "@/components/home/RotatingWords";
import Portrait from "@/components/ui/Portrait";
import { profile, stats } from "@/data/profile";

export default function Hero() {
  return (
    <Container>
      <section className="grid grid-cols-1 items-center gap-12 pb-16 pt-12 md:grid-cols-[minmax(0,1fr)_auto] md:gap-10 lg:gap-12 lg:pt-20">
        <div className="max-w-[640px] space-y-7">
          {profile.showAvailability && (
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 text-sm font-medium">
              <span className="h-2 w-2 rounded-full bg-coral" aria-hidden="true" />
              {profile.availability}
            </span>
          )}

          <h1 className="font-display fs-display font-semibold leading-[1.1] tracking-[-0.04em]">
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

          {/* always side by side: a 2-column grid (short labels on phones) until lg */}
          <div className="grid grid-cols-2 gap-3 lg:flex lg:flex-wrap lg:gap-3.5">
            <Link href="#work" className={heroBtn("btn-primary")}>
              <span className="sm:hidden">Case studies →</span>
              <span className="hidden sm:inline">View case studies →</span>
            </Link>
            {profile.resumeUrl ? (
              <a href={profile.resumeUrl} className={heroBtn("btn-secondary")} download>
                <span className="sm:hidden">↓ Résumé</span>
                <span className="hidden sm:inline">↓ Download résumé</span>
              </a>
            ) : (
              <Link href="#contact" className={heroBtn("btn-secondary")}>
                Get in touch
              </Link>
            )}
          </div>

          {/* three equal columns on phones; natural widths from sm */}
          <dl className="grid grid-cols-3 gap-3 pt-4 sm:flex sm:gap-12">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse justify-end">
                <dt className="text-[13px] text-muted sm:text-sm">{s.label}</dt>
                <dd className="font-display text-[28px] font-semibold tracking-[-0.04em] text-teal sm:text-[36px]">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* beside the text from tablet up, growing with the screen */}
        <Portrait
          priority
          className="h-[280px] w-[280px] md:h-[260px] md:w-[260px] lg:h-[380px] lg:w-[380px] xl:h-[460px] xl:w-[460px]"
        />
      </section>
    </Container>
  );
}

/** Hero buttons: compact while they share a 2-column grid, the normal size from lg. */
const heroBtn = (base: string) => `${base} whitespace-nowrap px-3 text-[15px] sm:px-5 sm:text-base lg:px-7`;
