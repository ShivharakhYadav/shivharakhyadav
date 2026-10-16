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
      { src: "/icon", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
