import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/Reveal";
import { ProjectRowCard } from "@/components/ui/ProjectCard";
import { featuredProjects } from "@/data/projects";

export default function Work() {
  return (
    <Container>
      <section id="work" className="pt-24">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display fs-section font-semibold tracking-[-0.05em]">
              Case studies
            </h2>
            <p className="mt-2 text-lg text-muted">Products I’ve built, from the first call to production.</p>
          </div>
          <Link href="/projects" className="text-link shrink-0">
            All projects →
          </Link>
        </div>

        {/* every featured project as a compact row card */}
        <div className="space-y-4">
          {featuredProjects.map((p) => (
            <Reveal key={p.slug}>
              <ProjectRowCard project={p} />
            </Reveal>
          ))}
        </div>
      </section>
    </Container>
  );
}
