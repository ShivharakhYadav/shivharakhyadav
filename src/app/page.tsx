import Hero from '@/components/home/Hero';
import TechMarquee from '@/components/home/TechMarquee';
import Highlights from '@/components/home/Highlights';
import Services from '@/components/home/Services';
import Experience from '@/components/home/Experience';
import Work from '@/components/home/Work';
import Writing from '@/components/home/Writing';
import Contact from '@/components/sections/Contact';
import JsonLd from '@/components/JsonLd';
import { person, website } from '@/configs/schema';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [website, person],
};

export default function Home() {
  return (
    <main>
      <Hero />
      <TechMarquee />
      <Highlights />
      <Services />
      <Work />
      <Experience />
      <Writing />
      <Contact />
      <JsonLd data={jsonLd} />
    </main>
  );
}
