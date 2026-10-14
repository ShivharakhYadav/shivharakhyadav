import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/Reveal";
import { profile, stats } from "@/data/profile";

export default function About() {
  return (
    <section id="about" aria-label="About" className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading title="About" />
          <div className="space-y-4 leading-relaxed">
            {profile.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            <p className="text-muted">
              <span className="text-text">Currently exploring</span> —{" "}
              {profile.currentlyExploring}
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-semibold tabular-nums tracking-tight">
                  {stat.value}
                </dd>
                <dd className="mt-0.5 text-xs text-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
