import type { Metadata } from "next";

const title = "Shivharakh Yadav — Full-Stack Developer";
const description =
  "Full-stack developer with 4+ years building production web apps — React, Next.js, TypeScript, Node.js. Multi-tenant SaaS, real-time systems, and micro-frontends.";

// ⚠️ SINGLE SOURCE OF TRUTH for the site's absolute URL.
// Swap this to your real domain once it's live — sitemap, robots, canonical
// URLs and Open Graph tags all derive from it.
export const siteUrl = "https://shivharakhyadav.dev";
const url = siteUrl;

export const siteMetadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: [
    "Shivharakh Yadav",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Shivharakh Yadav" }],
  openGraph: {
    title,
    description,
    url,
    siteName: "Shivharakh Yadav",
    type: "website",
    images: [{ url: "/profile1.jpg", width: 300, height: 300, alt: "Shivharakh Yadav" }],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/profile1.jpg"],
  },
};
