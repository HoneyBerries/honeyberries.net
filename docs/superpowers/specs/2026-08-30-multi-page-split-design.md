# Multi-page split design

Date: 2026-08-30

## Context

honeyberries.net is currently a single-page Next.js App Router site
(`output: "export"`, static export, no server runtime). `app/page.tsx`
stacks `Navbar`, `HeroSection`, `AboutSection`, `ProjectsSection`,
`ContactSection`, `Footer`, and the navbar links to `#about`,
`#projects`, `#contact` anchors on that one page.

Goal: split About, Projects, and Contact into their own routed pages,
while keeping Hero as the `/` landing page.

## Routing & layout

- `Navbar` and `Footer` move out of `app/page.tsx` into `app/layout.tsx`,
  becoming shared chrome rendered around `{children}` for every route
  (inside `ThemeProvider`, same as today).
- `app/page.tsx` (route `/`) renders only `<HeroSection />`.
- Three new routes, each a server component rendering its existing
  section component and exporting page-specific `metadata`:
  - `app/about/page.tsx` → `<AboutSection />`, title `"About · HoneyBerries"`
  - `app/projects/page.tsx` → `<ProjectsSection />`, title `"Projects · HoneyBerries"`
  - `app/contact/page.tsx` → `<ContactSection />`, title `"Contact · HoneyBerries"`
- Root layout's `metadata` in `app/layout.tsx` gains
  `metadataBase: new URL("https://honeyberries.net")` so relative
  metadata (OG images, sitemap) resolves correctly. The existing
  site-wide title/description stay as the default for `/`.
- The section components (`AboutSection`, `ProjectsSection`,
  `ContactSection`) keep their current internals (styling, data,
  `id="..."` attributes are harmless leftovers, no need to strip them)
  — only where they're rendered from changes.

## Navbar

- `components/site/navbar.tsx` becomes a client component (`"use client"`)
  so it can call `usePathname()` from `next/navigation`.
- `NAV_LINKS` hrefs change from `#projects`/`#about`/`#contact` to
  `/projects`/`/about`/`/contact`.
- Links render via `next/link`'s `Link` component instead of a plain
  `<a>`, so client-side navigation works.
- Active-page highlight: the link matching the current `usePathname()`
  gets the `text-primary` styling that's currently only applied on
  hover (`hover:text-primary`), so it stays visually applied while on
  that page.
- The logo/site name link keeps pointing at `/`.
- The GitHub icon button and `ThemeToggle` in the navbar are unaffected.

## SEO: sitemap & robots

- `app/sitemap.ts`: exports a static `sitemap()` function (Next's
  `sitemap.ts` file convention) returning entries for `/`, `/about`,
  `/projects`, `/contact`, using `https://honeyberries.net` as the base
  URL. This convention is build-time/static (no dynamic APIs used), so
  it's compatible with `output: "export"`.
- `app/robots.ts`: exports a static `robots()` function allowing all
  crawling (`allow: "/"`) and pointing `sitemap` at
  `https://honeyberries.net/sitemap.xml`.

## Out of scope

- No changes to `AboutSection`/`ProjectsSection`/`ContactSection`
  internal markup, styling, or data.
- No individual project detail pages.
- No changes to the GitHub button styling work (done separately).
- No redirects from old `#anchor` URLs to the new routes — not
  requested, and low-value for a portfolio site with no existing
  inbound links to preserve.

## Testing

- `npm run lint`
- `npm run build` — confirms the static export still succeeds with the
  new routes and metadata files.
- `npm run dev` and manually click through `/`, `/about`, `/projects`,
  `/contact`, and the navbar links, confirming active-state
  highlighting, theme toggling, and no visual regression from the
  current single-page layout.
