"use client"

import { useRef, useState, type KeyboardEvent } from "react"

import { accentAt } from "@/components/site/glow-card"
import { ExampleFigure } from "@/components/modcord/chat"
import { examples } from "@/lib/data/modcord-examples"
import { cn } from "@/lib/utils"

export function Examples() {
  const [active, setActive] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  function move(to: number) {
    const next = (to + examples.length) % examples.length
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>, i: number) {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") move(i + 1)
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") move(i - 1)
    else if (e.key === "Home") move(0)
    else if (e.key === "End") move(examples.length - 1)
    else return
    e.preventDefault()
  }

  const example = examples[active]

  return (
    <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-start">
      <div
        role="tablist"
        aria-label="Moderation examples"
        aria-orientation="vertical"
        className="flex flex-col gap-2"
      >
        {examples.map((ex, i) => (
          <button
            key={ex.id}
            ref={(el) => {
              tabRefs.current[i] = el
            }}
            role="tab"
            id={`example-tab-${ex.id}`}
            aria-selected={i === active}
            aria-controls="example-panel"
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKeyDown(e, i)}
            className={cn(
              "flex cursor-pointer flex-col gap-1 rounded-lg px-3.5 py-3 text-left outline-none ring-1 transition-all focus-visible:ring-[3px]",
              "bg-card ring-foreground/10 focus-visible:ring-ring/50",
              i === active ? accentAt(i).active : accentAt(i).hover
            )}
          >
            <span className="text-sm font-semibold tracking-tight">
              {ex.title}
            </span>
            <span className="text-[13px] leading-relaxed text-muted-foreground">
              {ex.summary}
            </span>
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id="example-panel"
        aria-labelledby={`example-tab-${example.id}`}
      >
        <ExampleFigure example={example} label={`Example: ${example.title}`} />
      </div>
    </div>
  )
}
