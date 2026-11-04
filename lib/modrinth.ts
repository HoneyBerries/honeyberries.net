import { MODRINTH_USERNAME, SITE_URL } from "@/lib/data/site"

// The subset of Modrinth's project fields the Minecraft page uses.
export interface ModrinthProject {
  slug: string
  title: string
  description: string | null
  icon_url: string | null
  downloads: number
  loaders: string[]
  version_label: string
  categories: string[]
  status: string
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

const strings = (v: unknown) =>
  Array.isArray(v) ? v.filter((x): x is string => typeof x === "string") : []

// Keeps only well-formed, public mod-type projects; bad items are dropped
// individually so one broken entry never empties the page.
export function normalizeProjects(
  raw: unknown,
  releases: string[] | null = null
): ModrinthProject[] {
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
    const gameVersions = strings(p.game_versions)
    result.push({
      slug: p.slug,
      title: p.title,
      description: typeof p.description === "string" ? p.description : "",
      icon_url: typeof p.icon_url === "string" && p.icon_url ? p.icon_url : null,
      downloads: typeof p.downloads === "number" ? p.downloads : 0,
      loaders: strings(p.loaders),
      version_label: formatGameVersions(gameVersions, releases),
      categories: strings(p.categories),
      status: p.status,
    })
  }
  return result
}

export async function getMinecraftProjects(): Promise<ModrinthProject[]> {
  const headers = {
    "User-Agent": `${MODRINTH_USERNAME}/honeyberries.net (${SITE_URL})`,
  }
  const [res, releases] = await Promise.all([
    fetch(
      `https://api.modrinth.com/v2/user/${encodeURIComponent(MODRINTH_USERNAME)}/projects`,
      { headers, next: { revalidate: 300 } }
    ),
    getReleaseVersions(headers),
  ])
  if (!res.ok) throw new Error(`Modrinth responded ${res.status}`)
  const projects = normalizeProjects(await res.json(), releases)
  if (projects.length === 0) throw new Error("Modrinth returned no projects")
  return projects
}

// Modrinth's master list of Minecraft versions, reduced to releases and
// returned oldest-first. Only used to tell which versions are consecutive, so
// a failure just means we fall back to a simple min–max range.
async function getReleaseVersions(
  headers: Record<string, string>
): Promise<string[] | null> {
  try {
    const res = await fetch("https://api.modrinth.com/v2/tag/game_version", {
      headers,
      next: { revalidate: 86400 },
    })
    if (!res.ok) return null
    const tags: unknown = await res.json()
    if (!Array.isArray(tags)) return null
    const releases = tags
      .filter(
        (t): t is { version: string; version_type: string } =>
          !!t && typeof t.version === "string" && t.version_type === "release"
      )
      .map((t) => t.version)
      .reverse() // API lists newest first
    return releases.length > 0 ? releases : null
  } catch {
    return null
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

// Formats a project's supported versions the way Modrinth does: consecutive
// releases collapse into ranges ("1.19–1.21.8"), a run covering every patch of
// one series becomes "1.21.x", and separate runs are comma-joined. `releases`
// is Modrinth's full release list, oldest first, which defines "consecutive";
// without it the project's own versions are treated as one contiguous run.
export function formatGameVersions(
  versions: string[],
  releases: string[] | null
): string {
  const isRelease = (v: string) => /^\d+(\.\d+){1,2}$/.test(v)
  const numeric = (a: string, b: string) => {
    const pa = a.split(".").map(Number)
    const pb = b.split(".").map(Number)
    for (let i = 0; i < 3; i++) {
      const d = (pa[i] ?? 0) - (pb[i] ?? 0)
      if (d) return d
    }
    return 0
  }
  const order = releases ?? []
  const index = new Map(order.map((v, i) => [v, i]))
  const mine = versions.filter(isRelease).sort(numeric)
  if (mine.length === 0) return ""

  // Runs of versions that are adjacent in the master list.
  const runs: string[][] = []
  for (const v of mine) {
    const last = runs[runs.length - 1]
    const prev = last?.[last.length - 1]
    const adjacent =
      prev !== undefined &&
      (releases === null || index.get(v) === (index.get(prev) ?? -2) + 1)
    if (adjacent) last.push(v)
    else runs.push([v])
  }

  const series = (v: string) => v.split(".").slice(0, 2).join(".")
  return runs
    .map((run) => {
      const first = run[0]
      const last = run[run.length - 1]
      if (run.length === 1) return first
      // One whole series (every release sharing its "1.21" / "26.1" prefix).
      if (
        releases &&
        run.every((v) => series(v) === series(first)) &&
        releases.filter((v) => series(v) === series(first)).length === run.length
      ) {
        return `${series(first)}.x`
      }
      return `${first}–${last}`
    })
    .join(", ")
}

export function categoryLabel(category: string): string {
  return category
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
}
