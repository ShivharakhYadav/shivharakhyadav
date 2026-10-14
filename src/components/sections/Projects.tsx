import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectRow from "@/components/ui/ProjectRow";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" aria-label="Projects" className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading title="Selected work" />
          <div className="border-b border-border">
            {projects.map((project) => (
              <ProjectRow key={project.slug} project={project} />
            ))}
          </div>
          <Link href="/projects" className="link mt-6 inline-block text-sm">
            All projects
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
