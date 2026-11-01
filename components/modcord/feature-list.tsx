import { accentAt, GlowCard } from "@/components/site/glow-card"
import { CardContent, CardHeader } from "@/components/ui/card"
import { features } from "@/lib/data/modcord"
import { cn } from "@/lib/utils"

export function FeatureList() {
  return (
    <ul className="grid gap-6 md:grid-cols-3">
      {features.map(({ title, body, icon: Icon }, i) => {
        const accent = accentAt(i)
        return (
          <li key={title}>
            <GlowCard accent={accent}>
              <CardHeader className="gap-4">
                <span
                  className={cn(
                    "flex size-10 items-center justify-center rounded-lg",
                    accent.tint
                  )}
                >
                  <Icon aria-hidden className="size-5" />
                </span>
                <h3 className="font-heading text-base leading-snug font-medium">
                  {title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </CardContent>
            </GlowCard>
          </li>
        )
      })}
    </ul>
  )
}
