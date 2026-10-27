import { ogCard, ogSize } from "@/lib/ogCard";
import { projects, getProjectBySlug } from "@/data/projects";

// Per-project link preview: title plus the lead result.
export const alt = "Case study by Shivharakh Yadav";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return ogCard({
    eyebrow: project ? `Case study · ${project.eyebrow}` : "Case study",
    title: project?.title ?? "Case studies",
    highlight: project ? `${project.headline.value} ${project.headline.label}` : undefined,
  });
}
