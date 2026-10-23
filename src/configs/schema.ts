import { siteUrl } from "@/configs/metaTags";
import { profile, education } from "@/data/profile";
import { allSkills } from "@/data/skills";
import { allAwards, experience, isPlaceholder } from "@/data/experience";

/**
 * Shared schema.org entities. The full Person and WebSite are defined once on
 * the home page; every other page points at them by `@id`, so Google sees one
 * consistent person behind the whole site.
 */
export const personId = `${siteUrl}/#person`;
export const websiteId = `${siteUrl}/#website`;

/** Compressed portrait for structured data (the on-page photo goes through next/image). */
export const personImage = `${siteUrl}/profile-1200.jpg`;

// Profiles elsewhere that are also me (not all are shown as visible links).
const sameAs = [
  ...profile.socials.filter((s) => s.icon !== "email").map((s) => s.href),
  "https://medium.com/@yadavshivharakhyadav",
];

// the role marked "Present" in experience.ts, never a [placeholder]
const currentJob = experience.find((j) => /present/i.test(j.period) && !isPlaceholder(j.company));

// /about is the page that identifies me (Google's recommendation for author.url)
const personUrl = `${siteUrl}/about`;

export const personRef = { "@id": personId };

/** Compact author for posts and case studies; the full Person lives on home and /about. */
export const author = { "@type": "Person", "@id": personId, name: profile.name, url: personUrl };

export const person = {
  "@type": "Person",
  "@id": personId,
  name: profile.name,
  jobTitle: profile.role,
  description: profile.intro,
  url: personUrl,
  image: personImage,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  ...(currentJob && { worksFor: { "@type": "Organization", name: currentJob.company } }),
  alumniOf: [...new Set(education.map((e) => e.school))].map((name) => ({ "@type": "CollegeOrUniversity", name })),
  knowsAbout: allSkills,
  ...(allAwards.length > 0 && { award: allAwards }),
  sameAs,
};

export const website = {
  "@type": "WebSite",
  "@id": websiteId,
  name: profile.name,
  alternateName: ["Shivharakh Yadav - Portfolio", "SY"],
  url: `${siteUrl}/`,
  inLanguage: "en",
  publisher: personRef,
};

/** BreadcrumbList from [name, path] pairs, e.g. [["Home", "/"], ["Writing", "/blog"]]. */
export function breadcrumbs(items: [name: string, path: string][]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, path], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: `${siteUrl}${path}`,
    })),
  };
}
