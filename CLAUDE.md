# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio + blog for Shivharakh Yadav, built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. The design ("Sand & Tide") is **warm, light-only and calm**: sand background, ink text, one teal accent, coral used only for decoration (dots, underlines, rings), rounded cards, a floating pill navbar, Outfit for headings and DM Sans for body text. Motion is kept to two places (the rotating hero words and the "Working with" logo carousel), and both respect `prefers-reduced-motion`.

## Commands

```bash
npm run dev     # start dev server (http://localhost:3000)
npm run build   # production build (also the de-facto typecheck)
npm run start   # serve the production build
```

There is no test setup and no ESLint config (`next lint` would prompt); use `npx tsc --noEmit` / `npm run build` to verify.

## Architecture

- **Routes** (`src/app/`): `/` (single-page home), `/projects`, `/projects/[slug]` (case studies), `/blog`, `/blog/[slug]`, plus `sitemap.ts` / `robots.ts`. All statically generated.
- **Content lives in data files, not JSX:**
  - `src/data/profile.ts`: bio, socials, hero words, stats, `resumeUrl` and `testimonial`. Résumé links and the testimonial card stay hidden while those are empty or `null`.
  - `src/data/projects.ts`: case studies. Each has an `eyebrow`, one-line `tagline`, lead `headline` result, optional screenshot `image` (a framed placeholder shows without one) and `metrics` (key facts that shouldn't repeat the headline). `featuredProjects` sets the three shown on the home page, strongest first.
  - `src/data/experience.ts`: the jobs timeline (optional `logo`; initials are shown otherwise).
  - `src/data/techLogos.ts`: Simple Icons SVG paths (CC0) for the logo carousel.
  - Blog posts are Markdown with front-matter in `content/blog/`, read by `src/lib/blog.ts`.
- **Components:**
  - `src/components/home/` holds the homepage sections in page order: Hero (with the circular portrait from `public/profile.png`), TechMarquee, Highlights, Work, Experience, Writing.
  - `src/components/sections/` holds the shared chrome: Navbar (client component with scroll-spy and a mobile menu), Contact (the closing band on every page) and Footer. Navbar and Footer are rendered once in `src/app/layout.tsx`.
  - `src/components/ui/` holds primitives: `Container` (1200px max width), `PageHeader`, `ProjectCard` / `ProjectRowCard`, `PostCard`, `Screenshot`, `Headline`.
  - `Reveal` is a subtle IntersectionObserver fade-in.
- Site metadata and the canonical `siteUrl` live in `src/configs/metaTags.ts`.
- **Path alias:** `@/*` → `src/*`.

## Styling conventions

- Colors are CSS variables in `src/app/globals.css` (`--bg`, `--card`, `--line`, `--ink`, `--muted`, `--teal`, `--coral`, `--coral-ink`, `--seaglass`, `--linen`), exposed as Tailwind colors (`bg-bg`, `text-ink`, `bg-seaglass`, `text-coral-ink`, …). The site is light-only, so there is no dark mode and no `dark:` variants. Use the tokens instead of hex values.
- Coral (`#EE8B6A`) fails text contrast on sand. Use it only for decoration; text that needs the coral look uses `coral-ink`.
- Shared component classes in `globals.css`: `.card`, `.lift` (hover lift for clickable cards), `.coral-underline`, `.eyebrow`, `.btn-primary`, `.btn-secondary`, `.text-link`, `.chip`.
- Fonts: `font-display` (Outfit) for headings and numbers, and the default `font-sans` (DM Sans) for body text, both loaded in `layout.tsx`.
- Inline `<style>` tags must use `dangerouslySetInnerHTML`. Otherwise React escapes characters like `>` during server rendering, which breaks the CSS and causes a hydration error.
- Blog prose uses `@tailwindcss/typography` with `--tw-prose-*` mapped to the theme variables; code highlighting colors live in `globals.css` too.
