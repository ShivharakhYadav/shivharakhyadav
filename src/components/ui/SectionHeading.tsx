export default function SectionHeading({
  eyebrow,
  title,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  align?: "center" | "left";
}) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`mb-12 flex flex-col ${alignment}`}>
      {eyebrow && (
        <span className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold sm:text-4xl">{title}</h2>
      <div className="mt-4 h-1 w-16 rounded-full bg-accent" />
    </div>
  );
}
