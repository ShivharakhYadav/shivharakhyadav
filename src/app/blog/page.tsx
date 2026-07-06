import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PostCard from "@/components/ui/PostCard";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import JsonLd from "@/components/JsonLd";
import { getAllPosts } from "@/lib/blog";
import { siteUrl } from "@/configs/metaTags";

export const metadata: Metadata = {
  title: "Blog — Shivharakh Yadav",
  description:
    "Articles on full-stack engineering — multi-tenant SaaS, real-time systems, micro-frontends, and building production web apps with React, Next.js and Node.js.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Shivharakh Yadav",
    description:
      "Articles on full-stack engineering — multi-tenant SaaS, real-time systems, and micro-frontends.",
    url: `${siteUrl}/blog`,
    type: "website",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Shivharakh Yadav — Blog",
    url: `${siteUrl}/blog`,
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      datePublished: p.date,
      url: `${siteUrl}/blog/${p.slug}`,
    })),
  };

  return (
    <>
      <Navbar />
      <main className="py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Writing" title="Blog" align="left" />
          {posts.length === 0 ? (
            <p className="text-muted">No posts yet — check back soon.</p>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </Container>
      </main>
      <Footer />
      <JsonLd data={jsonLd} />
    </>
  );
}
