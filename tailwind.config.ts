import type { Config } from "tailwindcss";

const themeColor = (name: string) =>
  `color-mix(in srgb, var(--${name}) calc(<alpha-value> * 100%), transparent)`;

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Theme colors are CSS variables (globals.css). color-mix lets Tailwind's
      // opacity modifiers (bg-teal/50, border-coral/40, …) work with them.
      colors: {
        bg: themeColor("bg"),
        card: themeColor("card"),
        line: themeColor("line"),
        ink: themeColor("ink"),
        muted: themeColor("muted"),
        teal: {
          DEFAULT: themeColor("teal"),
          hover: themeColor("teal-hover"),
        },
        coral: {
          DEFAULT: themeColor("coral"),
          ink: themeColor("coral-ink"),
        },
        seaglass: themeColor("seaglass"),
        mint: themeColor("mint"),
        linen: {
          DEFAULT: themeColor("linen"),
          hover: themeColor("linen-hover"),
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
