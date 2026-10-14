import Hero from "@/components/home/Hero";
import TechMarquee from "@/components/home/TechMarquee";
import Highlights from "@/components/home/Highlights";
import Work from "@/components/home/Work";
import Experience from "@/components/home/Experience";
import Writing from "@/components/home/Writing";
import Contact from "@/components/sections/Contact";
import JsonLd from "@/components/JsonLd";
import { profile } from "@/data/profile";
import { siteUrl } from "@/configs/metaTags";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: profile.name,
      jobTitle: profile.role,
      email: `mailto:${profile.email}`,
      url: siteUrl,
      image: `${siteUrl}/profile.png`,
      address: profile.location,
      sameAs: profile.socials
        .filter((s) => s.icon !== "email")
        .map((s) => s.href),
    },
    {
      "@type": "WebSite",
      name: `${profile.name} — Portfolio`,
      url: siteUrl,
    },
  ],
};

export default function Home() {
  return (
    <main>
      <Hero />
      <TechMarquee />
      <Highlights />
      <Work />
      <Experience />
      <Writing />
      <Contact />
      <JsonLd data={jsonLd} />
    </main>
  );
}
