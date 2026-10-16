import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import Container from "@/components/ui/Container";
import Contact from "@/components/sections/Contact";
import JsonLd from "@/components/JsonLd";
import { getAllPostSlugs, getPostBySlug, formatDate } from "@/lib/blog";
import { siteUrl, ogImages } from "@/configs/metaTags";

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
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteUrl}/blog/${post.slug}`,
      type: "article",
      images: ogImages,
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
    <main>
      <Container className="max-w-[760px]">
        <article className="pb-20">
          <header className="space-y-5 pt-12 sm:pt-20">
            <Link href="/blog" className="text-link text-sm">
              ← All posts
            </Link>
            <h1 className="font-display text-[36px] font-semibold leading-[1.1] tracking-[-0.04em] sm:text-[52px]">
              {post.title}
            </h1>
            <p className="text-sm text-muted">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              {" · "}
              {post.readingTime}
            </p>
            {post.tags.length > 0 && (
              <ul className="flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
            )}
          </header>

          <div className="prose prose-lg mt-12 max-w-none prose-headings:font-semibold prose-a:underline-offset-4">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </Container>
      <Contact />
      <JsonLd data={jsonLd} />
    </main>
  );
}
