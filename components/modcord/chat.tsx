import { Image as ImageIcon, TriangleAlert, Timer } from "lucide-react"
import type { ReactNode } from "react"

import type { TimelineItem } from "@/lib/data/modcord-example-types"
import { cn } from "@/lib/utils"

export function ChatPanel({
  label,
  children,
  className,
}: {
  label: string
  children: ReactNode
  className?: string
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className={cn(
        "flex flex-col gap-3 rounded-xl bg-[#2b2d31] p-4 text-sm text-[#dbdee1] shadow-lg ring-1 ring-black/20",
        className
      )}
    >
      {children}
    </div>
  )
}

function MediaChip({
  kind,
  count,
}: {
  kind: "gif" | "image"
  count: number
}) {
  const noun = kind === "gif" ? "GIF" : "image"
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md bg-[#1e1f22] px-2 py-1 text-xs text-[#b5bac1]">
      <ImageIcon aria-hidden className="size-3.5" />
      {count > 1 ? `${noun} ×${count}` : noun}
    </span>
  )
}

const authorColors = [
  "#f47fff",
  "#5865f2",
  "#3ba55d",
  "#faa61a",
  "#ed4245",
  "#00b0f4",
]

function authorColor(name: string) {
  let hash = 0
  for (const char of name) hash = (hash * 31 + char.charCodeAt(0)) % 997
  return authorColors[hash % authorColors.length]
}

function Message({ item }: { item: Extract<TimelineItem, { type: "message" }> }) {
  const lines = Array.from({ length: item.repeat ?? 1 })
  return (
    <div className="flex flex-col gap-0.5">
      <span
        className="font-semibold"
        style={{ color: authorColor(item.author) }}
      >
        {item.author}
      </span>
      {item.text &&
        lines.map((_, i) => (
          <p key={i} className="break-words leading-snug">
            {item.text}
          </p>
        ))}
      {item.media && (
        <div>
          <MediaChip kind={item.media.kind} count={item.media.count} />
        </div>
      )}
    </div>
  )
}

function ActionEmbed({
  item,
  className,
  style,
}: {
  item: Extract<TimelineItem, { type: "action" }>
  className?: string
  style?: React.CSSProperties
}) {
  const Icon = item.kind === "timeout" ? Timer : TriangleAlert
  const title = item.kind === "timeout" ? "Timeout issued" : "Warn issued"
  return (
    <div
      style={style}
      className={cn(
        "flex flex-col gap-2 rounded-md border-l-4 border-secondary-500 bg-[#313338] p-3",
        className
      )}
    >
      <p className="flex items-center gap-2 font-semibold text-[#f2f3f5]">
        <Icon aria-hidden className="size-4 text-secondary-400" />
        {title}
        <span className="font-normal text-[#b5bac1]">Modcord</span>
      </p>
      <p className="text-xs text-[#b5bac1]">
        User <span className="text-[#f2f3f5]">@{item.target}</span>
        {item.duration && (
          <>
            {" "}
            · Duration <span className="text-[#f2f3f5]">{item.duration}</span>
          </>
        )}
      </p>
      <p className="leading-snug">{item.reason}</p>
    </div>
  )
}

export function ChatTimeline({
  items,
  animateActions = false,
}: {
  items: TimelineItem[]
  animateActions?: boolean
}) {
  // Pre-calculate action positions to avoid reassigning during render
  const actionPositions = new Map<number, number>()
  let actionIndex = 0
  for (let i = 0; i < items.length; i++) {
    if (items[i].type === "action") {
      actionPositions.set(i, actionIndex)
      actionIndex += 1
    }
  }

  return (
    <>
      {items.map((item, i) => {
        if (item.type === "message") {
          return <Message key={i} item={item} />
        }
        const actionIdx = actionPositions.get(i)!
        const delay = animateActions ? `${1.2 + actionIdx * 1.6}s` : undefined
        return (
          <ActionEmbed
            key={i}
            item={item}
            className={animateActions ? "motion-safe:animate-resolve" : undefined}
            style={delay ? { animationDelay: delay } : undefined}
          />
        )
      })}
    </>
  )
}
