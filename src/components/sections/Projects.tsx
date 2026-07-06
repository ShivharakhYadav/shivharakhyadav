import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" aria-label="Projects" className="scroll-mt-24 py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Selected work"
            title="Things I've Built"
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
          >
            View all projects <FaArrowRight className="h-3.5 w-3.5" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
