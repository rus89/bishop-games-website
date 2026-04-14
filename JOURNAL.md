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
