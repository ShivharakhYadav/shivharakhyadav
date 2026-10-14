/** Small "↗"-style arrow that nudges on hover of the nearest `.group`. */
export default function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="shrink-0 text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-text"
    >
      ↗
    </span>
  );
}
