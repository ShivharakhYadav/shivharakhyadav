import { ImageResponse } from "next/og";
import { siteUrl } from "@/configs/metaTags";
import { ogFonts } from "@/lib/ogFonts";

export const ogSize = { width: 1200, height: 630 };

/**
 * 1200×630 share card for a single post or case study, in the Sand & Tide
 * colours: eyebrow, big title, optional highlight line and the name footer.
 */
export async function ogCard({ eyebrow, title, highlight }: { eyebrow: string; title: string; highlight?: string }) {
  const titleSize = title.length > 70 ? 54 : title.length > 40 ? 64 : 76;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#FBF6EE",
          color: "#14303A",
          fontFamily: "Outfit",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 24, letterSpacing: 3, color: "#A34D2F" }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: "#EE8B6A", marginRight: 14 }} />
          {eyebrow.toUpperCase()}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: titleSize, fontWeight: 600, letterSpacing: -2, lineHeight: 1.1 }}>
            {title}
          </div>
          <div style={{ display: "flex", width: 220, height: 8, borderRadius: 4, background: "#EE8B6A", marginTop: 22 }} />
          {highlight && (
            <div style={{ display: "flex", marginTop: 26, fontSize: 32, color: "#0F5C63" }}>{highlight}</div>
          )}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 26, color: "#5A6B70" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 56,
                height: 56,
                borderRadius: 28,
                background: "#0F5C63",
                color: "#FFFFFF",
                fontSize: 22,
                fontWeight: 600,
                marginRight: 18,
              }}
            >
              SY
            </div>
            Shivharakh Yadav · Full-Stack Developer
          </div>
          <div style={{ display: "flex" }}>{new URL(siteUrl).host}</div>
        </div>
      </div>
    ),
    { ...ogSize, fonts: await ogFonts() }
  );
}
