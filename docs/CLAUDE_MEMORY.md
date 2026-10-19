# Claude memory (copy)

A copy of Claude Code's local memory for this project (kept on one machine under `~/.claude/projects/…/memory/`), saved here so it travels with the repo. Current status and open items live in [STATUS.md](STATUS.md).
Last synced: 2026-10-16.

---

## Project status and decisions

Portfolio work happens on branch `feat/new2` (PR #2 → `main`). Production on Vercel deploys from `main`, which as of 2026-10-16 was still at PR #1, so none of the redesign or SEO work is live until PR #2 merges.

The full status and pending list is checked into the repo at `docs/STATUS.md`, so a session on another machine or in the cloud sees it too. Keep that file updated rather than duplicating it here.

**User decisions (2026-10-16):**
- Lives in Pune now, and the site says Pune.
- Joined iProgrammer as Senior Software Engineer on 1 Oct 2026. Left ViitorCloud on 17 Jul 2026 and was job-hunting until Oct; the Jul end date is fine.
- Availability pill hidden via `profile.showAvailability = false`; keep the text, don't delete it.
- Role titles have no "(Full Stack)" suffix for now.
- Will send a rewritten RBAC blog post and an updated résumé PDF later.

**Why:** the user switches machines and Claude surfaces (local and cloud) and wants to resume without re-explaining.
**How to apply:** read `docs/STATUS.md` first. Follow the content rules below.

---

## Working rules

- **Never invent facts** such as clients, numbers or dates. Unknown values stay as `[bracketed]` placeholders.
- **Commit and push only when asked**, and only to `feat/new2`. Don't create PRs unasked.
- **Never publish HR or company documents.** The user once put a signed relieving letter in `public/`. Read every file before it goes public.
- **Verify visually.** Run `npm run build`, then `next start -p 3456`, then take headless Chrome screenshots. Stop the server by its port PID, never with `pkill -f`. The user often has `next dev` running, which shares `.next`: never delete `.next` then. Build a copy in the scratchpad instead (rsync without node_modules/.next, symlink node_modules).

**Why:** the site is a hiring tool, and false claims or leaked documents would hurt the user.
**How to apply:** for any content or data edit in the portfolio repo. See the status section above.
