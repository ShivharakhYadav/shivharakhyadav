import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PostRow from "@/components/ui/PostRow";
import Reveal from "@/components/Reveal";
import { getAllPosts } from "@/lib/blog";

export default function LatestPosts() {
  const posts = getAllPosts().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section id="writing" aria-label="Latest writing" className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading title="Writing" />
          <div className="border-b border-border">
            {posts.map((post) => (
              <PostRow key={post.slug} post={post} />
            ))}
          </div>
          <Link href="/blog" className="link mt-6 inline-block text-sm">
            All posts
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
