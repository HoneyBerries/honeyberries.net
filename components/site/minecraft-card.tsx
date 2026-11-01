import { Package } from "lucide-react"

import { type Accent, GlowCard } from "@/components/site/glow-card"
import { Badge } from "@/components/ui/badge"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  MOD_LOADERS,
  categoryLabel,
  formatCompact,
  loaderLabel,
  type ModrinthProject,
} from "@/lib/modrinth"
import { cn } from "@/lib/utils"

export function MinecraftCard({
  project,
  accent,
}: {
  project: ModrinthProject
  accent: Accent
}) {
  const archived = project.status === "archived"
  const href = `https://modrinth.com/project/${encodeURIComponent(project.slug)}`

  return (
    <GlowCard accent={accent} href={href}>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-muted",
              archived && "opacity-50"
            )}
          >
            {project.icon_url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.icon_url}
                alt=""
                width={44}
                height={44}
                loading="lazy"
                className="size-full object-cover"
              />
            ) : (
              <Package className="size-5 text-muted-foreground" aria-hidden />
            )}
          </div>
          <div className="min-w-0">
            <CardTitle className="truncate">{project.title}</CardTitle>
            <div className="mt-1 flex flex-wrap gap-1">
              {project.loaders.map((l) => (
                <Badge
                  key={l}
                  variant={
                    MOD_LOADERS.includes(l) || l === "datapack"
                      ? "default"
                      : "accent"
                  }
                >
                  {loaderLabel(l)}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex h-full flex-col gap-4">
        <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="flex min-h-5 flex-wrap gap-1.5">
          {archived && <Badge variant="secondary">Archived</Badge>}
          {project.categories.slice(0, 2).map((c) => (
            <Badge key={c} variant="secondary">
              {categoryLabel(c)}
            </Badge>
          ))}
        </div>
        <div className="flex items-end justify-between gap-3 text-xs text-muted-foreground">
          <div className="flex flex-col gap-0.5">
            <span>{formatCompact(project.downloads)} downloads</span>
            {project.version_label && <span>MC {project.version_label}</span>}
          </div>
          <span className="whitespace-nowrap">
            Modrinth <span aria-hidden>↗</span>
            <span className="sr-only">(opens in a new tab)</span>
          </span>
        </div>
      </CardContent>
    </GlowCard>
  )
}
