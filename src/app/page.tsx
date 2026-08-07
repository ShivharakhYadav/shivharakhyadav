import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import LatestPosts from "@/components/sections/LatestPosts";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
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
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <LatestPosts />
        <Contact />
      </main>
      <Footer />
      <JsonLd data={jsonLd} />
    </>
  );
}
