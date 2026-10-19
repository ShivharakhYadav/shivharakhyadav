import { ImageResponse } from "next/og";
import { ogFonts } from "@/lib/ogFonts";

/** The "SY" teal circle from the navbar, as a square PNG icon of the given size. */
export async function monogram(px: number, { round = true }: { round?: boolean } = {}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: round ? "transparent" : "#FBF6EE",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: round ? "100%" : "84%",
            height: round ? "100%" : "84%",
            borderRadius: "50%",
            background: "#0F5C63",
            color: "#FFFFFF",
            fontSize: px * 0.38,
            fontWeight: 600,
            fontFamily: "Outfit",
            letterSpacing: -px * 0.01,
          }}
        >
          SY
        </div>
      </div>
    ),
    { width: px, height: px, fonts: await ogFonts() }
  );
}
