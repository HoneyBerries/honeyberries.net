import { commands } from "@/lib/data/modcord"

export function CommandsTable() {
  return (
    <dl className="divide-y rounded-xl ring-1 ring-foreground/10">
      {commands.map(({ command, summary }) => (
        <div
          key={command}
          className="grid gap-1 px-4 py-3 sm:grid-cols-[10rem_1fr] sm:gap-4"
        >
          <dt className="font-mono text-sm text-primary">{command}</dt>
          <dd className="text-sm text-muted-foreground">{summary}</dd>
        </div>
      ))}
    </dl>
  )
}
