import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Tag from "@/components/ui/Tag";
import Reveal from "@/components/Reveal";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" aria-label="What I Do" className="scroll-mt-24 py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="My toolkit" title="What I Work With" />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 80}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/60">
                <h3 className="mb-4 font-display text-lg font-semibold text-accent">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
