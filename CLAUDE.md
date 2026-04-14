# Project: Bishop Games Website

Gatsby 5 + React 18 portfolio/business site for a game dev studio.
Deployed as static assets to Cloudflare Workers from `./public/`.

## Tech Stack

- **Framework**: Gatsby 5, file-based routing
- **UI**: MUI 5 + Emotion (structural/theme-aware); styled-components also in use
- **Font**: Ubuntu via `@fontsource`; theme config in `src/theme/`
- **Animations**: AOS (scroll), react-slick (carousels)
- **Prod renderer**: Preact (`gatsby-plugin-preact`) — avoid React internals not shimmed by Preact
- **Package manager**: yarn 4.1.0 (berry) — use `yarn`, not `npm`
- **Node**: >=18.0.0 required

## Commands

```bash
yarn develop       # Dev server → http://localhost:8000
yarn build         # Production build → ./public/
yarn clean         # Clear .cache/ and public/
yarn clear-all     # Nuclear: removes node_modules, .cache, public/
yarn codeStyle:fix # prettier + eslint fix on src/
wrangler deploy    # Deploy ./public/ to Cloudflare Workers
```

## Source Architecture

```
src/
├── pages/      # Gatsby file routing (index.js, 404.js)
├── views/      # Page-level sections (IndexView with Hero, Services,
│               # Portfolio, Stats, Team, Reviews, Faq, Workflow)
├── layouts/    # Shell (Main: Topbar, Sidebar, Footer)
├── components/ # Shared primitives (Container, Page, ThemeModeToggler)
├── theme/      # MUI theme (palette.js, shadows.js, index.js)
└── images/     # Static assets processed by gatsby-sharp
plugins/        # Local Gatsby plugins (NOT in node_modules — see below)
static/         # Static assets served as-is (not processed by sharp)
public/         # Build output (gitignored), deployed to Cloudflare
```

## Key Gotchas

- **Import aliasing**: `gatsby-plugin-resolve-src` makes `src/` the import
  root — write `import X from 'components/...'`, not `../../components/...`
- **Lockfile**: `package-lock.json` exists in the repo but is a relic — always use `yarn`. Running `npm install` will break the yarn 4 setup.
- **Local plugins**: `./plugins/gatsby-plugin-top-layout` wraps the app in
  `<Page>` and loads global CSS (slick, AOS). `./plugins/gatsby-plugin-mui-emotion`
  sets up the Emotion SSR cache for MUI. Both live in `./plugins/`, not
  `node_modules/`.
- **Dual styling**: Use MUI `sx` prop or `@emotion/styled` for theme-aware
  work; `styled-components` is also in the codebase — match whichever the
  surrounding component already uses.
- **Preact in prod**: Preact replaces React in the production bundle. Avoid
  libraries that rely on React internals not shimmed by Preact.
- **Service worker (offline plugin)**: `gatsby-plugin-offline` registers a service
  worker in production builds. If pages look stale after `yarn clean`, hard-refresh
  in the browser or open DevTools → Application → Service Workers → Unregister.

## Component Conventions

Each view section follows a two-file pattern:
```
src/views/IndexView/components/Hero/
  Hero.js      ← implementation
  index.js     ← re-exports: export { default } from './Hero'
```

- Plain **JavaScript** (no TypeScript) — use `PropTypes` for prop validation
- Access MUI theme tokens with `useTheme()` from `@mui/material/styles`
- Fetch site metadata via `useStaticQuery` + `graphql` (defined in `gatsby-config.js` → `siteMetadata`)
- Use MUI `sx` prop / `Box` for layout and spacing; `@emotion/styled` for reusable styled pieces

## Where to Look

| I want to… | Look at… |
|---|---|
| Add in-page anchor links | Use `<AnchorLink to="/#sectionId">` — section IDs are set via `id=` on each `<Box>` in `IndexView.js` |
| Edit section copy or content | `src/views/IndexView/components/<Section>/<Section>.js` |
| Add a new page section | `src/views/IndexView/components/` + wire into `IndexView.js` |
| Change nav items | `src/layouts/Main/components/Topbar/` and `Sidebar/` |
| Change theme colors/typography | `src/theme/palette.js` and `src/theme/index.js` |
| Change site title / description / email | `gatsby-config.js` → `siteMetadata` |
| Add a Gatsby plugin | `gatsby-config.js` + `package.json` |
| Add/replace images | `src/images/` (processed by sharp) or `static/` (served as-is) |

## Deployment

Config in `wrangler.jsonc`. Site is at https://bishop.games.
Run `wrangler deploy` to push `./public/` to Cloudflare Workers.

## Testing

- No automated test suite is currently configured.
- Before claiming work complete, verify changes at http://localhost:8000 and run `yarn build` to confirm the production build succeeds.
- When adding tests, use Playwright for E2E. See web testing rules for full guidance.
