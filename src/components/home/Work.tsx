import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/Reveal";
import { ProjectCard, ProjectRowCard } from "@/components/ui/ProjectCard";
import { featuredProjects } from "@/data/projects";

export default function Work() {
  const [first, second, ...rest] = featuredProjects;

  return (
    <Container>
      <section id="work" className="py-24">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-[38px] font-semibold tracking-[-0.05em] sm:text-[52px]">
              Case studies
            </h2>
            <p className="mt-2 text-lg text-muted">Products I owned from first call to production.</p>
          </div>
          <Link href="/projects" className="text-link shrink-0">
            All projects →
          </Link>
        </div>

        <div className="space-y-7">
          {[first, second].filter(Boolean).map((p, i) => (
            <Reveal key={p.slug}>
              <ProjectCard project={p} flip={i % 2 === 1} />
            </Reveal>
          ))}
          {rest.map((p) => (
            <Reveal key={p.slug}>
              <ProjectRowCard project={p} />
            </Reveal>
          ))}
        </div>
      </section>
    </Container>
  );
}
