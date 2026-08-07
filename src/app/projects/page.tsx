import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
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
          <SectionHeading eyebrow="Selected work" title="Projects" align="left" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
