import Link from "next/link";
import type { PostMeta } from "@/lib/blog";
import { formatDate } from "@/lib/blog";

export default function PostRow({
  post,
  showExcerpt = false,
}: {
  post: PostMeta;
  showExcerpt?: boolean;
}) {
  return (
    <Link href={`/blog/${post.slug}`} className="row group">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <h3 className="font-medium text-text decoration-border underline-offset-4 group-hover:underline">
          {post.title}
        </h3>
        <time
          dateTime={post.date}
          className="shrink-0 text-sm tabular-nums text-muted"
        >
          {formatDate(post.date)}
        </time>
      </div>
      {showExcerpt && (
        <p className="mt-1.5 text-sm leading-relaxed text-muted">
          {post.excerpt}
        </p>
      )}
    </Link>
  );
}
