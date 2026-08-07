export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-bg-elevated/80 px-3 py-1 text-xs font-medium text-muted transition-colors hover:border-accent/60 hover:text-accent">
      {children}
    </span>
  );
}
