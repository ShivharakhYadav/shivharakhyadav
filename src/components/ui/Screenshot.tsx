import Image from "next/image";
import { techLogos } from "@/data/techLogos";

const dots = ["#EE8B6A", "#F2C66D", "#8CC7A1"];

/**
 * Browser-chrome frame for a project screenshot. Until a real image is
 * provided it shows a cover built from the project's stack instead of an
 * empty placeholder.
 */
export default function Screenshot({
  src,
  alt,
  stack = [],
  tint = "seaglass",
  compact = false,
  className = "",
  priority = false,
}: {
  src?: string;
  alt: string;
  /** technologies for the cover shown while there's no screenshot */
  stack?: string[];
  tint?: "seaglass" | "linen";
  /** small cover (row cards): logos only */
  compact?: boolean;
  className?: string;
  priority?: boolean;
}) {
  if (!src) return <StackCover stack={stack} tint={tint} compact={compact} className={className} />;

  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-[18px] border border-line bg-white ${className}`}
    >
      <div className="flex gap-1.5 px-3.5 py-3" aria-hidden="true">
        {dots.map((c) => (
          <span key={c} className="h-2 w-2 rounded-full" style={{ background: c }} />
        ))}
      </div>
      <div className={`relative flex-1 ${tint === "linen" ? "bg-linen" : "bg-seaglass"}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 560px, 100vw"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}

/** Decorative cover: the project's stack as logo tiles inside the site's ring motif. */
function StackCover({
  stack,
  tint,
  compact,
  className,
}: {
  stack: string[];
  tint: "seaglass" | "linen";
  compact: boolean;
  className: string;
}) {
  const items = stack.map((name) => ({ name, path: techLogos.find((t) => t.name === name)?.path }));
  const shown = compact ? items.filter((i) => i.path).slice(0, 3) : items;

  return (
    <div
      aria-hidden="true"
      className={`relative flex items-center justify-center overflow-hidden rounded-[18px] ${
        tint === "linen" ? "bg-linen" : "bg-seaglass"
      } ${className}`}
    >
      {/* concentric rings, echoing the portrait */}
      <span className="absolute -right-16 -top-16 h-56 w-56 rounded-full border-2 border-dashed border-coral/40" />
      <span className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full border-[18px] border-white/50" />

      {compact ? (
        <ul className="relative flex -space-x-2">
          {(shown.length ? shown : items.slice(0, 1)).map((t) => (
            <li
              key={t.name}
              className="grid h-12 w-12 place-items-center rounded-full border-[3px] border-bg bg-card text-ink shadow-soft"
            >
              {t.path ? (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d={t.path} />
                </svg>
              ) : (
                <span className="font-display text-sm font-semibold">{t.name.slice(0, 2)}</span>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <div className="relative flex max-w-[86%] flex-col items-center gap-4">
          <span className="eyebrow text-muted">Built with</span>
          <ul className="flex flex-wrap justify-center gap-2.5">
            {shown.map((t) => (
              <li
                key={t.name}
                className="flex items-center gap-2 rounded-full bg-card px-4 py-2.5 font-display text-[15px] font-medium text-ink shadow-soft sm:text-base"
              >
                {t.path && (
                  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor">
                    <path d={t.path} />
                  </svg>
                )}
                {t.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
