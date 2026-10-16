import Image from "next/image";

const dots = ["#EE8B6A", "#F2C66D", "#8CC7A1"];

/**
 * Browser-chrome frame for a project screenshot. Shows a labelled
 * placeholder on a tinted background until a real image is provided.
 */
export default function Screenshot({
  src,
  alt,
  tint = "seaglass",
  className = "",
  priority = false,
}: {
  src?: string;
  alt: string;
  tint?: "seaglass" | "linen";
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-[18px] border border-line bg-white ${className}`}
    >
      <div className="flex gap-1.5 px-3.5 py-3" aria-hidden="true">
        {dots.map((c) => (
          <span key={c} className="h-2 w-2 rounded-full" style={{ background: c }} />
        ))}
      </div>
      <div
        className={`relative flex flex-1 items-center justify-center ${
          tint === "linen" ? "bg-linen" : "bg-seaglass"
        }`}
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover object-top"
          />
        ) : (
          <span className="px-4 text-center text-[13px] font-medium text-muted">
            {alt}
          </span>
        )}
      </div>
    </div>
  );
}
