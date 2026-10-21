# Project status (handoff)

Read this first when picking the work up from another machine or a cloud (teleported) session, then read [CLAUDE_MEMORY.md](CLAUDE_MEMORY.md) for working rules and owner decisions.
Last updated: 2026-10-20.

## Where things are
- **Vercel production deploys from `main`.** Branches as of 2026-10-20:
  - **`main`:** PR #2 merge (`366952d`): redesign, new pages, SEO, responsive work. This is live.
  - **`develop`:** the integration branch. It holds PR #3 (SEO-audit fixes, photo icons) and PR #4 (new case studies and the client-pitch rework from `feat/case-studies`). **Not live** until `develop` is merged into `main`.
  - **`fix/seo-audit`:** merged into `develop` as PR #3; its later handoff-note commits came in through a follow-up PR.
  - New work goes on a new feature branch from `develop`, then a PR into `develop`.
- Live URL: https://shivharakhyadav.vercel.app. `siteUrl` in `src/configs/metaTags.ts` is the single source.
- Verify with `npx tsc --noEmit` and `npm run build`. On Windows, `npm run build` fails to prerender `/opengraph-image` and `/twitter-image` (`Invalid URL` inside `@vercel/og`); this is local-only and happens on `main` too, while every other page builds. A long-running `next dev` shares `.next`; if it's running, build a copy elsewhere instead of deleting `.next`.

