import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import StatCard from "@/components/ui/StatCard";
import Reveal from "@/components/Reveal";
import { profile, stats } from "@/data/profile";
import { getCount } from "@/utils/helper";

export default function About() {
  const years = getCount(
    profile.careerStart.day,
    profile.careerStart.month,
    profile.careerStart.year
  );

  return (
    <section id="about" aria-label="About" className="scroll-mt-24 py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Get to know me" title="About Me" />
        </Reveal>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal className="space-y-4">
            <h3 className="font-display text-2xl font-semibold">
              I&apos;m {profile.name}, a{" "}
              <span className="text-accent">{profile.role}</span>
            </h3>
            {profile.bio.map((paragraph, i) => (
              <p key={i} className="leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
            <p className="leading-relaxed text-muted">
              <span className="font-medium text-text">Currently exploring:</span>{" "}
              {profile.currentlyExploring}
            </p>

            <dl className="grid grid-cols-1 gap-x-8 gap-y-3 pt-4 sm:grid-cols-2">
              <div className="flex gap-2">
                <dt className="font-semibold text-text">Experience:</dt>
                <dd className="text-muted">{years}+ years</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold text-text">Location:</dt>
                <dd className="text-muted">{profile.location}</dd>
              </div>
              <div className="flex gap-2 sm:col-span-2">
                <dt className="font-semibold text-text">Email:</dt>
                <dd>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-accent hover:underline"
                  >
                    {profile.email}
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={120} className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
