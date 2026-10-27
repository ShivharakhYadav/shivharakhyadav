import { readFile } from "fs/promises";
import path from "path";
import { ImageResponse } from "next/og";
import { ogFonts } from "@/lib/ogFonts";

// Shared by every page's link preview (LinkedIn, WhatsApp, X, Slack…)
export const alt = "Shivharakh Yadav - Full-Stack Developer in Pune, India";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const photo = await readFile(path.join(process.cwd(), "public", "profile-1200.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 80px",
          background: "#FBF6EE",
          color: "#14303A",
          fontFamily: "Outfit",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 640 }}>
          <div style={{ display: "flex", alignItems: "center", fontSize: 24, color: "#5A6B70" }}>
            <div style={{ width: 14, height: 14, borderRadius: 7, background: "#EE8B6A", marginRight: 12 }} />
            Pune, India · Australia & US clients
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 76, fontWeight: 600, letterSpacing: -3, lineHeight: 1.05 }}>
            Shivharakh Yadav
          </div>
          <div style={{ display: "flex", width: 300, height: 8, borderRadius: 4, background: "#EE8B6A", marginTop: 14 }} />
          <div style={{ display: "flex", marginTop: 30, fontSize: 40, fontWeight: 600, color: "#0F5C63" }}>
            Full-Stack Developer
          </div>
          <div style={{ display: "flex", marginTop: 14, fontSize: 28, color: "#5A6B70" }}>
            React · Next.js · TypeScript · Node.js
          </div>
        </div>

        {/* concentric portrait, matching the site hero */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 420,
            height: 420,
            borderRadius: 210,
            border: "2px dashed rgba(238,139,106,0.7)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 390,
              height: 390,
              borderRadius: 195,
              background: "#E1EEEC",
            }}
          >
            <div
              style={{
                display: "flex",
                width: 350,
                height: 350,
                borderRadius: 175,
                overflow: "hidden",
                border: "8px solid #FFFCF7",
              }}
            >
              <img src={photoSrc} alt="" width={334} height={417} style={{ objectFit: "cover", marginTop: -4 }} />
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: await ogFonts() }
  );
}
