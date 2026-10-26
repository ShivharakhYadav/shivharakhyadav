# Claude memory (copy)

A copy of Claude Code's local memory for this project, kept on one machine under `~/.claude/projects/…/memory/`. It's saved here so it travels with the repo to other machines and to cloud (teleported) sessions. Current status and open items live in [STATUS.md](STATUS.md).
Last synced: 2026-10-20.

---

## Project status and decisions

Read `docs/STATUS.md` first. It has the branches (`main` is live; `develop` collects work before it goes live), what's done and what's waiting on the owner. Keep that file updated rather than duplicating it here.

**User decisions:**
- Joined iProgrammer as Senior Software Engineer on 1 Oct 2026. Left ViitorCloud on 17 Jul 2026 and was job-hunting until Oct; the Jul end date is fine.
- Until about Jan 2027 the iProgrammer role stays hidden on the site (`hidden: true` in `experience.ts`, kept in the code) and ViitorCloud shows as "Oct 2025 - Present". The owner decides when to show it again.
- iFour: Feb–Aug 2022 was a six-month training period, then Software Engineer from Aug 2022; the site shows Feb 2022 with a note.
- Lives in Pune. The site is pitched to overseas clients, so the city stays out of intros and the footer; "Pune, India" in the contact band and "Pune, IN" in the home timeline are fine. Never write "Based in".
- Availability pill hidden via `profile.showAvailability = false`; keep the text, don't delete it.
- Role titles have no "(Full Stack)" suffix.
- Navbar (2026-10-21): desktop shows "SY" alone, gets a solid coral ring on the home page, and lists Work, About, Experience and Writing as pills (the active one filled), plus "Let's talk" with a mint dot; no Home link. Phones show "SY" plus the full name, and a menu button that opens numbered rows (Home first, each with a one-line description) and a full-width "Let's talk". No "← Home" links above page titles; Home is also in the footer.
- Home timeline: logos in LinkedIn order (role → company · city → dates), "Pvt. Ltd." dropped on home only, the current role marked by a teal ring and a "Now" tag.
- Client names (Infosel, Aumni, Diligent Equity, Calloquy, MTS, Co4) may be shown; internal details from NDA work never go on the site.
- Will send a rewritten RBAC blog post and an updated resume PDF later.

**Why:** the user switches machines and Claude surfaces (local and cloud) and wants to resume without re-explaining.
**How to apply:** read `docs/STATUS.md` first, and follow the rules below.

---

## Working rules

- **Never invent facts** such as clients, numbers, dates or quotes. Unknown values stay as `[bracketed]` placeholders.
- **Commit and push only when asked**, on a new feature branch, never directly on `develop` or `main` (since 2026-10-20). Don't create PRs unasked.
- **Commit identity:** every commit is authored and committed as `Shivharakh Yadav <yadavshivharakhyadav@gmail.com>`. The office account (`shivharakhy@iprogrammer.co`) must never be used here; Vercel previews fail for other authors.
- **No co-author or Claude lines in commits or PRs:** no `Co-Authored-By:`, no `Claude-Session:`, no "Generated with Claude Code". The owner wants to be the only contributor.
- **Never publish HR or company documents, or client notes under NDA** (keep those in gitignored `notes/`). The user once put a signed relieving letter in `public/`. Read every file before it goes public.
- **Verify visually.** Run `npm run build`, then `next start -p 3456`, then take headless Chrome screenshots; for mobile, use Chrome DevTools-protocol emulation (real viewport, DPR, touch, mobile UA). Stop the server by its port PID, never with `pkill -f`. The user often has `next dev` running: never delete `.next` then. Since Next 16 dev writes to `.next/dev`, so building alongside it is fine.

**Why:** the site is a hiring and client-pitch tool, and false claims or leaked documents would hurt the user.
**How to apply:** for any content, data or git work in the portfolio repo.
