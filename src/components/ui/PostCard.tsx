import Link from "next/link";
import { formatDate, type PostMeta } from "@/lib/blog";

export default function PostCard({ post, showExcerpt = false }: { post: PostMeta; showExcerpt?: boolean }) {
  return (
    <Link href={`/blog/${post.slug}`} className="lift group block rounded-3xl bg-linen p-8">
      <p className="text-[13px] text-muted">
        <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingTime}
      </p>
      <h3 className="mt-3 font-display text-2xl font-medium leading-snug tracking-[-0.03em]">{post.title}</h3>
      {showExcerpt && post.excerpt && <p className="mt-3 leading-relaxed text-muted">{post.excerpt}</p>}
      <span className="text-link mt-3 inline-block">Read →</span>
    </Link>
  );
}
