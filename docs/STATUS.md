# Project status (handoff)

Read this first when picking the work up from another machine or a cloud (teleported) session, then read [CLAUDE_MEMORY.md](CLAUDE_MEMORY.md) for working rules and owner decisions.
Last updated: 2026-10-20.

## Where things are
- **Live:** https://shivharakhyadav.vercel.app. Vercel production deploys from `main`. `siteUrl` in `src/configs/metaTags.ts` is the single source of the domain.
- **Branches:**
  - **`main`:** merge commit `366952d`, PR #2 (redesign, new pages, SEO, responsive work), merged 2026-10-19. This is live.
  - **`develop`:** created from `main` on 2026-10-19, the integration branch.
  - **`fix/seo-audit`:** holds the SEO-audit fixes and the photo icons. Its Vercel preview built successfully. A PR into `develop` is ready to open from https://github.com/ShivharakhYadav/shivharakhyadav/compare/develop...fix/seo-audit; the owner opens it, since this machine has no `gh` or token.
  - **`feat/new2`:** merged; kept for history.
- **To publish:** `fix/seo-audit` → `develop` → `main`. Only `main` deploys to production.
- **Verify:** `npx tsc --noEmit` and `npm run build`. A long-running `next dev` shares `.next`; if it's running, build a copy elsewhere instead of deleting `.next`.
- **Vercel:** previews failed for every commit authored as the office email or as Claude, and succeed for the personal identity. Commit as `Shivharakh Yadav <yadavshivharakhyadav@gmail.com>` (see CLAUDE_MEMORY.md).

## Done
- Sand & Tide redesign.
- Pages: `/about`, `/experience`, `/contact` (Formspree form).
- SEO:
  - title template, generated share images (site-wide, per post, per case study)
  - one shared schema.org Person/WebSite (`src/configs/schema.ts`) referenced by every page
  - BreadcrumbList on posts and case studies
  - sitemap with real post dates, RSS at `/blog/rss.xml`
  - manifest, custom 404, footer links
- Semantic HTML: correct heading outline, articles, lists.
- **Portfolio polish (2026-10-19):**
  - project cards show a "Built with" stack cover until real screenshots exist; the case-study page shows no frame without one
  - each case study names the role and company it was built in
  - contact copy, FAQ and form options follow `profile.showAvailability`
  - scroll-reveal never hides content when JS is off
- **Navigation (2026-10-19):**
  - "Contact" is not in the navbar; it's reached through "Let's talk", which turns teal on /contact
  - Home is in the footer and the mobile menu
  - the SY logo has a hover ring and a "Home" tooltip
  - the owner rejected a full name next to SY and "← Home" links above page titles
- **Responsive pass (2026-10-19):**
  - no sideways scrolling from 320px to 1920px on any page
  - fluid heading sizes (`.fs-display`, `.fs-page`, `.fs-section` in `globals.css`)
  - hero and /about go two-column from tablet
  - tablet layouts for highlights, /projects (2-column grid), row cards and footer
  - email addresses wrap only at "@" (`ui/EmailText.tsx`)
  - bigger tap targets
- **Mobile polish (2026-10-19):**
  - hero buttons side by side on phones (short labels below sm)
  - stats in three equal columns
  - job cards on /experience stack the logo above the text on phones
  - tested with Chrome mobile emulation (iPhone SE, iPhone 14, Pixel 7, iPad mini)
- **Home Experience timeline:**
  - company logos (`public/logos/`) are the nodes; the current role gets a teal ring and a teal line
  - LinkedIn order: role → company · city → dates with a "Now" tag
  - "Pvt. Ltd." is dropped on home only
  - `CompanyLogo` is shared in `ui/JobCard.tsx`; /experience keeps company-first cards with full legal names
- **Tailwind opacity modifiers** (`bg-teal/50` etc.) now work: `tailwind.config.ts` wraps the CSS-variable colors in `color-mix()`.
- **SEO audit (2026-10-19, live site), fixes on `fix/seo-audit`:**
  - page-specific `twitter:title/description`
  - ProfilePage `dateModified` from `profile.updated`; update it by hand when the profile changes
  - hero `<style>` moved out of the h1
  - one consistent **photo** favicon set (`favicon.ico`, `icon.png` 192, `apple-icon.png` 180); the SY monogram generator was removed
  - `dynamicParams = false` on `[slug]` routes
  - no canonical on 404s
  - code-comment contrast; SY link label
  - portrait `sizes`
  - template SVGs removed
  - after the fixes: 15/15 sitemap URLs return 200, Lighthouse mobile SEO 100 and accessibility 100
- **Content:**
  - iProgrammer Senior Software Engineer since Oct 2026 (Pune); location is Pune everywhere
  - availability pill hidden via `profile.showAvailability = false` (kept, not deleted)

## Waiting on the owner
1. **Open and merge the PRs:** `fix/seo-audit` → `develop`, then `develop` → `main`.
2. **Google Search Console:**
   - add the property and use HTML-tag verification
   - add the code as `verification: { google: "…" }` in `siteMetadata`
   - submit `/sitemap.xml` and request indexing for `/`, `/about`, `/experience` and `/projects`
   - then do the same in Bing Webmaster Tools
3. **Backlinks:** put the site URL in:
   - the GitHub profile website field and README
   - LinkedIn (contact info and Featured)
   - the Medium bio and article footer
4. **Rewritten RBAC post:** `content/blog/multi-tenant-rbac-nestjs.md` says NestJS/PostgreSQL with a shared schema; the résumé says Express/MongoDB with schema-per-tenant. The owner will send a corrected version.
5. **Updated résumé PDF:** it replaces `public/Shivharakh_Yadav_FS.pdf`.
6. **Formspree ID:** goes in `NEXT_PUBLIC_FORMSPREE_ID`, in `.env.local` and in Vercel. Until then the page shows the email fallback.
7. **Project screenshots:** go in `public/projects/`; then set `image` in `src/data/projects.ts`.
8. **Sharper logos:** iProgrammer and iFour are 32×32 icons; 128px+ versions would be crisper.
9. **Details of the iProgrammer role** and an optional client quote (`profile.testimonial`).

## Ideas not started
- A price-parser-rs case study (hackathon win; GitHub repo and Medium article are public).
- A custom domain: change `siteUrl` and add the domain in Vercel.
- More long-tail posts based on real work, e.g. schema-per-tenant MongoDB, or the Mapbox delivery-fee engine.

## Rules
- Never invent facts; unknown values stay as `[placeholders]`.
- Never publish HR or company documents (a relieving letter was once put in `public/`).
- Commit and push only when the owner asks, on the branch they name. Commits are authored only by the owner's personal identity, with no co-author lines.
