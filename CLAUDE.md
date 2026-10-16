# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio + blog for Shivharakh Yadav, built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. The design ("Sand & Tide") is **warm, light-only and calm**: sand background, ink text, one teal accent, coral used only for decoration (dots, underlines, rings), rounded cards, a floating pill navbar, Outfit for headings and DM Sans for body text. Motion is kept to two places (the rotating hero words and the "Working with" logo carousel), and both respect `prefers-reduced-motion`.

**Current status, open items and owner decisions are in `docs/STATUS.md`, and working preferences are in `docs/CLAUDE_MEMORY.md`. Read both first and keep them updated.**

## Commands

```bash
npm run dev     # start dev server (http://localhost:3000)
npm run build   # production build (also the de-facto typecheck)
npm run start   # serve the production build
```

There is no test setup and no ESLint config (`next lint` would prompt); use `npx tsc --noEmit` / `npm run build` to verify. A running `next dev` shares `.next` with `next build`, so don't build while it's running (or build a copy elsewhere).

## Architecture

- **Routes** (`src/app/`):
  - `/`: single-page overview
  - `/projects` and `/projects/[slug]` (case studies)
  - `/about`, `/experience`, `/contact`
  - `/blog` and `/blog/[slug]`
  - `sitemap.ts`, `robots.ts`, and `opengraph-image.tsx` / `twitter-image.tsx` (the generated 1200×630 share image)

  All are statically generated. The navbar links to the pages, not to home-page anchors.
- **SEO:**
  - Each page sets its own `title` (the root layout adds " — Shivharakh Yadav" via a title template), a `description` of 160 characters or fewer, and `alternates.canonical`.
  - A page that sets its own `openGraph` must include `images: ogImages` (from `src/configs/metaTags.ts`); otherwise the share image is lost. Posts and case studies are the exception: they have their own `opengraph-image.tsx`, built with `ogCard()` in `src/lib/ogCard.tsx`, which uses the bundled Outfit font from `src/assets/fonts`.
  - **JSON-LD:** the full Person and WebSite entities are defined once in `src/configs/schema.ts`. Pages reuse `person`, `author`, `websiteId` and `breadcrumbs()` from there, rendered by `src/components/JsonLd.tsx`, instead of writing their own Person objects.
  - Also present: an RSS feed at `/blog/rss.xml`, a manifest, generated icons (`icon.tsx` / `apple-icon.tsx`) and a `not-found.tsx` (noindex).
- **Contact form** (`src/components/ContactForm.tsx`) posts to Formspree using `NEXT_PUBLIC_FORMSPREE_ID` (see `.env.example`; set it in `.env.local` and in Vercel). Without it, the page shows an "Email me directly" fallback.
- **Content lives in data files, not JSX:**
  - `src/data/profile.ts`: bio, socials, hero words, stats, `resumeUrl`, `testimonial` and `showAvailability` (the availability pill in the hero and on /contact). Résumé links and the testimonial card stay hidden while those are empty or `null`.
  - `src/data/projects.ts`: case studies. Each has an `eyebrow`, one-line `tagline`, lead `headline` result, optional screenshot `image` (a framed placeholder shows without one) and `metrics` (key facts that shouldn't repeat the headline). `featuredProjects` sets the three shown on the home page, strongest first.
  - `src/data/experience.ts`: the jobs timeline. Optional fields are `logo` (initials are shown otherwise), `location`, `highlights` and `projects` (project slugs). It also holds `careerHighlights`.
  - `src/data/skills.ts`: grouped skills for /about and schema.org `knowsAbout`.
  - `src/data/techLogos.ts`: Simple Icons SVG paths (CC0) for the logo carousel.
  - Blog posts are Markdown with front-matter in `content/blog/`, read by `src/lib/blog.ts`. Articles published elsewhere (e.g. Medium) go in `src/data/externalPosts.ts`. `getPostFeed()` merges both for the listings, and those cards link out. External articles have no `/blog/[slug]` page and aren't in the sitemap.
  - Awards: role awards go in that job's `awards` in `experience.ts`; hackathons and other non-job awards go in `otherAwards` there.
- **Components:**
  - `src/components/home/` holds the homepage sections in page order: Hero (with the circular portrait from `public/profile.png`), TechMarquee, Highlights, Experience, Work, Writing.
  - `src/components/sections/` holds the shared chrome: Navbar (client component with scroll-spy and a mobile menu), Contact (the closing band on every page) and Footer. Navbar and Footer are rendered once in `src/app/layout.tsx`.
  - `src/components/ui/` holds primitives: `Container` (1200px max width), `PageHeader`, `ProjectCard` / `ProjectRowCard`, `PostCard`, `Screenshot`, `Headline`.
  - `Reveal` is a subtle IntersectionObserver fade-in.
- Site metadata and the canonical `siteUrl` live in `src/configs/metaTags.ts`.
- **Path alias:** `@/*` → `src/*`.
- **Content rule:** never invent facts (clients, numbers, dates, rates). Use what's in the data files or the GitHub profile README. Unknown values stay as visible `[bracketed]` placeholders; `isPlaceholder()` in `experience.ts` keeps them out of structured data.

## Styling conventions

- Colors are CSS variables in `src/app/globals.css` (`--bg`, `--card`, `--line`, `--ink`, `--muted`, `--teal`, `--coral`, `--coral-ink`, `--seaglass`, `--linen`), exposed as Tailwind colors (`bg-bg`, `text-ink`, `bg-seaglass`, `text-coral-ink`, …). The site is light-only, so there is no dark mode and no `dark:` variants. Use the tokens instead of hex values.
- Coral (`#EE8B6A`) fails text contrast on sand. Use it only for decoration; text that needs the coral look uses `coral-ink`.
- Shared component classes in `globals.css`: `.card`, `.lift` (hover lift for clickable cards), `.coral-underline`, `.eyebrow`, `.btn-primary`, `.btn-secondary`, `.text-link`, `.chip`.
- Fonts: `font-display` (Outfit) for headings and numbers, and the default `font-sans` (DM Sans) for body text, both loaded in `layout.tsx`.
- Inline `<style>` tags must use `dangerouslySetInnerHTML`. Otherwise React escapes characters like `>` during server rendering, which breaks the CSS and causes a hydration error.
- Blog prose uses `@tailwindcss/typography` with `--tw-prose-*` mapped to the theme variables; code highlighting colors live in `globals.css` too.
