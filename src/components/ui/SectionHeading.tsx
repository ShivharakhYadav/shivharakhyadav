export default function SectionHeading({
  eyebrow,
  title,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  align?: "center" | "left";
}) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`mb-12 flex flex-col ${alignment}`}>
      {eyebrow && (
        <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          <span className="h-px w-6 bg-accent/60" aria-hidden="true" />
          {eyebrow}
          {align === "center" && (
            <span className="h-px w-6 bg-accent/60" aria-hidden="true" />
          )}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-accent to-accent-2" />
    </div>
  );
}
