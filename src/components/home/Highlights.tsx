import Link from "next/link";
import Container from "@/components/ui/Container";
import { profile } from "@/data/profile";

/** Two tiles under the hero: the biggest result and what I'm into right now. */
export default function Highlights() {
  return (
    <Container>
      <section aria-label="Highlights" className="grid gap-5 pt-12 md:grid-cols-2">
        <Link
          href="/projects/e-learning-saas"
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
              learners on one multi-tenant platform · see case study
            </span>
          </span>
        </Link>
        <Link
          href="#writing"
          className="lift group flex min-h-[210px] flex-col justify-between rounded-[32px] bg-linen p-8"
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

function Arrow() {
  return (
    <span aria-hidden="true" className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
      ↗
    </span>
  );
}
