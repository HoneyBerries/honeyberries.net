# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — start the dev server (Turbopack, per `next dev`)
- `npm run build` — standard Next.js server build (see Architecture)
- `npm run start` — serve the production build
- `npm run lint` — ESLint (flat config via `eslint-config-next`)

There is no test suite configured in this repo.

## Architecture

This is a personal portfolio/showcase site (honeyberries.net) built with Next.js App Router, deployed on Vercel.

- **Deployment**: hosted on Vercel (deploys from git, no workflow or adapter config in the repo). `next.config.ts` uses the default (server) output.
- **Branches**: only `main` (auto-deploys to production). There is no `dev` branch; work on feature branches and PRs.
- **Dependency updates**: a monthly Claude Code routine (`honeyberries website dependency updates`, `trig_0157hittYtfT383Ws6EiikRS`, managed at claude.ai/code/routines) opens a `deps/YYYY-MM-DD` PR to `main`, modeled on the Modcord one. Updating it via `RemoteTrigger` replaces `job_config.ccr` wholesale, so resend prompt, `session_context.sources` and `environment_id` together.
- **Routed pages**: `app/page.tsx`, `app/about/page.tsx`, `app/contact/page.tsx`, and `app/projects/page.tsx` are separate routes, each composing section components from `components/site/` (`Navbar`, `HeroSection`, `AboutSection`, `ProjectsSection`, `ContactSection`, `Footer`).
- **Minecraft page**: `/projects/minecraft` (`components/site/minecraft-section.tsx`, `minecraft-card.tsx`) lists Modrinth projects fetched live by `getMinecraftProjects()` in `lib/modrinth.ts` (`'use cache'` + `cacheLife('minutes')`). There is no fallback snapshot: if Modrinth fails the fetch throws (a failed background revalidation keeps serving the last cached copy). Each card also shows a Modrinth-style supported-versions label (`formatGameVersions`, using Modrinth's release list from `/v2/tag/game_version` to collapse consecutive versions into ranges). Loaders decide the section (mod loaders → Mods; paper/folia/purpur/spigot/bukkit/datapack → Plugins & datapacks; both → both). Spec: `docs/superpowers/specs/2026-10-31-minecraft-page-design.md`.
- **Modcord page**: `/projects/modcord` (plus `/privacy` and `/terms`) lives in `app/projects/modcord/` with its pieces in `components/modcord/` and content in `lib/data/modcord.ts` / `modcord-examples.ts`. Each example's `capturedNote` says whether it is a real capture, "Recreated", or "Illustrative"; keep the section intro in `page.tsx` consistent with them. Spec: `docs/superpowers/specs/2026-10-05-modcord-page-design.md` (visual direction since superseded, see its status note).
- **Shared cards and sections**: `GlowCard` (`components/site/glow-card.tsx`) is the one card used by Projects, Minecraft and Modcord; it glows on hover only when it has an `href`. `accentAt(i)` rotates the violet/pink/teal accents. `Section` takes `band` for a full-width tinted background, and `SectionHeader` is the centered badge/heading/description opener.
- **Stable invite redirects**: `/discord` (server invite, `DISCORD_INVITE_URL`) and `/modcord/invite` (bot authorize link, `MODCORD_INVITE_URL`) are temporary (307) `redirects()` in `next.config.ts`, with the URLs defined in `lib/data/site.ts`. Site links (`SOCIAL_LINKS.discord`, the Modcord "Add to Discord" button) point at those paths, never at the Discord URLs directly, so changing an invite only means editing `site.ts`.
- **Content as data**: Section content (e.g. project listings) lives in `lib/data/` (`projects.ts`, `skills.ts`) as typed arrays, imported by the corresponding section component rather than hardcoded inline. Add/edit portfolio content there.
- **UI components**: `components/ui/` holds shadcn-style primitives (`button.tsx`, `card.tsx`, `badge.tsx`) generated via the `shadcn` CLI, configured through `components.json` (style: `base-nova`, base color `neutral`, icon library `lucide`, CSS variables enabled, no class prefix). Use the `@/components/ui`, `@/lib`, `@/components`, `@/hooks` aliases as configured there — `@/*` maps to the repo root (see `tsconfig.json`).
- **Icons**: custom brand icons (Discord, GitHub, Modrinth) live in `components/icons/`, separate from the `lucide-react` icons used elsewhere.
- **Theming**: dark/light mode via `next-themes`, wired up in `components/theme-provider.tsx` and toggled by `components/theme-toggle.tsx`. `app/layout.tsx` sets `attribute="class"` with `defaultTheme="system"` and `suppressHydrationWarning` on `<html>`.
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/postcss`), global styles in `app/globals.css`. Use the `cn()` helper (`lib/utils.ts`, clsx + tailwind-merge) for conditional/merged class names.

## Important: Cache Components is enabled

`next.config.ts` sets `cacheComponents: true`, so the whole site uses the Cache Components model (docs: `node_modules/next/dist/docs/01-app/01-getting-started/08-caching.md`). Routes are prerendered by default; cache data or UI with the `'use cache'` directive plus `cacheLife(...)` rather than `fetch` `revalidate` options. Route segment config like `export const dynamic = "force-static"` is **not allowed** and fails the build — remove it (this is why `app/robots.ts` and `app/sitemap.ts` don't have it).

## Important: Next.js version

Nothing in `package.json` is pinned to an exact version; everything uses caret ranges and `package-lock.json` fixes what is installed. Next must stay at 16.4.6+ (security fixes: RCE in Image Optimization and in `use cache` typed arrays, `use cache` info leaks fixed after 16.4.4; `next build` refuses to run on known-vulnerable versions). Re-verify the build after any bump, and keep `next` + `eslint-config-next` and `react` + `react-dom` on matching versions.

## Important: non-standard Next.js version

Per `AGENTS.md`, this project runs a Next.js version with breaking API/convention changes relative to what you may know from training. Before writing Next.js-specific code (routing, config, fonts, metadata, etc.), check the docs bundled at `node_modules/next/dist/docs/` and follow any deprecation notices there.
