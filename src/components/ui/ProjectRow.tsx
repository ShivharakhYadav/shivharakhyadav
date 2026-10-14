import Link from "next/link";
import type { Project } from "@/data/projects";
import Arrow from "./Arrow";

export default function ProjectRow({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="row group">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-medium text-text">{project.title}</h3>
        <Arrow />
      </div>
      <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted">
        {project.summary}
      </p>
      <p className="mt-2 text-xs text-muted">
        {project.tags.slice(0, 4).join(" · ")}
      </p>
    </Link>
  );
}
