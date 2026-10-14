import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
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
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} — Shivharakh Yadav`,
      description: project.summary,
      url: `${siteUrl}/projects/${project.slug}`,
      type: "article",
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
    <>
      <Navbar />
      <main className="py-16 sm:py-24">
        <Container>
          <Link
            href="/projects"
            className="text-sm text-muted transition-colors hover:text-text"
          >
            ← Projects
          </Link>

          <header className="mt-10">
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
              {project.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              {project.summary}
            </p>
          </header>

          <dl className="mt-10 grid grid-cols-1 gap-6 border-y border-border py-6 sm:grid-cols-3">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="text-xs text-muted">{metric.label}</dt>
                <dd className="mt-1 font-medium">{metric.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-14 space-y-12">
            <CaseSection title="Problem">
              <p className="leading-relaxed">{project.problem}</p>
            </CaseSection>

            <CaseSection title="My role">
              <BulletList items={project.role} />
            </CaseSection>

            <CaseSection title="Stack">
              <p className="leading-relaxed">{project.stack.join(", ")}</p>
            </CaseSection>

            <CaseSection title="Highlights">
              <BulletList items={project.highlights} />
            </CaseSection>

            <CaseSection title="Outcome">
              <p className="leading-relaxed">{project.outcome}</p>
            </CaseSection>
          </div>

          <p className="mt-16 border-t border-border pt-8 text-sm text-muted">
            Interested in working together?{" "}
            <Link href="/#contact" className="link">
              Get in touch
            </Link>
            .
          </p>
        </Container>
      </main>
      <Footer />
      <JsonLd data={jsonLd} />
    </>
  );
}

function CaseSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-4 text-sm font-medium text-muted">{title}</h2>
      {children}
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed">
          <span aria-hidden="true" className="select-none text-muted">
            –
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
