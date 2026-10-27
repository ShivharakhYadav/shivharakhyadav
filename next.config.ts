import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // generated share images and icons read these fonts at request time on Vercel
  outputFileTracingIncludes: {
    "/**/*": ["./src/assets/fonts/**"],
  },
  experimental: {
    agentFeedback: true,
    agentUpgrade: "latest",
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
