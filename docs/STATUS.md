# Project status (handoff)

Read this first when picking the work up from another machine or a cloud session.
Last updated: 2026-10-16.

## Where things are
- Work branch: `feat/new2`, PR #2 → `main`. **Vercel production deploys from `main`, which is still at PR #1**, so the redesign, new pages and SEO work aren't live until PR #2 is merged.
- Live URL: https://shivharakhyadav.vercel.app. `siteUrl` in `src/configs/metaTags.ts` is the single source.
- Verify with `npx tsc --noEmit` and `npm run build`. A long-running `next dev` shares `.next`; if it's running, build a copy elsewhere instead of deleting `.next`.

## Done
- Sand & Tide redesign.
- Pages: `/about`, `/experience`, `/contact` (Formspree form).
- SEO:
  - title template, generated share images (site-wide, per post, per case study)
  - one shared schema.org Person/WebSite (`src/configs/schema.ts`) referenced by every page
  - BreadcrumbList on posts and case studies
  - sitemap with real post dates, RSS at `/blog/rss.xml`
  - icons and manifest, custom 404, footer links
- Semantic HTML: correct heading outline, articles, lists. Lighthouse: SEO 100, accessibility 100, performance 97–99.
- Content: iProgrammer Senior Software Engineer since Oct 2026 (Pune). Location is now Pune everywhere. Availability pill hidden via `profile.showAvailability = false` (kept, not deleted).

## Waiting on the owner
1. **Merge PR #2** so the work goes live.
2. **Google Search Console:** add the property, use HTML-tag verification, then add the code as `verification: { google: "…" }` in `siteMetadata`. Submit `/sitemap.xml` and request indexing for `/`, `/about`, `/experience` and `/projects`. Then do the same in Bing Webmaster Tools.
3. **Backlinks:** put the site URL in the GitHub profile website field and README, in LinkedIn (contact info and Featured), and in the Medium bio and article footer.
4. **Rewritten RBAC post:** `content/blog/multi-tenant-rbac-nestjs.md` says NestJS/PostgreSQL with a shared schema; the résumé says Express/MongoDB with schema-per-tenant. The owner will send a corrected version.
5. **Updated résumé PDF:** it replaces `public/Shivharakh_Yadav_FS.pdf`.
6. **Formspree ID:** goes in `NEXT_PUBLIC_FORMSPREE_ID`, in `.env.local` and in Vercel. Until then the page shows the email fallback.
7. **Project screenshots:** go in `public/projects/`; then set `image` in `src/data/projects.ts`.
8. **Details of the iProgrammer role** and an optional client quote (`profile.testimonial`).

## Ideas not started
- A price-parser-rs case study (hackathon win; GitHub repo and Medium article are public).
- A custom domain: change `siteUrl` and add the domain in Vercel.
- More long-tail posts based on real work, e.g. schema-per-tenant MongoDB, or the Mapbox delivery-fee engine.

## Rules
- Never invent facts; unknown values stay as `[placeholders]`.
- Never publish HR or company documents (a relieving letter was once put in `public/`).
- Commit and push only when the owner asks, and only to `feat/new2`.
