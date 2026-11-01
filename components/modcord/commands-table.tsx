import { accentAt, GlowCard } from "@/components/site/glow-card"
import { commands } from "@/lib/data/modcord"
import { cn } from "@/lib/utils"

export function CommandsTable() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {commands.map(({ command, summary }, i) => {
        const accent = accentAt(i)
        return (
          <li key={command}>
            <GlowCard accent={accent} className="gap-2 px-5">
              <code
                className={cn(
                  "w-fit rounded-md px-2 py-0.5 font-mono text-sm font-semibold",
                  accent.tint
                )}
              >
                {command}
              </code>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {summary}
              </p>
            </GlowCard>
          </li>
        )
      })}
    </ul>
  )
}
