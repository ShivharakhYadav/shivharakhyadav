import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaCheck } from "react-icons/fa6";
import Container from "@/components/ui/Container";
import Tag from "@/components/ui/Tag";
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
        <Container className="max-w-3xl">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
          >
            <FaArrowLeft className="h-3.5 w-3.5" /> Back to projects
          </Link>

        {/* Hero */}
        <header className="mt-8">
          <span className="text-4xl" aria-hidden="true">
            {project.emoji}
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {project.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </header>

        {/* Metrics */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-border bg-surface p-5 text-center"
            >
              <div className="font-display text-xl font-bold text-accent">
                {metric.value}
              </div>
              <div className="mt-1 text-xs text-muted">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Body */}
        <div className="mt-14 space-y-12">
          <CaseSection title="The Problem">
            <p className="leading-relaxed text-muted">{project.problem}</p>
          </CaseSection>

          <CaseSection title="My Role">
            <ul className="space-y-3">
              {project.role.map((item) => (
                <li key={item} className="flex gap-3 text-muted">
                  <FaCheck className="mt-1 h-3.5 w-3.5 shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CaseSection>

          <CaseSection title="Tech Stack">
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </CaseSection>

          <CaseSection title="Highlights">
            <ul className="space-y-3">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-3 text-muted">
                  <FaCheck className="mt-1 h-3.5 w-3.5 shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CaseSection>

          <CaseSection title="Outcome">
            <p className="leading-relaxed text-muted">{project.outcome}</p>
          </CaseSection>
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
          >
            Interested? Let&apos;s talk
          </Link>
        </div>
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
      <h2 className="mb-4 font-display text-xl font-semibold">
        <span className="text-accent">#</span> {title}
      </h2>
      {children}
    </section>
  );
}
