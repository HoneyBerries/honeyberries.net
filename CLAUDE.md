# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — start the dev server (Turbopack, per `next dev`)
- `npm run build` — standard Next.js server build (see Architecture)
- `npm run start` — serve the production build
- `npm run lint` — ESLint (flat config via `eslint-config-next`)
- `npm run preview` — build with `@opennextjs/cloudflare` and preview it locally via `wrangler`
- `npm run deploy` — build with `@opennextjs/cloudflare` and deploy the Worker to Cloudflare

There is no test suite configured in this repo.

## Architecture

This is a personal portfolio/showcase site (honeyberries.net) built with Next.js App Router, deployed to Cloudflare Workers via OpenNext.

- **Cloudflare Workers deployment**: `next.config.ts` uses the default (server) output — no `output: "export"`. `@opennextjs/cloudflare` (config in `open-next.config.ts`, Worker config in `wrangler.jsonc`) converts the standard Next.js server build into a Cloudflare Worker, so the app runs with a real Next.js server runtime (API routes, server actions, on-demand rendering, ISR via an R2-backed incremental cache all work). `next.config.ts` previously set `output: "export"` from an earlier static-hosting setup; that's incompatible with OpenNext (which expects `.next/standalone`) and was removed.
- **Routed pages**: `app/page.tsx`, `app/about/page.tsx`, `app/contact/page.tsx`, and `app/projects/page.tsx` are separate routes, each composing section components from `components/site/` (`Navbar`, `HeroSection`, `AboutSection`, `ProjectsSection`, `ContactSection`, `Footer`).
- **Content as data**: Section content (e.g. project listings) lives in `lib/data/` (`projects.ts`, `skills.ts`) as typed arrays, imported by the corresponding section component rather than hardcoded inline. Add/edit portfolio content there.
- **UI components**: `components/ui/` holds shadcn-style primitives (`button.tsx`, `card.tsx`, `badge.tsx`) generated via the `shadcn` CLI, configured through `components.json` (style: `base-nova`, base color `neutral`, icon library `lucide`, CSS variables enabled, no class prefix). Use the `@/components/ui`, `@/lib`, `@/components`, `@/hooks` aliases as configured there — `@/*` maps to the repo root (see `tsconfig.json`).
- **Icons**: custom brand icons (Discord, GitHub, Modrinth) live in `components/icons/`, separate from the `lucide-react` icons used elsewhere.
- **Theming**: dark/light mode via `next-themes`, wired up in `components/theme-provider.tsx` and toggled by `components/theme-toggle.tsx`. `app/layout.tsx` sets `attribute="class"` with `defaultTheme="system"` and `suppressHydrationWarning` on `<html>`.
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/postcss`), global styles in `app/globals.css`. Use the `cn()` helper (`lib/utils.ts`, clsx + tailwind-merge) for conditional/merged class names.

## Important: non-standard Next.js version

Per `AGENTS.md`, this project runs a Next.js version with breaking API/convention changes relative to what you may know from training. Before writing Next.js-specific code (routing, config, fonts, metadata, etc.), check the docs bundled at `node_modules/next/dist/docs/` and follow any deprecation notices there.
