import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import type { PostMeta } from "@/lib/blog";
import { formatDate } from "@/lib/blog";
import Tag from "./Tag";

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="card group flex h-full flex-col p-6"
    >
      <div className="mb-3 flex items-center gap-3 text-xs text-muted">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden="true">·</span>
        <span>{post.readingTime}</span>
      </div>
      <h3 className="font-display text-lg font-semibold text-text transition-colors group-hover:text-accent">
        {post.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {post.excerpt}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {post.tags.slice(0, 3).map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent">
        Read article
        <FaArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
