import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import type { Project } from "@/data/projects";
import Tag from "./Tag";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="card group flex h-full flex-col p-6"
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="text-3xl" aria-hidden="true">
          {project.emoji}
        </span>
        <FaArrowRight className="h-4 w-4 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent" />
      </div>
      <h3 className="font-display text-lg font-semibold text-text transition-colors group-hover:text-accent">
        {project.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {project.summary}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.slice(0, 4).map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </Link>
  );
}
