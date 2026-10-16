import { ogCard, ogSize } from "@/lib/ogCard";
import { getAllPostSlugs, getPostBySlug, formatDate } from "@/lib/blog";

// Per-post link preview: the post title on the site's share card.
export const alt = "Blog post by Shivharakh Yadav";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export default function Image({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  return ogCard({
    eyebrow: post ? `Writing · ${formatDate(post.date)}` : "Writing",
    title: post?.title ?? "Notes & writing",
  });
}
