export default function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="card p-5 text-center">
      <div className="text-gradient font-display text-2xl font-bold sm:text-3xl">
        {value}
      </div>
      <div className="mt-1 text-xs text-muted sm:text-sm">{label}</div>
    </div>
  );
}
