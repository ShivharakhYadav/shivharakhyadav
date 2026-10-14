import Container from "@/components/ui/Container";
import { techLogos } from "@/data/techLogos";

/** "Working with" logo strip that scrolls on its own; pauses on hover. */
export default function TechMarquee() {
  const row = (hidden: boolean) => (
    <ul
      className="flex shrink-0 items-center gap-12 pr-12 sm:gap-14 sm:pr-14"
      aria-hidden={hidden || undefined}
    >
      {techLogos.map((t) => (
        <li
          key={t.name}
          className="flex items-center gap-2.5 whitespace-nowrap font-display text-[17px] font-medium text-muted transition hover:text-ink"
        >
          <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="currentColor" aria-hidden="true">
            <path d={t.path} />
          </svg>
          {t.name}
        </li>
      ))}
    </ul>
  );

  return (
    <Container>
      <div className="flex flex-col gap-4 border-y border-line py-7 sm:flex-row sm:items-center sm:gap-10">
        <h2 className="eyebrow shrink-0 text-muted">Working with</h2>
        <div className="marquee-wrap relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="marquee flex w-max">
            {row(false)}
            {row(true)}
          </div>
        </div>
      </div>
    </Container>
  );
}
