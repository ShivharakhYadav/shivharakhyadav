import type { PostMeta } from "@/lib/blog";

/**
 * Articles published elsewhere (Medium, dev.to…). They appear in the Writing
 * section and on /blog next to the Markdown posts, and link out to the original.
 */
export const externalPosts: PostMeta[] = [
  {
    slug: "python-library-to-rust-tests-passed-still-broken",
    title: "I Ported a Python Library to Rust. All 1,059 Original Tests Passed — and It Was Still Broken.",
    date: "2026-08-09",
    excerpt:
      "500,000 differential fuzz cases, zero divergences, and one bug the original test suite could never have caught. My winning Port Mortem 2026 submission.",
    tags: ["Rust", "Python", "Testing", "Hackathon"],
    readingTime: "7 min read",
    url: "https://medium.com/@yadavshivharakhyadav/i-ported-a-python-library-to-rust-all-1-059-original-tests-passed-and-it-was-still-broken-39a0a973d872",
    source: "Medium",
  },
];
