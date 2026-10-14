import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import Container from "@/components/ui/Container";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import JsonLd from "@/components/JsonLd";
import { getAllPostSlugs, getPostBySlug, formatDate } from "@/lib/blog";
import { siteUrl } from "@/configs/metaTags";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} — Shivharakh Yadav`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteUrl}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: "Shivharakh Yadav", url: siteUrl },
    keywords: post.tags.join(", "),
    url: `${siteUrl}/blog/${post.slug}`,
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
  };

  return (
    <>
      <Navbar />
      <main className="py-16 sm:py-24">
        <Container>
          <Link
            href="/blog"
            className="text-sm text-muted transition-colors hover:text-text"
          >
            ← Blog
          </Link>

          <header className="mt-10">
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-sm text-muted">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              {" · "}
              {post.readingTime}
              {post.tags.length > 0 && <> · {post.tags.join(", ")}</>}
            </p>
          </header>

          <article className="prose mt-12 max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:underline-offset-4">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
            >
              {post.content}
            </ReactMarkdown>
          </article>

          <p className="mt-16 border-t border-border pt-8 text-sm text-muted">
            Enjoyed this?{" "}
            <Link href="/#contact" className="link">
              Let&apos;s connect
            </Link>
            .
          </p>
        </Container>
      </main>
      <Footer />
      <JsonLd data={jsonLd} />
    </>
  );
}
