import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/Reveal";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" aria-label="Skills" className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading title="Toolkit" />
          <dl className="divide-y divide-border border-y border-border">
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6"
              >
                <dt className="text-sm text-muted">{group.category}</dt>
                <dd className="text-sm leading-relaxed">
                  {group.items.join(", ")}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
