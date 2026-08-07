# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Single-page personal portfolio site for Shivharakh Yadav, built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. Currently a work-in-progress: the page scaffolds Home, About, What I Do, and Resume sections, with several sections still stubbed and much placeholder (Lorem Ipsum) content.

## Commands

```bash
npm run dev     # start dev server (http://localhost:3000)
npm run build   # production build
npm run start   # serve the production build
npm run lint    # next lint (ESLint via next/core-web-vitals)
```

There is no test setup in this project.

## Architecture

- **Next.js App Router** under `src/app/`. `layout.tsx` is the root layout (loads the Inter Google font and `globals.css`); `page.tsx` is the entire single-page site.
- `page.tsx` is a `"use client"` component — the whole page is client-rendered. It holds the nav, all content sections, and a local `Count` sub-component. Navigation is anchor-based (all `href: "#"` for now, not wired to section IDs).
- **Path alias:** `@/*` maps to `src/*` (see `tsconfig.json`). Import shared code as `@/utils/...`, `@/configs/...`.
- `src/utils/helper.ts` — `getCount(day, month, year, showMonth?)` computes age/years-of-experience from a birth/start date and is used inline in the JSX to render dynamic counters.
- `src/configs/metaTags.ts` exists but is currently empty; page metadata lives in `layout.tsx`'s exported `metadata`.

## Styling conventions

- Tailwind utility classes are the primary styling mechanism (`tailwind.config.ts` scans `src/pages`, `src/components`, `src/app`).
- Custom hex-based color/background helper classes and CSS variables are defined in `src/app/globals.css` (e.g. `.color-165ca8`, `.bg-0d1b2a`, `--bg-color-*`). The page background is set on `body` in `globals.css`, not via Tailwind. When adding a brand color, prefer extending this existing variable/utility pattern.
- The sticky nav toggles the `bg-0d1b2a` class on scroll via a `handleScroll` listener in `page.tsx`.

## Notes for editing

- `src/components/` and `src/pages/` are referenced by the Tailwind config but do not exist yet — create `src/components/` when extracting reusable UI.
- Static assets (profile images, SVGs) live in `public/` and are referenced by root-relative paths (e.g. `/profile1.jpg`).
- Much of `page.tsx` contains placeholder copy and a commented-out mobile menu `Dialog`; treat these as incomplete scaffolding rather than intended final content.
