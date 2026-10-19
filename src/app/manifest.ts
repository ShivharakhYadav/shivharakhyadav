import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} — ${profile.role}`,
    short_name: "Shivharakh",
    description: profile.intro,
    start_url: "/",
    display: "browser",
    background_color: "#FBF6EE",
    theme_color: "#FBF6EE",
    icons: [
      // src/app/icon.png and apple-icon.png (photo, same crop as favicon.ico)
      { src: "/icon.png", sizes: "192x192", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
