import Link from "next/link";
import { formatDate, type PostMeta } from "@/lib/blog";

export default function PostCard({ post, showExcerpt = false }: { post: PostMeta; showExcerpt?: boolean }) {
  const body = (
    <>
      <p className="text-[13px] text-muted">
        <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingTime}
        {post.source && <> · {post.source}</>}
      </p>
      <h3 className="mt-3 font-display text-2xl font-medium leading-snug tracking-[-0.03em]">{post.title}</h3>
      {showExcerpt && post.excerpt && <p className="mt-3 leading-relaxed text-muted">{post.excerpt}</p>}
      <span className="text-link mt-3 inline-block">
        {post.url ? `Read on ${post.source ?? "the web"} ↗` : "Read →"}
      </span>
    </>
  );
  const className = "lift group block rounded-3xl bg-linen p-8";

  return post.url ? (
    <a href={post.url} target="_blank" rel="noopener noreferrer" className={className}>
      {body}
    </a>
  ) : (
    <Link href={`/blog/${post.slug}`} className={className}>
      {body}
    </Link>
  );
}
