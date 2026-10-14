import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/Reveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import Contact from "@/components/sections/Contact";
import { projects, featuredProjects } from "@/data/projects";
import { siteUrl } from "@/configs/metaTags";

export const metadata: Metadata = {
  title: "Projects — Shivharakh Yadav",
  description:
    "Case studies of production web applications I've built — a multi-tenant e-learning SaaS, a motorcycle rental storefront, a real-time health & coaching platform and a micro-frontend energy portal.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects — Shivharakh Yadav",
    description:
      "Case studies of production web applications — multi-tenant SaaS, commerce, real-time systems and micro-frontends.",
    url: `${siteUrl}/projects`,
    type: "website",
  },
};

// featured projects first, in their featured order, then the rest
const ordered = [...featuredProjects, ...projects.filter((p) => !featuredProjects.includes(p))];

export default function ProjectsIndexPage() {
  return (
    <main>
      <Container>
        <PageHeader
          eyebrow="Work"
          title={
            <>
              Products I’ve <span className="coral-underline">shipped</span>.
            </>
          }
        >
          Production apps I built and owned, each with the problem, my role and
          the outcome.
        </PageHeader>

        <div className="space-y-7 pb-24">
          {ordered.map((p, i) => (
            <Reveal key={p.slug}>
              <ProjectCard project={p} flip={i % 2 === 1} />
            </Reveal>
          ))}
        </div>
      </Container>
      <Contact />
    </main>
  );
}
