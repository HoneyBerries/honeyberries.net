# Minecraft mods and plugins page: design

Status: draft for review. Nothing in this spec has been implemented.

## 1. Intent

**Who it is for:** Minecraft players and server admins who found the site and want to see what the owner has built, and whether the projects are maintained.

**Job of the page:** one clean, scannable place listing every Minecraft mod, plugin and datapack the owner publishes on Modrinth (user `HoneyBerries`), each linking to its Modrinth page.

**Why now:** `/projects` has two vague cards ("Minecraft Mods", "Minecraft Plugins") that just link out to Modrinth user pages. The old v1 site had a page like this, but it was messy: heavy animation and bugs. This version must be calm and reuse the existing site look.

### Goals
- A single route, `/projects/minecraft`, with a **Mods** section and a **Plugins** section of cards.
- Data comes live from Modrinth's public API, so new projects, download counts and archived status update without code changes.
- Uses the site's existing theme, `Card` and `Badge` components, container width and light/dark modes.

### Non-goals
- No custom animations beyond the hover glow the Projects cards already have.
- No search, filters, tabs, sorting controls or pagination.
- No changelogs, galleries, long descriptions or per-project detail pages.
- No client-side fetching; no client components unless unavoidable.

### Anti-goals (a failure even if it technically works)
- A page that looks different from the rest of the site (e.g. all-black cards, which the owner rejected in review).
- A page that breaks, or shows nothing, when Modrinth is slow or down.
- Cards that are visually uneven or crowded at the real card width (about 300px).

## 2. Decisions already made by the owner

- **One page**, not two. Both existing cards on `/projects` ("Minecraft Mods", "Minecraft Plugins") link to it, deep-linking to `#mods` and `#plugins`.
- **Layout A** ("classic card grid"): icon and name, loader badges, description, category badges, then a footer with downloads on the left and a "Modrinth ↗" link on the right. Three columns on desktop, matching the `/projects` grid, in the standard `Section` container (`max-w-5xl`, about 976px).
- **Everything shown is fetched live** from Modrinth (titles, descriptions, icons, downloads, loaders, categories, archived status).
- **Caching:** `cacheLife('minutes')` (stale 5 min, revalidate 1 min, expire 1 hour). Chosen for simplicity.
- **Cache Components is enabled site-wide** (`cacheComponents: true`, committed in 5c5bd18). Caching uses the `'use cache'` directive. `export const dynamic` and similar segment config are not allowed.
- **Colors and badges (approved in mockup):**
  - Violet (default `Badge`): the type/loader on mods, i.e. "Fabric", "Datapack".
  - Cyan (`accent`): server platforms on plugins, i.e. "Paper", "Folia", "Purpur".
  - Pink (`secondary`): Modrinth categories (e.g. "Utility"), and the "Archived" status.
  - Card hover glow: reuse the existing accent mechanism from `components/site/projects-section.tsx`.
- Archived projects stay visible, with a dimmed icon and an "Archived" badge.

## 3. Behavior

### Data source
`GET https://api.modrinth.com/v2/user/HoneyBerries/projects` returns every project with: `title`, `slug`, `description`, `icon_url`, `downloads`, `followers`, `loaders`, `game_versions`, `categories`, `status`, `project_type`, `updated`. Send a descriptive `User-Agent` (Modrinth asks clients to). The username comes from a constant, not hardcoded in the component.

### Grouping and ordering
- **Mods:** projects whose loaders include `fabric` (or `forge`, `neoforge`, `quilt`) or whose only loader is `datapack`.
- **Plugins:** projects whose loaders include `paper`, `folia`, `purpur`, `spigot` or `bukkit`.
- A project matching both goes under Mods (mod loaders win), and its card shows all of its loader badges. A project matching neither also goes under Mods. (My calls; none of the current 8 projects hits either case.)
- **What is included** (my call): the API labels plugins and datapacks as `project_type: "mod"` too, so keep only `project_type === "mod"` and only `status` of `approved` or `archived`. Drafts, unlisted, rejected, withheld and private projects are never shown, so no card can link to a dead Modrinth page. Modpacks, resource packs and shaders, if you ever publish them, are excluded.
- **Empty section** (my call): a section with no projects is not rendered at all, and its `#mods` or `#plugins` anchor goes with it.
- Within each section, sort by downloads, descending.
- Current expected result: Mods 3 (FPS Display+, AutoClutch, Carpet 2 Wool), Plugins 5 (TP Spawn, Player Ping, XP Bottling, Inventory Restore [archived], Exploding Players).

### Card contents
Icon (44px, rounded), title, loader badges, one-line description, up to two category badges, downloads (compact, e.g. `16.5k`), and a "Modrinth ↗" link. The whole card is a link to the project's Modrinth page, opening in a new tab with `rel="noopener noreferrer"`, like existing external cards. Minecraft game versions are **not shown** on cards (my call, see section 6).

