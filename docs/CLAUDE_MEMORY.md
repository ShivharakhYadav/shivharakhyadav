# Claude memory (copy)

A copy of Claude Code's local memory for this project, kept on one machine under `~/.claude/projects/…/memory/`. It's saved here so it travels with the repo to other machines and to cloud (teleported) sessions. Current status and open items live in [STATUS.md](STATUS.md).
Last synced: 2026-10-20.

---

## Project status and decisions

Read `docs/STATUS.md` first. It has the branches (`main` is live, plus `develop` and `fix/seo-audit`), what's done and what's waiting on the owner.

**User decisions:**
- **Location:** lives in Pune now, and the site says Pune.
- **Jobs:**
  - joined iProgrammer as Senior Software Engineer on 1 Oct 2026
  - left ViitorCloud on 17 Jul 2026 and was job-hunting until Oct; the Jul end date is fine
  - role titles have no "(Full Stack)" suffix
- **Availability pill:** hidden via `profile.showAvailability = false`. Keep the text; don't delete it.
- **Coming later:** a rewritten RBAC blog post and an updated résumé PDF.
- **Navigation:**
  - the logo stays just "SY", with no full name beside it
  - no "← Home" links above page titles
  - Home is in the footer and the mobile menu
- **Home Experience:**
  - a logo timeline in LinkedIn order: role → company · city → dates
  - "Pvt. Ltd." is dropped on home only
  - the current role is marked by the teal ring and a "Now" tag, not a "Current" pill
- **Favicon:** the owner's **photo** (`favicon.ico`, `icon.png`, `apple-icon.png`), not the SY monogram.
- **Phones:** hero buttons side by side, stats in equal columns.

**Why:** the user switches machines and Claude surfaces (local and cloud) and wants to resume without re-explaining.
**How to apply:** read `docs/STATUS.md` first, and follow the rules below.

---

## Working rules

- **Never invent facts** such as clients, numbers or dates. Unknown values stay as `[bracketed]` placeholders.
- **Commit and push only when asked**, on the branch the owner names. Don't merge PRs. This machine has no `gh` CLI or token, so to open a PR, give the owner a prefilled `compare/<base>...<head>?expand=1&title=…&body=…` link.
- **Commit identity:**
  - Every commit is authored and committed as `Shivharakh Yadav <yadavshivharakhyadav@gmail.com>`; this is set in the repo's local git config.
  - The global git identity is the office account (`shivharakhy@iprogrammer.co`) and must not be used here.
  - **No `Co-Authored-By: Claude` trailer, no `Claude-Session:` line, and no "Generated with Claude Code" line** in commits or PR bodies. The owner wants to be the only contributor.
  - Vercel previews also failed for other authors.
- **Never publish HR or company documents.** The user once put a signed relieving letter in `public/`. Read every file before it goes public.
- **Ask before choosing** between options the owner should decide (e.g. which favicon). Don't pick silently.
- **Verify visually:**
  - Run `npm run build`, then `next start -p 3456`, then take headless Chrome screenshots. Stop the server by its port PID, never with `pkill -f`.
  - For mobile, use Chrome DevTools-protocol emulation (real viewport, DPR, touch, mobile UA).
  - The user often has `next dev` running, which shares `.next`, so never delete `.next` then. Build a copy in the scratchpad instead: rsync without `node_modules`/`.next`, and symlink `node_modules`.

**Why:** the site is a hiring tool, and false claims or leaked documents would hurt the user.
**How to apply:** for any content, data or git work in the portfolio repo.
