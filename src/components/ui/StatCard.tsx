export default function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5 text-center transition-colors hover:border-accent/60">
      <div className="font-display text-2xl font-bold text-accent sm:text-3xl">
        {value}
      </div>
      <div className="mt-1 text-xs text-muted sm:text-sm">{label}</div>
    </div>
  );
}
