import Link from "next/link";
import Container from "@/components/ui/Container";
import { profile } from "@/data/profile";
import { awards, isPlaceholder } from "@/data/experience";

/** Tiles under the hero: the biggest result, recognition, and what I'm into right now. */
export default function Highlights() {
  return (
    <Container>
      <section aria-label="Highlights" className="grid gap-5 pt-12 md:grid-cols-2 lg:grid-cols-3">
        <Link
          href="/projects/dms-simulation-platform"
          className="lift group flex min-h-[210px] flex-col justify-between rounded-[32px] border border-transparent bg-seaglass p-8 hover:border-teal/40"
        >
          <span className="eyebrow flex justify-between text-teal">
            Impact <Arrow />
          </span>
          <span>
            <span className="block font-display text-[56px] font-semibold leading-none tracking-[-0.05em] text-teal">
              944+
            </span>
            <span className="mt-2 block text-sm text-muted">
              users across 10 organizations on one multi-tenant SaaS · see case study
            </span>
          </span>
        </Link>
        <Link
          href="/experience#awards"
          className="lift group flex min-h-[210px] flex-col justify-between gap-5 rounded-[32px] border border-line bg-card p-8"
        >
          <span className="eyebrow flex justify-between text-coral-ink">
            Recognition <Arrow />
          </span>
          <span className="space-y-2.5">
            {awards
              .filter((a) => !isPlaceholder(`${a.title} ${a.issuer ?? ""}`))
              .slice(0, 3)
              .map((a) => (
                <Award
                  key={`${a.title}-${a.issuer}`}
                  title={a.title}
                  detail={[a.issuer?.replace(/ Pvt\. Ltd\.$/, ""), a.year].filter(Boolean).join(" · ")}
                />
              ))}
          </span>
        </Link>
        <Link
          href="#writing"
          className="lift group flex min-h-[210px] flex-col justify-between rounded-[32px] bg-linen p-8 md:col-span-2 lg:col-span-1"
        >
          <span className="eyebrow flex justify-between text-coral-ink">
            Currently <Arrow />
          </span>
          <span className="font-display text-[26px] font-medium leading-snug tracking-[-0.02em]">
            {profile.currentlyExploring} <span className="text-coral">✦</span>
          </span>
        </Link>
      </section>
    </Container>
  );
}

function Award({ title, detail }: { title: string; detail: string }) {
  return (
    <span className="flex items-start gap-2.5">
      <svg viewBox="0 0 24 24" className="mt-1 h-4 w-4 shrink-0 text-coral" fill="currentColor" aria-hidden="true">
        <path d="M12 2l2.9 6.26L22 9.27l-5.2 4.9L18.2 22 12 18.27 5.8 22l1.4-7.83L2 9.27l7.1-1.01L12 2z" />
      </svg>
      <span>
        <span className="block font-display text-[17px] font-semibold leading-tight tracking-[-0.02em]">{title}</span>
        <span className="block text-[13px] text-muted">{detail}</span>
      </span>
    </span>
  );
}

function Arrow() {
  return (
    <span aria-hidden="true" className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
      ↗
    </span>
  );
}
