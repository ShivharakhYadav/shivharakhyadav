import Image from "next/image";
import { profile } from "@/data/profile";

/** Concentric frame: dashed coral ring → sea-glass halo → photo. Size it via `className`. */
export default function Portrait({
  className = "h-[320px] w-[320px] sm:h-[460px] sm:w-[460px]",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`group relative mx-auto shrink-0 ${className}`}>
      <div
        className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-coral/60"
        aria-hidden="true"
      />
      <div className="absolute inset-[4%] rounded-full bg-seaglass" aria-hidden="true" />
      <div className="absolute inset-[8%] overflow-hidden rounded-full border-[6px] border-card bg-seaglass shadow-portrait">
        <Image
          src="/profile.png"
          alt={`${profile.name}, ${profile.role}`}
          width={460}
          height={460}
          // matches the sizes Hero and /about pass in, so phones don't download the 1080px file
          sizes="(min-width: 1280px) 460px, (min-width: 1024px) 380px, 280px"
          priority={priority}
          className="photo-dim h-full w-full origin-[50%_20%] scale-[1.12] object-cover object-[50%_10%] transition duration-700 group-hover:scale-[1.16]"
        />
      </div>
    </div>
  );
}
