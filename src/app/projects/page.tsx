import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/Reveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import Contact from "@/components/sections/Contact";
import { projects, featuredProjects } from "@/data/projects";
import { siteUrl, ogImages } from "@/configs/metaTags";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies of production apps I built: a multi-tenant simulation SaaS (944+ users), a motorcycle rental marketplace, a health & coaching platform and more.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects - Shivharakh Yadav",
    description:
      "Case studies of production web applications - multi-tenant SaaS, commerce, real-time systems and micro-frontends.",
    url: `${siteUrl}/projects`,
    type: "website",
    images: ogImages,
  },
  // set explicitly: otherwise X/Twitter cards inherit the home page text
  twitter: { title: "Projects - Shivharakh Yadav", description: "Case studies of production web applications - multi-tenant SaaS, commerce, real-time systems and micro-frontends." },
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

        {/* two columns on tablets; from lg each card is wide enough for its own row */}
        <ul className="grid grid-cols-1 gap-7 pb-24 md:grid-cols-2 lg:grid-cols-1">
          {ordered.map((p, i) => (
            <li key={p.slug}>
              <Reveal className="h-full">
                <ProjectCard project={p} flip={i % 2 === 1} as="h2" />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
      <Contact />
    </main>
  );
}
