import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import PostCard from "@/components/ui/PostCard";
import Contact from "@/components/sections/Contact";
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
    <main>
      <Container>
        <PageHeader
          eyebrow="Writing"
          title={
            <>
              Notes &amp; <span className="coral-underline">writing</span>.
            </>
          }
        >
          Lessons from building production apps: multi-tenant SaaS, real-time
          systems and micro-frontends.
        </PageHeader>
        {posts.length === 0 ? (
          <p className="pb-24 text-muted">No posts yet. Check back soon.</p>
        ) : (
          <div className="grid gap-6 pb-24 md:grid-cols-2">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} showExcerpt />
            ))}
          </div>
        )}
      </Container>
      <Contact />
      <JsonLd data={jsonLd} />
    </main>
  );
}
