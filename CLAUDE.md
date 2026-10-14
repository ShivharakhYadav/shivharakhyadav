# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio + blog for Shivharakh Yadav, built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. The design is deliberately **clean and minimal**: one narrow left-aligned column, neutral palette, type-led hierarchy, hairline dividers instead of cards, no gradients/glows/icons.

## Commands

```bash
npm run dev     # start dev server (http://localhost:3000)
npm run build   # production build (also the de-facto typecheck)
npm run start   # serve the production build
```

There is no test setup and no ESLint config (`next lint` would prompt); use `npx tsc --noEmit` / `npm run build` to verify.

## Architecture

- **Routes** (`src/app/`): `/` (single-page home), `/projects`, `/projects/[slug]` (case studies), `/blog`, `/blog/[slug]`, plus `sitemap.ts` / `robots.ts`. All statically generated.
- **Content lives in data files, not JSX:** `src/data/profile.ts` (bio, socials, stats), `src/data/projects.ts` (case studies), `src/data/skills.ts`. Blog posts are Markdown with front-matter in `content/blog/`, read by `src/lib/blog.ts`.
- **Components:** `src/components/sections/` are the homepage sections (Navbar, Hero, About, Skills, Projects, LatestPosts, Contact, Footer). `src/components/ui/` holds small primitives (`Container`, `SectionHeading`, `ProjectRow`, `PostRow`, `TextLinks`, `Arrow`). `Reveal` is a subtle IntersectionObserver fade-in.
- Site metadata and the canonical `siteUrl` live in `src/configs/metaTags.ts`.
- **Path alias:** `@/*` → `src/*`.

## Styling conventions

- Colors are CSS variables in `src/app/globals.css` (`--bg`, `--text`, `--muted`, `--border`, `--accent`, …) exposed as Tailwind colors (`bg-bg`, `text-muted`, `border-border`). Dark mode follows `prefers-color-scheme` by redefining those variables — don't add `dark:` variants, extend the variables instead.
- Shared component classes: `.link` (underlined text link — the CTA style) and `.row` (hairline-divided list row).
- `.container` is capped at 672px (see `tailwind.config.ts`) to keep a single reading column.
- Blog prose uses `@tailwindcss/typography` with `--tw-prose-*` mapped to the theme variables; code highlighting colors are also variable-driven.
