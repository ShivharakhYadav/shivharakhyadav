import { ReactNode } from "react";

/** Title block at the top of the inner pages (/projects, /blog). */
export default function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="max-w-[720px] space-y-4 pb-12 pt-12 sm:pt-20">
      <p className="eyebrow text-coral-ink">{eyebrow}</p>
      <h1 className="font-display fs-page font-semibold leading-[1.1] tracking-[-0.04em]">
        {title}
      </h1>
      {children && (
        <p className="text-[17px] leading-relaxed text-muted sm:text-[19px]">
          {children}
        </p>
      )}
    </header>
  );
}
