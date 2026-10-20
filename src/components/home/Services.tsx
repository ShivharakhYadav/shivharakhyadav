import Link from "next/link";
import Container from "@/components/ui/Container";
import { services } from "@/data/services";
import { getProjectBySlug } from "@/data/projects";

/** What a client can hire me for, each with case studies as proof. */
export default function Services() {
  return (
    <Container>
      <section id="services" aria-labelledby="services-title" className="pt-24">
        <div className="mb-8 max-w-[640px]">
          <h2 id="services-title" className="font-display fs-section font-semibold tracking-[-0.05em]">
            What I can help with
          </h2>
          <p className="mt-2 text-lg text-muted">The kind of work I’ve delivered for clients, with examples.</p>
        </div>

        <ul className="grid gap-4 md:grid-cols-2">
          {services.map((s, i) => {
            const examples = s.projects
              .map(getProjectBySlug)
              .filter((p): p is NonNullable<typeof p> => Boolean(p));
            return (
              <li
                key={s.title}
                className={`flex flex-col rounded-[32px] p-7 sm:p-8 ${i === 0 ? "bg-seaglass" : "card"}`}
              >
                <h3 className="font-display text-[24px] font-semibold leading-tight tracking-[-0.03em]">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{s.text}</p>
                <p className="mt-auto flex flex-wrap gap-x-4 gap-y-1 pt-5 text-sm">
                  <span className="text-muted">Examples:</span>
                  {examples.map((p) => (
                    <Link key={p.slug} href={`/projects/${p.slug}`} className="text-link">
                      {p.title.split(" - ")[0]} →
                    </Link>
                  ))}
                </p>
              </li>
            );
          })}
        </ul>
      </section>
    </Container>
  );
}
