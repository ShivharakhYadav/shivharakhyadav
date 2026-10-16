/** A project's lead result: big teal value with a short label. */
export default function Headline({
  value,
  label,
  compact = false,
}: {
  value: string;
  label: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`flex items-baseline gap-3 ${
        compact ? "sm:flex-col sm:items-end sm:gap-0" : ""
      }`}
    >
      <span
        className={`whitespace-nowrap font-display font-semibold tracking-[-0.04em] text-teal ${
          compact ? "text-[32px]" : "text-[44px]"
        }`}
      >
        {value}
      </span>
      <span className="text-[15px] text-muted">{label}</span>
    </div>
  );
}
