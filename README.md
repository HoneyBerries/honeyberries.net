# honeyberries.net

[![Build](https://img.shields.io/github/actions/workflow/status/HoneyBerries/honeyberries.net/build.yml?style=flat-square&label=build)](https://github.com/HoneyBerries/honeyberries.net/actions/workflows/build.yml)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![License](https://img.shields.io/github/license/HoneyBerries/honeyberries.net?style=flat-square)](LICENSE)

Source for my personal site, [honeyberries.net](https://honeyberries.net) — a small portfolio with an about page, project list, and a way to get in touch.

## Stack

- **Next.js** (App Router) + React + TypeScript
- **Tailwind CSS v4** for styling, shadcn-style primitives in `components/ui`
- **Vercel** for hosting

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Dev server with Turbopack |
| `npm run build` | Standard Next.js build |
| `npm run lint` | ESLint |
| `npm run start` | Serve the production build |

## Structure

- `app/` — routes (`/`, `/about`, `/contact`, `/projects`), each composing section components
- `components/site/` — the page sections (navbar, hero, about, projects, contact, footer)
- `components/ui/` — shadcn-generated primitives
- `lib/data/` — content as data (projects, skills) instead of hardcoded JSX

Pushing to `main` builds and deploys automatically via GitHub Actions.

## License

GPL-3.0 — see [LICENSE](LICENSE).
