import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import PostCard from "@/components/ui/PostCard";
import Contact from "@/components/sections/Contact";
import JsonLd from "@/components/JsonLd";
import { author, websiteId } from "@/configs/schema";
import { getPostFeed } from "@/lib/blog";
import { siteUrl, ogImages, rssFeed } from "@/configs/metaTags";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on full-stack engineering - multi-tenant SaaS, real-time systems, micro-frontends, and building production web apps with React, Next.js and Node.js.",
  alternates: { canonical: "/blog", types: { "application/rss+xml": rssFeed } },
  openGraph: {
    title: "Blog - Shivharakh Yadav",
    description:
      "Articles on full-stack engineering - multi-tenant SaaS, real-time systems, and micro-frontends.",
    url: `${siteUrl}/blog`,
    type: "website",
    images: ogImages,
  },
  // set explicitly: otherwise X/Twitter cards inherit the home page text
  twitter: { title: "Blog - Shivharakh Yadav", description: "Articles on full-stack engineering - multi-tenant SaaS, real-time systems, and micro-frontends." },
};

export default function BlogIndexPage() {
  const posts = getPostFeed();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Shivharakh Yadav - Blog",
    url: `${siteUrl}/blog`,
    isPartOf: { "@id": websiteId },
    author,
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      datePublished: p.date,
      url: p.url ?? `${siteUrl}/blog/${p.slug}`,
      author,
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
          <ul className="grid gap-6 pb-24 md:grid-cols-2">
            {posts.map((post) => (
              <li key={post.slug}>
                <PostCard post={post} showExcerpt as="h2" />
              </li>
            ))}
          </ul>
        )}
      </Container>
      <Contact />
      <JsonLd data={jsonLd} />
    </main>
  );
}
