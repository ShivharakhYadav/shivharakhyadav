import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { externalPosts } from "@/data/externalPosts";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

export interface PostMeta {
  slug: string;
  title: string;
  date: string; // ISO string, e.g. "2026-05-12"
  /** Last meaningful edit (front-matter `updated`), ISO date; falls back to `date`. */
  updated?: string;
  excerpt: string;
  tags: string[];
  readingTime: string;
  /** Set for articles published elsewhere: the card links here instead of /blog/[slug]. */
  url?: string;
  /** Where an external article lives, e.g. "Medium". */
  source?: string;
}

export interface Post extends PostMeta {
  content: string; // raw markdown body
}

function readingTime(text: string): string {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

function getSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

export function getPostBySlug(slug: string): Post | undefined {
  const mdPath = path.join(POSTS_DIR, `${slug}.md`);
  const mdxPath = path.join(POSTS_DIR, `${slug}.mdx`);
  const filePath = fs.existsSync(mdPath) ? mdPath : mdxPath;
  if (!fs.existsSync(filePath)) return undefined;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  if (data.published === false) return undefined;

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ? new Date(data.date).toISOString().slice(0, 10) : "",
    ...(data.updated && { updated: new Date(data.updated).toISOString().slice(0, 10) }),
    excerpt: data.excerpt ?? "",
    tags: Array.isArray(data.tags) ? data.tags : [],
    readingTime: readingTime(content),
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  return getSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is Post => Boolean(p))
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(({ content, ...meta }) => meta);
}

/** Local posts plus articles published elsewhere, newest first (for listings). */
export function getPostFeed(): PostMeta[] {
  return [...getAllPosts(), ...externalPosts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPostSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}

/** Formats an ISO date as e.g. "May 12, 2026" for display. */
export function formatDate(iso: string): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
