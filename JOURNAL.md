# Project Journal

## Project History (from git log)

### Origin
Built by stripping a commercial "theFront" Gatsby template down to a single-page portfolio site.
The presence of styled-components alongside MUI is a template remnant — match whatever the surrounding component already uses.

### Libraries deliberately removed — do not re-add
- `typed.js` — Hero text animation, removed for simplicity
- `jarallax` — parallax scroll library, removed
- `react-helmet` — removed (unused after Gatsby 5 head API)
- `gatsby-plugin-material-ui` — incompatible with Gatsby 5, removed
- `formik`, `yup`, `card-validator` — unused, removed

### Build was broken (fixed Feb 2026, PR #1)
`ajv` dependency conflict caused webpack to fail. Fix: added `ajv@8` and `ajv-keywords@5` as direct deps to override hoisting. Also removed `gatsby-plugin-material-ui` (Gatsby 3/4 only) and replaced `babel-eslint` with `@babel/eslint-parser`.

### OG image
`static/og.webp` was added as part of the build fix. Previously OG image used relative paths which broke social previews — it must use an absolute URL. This file lives in `static/` (not `src/images/`) so sharp does not process it; replace in place.

### Image handling decision
Images moved from `public/` to `src/images/` for gatsby-sharp processing. Use `StaticImage` for all local images. Hero and logo use `loading="eager"`, below-fold images (reviews avatars etc.) use `loading="lazy"`.

### Deployment
Cloudflare Workers via `wrangler.jsonc`, added Feb 2026. `wrangler deploy` pushes `./public/` to https://bishop.games.

---

## 2026-04-14

### CLAUDE.md improved (previous session)
Removed ~150 lines of duplicated global rules that had been appended to the project CLAUDE.md.
The project CLAUDE.md should only contain project-specific context — global rules live in `~/.claude/CLAUDE.md`.

### CLAUDE.md additions (this session)
Added two gotchas identified during quality audit:
- Service worker caching: `gatsby-plugin-offline` registers a SW in prod builds. Stale pages after `yarn clean` → DevTools → Application → Service Workers → Unregister.
- Anchor links: `gatsby-plugin-anchor-links` is configured; use `<AnchorLink to="/#sectionId">`, section IDs are set on `<Box id=...>` in `IndexView.js`.

### Hook misconfiguration fixed
`.claude/hooks/session_start.sh` contained a Flutter command (`flutter analyze --fatal-lints ...`) copied from a different project. This was the source of recurring "Could not find an option named --fatal-lints" non-blocking hook errors. Replaced with an empty script.
Note: `.claude/` is gitignored in this project — hook changes are local only.

### Yarn 4 / corepack situation (2026-04-14)
The shell Claude Code runs in has Homebrew Node v25.8.2 + global yarn 1.22.22.
Corepack is not in PATH on this machine (Homebrew's Node doesn't include it).
Yarn 1.x refuses to run because of the `"packageManager": "yarn@4.1.0"` field in `package.json`.
Workaround: download `@yarnpkg/cli-dist@4.1.0` from npm, extract it to `/tmp/yarn-4/`,
and invoke via `node /tmp/yarn-4/package/bin/yarn.js <command>`.
This is fragile — Milan should investigate enabling corepack or adding the yarn 4
binary to `.yarn/releases/` so it's self-contained.

---

## 2026-04-16

### Phase 1 refactoring — code review findings and fixes

Code review (3 specialist agents) found two merge blockers:
1. `imgProps` → `slotProps` in `Reviews.js` — was missed in Task 2, now fixed.
2. `src/data/portfolio.js` and `src/data/categories.js` — created in Task 7 but never
   wired into `Portfolio.js` (which still uses inline mock grids). YAGNI violation.
   Decision: deleted both files. Deferred to Phase 2.

### Portfolio data model (deleted, deferred to Phase 2)

The deleted files defined this shape — recreate when wiring into Portfolio.js:
- `projects` array: `{ id, title, description, category, image, featured }`
- `categories` array: `{ id, label }` — ids: 'all', 'full-game', 'art-animation', 'live-ops'
- `filterProjects(projectList, categoryId)` helper
- `getFeaturedProjects(projectList)` helper
- Images go in `src/images/portfolio/1.webp` … `12.webp`

### Other review notes (non-blocking, for Phase 2 awareness)
- `navigationLinks` in `src/data/navigation.js` includes a `Contact` entry that creates
  duplicate contact links (the CTA button in each consumer already handles it).
  Remove the Contact entry from navigationLinks when refactoring nav in Phase 2.
- The `SectionHeader` has a hardcoded `marginBottom={8}` — fine for now but may need
  a prop override if any section needs tighter spacing.

### Phase 2 audit — comprehensive project review

Full three-angle audit (infra, components, security/perf) found 30 actionable issues.
Plan saved at `.claude/plans/shimmering-imagining-kahn.md`.

**Key decisions made by Milan:**
- Schema logo: copy `src/images/logo/logo.webp` to `static/logo.webp`
- OG image: convert WebP → JPG for social platform compatibility
- Brand color: darken `primary.main` (#f16a22) everywhere to pass WCAG AA 4.5:1
- Dependencies: approved removal of styled-components, react-visibility-sensor;
  downgrade preact-render-to-string to v5; clean up eslint/ajv/cross-env

**Critical findings:**
- `gatsby-ssr.js:9` references non-existent `static/logo.webp` (404 in prod)
- No security headers (CSP, HSTS, etc.) configured for Cloudflare
- `preact-render-to-string` v6 vs plugin peer dep v5 mismatch
- FAQ marginBottom bug: `item.length` on a plain object is always undefined

**Notable discovery:** The `imgProps` → `slotProps` fix from commit c3832b0 was
deliberately reverted in commit 2c90c84 ("avoids deprecation noise on older MUI
versions"). Not a regression — conscious choice. Left as-is.

**Deferred items (YAGNI):**
- gatsby-plugin-offline stale cache risk (no reports yet)
- Dark mode palette (no UI toggle exists)
- Portfolio/Team/Review images bypassing gatsby-image pipeline (big refactor)
- gatsby-plugin-mui-emotion SSR renderToString + Preact alias (works currently)
- Double-nested Containers in IndexView (functional, minor padding diff)
