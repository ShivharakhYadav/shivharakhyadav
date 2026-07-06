import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PostCard from "@/components/ui/PostCard";
import Reveal from "@/components/Reveal";
import { getAllPosts } from "@/lib/blog";

export default function LatestPosts() {
  const posts = getAllPosts().slice(0, 2);
  if (posts.length === 0) return null;

  return (
    <section id="writing" aria-label="Latest writing" className="scroll-mt-24 py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="From the blog" title="Latest Writing" />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 100}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
          >
            Read all articles <FaArrowRight className="h-3.5 w-3.5" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
