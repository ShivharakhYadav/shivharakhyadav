import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        card: "var(--card)",
        line: "var(--line)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        teal: {
          DEFAULT: "var(--teal)",
          hover: "var(--teal-hover)",
        },
        coral: {
          DEFAULT: "var(--coral)",
          ink: "var(--coral-ink)",
        },
        seaglass: "var(--seaglass)",
        linen: {
          DEFAULT: "var(--linen)",
          hover: "var(--linen-hover)",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        lift: "0 20px 40px -12px rgba(20, 48, 58, 0.15)",
        soft: "0 10px 30px -18px rgba(20, 48, 58, 0.35)",
        portrait: "0 24px 48px -16px rgba(20, 48, 58, 0.35)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
