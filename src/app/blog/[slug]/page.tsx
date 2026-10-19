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
import { siteUrl, rssFeed } from "@/configs/metaTags";
import { author, breadcrumbs, personRef, websiteId } from "@/configs/schema";

// only the generated slugs exist; anything else gets the static 404 page
export const dynamicParams = false;

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
    // long titles drop the " — Shivharakh Yadav" suffix so results don't truncate them
    title: post.title.length > 45 ? { absolute: post.title } : post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}`, types: { "application/rss+xml": rssFeed } },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteUrl}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [`${siteUrl}/about`],
      tags: post.tags,
    },
    // set explicitly: otherwise X/Twitter cards inherit the home page text
    twitter: { title: post.title, description: post.excerpt },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const url = `${siteUrl}/blog/${post.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        image: `${url}/opengraph-image`,
        datePublished: post.date,
        dateModified: post.updated ?? post.date,
        author,
        publisher: personRef,
        inLanguage: "en",
        keywords: post.tags.join(", "),
        url,
        mainEntityOfPage: url,
        isPartOf: { "@id": websiteId },
      },
      breadcrumbs([
        ["Home", "/"],
        ["Writing", "/blog"],
        [post.title, `/blog/${post.slug}`],
      ]),
    ],
  };

  return (
    <main>
      <Container className="max-w-[760px]">
        <article className="pb-20">
          <header className="space-y-5 pt-12 sm:pt-20">
            <Link href="/blog" className="text-link inline-block py-1 text-sm">
              ← All posts
            </Link>
            <h1 className="font-display text-[clamp(1.875rem,1.3rem+2.6vw,3.25rem)] font-semibold leading-[1.1] tracking-[-0.04em]">
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
