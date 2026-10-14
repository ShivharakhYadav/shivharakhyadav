import Link from "next/link";
import Screenshot from "@/components/ui/Screenshot";
import Headline from "@/components/ui/Headline";
import type { Project } from "@/data/projects";

/** Large case-study card: screenshot beside eyebrow, title, one line and the lead result. */
export function ProjectCard({ project, flip = false }: { project: Project; flip?: boolean }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="card lift grid items-center gap-8 p-5 sm:p-8 lg:grid-cols-2 lg:gap-14"
    >
      <Screenshot
        src={project.image}
        alt={`${project.title} screenshot`}
        tint={flip ? "linen" : "seaglass"}
        className={`h-[240px] sm:h-[380px] ${flip ? "lg:order-2" : ""}`}
      />
      <div className="space-y-4">
        <p className="eyebrow text-coral-ink">{project.eyebrow}</p>
        <h3 className="font-display text-[30px] font-semibold leading-[1.1] tracking-[-0.04em] sm:text-[36px]">
          {project.title}
        </h3>
        <p className="text-[17px] leading-relaxed text-muted">{project.tagline}</p>
        <Headline {...project.headline} />
        <span className="text-link inline-block">Read case study →</span>
      </div>
    </Link>
  );
}

/** Compact one-row card for the third featured project and "next project" links. */
export function ProjectRowCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="card lift flex flex-col gap-6 p-5 sm:flex-row sm:items-center sm:gap-8"
    >
      <Screenshot
        src={project.image}
        alt={`${project.title} screenshot`}
        className="h-[136px] w-full shrink-0 sm:w-[220px]"
      />
      <div className="flex-1 space-y-2">
        <p className="eyebrow text-coral-ink">{project.eyebrow}</p>
        <h3 className="font-display text-[26px] font-semibold tracking-[-0.03em]">{project.title}</h3>
        <p className="leading-relaxed text-muted">{project.tagline}</p>
      </div>
      <div className="sm:w-[220px] sm:text-right">
        <Headline {...project.headline} compact />
      </div>
      <span className="hidden font-display text-[28px] text-teal sm:block" aria-hidden="true">
        →
      </span>
    </Link>
  );
}
