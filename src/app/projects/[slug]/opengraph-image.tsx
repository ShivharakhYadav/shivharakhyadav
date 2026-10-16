import { ogCard, ogSize } from "@/lib/ogCard";
import { projects, getProjectBySlug } from "@/data/projects";

// Per-project link preview: title plus the lead result.
export const alt = "Case study by Shivharakh Yadav";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function Image({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  return ogCard({
    eyebrow: project ? `Case study · ${project.eyebrow}` : "Case study",
    title: project?.title ?? "Case studies",
    highlight: project ? `${project.headline.value} ${project.headline.label}` : undefined,
  });
}
