import { ogCard, ogSize } from "@/lib/ogCard";
import { getAllPostSlugs, getPostBySlug, formatDate } from "@/lib/blog";

// Per-post link preview: the post title on the site's share card.
export const alt = "Blog post by Shivharakh Yadav";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return ogCard({
    eyebrow: post ? `Writing · ${formatDate(post.date)}` : "Writing",
    title: post?.title ?? "Notes & writing",
  });
}
