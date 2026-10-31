import { cacheLife } from "next/cache"

import { minecraftFallback } from "@/lib/data/minecraft-fallback"
import { MODRINTH_USERNAME, SITE_URL } from "@/lib/data/site"

// The subset of Modrinth's project fields the Minecraft page uses.
export interface ModrinthProject {
  slug: string
  title: string
  description: string | null
  icon_url: string | null
  downloads: number
  loaders: string[]
  categories: string[]
  status: string
  project_type: string
}

export const MOD_LOADERS = ["fabric", "forge", "neoforge", "quilt"]
export const SERVER_LOADERS = [
  "paper",
  "folia",
  "purpur",
  "spigot",
  "bukkit",
  "datapack",
]
const SHOWN_STATUSES = ["approved", "archived"]

// Keeps only well-formed, public mod-type projects; bad items are dropped
// individually so one broken entry never empties the page.
export function normalizeProjects(raw: unknown): ModrinthProject[] {
  if (!Array.isArray(raw)) return []
  const result: ModrinthProject[] = []
  for (const item of raw) {
    if (!item || typeof item !== "object") continue
    const p = item as Record<string, unknown>
    if (typeof p.title !== "string" || !p.title) continue
    if (typeof p.slug !== "string" || !p.slug) continue
    if (p.project_type !== "mod") continue
    if (typeof p.status !== "string" || !SHOWN_STATUSES.includes(p.status))
      continue
    const strings = (v: unknown) =>
      Array.isArray(v) ? v.filter((x): x is string => typeof x === "string") : []
    result.push({
      slug: p.slug,
      title: p.title,
      description: typeof p.description === "string" ? p.description : "",
      icon_url: typeof p.icon_url === "string" && p.icon_url ? p.icon_url : null,
      downloads: typeof p.downloads === "number" ? p.downloads : 0,
      loaders: strings(p.loaders),
      categories: strings(p.categories),
      status: p.status,
      project_type: p.project_type,
    })
  }
  return result
}

export async function getMinecraftProjects(): Promise<ModrinthProject[]> {
  "use cache"
  cacheLife("minutes")

  try {
    const res = await fetch(
      `https://api.modrinth.com/v2/user/${encodeURIComponent(MODRINTH_USERNAME)}/projects`,
      {
        headers: {
          "User-Agent": `${MODRINTH_USERNAME}/honeyberries.net (${SITE_URL})`,
        },
        signal: AbortSignal.timeout(8000),
      }
    )
    if (!res.ok) throw new Error(`Modrinth responded ${res.status}`)
    const projects = normalizeProjects(await res.json())
    if (projects.length === 0) throw new Error("Modrinth returned no projects")
    return projects
  } catch {
    return normalizeProjects(minecraftFallback)
  }
}

export interface MinecraftGroups {
  mods: ModrinthProject[]
  plugins: ModrinthProject[]
}

// A project with both mod and server loaders lands in both groups; one with
// neither goes under Mods. Each group is sorted by downloads, descending.
export function groupProjects(projects: ModrinthProject[]): MinecraftGroups {
  const mods: ModrinthProject[] = []
  const plugins: ModrinthProject[] = []
  for (const p of projects) {
    const isMod = p.loaders.some((l) => MOD_LOADERS.includes(l))
    const isServer = p.loaders.some((l) => SERVER_LOADERS.includes(l))
    if (isMod || !isServer) mods.push(p)
    if (isServer) plugins.push(p)
  }
  const byDownloads = (a: ModrinthProject, b: ModrinthProject) =>
    b.downloads - a.downloads
  return { mods: mods.sort(byDownloads), plugins: plugins.sort(byDownloads) }
}

export function formatCompact(n: number): string {
  if (n < 1000) return String(n)
  const fmt = (v: number, suffix: string) =>
    `${v >= 100 ? Math.round(v) : Math.round(v * 10) / 10}${suffix}`
  return n < 1_000_000 ? fmt(n / 1000, "k") : fmt(n / 1_000_000, "M")
}

const LOADER_LABELS: Record<string, string> = {
  neoforge: "NeoForge",
  datapack: "Datapack",
}
export function loaderLabel(loader: string): string {
  return LOADER_LABELS[loader] ?? loader.charAt(0).toUpperCase() + loader.slice(1)
}

export function categoryLabel(category: string): string {
  return category
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
}
