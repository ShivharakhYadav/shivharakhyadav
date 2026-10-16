import Link from "next/link";
import Container from "@/components/ui/Container";
import PostCard from "@/components/ui/PostCard";
import { getPostFeed } from "@/lib/blog";

export default function Writing() {
  const posts = getPostFeed().slice(0, 2);
  if (posts.length === 0) return null;

  return (
    <Container>
      <section id="writing" className="pb-24">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-[34px] font-semibold tracking-[-0.04em] sm:text-[44px]">
            Notes &amp; writing
          </h2>
          <Link href="/blog" className="text-link">
            All posts →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </Container>
  );
}