## Done
- Sand & Tide redesign.
- Pages: `/about`, `/experience`, `/contact` (form sent through our own `/api/contact` route from the owner's Gmail).
- SEO:
  - title template, generated share images (site-wide, per post, per case study)
  - one shared schema.org Person/WebSite (`src/configs/schema.ts`) referenced by every page
  - BreadcrumbList on posts and case studies
  - sitemap with real post dates, RSS at `/blog/rss.xml`
  - icons and manifest, custom 404, footer links
- Semantic HTML: correct heading outline, articles, lists. Lighthouse: SEO 100, accessibility 100, performance 97–99.
- Portfolio polish (2026-10-19): project cards show a "Built with" stack cover until real screenshots exist (the case-study page shows no frame without one); contact copy, FAQ and form options follow `profile.showAvailability`; scroll-reveal never hides content when JS is off. Navigation: "Contact" left the navbar (reached via "Let's talk", which highlights on /contact); Home is in the footer and the mobile menu; the SY logo has a hover ring and a "Home" tooltip.
- Responsive pass (2026-10-19): no sideways scrolling from 320px to 1920px on any page; fluid heading sizes (`.fs-display`, `.fs-page`, `.fs-section` in `globals.css`); hero and /about go two-column from tablet; tablet layouts for highlights, /projects (2-column grid), row cards and footer; email addresses wrap only at "@" (`ui/EmailText.tsx`); bigger tap targets on footer and contact links. Lighthouse mobile: accessibility and SEO 100, CLS 0.
- Mobile polish (2026-10-19): hero buttons side by side on phones (short labels below sm), stats in three equal columns, job cards stack the logo above the text on phones. Tested in Chrome mobile emulation (iPhone SE, iPhone 14, Pixel 7, iPad mini).
- Home Experience is a timeline: company logos (`public/logos/`) as nodes, teal ring and line for the current role, LinkedIn order (role → company · city → dates), "Pvt. Ltd." dropped on home only. Shared `CompanyLogo` in `ui/JobCard.tsx`.
- Fixed: Tailwind opacity modifiers (`bg-teal/50` etc.) were never generated because theme colors are CSS variables; `tailwind.config.ts` now wraps them in `color-mix()`.
- SEO audit fixes (2026-10-19): page-specific `twitter:title/description` on every page; ProfilePage `dateModified` from `profile.updated` (update it by hand when the profile changes); hero `<style>` moved out of the h1; one consistent photo favicon (`favicon.ico`, `icon.png`, `apple-icon.png`; the SY monogram generator was removed); `dynamicParams = false` on `[slug]` routes so unknown slugs get the static 404; no canonical on 404s; code-comment contrast and SY link label fixed; portrait `sizes`; template SVGs removed. Live site (merged PR #2) audited: 15/15 sitemap URLs 200, self-canonical, valid JSON-LD, Lighthouse SEO 100.
- Content: iProgrammer Senior Software Engineer since Oct 2026 (Pune). For overseas clients the city stays out of intros and the footer; the contact band says "Pune, India" and the home timeline "Pune, IN". Availability pill hidden via `profile.showAvailability = false` (kept, not deleted).

- New case studies (2026-10-20), from the owner's notes, all built at iFour: Infosel Hub (real-time market data for Excel), Aumni for Excel, Diligent Equity Excel add-in, Calloquy (meeting management) and My Ticket Solutions (MTS, a multilingual support-ticket portal). These were built under NDA; the owner approved showing client names, but internal details (hostnames, code, weaknesses) stay off the site, and there are no screenshots. The raw notes live in `notes/projects/` (gitignored, never in `public/`). On Infosel and Diligent the owner worked as a frontend engineer and took part in team discussions (the owner asked for no client-communication claim there). iFour dates: Feb–Aug 2022 was a six-month training period, then Software Engineer from Aug 2022 (both the site's Feb 2022 and the résumé's Aug 2022 are correct). Office.js and Fluent UI were added to skills.

- Co4 Energy-Management Portal (now `/projects/co4-energy-management-portal`; the owner chose no redirect from the old address) scoped down (2026-10-20): the owner was a React frontend developer there for 3 months (bug fixes, features, daily client task calls, API questions with the backend developers). Another team built the portal and its Piral architecture, so don't claim ownership or architecture work. The 3-month duration is context only: never put it on the site. The Piral blog post was reworded to match.

- DMS Simulation Platform (2026-10-20): the owner corrected its stack to Next.js, TypeScript, Python, PostgreSQL, Redis and Docker; the résumé still says Node.js/Express/MongoDB, so the résumé PDF should be updated to match. The "Built as <role> at <company>" line has been removed from all case-study pages at the owner's request; projects are still listed under their role on /experience.

- Moto Venice (2026-10-20): the owner corrected its stack to Next.js, TypeScript, NestJS, PostgreSQL, Redis, Redux Toolkit, Auth0, Veriff, Twilio, Docker, Swagger, Mapbox, Chakra UI, React Query and Jest. Render, GitHub and GitHub Actions are in the same stack list (the owner prefers them there over separate labelled rows). The résumé still says Node.js/MongoDB for Moto Venice.

- Saluta (2026-10-20): the owner's stack is Next.js, TypeScript, NestJS, PostgreSQL, Socket.IO, Redis, Docker, AWS, Jenkins, Jest, Vercel and Jira; its key-facts card shows Backend: NestJS + PostgreSQL.

- Client pitch pass (2026-10-20): the owner presents the site to overseas clients. The home hero is client-focused ("Start a project" first, no resume button; stats count products and industries from the data). A "What I can help with" section (`src/data/services.ts`) links each service to case studies. Case studies come before the job timeline. The owner confirmed DMS served **5 organizations** (not 10), and the site, blog and README now agree.
- Testimonial: `profile.testimonial` holds a `[placeholder]` template that stays hidden until it holds a real quote. Never put an invented quote there.

- Dark theme "Soft Slate" (2026-10-21), concept 4a from the owner's Claude Design file: a mid-dark slate (#1B2124), off-white text (#D8DCDA, about 12:1) and muted teal and coral, made to be easy on the eyes in a dark room (no large bright surfaces, photos dimmed 10%, no shadows). It follows the system setting, with a sun/moon toggle in the navbar that is remembered; no flash on load. All text passes WCAG AA in both themes (checked on every page at 390px and 1280px); the light theme is unchanged. Branch `feat/dark-theme`.

## Waiting on the owner
1. **Publish `develop`:** open and merge a PR from `develop` into `main`, so the SEO-audit fixes, the new case studies and the client-pitch rework go live.
2. **Google Search Console:** add the property, use HTML-tag verification, then add the code as `verification: { google: "…" }` in `siteMetadata`. Submit `/sitemap.xml` and request indexing for `/`, `/about`, `/experience` and `/projects`. Then do the same in Bing Webmaster Tools.
3. **Backlinks:** put the site URL in the GitHub profile website field and README, in LinkedIn (contact info and Featured), and in the Medium bio and article footer.
4. **Rewritten RBAC post:** `content/blog/multi-tenant-rbac-nestjs.md` says NestJS/PostgreSQL with a shared schema; the résumé says Express/MongoDB with schema-per-tenant. The owner will send a corrected version.
5. **Updated résumé PDF:** it replaces `public/Shivharakh_Yadav_FS.pdf`.
6. **Gmail App Password (contact form):**
   - turn on 2-Step Verification, then create an App Password at https://myaccount.google.com/apppasswords
   - set `SMTP_USER` (the Gmail address) and `SMTP_PASS` in `.env.local` and in Vercel, then redeploy
   - until then /contact shows the email fallback
   - the form is on branch `feat/contact-form` and sends with Nodemailer; Resend and Formspree were dropped. Delete the old Resend API key, which was exposed in a chat log.
7. **Project screenshots:** none for NDA projects (the owner has decided), so those keep the "Built with" cover. Any screenshots that can be shared go in `public/projects/`; then set `image` in `src/data/projects.ts`.
8. **Details of the iProgrammer role** and a real client quote: replace the `[placeholders]` in `profile.testimonial`, with the client's permission.
9. **Sharper logos:** iProgrammer and iFour are 32×32 icons; 128px+ versions would be crisper.
10. **Show iProgrammer again (around Jan 2027):** the role is hidden on purpose for the first 3 months, and ViitorCloud shows as current. To undo: in `src/data/experience.ts` delete `hidden: true` from iProgrammer and set ViitorCloud's period back to `Oct 2025 - Jul 2026`; restore the `/experience` description kept in a comment in `src/app/experience/page.tsx`.

## Ideas not started
- A price-parser-rs case study (hackathon win; GitHub repo and Medium article are public).
- A custom domain: change `siteUrl` and add the domain in Vercel.
- More long-tail posts based on real work, e.g. schema-per-tenant MongoDB, or the Mapbox delivery-fee engine.

## Rules
- Never invent facts; unknown values stay as `[placeholders]`.
- Never publish HR or company documents (a relieving letter was once put in `public/`), or client notes under NDA (project notes were once put in `public/projects/`; they now live in gitignored `notes/`).
- Commit and push only when the owner asks, and to a new feature branch, never directly to `develop` or `main` (owner's request, 2026-10-20).
- Commits use `Shivharakh Yadav <yadavshivharakhyadav@gmail.com>` only, with no co-author or Claude lines (see CLAUDE_MEMORY.md).
