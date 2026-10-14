import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import Container from "@/components/ui/Container";
import Screenshot from "@/components/ui/Screenshot";
import { ProjectRowCard } from "@/components/ui/ProjectCard";
import Contact from "@/components/sections/Contact";
import JsonLd from "@/components/JsonLd";
import { projects, getProjectBySlug } from "@/data/projects";
import { siteUrl } from "@/configs/metaTags";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} — Shivharakh Yadav`,
    description: project.tagline,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} — Shivharakh Yadav`,
      description: project.tagline,
      url: `${siteUrl}/projects/${project.slug}`,
      type: "article",
      ...(project.image && { images: [{ url: project.image }] }),
    },
  };
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    keywords: project.tags.join(", "),
    author: { "@type": "Person", name: "Shivharakh Yadav", url: siteUrl },
    url: `${siteUrl}/projects/${project.slug}`,
  };

  return (
    <main>
      <Container>
        <article>
          <header className="max-w-[820px] space-y-5 pt-12 sm:pt-20">
            <Link href="/projects" className="text-link text-sm">
              ← All projects
            </Link>
            <p className="eyebrow text-coral-ink">{project.eyebrow}</p>
            <h1 className="font-display text-[40px] font-semibold leading-[1.08] tracking-[-0.04em] sm:text-[64px]">
              {project.title}
            </h1>
            <p className="text-[17px] leading-relaxed text-muted sm:text-[19px]">
              {project.summary}
            </p>
            <ul className="flex flex-wrap gap-2 pt-1">
              {project.tags.map((t) => (
                <li key={t} className="chip">
                  {t}
                </li>
              ))}
            </ul>
          </header>

          {/* Lead result + key facts */}
          <dl className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            <div className="col-span-2 flex flex-col-reverse justify-end rounded-3xl bg-seaglass p-5 sm:p-6 lg:col-span-1">
              <dt className="mt-1 text-sm text-muted">{project.headline.label}</dt>
              <dd className="font-display text-[36px] font-semibold leading-none tracking-[-0.04em] text-teal">
                {project.headline.value}
              </dd>
            </div>
            {project.metrics.map((m) => (
              <div key={m.label} className="card flex flex-col-reverse justify-end rounded-3xl p-5 sm:p-6">
                <dt className="mt-1 text-sm text-muted">{m.label}</dt>
                <dd className="font-display text-lg font-semibold tracking-[-0.02em] sm:text-[22px]">{m.value}</dd>
              </div>
            ))}
          </dl>

          <Screenshot
            src={project.image}
            alt={`${project.title} screenshot`}
            className="mt-6 h-[260px] sm:h-[560px]"
            priority
          />

          <div className="max-w-[920px] space-y-14 py-20 sm:space-y-16">
            <CaseSection title="The problem">
              <p className="text-[17px] leading-relaxed sm:text-lg">{project.problem}</p>
            </CaseSection>

            <CaseSection title="My role">
              <BulletList items={project.role} />
            </CaseSection>

            <CaseSection title="Highlights">
              <BulletList items={project.highlights} />
            </CaseSection>

            <CaseSection title="Stack">
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <li key={s} className="chip text-sm">
                    {s}
                  </li>
                ))}
              </ul>
            </CaseSection>

            <CaseSection title="Outcome">
              <p className="rounded-3xl bg-linen p-7 font-display text-xl font-medium leading-snug tracking-[-0.01em] sm:text-2xl">
                {project.outcome}
              </p>
            </CaseSection>
          </div>
        </article>

        {next && next.slug !== project.slug && (
          <nav aria-label="Next project" className="space-y-4 pb-20">
            <p className="eyebrow text-muted">Next project</p>
            <ProjectRowCard project={next} />
          </nav>
        )}
      </Container>
      <Contact />
      <JsonLd data={jsonLd} />
    </main>
  );
}

function CaseSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="grid gap-4 md:grid-cols-[200px_1fr] md:gap-10">
      <h2 className="font-display text-[22px] font-semibold tracking-[-0.03em] md:pt-0.5">{title}</h2>
      <div>{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3.5 text-[17px] leading-relaxed">
          <span aria-hidden="true" className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
