import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import Container from "@/components/ui/Container";
import Portrait from "@/components/ui/Portrait";
import Contact from "@/components/sections/Contact";
import JsonLd from "@/components/JsonLd";
import { person, websiteId } from "@/configs/schema";
import { profile, stats, workingStyle, education } from "@/data/profile";
import { skillGroups } from "@/data/skills";
import { siteUrl, ogImages } from "@/configs/metaTags";

const description =
  "Shivharakh Yadav: full-stack developer in Pune, India with 4+ years building multi-tenant SaaS, commerce and real-time products for teams in Australia & the US.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Shivharakh Yadav - Full-Stack Developer",
    description,
    url: `${siteUrl}/about`,
    type: "profile",
    images: ogImages,
  },
  // set explicitly: otherwise X/Twitter cards inherit the home page text
  twitter: { title: "About Shivharakh Yadav - Full-Stack Developer", description },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: `${siteUrl}/about`,
  dateModified: profile.updated,
  isPartOf: { "@id": websiteId },
  mainEntity: person,
};

export default function AboutPage() {
  return (
    <main>
      <Container>
        {/* Intro */}
        <header className="grid grid-cols-1 items-center gap-12 pb-16 pt-12 md:grid-cols-[minmax(0,1fr)_auto] md:gap-10 lg:gap-12 lg:pt-20">
          <div className="max-w-[640px] space-y-6">
            <p className="eyebrow text-coral-ink">About</p>
            <h1 className="font-display fs-page font-semibold leading-[1.1] tracking-[-0.04em]">
              Hi, I’m <span className="coral-underline whitespace-nowrap">Shivharakh</span>.
            </h1>
            <p className="text-[17px] leading-relaxed text-muted sm:text-[19px]">
              A {profile.role.toLowerCase()} building SaaS and web products
              for clients in Australia and the US, from the first requirement
              call to the production release.
            </p>
            <dl className="grid grid-cols-3 gap-3 pt-2 sm:flex sm:gap-12">
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
          <Portrait className="h-[260px] w-[260px] md:h-[240px] md:w-[240px] lg:h-[340px] lg:w-[340px] xl:h-[400px] xl:w-[400px]" priority />
        </header>

        <div className="space-y-20 border-t border-line py-20">
          <Section title="My story">
            <div className="space-y-5 text-[17px] leading-relaxed sm:text-lg">
              {profile.story.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Section>

          <Section title="What I work with">
            <div className="grid gap-4 sm:grid-cols-2">
              {skillGroups.map((g) => (
                <div key={g.category} className="card rounded-3xl p-6">
                  <h3 className="eyebrow text-teal">{g.category}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <li key={item} className="rounded-full bg-bg px-3.5 py-1.5 text-sm font-medium">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section title="How I work">
            <div className="grid gap-4 sm:grid-cols-2">
              {workingStyle.map((w, i) => (
                <div key={w.title} className={`rounded-3xl p-7 ${i % 3 === 0 ? "bg-seaglass" : "bg-linen"}`}>
                  <h3 className="font-display text-xl font-semibold tracking-[-0.02em]">{w.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{w.text}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Education">
            <ul className="space-y-4">
              {education.map((e) => (
                <li key={e.degree} className="card flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 rounded-3xl p-6">
                  <span>
                    <span className="block font-display text-lg font-semibold tracking-[-0.02em]">{e.degree}</span>
                    <span className="block text-muted">
                      {e.school}
                      {e.grade && <> · {e.grade}</>}
                    </span>
                  </span>
                  <span className="text-sm font-medium text-teal">{e.years}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Currently exploring">
            <p className="font-display text-2xl font-medium leading-snug tracking-[-0.02em] sm:text-[28px]">
              {profile.currentlyExploringLong} <span className="text-coral">✦</span>
            </p>
          </Section>

          <Section title="Keep reading">
            <div className="grid gap-4 sm:grid-cols-2">
              <NextLink href="/experience" label="Experience" text="Roles, career highlights and the products I’ve delivered." />
              <NextLink href="/projects" label="Case studies" text="How I built them: the problem, my role and the outcome." />
            </div>
          </Section>
        </div>
      </Container>
      <Contact />
      <JsonLd data={jsonLd} />
    </main>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12">
      <h2 className="font-display text-[28px] font-semibold tracking-[-0.03em] sm:text-[32px]">{title}</h2>
      <div className="max-w-[820px]">{children}</div>
    </section>
  );
}

function NextLink({ href, label, text }: { href: string; label: string; text: string }) {
  return (
    <Link href={href} className="card lift group block rounded-3xl p-7">
      <span className="flex items-center justify-between font-display text-xl font-semibold tracking-[-0.02em]">
        {label}
        <span aria-hidden="true" className="text-teal transition group-hover:translate-x-1">→</span>
      </span>
      <span className="mt-2 block leading-relaxed text-muted">{text}</span>
    </Link>
  );
}
