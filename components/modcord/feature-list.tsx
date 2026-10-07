import { features } from "@/lib/data/modcord"

export function FeatureList() {
  return (
    <ul className="divide-y border-y">
      {features.map(({ title, body }) => (
        <li
          key={title}
          className="grid gap-2 py-6 md:grid-cols-[1fr_1.4fr] md:gap-10"
        >
          <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
          <p className="max-w-prose leading-relaxed text-muted-foreground">
            {body}
          </p>
        </li>
      ))}
    </ul>
  )
}
