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
        "on-teal": themeColor("on-teal"),
        "logo-tile": themeColor("logo-tile"),
        "logo-ink": themeColor("logo-ink"),
        cta: {
          DEFAULT: themeColor("cta-bg"),
          ink: themeColor("cta-ink"),
          line: themeColor("cta-line"),
        },
        coral: {
          DEFAULT: themeColor("coral"),
          ink: themeColor("coral-ink"),
        },
        seaglass: themeColor("seaglass"),
        linen: {
          DEFAULT: themeColor("linen"),
          hover: themeColor("linen-hover"),
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      // tinted with ink on light, black and stronger on dark (--shadow, --shadow-strength)
      boxShadow: {
        lift: "0 20px 40px -12px rgb(var(--shadow) / calc(0.15 * var(--shadow-strength)))",
        soft: "0 10px 30px -18px rgb(var(--shadow) / calc(0.35 * var(--shadow-strength)))",
        portrait: "0 24px 48px -16px rgb(var(--shadow) / calc(0.35 * var(--shadow-strength)))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
