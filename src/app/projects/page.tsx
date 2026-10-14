import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ProjectRow from "@/components/ui/ProjectRow";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { projects } from "@/data/projects";
import { siteUrl } from "@/configs/metaTags";

export const metadata: Metadata = {
  title: "Projects — Shivharakh Yadav",
  description:
    "Case studies of production web applications I've built — multi-tenant e-learning SaaS, a real-time health & coaching platform, and a micro-frontend energy portal.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects — Shivharakh Yadav",
    description:
      "Case studies of production web applications — multi-tenant SaaS, real-time systems, and micro-frontends.",
    url: `${siteUrl}/projects`,
    type: "website",
  },
};

export default function ProjectsIndexPage() {
  return (
    <>
      <Navbar />
      <main className="py-16 sm:py-24">
        <Container>
          <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
          <p className="mt-3 text-muted">
            Production apps I&apos;ve built and shipped, with notes on the
            problem, my role and the outcome.
          </p>
          <div className="mt-12 border-b border-border">
            {projects.map((project) => (
              <ProjectRow key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
