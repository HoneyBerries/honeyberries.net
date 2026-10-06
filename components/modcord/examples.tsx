"use client"

import { useRef, useState, type KeyboardEvent } from "react"

import { ChatPanel, ChatTimeline } from "@/components/modcord/chat"
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
    if (e.key === "ArrowRight") move(i + 1)
    else if (e.key === "ArrowLeft") move(i - 1)
    else if (e.key === "Home") move(0)
    else if (e.key === "End") move(examples.length - 1)
    else return
    e.preventDefault()
  }

  const example = examples[active]

  return (
    <div className="flex flex-col gap-6">
      <div
        role="tablist"
        aria-label="Moderation examples"
        className="flex flex-wrap gap-2"
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
              "rounded-lg border px-3 py-1.5 text-sm font-medium outline-none transition-colors focus-visible:ring-3 focus-visible:ring-ring/50",
              i === active
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            {ex.title}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id="example-panel"
        aria-labelledby={`example-tab-${example.id}`}
        className="grid gap-6 md:grid-cols-[1fr_1.4fr] md:items-start"
      >
        <p className="max-w-prose leading-relaxed text-muted-foreground">
          {example.summary}
        </p>
        <figure className="flex flex-col gap-2">
          <ChatPanel label={`Example: ${example.title}`}>
            <ChatTimeline items={example.timeline} />
          </ChatPanel>
          <figcaption className="text-xs text-muted-foreground">
            {example.capturedNote}
            {example.othersOmitted && " Other members' messages omitted."}
          </figcaption>
        </figure>
      </div>
    </div>
  )
}