### Page structure
Heading in the style of the Projects page (`SectionHeading` with a badge and gradient title, plus a short intro line that links to the Modrinth profile), then the Mods section, then the Plugins section. Each section has a small uppercase label with a count (e.g. "Mods · 3") and an `id` (`mods`, `plugins`) for deep links.

### Caching and failure
- One data function, marked `'use cache'` with `cacheLife('minutes')`, does the single Modrinth request. The page renders from its result.
- If the fetch fails, returns a non-OK status, or returns an empty or non-array body, the page must **not** error. It falls back to a small committed snapshot of the projects (`lib/data/minecraft-fallback.ts`), refreshed by hand occasionally.
- **Fallback lives inside the cached function** (my call): the function catches its own failure and returns the snapshot. Because the lifetime is `minutes` (revalidate 1 minute), the snapshot is only served for about a minute before the next visitor's background refresh retries Modrinth, so this is harmless and simpler than throwing out of a cache. A build that happens during a Modrinth outage bakes the snapshot into the prerender, and the first revalidation after deploy corrects it.
- **Per-item validation** (my call): skip any project missing `title` or `slug`; treat a null `description` as empty; a missing `icon_url` shows a neutral placeholder (a `lucide-react` `Package` icon in the same 44px rounded box). Bad items are dropped, not the whole response.

## 4. Files

| Path | Change |
|---|---|
| `app/projects/minecraft/page.tsx` | New route. `pageMetadata({ path: "/projects/minecraft", title: "Minecraft", description })`. |
| `components/site/minecraft-section.tsx` | The page body: heading, two sections, card grid. |
| `components/site/minecraft-card.tsx` | One card, built from `Card` and `Badge`. |
| `lib/modrinth.ts` | `getMinecraftProjects()` (cached fetch plus fallback) and pure helpers for grouping, sorting and compact number formatting. |
| `lib/data/minecraft-fallback.ts` | Typed snapshot used when Modrinth is unreachable. |
| `lib/data/site.ts` | Add `MODRINTH_USERNAME`. |
| `lib/data/projects.ts` | Point "Minecraft Mods" at `/projects/minecraft#mods` and "Minecraft Plugins" at `/projects/minecraft#plugins`, as internal links (same tab). |
| `components/site/projects-section.tsx` | Existing logic already treats `/`-prefixed hrefs as internal links; verify it works with hashes. |
| `app/sitemap.ts` | Add `/projects/minecraft`. |
| `CLAUDE.md` | Note the new route and the Modrinth data pattern. |

## 5. Constraints
- **Next.js:** non-standard version; read `node_modules/next/dist/docs/` (especially `08-caching.md` and `cacheLife.md`) before writing routing or caching code.
- **Cache Components rules:** no segment config such as `dynamic` or `revalidate` exports; short-lived caches (`expire` under 5 minutes) become dynamic holes. `minutes` has `expire` of 1 hour, so the page stays prerendered.
- **Cloudflare via OpenNext:** the Next version is pinned to 16.3.x. Verify with `npm run preview` (build output alone has not caught request-time failures before).
- **Images:** icons are hosted on `cdn.modrinth.com`. There is no CSP in `public/_headers`. Whether to use `next/image` (needs `images.remotePatterns`, and image optimization behaves differently on Workers) or a plain `<img>` is left to the builder; a plain `<img>` with explicit width/height is acceptable.
- **No tests exist** in this repo. Verification is `npm run lint`, `npm run build`, `npm run preview` and a visual check in light and dark mode at phone, tablet and desktop widths.
- Follow existing conventions: `cn()`, the `@/` aliases, `lib/data/` for content, no new dependencies.

## 6. Calls I made (owner, please check)
- Game versions are left off the cards to keep the narrow footer clean. They are in the API data, so adding a short range later is easy. The owner did not answer whether they want them.
- Page and file names: `/projects/minecraft`, not `/projects/mods`.
- Grouping rule: a project with both mod and plugin loaders goes under Mods; a project matching neither goes under Mods.
- Only `approved` and `archived` mod-type projects are shown; drafts and unlisted ones are hidden.
- Fallback snapshot as a failure net, returned from inside the cached function (shown for about a minute during an outage).
- Per-item validation: bad projects are dropped, missing icons get a placeholder, empty sections are hidden.
- Two category badges maximum per card, to stop cards growing uneven.

## 7. Left to the builder
Exact Tailwind classes, the compact number formatter, the hover-accent rotation (reuse the three accents in order), accessibility details (focus ring, link names, `aria-label` for the external-link arrow), skeleton or no skeleton (none expected, since the page is prerendered), and the exact `images` approach.
