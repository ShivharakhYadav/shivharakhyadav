# Project status (handoff)

Read this first when picking the work up from another machine or a cloud session.
Last updated: 2026-10-19.

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
- Portfolio polish (2026-10-19): project cards show a "Built with" stack cover until real screenshots exist (the case-study page shows no frame without one); each case study names the role and company it was built in; contact copy, FAQ and form options follow `profile.showAvailability`; scroll-reveal never hides content when JS is off. Navigation: "Contact" left the navbar (reached via "Let's talk", which highlights on /contact); Home is in the footer and the mobile menu; the SY logo has a hover ring and a "Home" tooltip.
- Responsive pass (2026-10-19): no sideways scrolling from 320px to 1920px on any page; fluid heading sizes (`.fs-display`, `.fs-page`, `.fs-section` in `globals.css`); hero and /about go two-column from tablet; tablet layouts for highlights, /projects (2-column grid), row cards and footer; email addresses wrap only at "@" (`ui/EmailText.tsx`); bigger tap targets on footer and contact links. Lighthouse mobile: accessibility and SEO 100, CLS 0.
- Mobile polish (2026-10-19): hero buttons side by side on phones (short labels below sm), stats in three equal columns, job cards stack the logo above the text on phones. Tested in Chrome mobile emulation (iPhone SE, iPhone 14, Pixel 7, iPad mini).
- Home Experience is a timeline: company logos (`public/logos/`) as nodes, teal ring and line for the current role, LinkedIn order (role → company · city → dates), "Pvt. Ltd." dropped on home only. Shared `CompanyLogo` in `ui/JobCard.tsx`.
- Fixed: Tailwind opacity modifiers (`bg-teal/50` etc.) were never generated because theme colors are CSS variables; `tailwind.config.ts` now wraps them in `color-mix()`.
- Logos for iProgrammer and iFour are 32×32 icons; sharper (128px+) versions would help.
- SEO audit fixes (2026-10-19): page-specific `twitter:title/description` on every page; ProfilePage `dateModified` from `profile.updated` (update it by hand when the profile changes); hero `<style>` moved out of the h1; one consistent photo favicon (`favicon.ico`, `icon.png`, `apple-icon.png`; the SY monogram generator was removed); `dynamicParams = false` on `[slug]` routes so unknown slugs get the static 404; no canonical on 404s; code-comment contrast and SY link label fixed; portrait `sizes`; template SVGs removed. Live site (merged PR #2) audited: 15/15 sitemap URLs 200, self-canonical, valid JSON-LD, Lighthouse SEO 100.
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
