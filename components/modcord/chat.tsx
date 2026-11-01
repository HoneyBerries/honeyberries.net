import { Ban, Image as ImageIcon, TriangleAlert, Timer } from "lucide-react"
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
      role="region"
      aria-label={label}
      // Focusable so keyboard users can scroll it when the conversation is long.
      tabIndex={0}
      className={cn(
        "flex max-h-[24rem] flex-col gap-2.5 overflow-y-auto overscroll-contain rounded-xl bg-[#f2f3f5] p-3.5 text-[13px] text-[#313338] shadow-sm ring-1 ring-black/10 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 dark:bg-[#2b2d31] dark:text-[#dbdee1] dark:ring-black/20",
        className
      )}
    >
      {children}
    </div>
  )
}

function MediaChip({ kind, count }: { kind: "gif" | "image"; count: number }) {
  const noun = kind === "gif" ? "GIF" : "image"
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md bg-[#e3e5e8] px-2 py-1 text-xs text-[#4e5058] dark:bg-[#1e1f22] dark:text-[#b5bac1]">
      <ImageIcon aria-hidden className="size-3.5" />
      {count > 1 ? `${noun} ×${count}` : noun}
    </span>
  )
}

// [light theme, dark theme]: the Discord-style hues need to be darker on the
// light panel to stay readable.
const authorColors = [
  ["#b01fc0", "#f47fff"],
  ["#4752c4", "#8ea1ff"],
  ["#1a7f37", "#4fc873"],
  ["#b45309", "#faa61a"],
  ["#c62828", "#ff6b6e"],
  ["#0369a1", "#00b0f4"],
] as const

function authorStyle(index: number) {
  const [light, dark] = authorColors[index % authorColors.length]
  return {
    "--author-light": light,
    "--author-dark": dark,
  } as React.CSSProperties
}

function Message({
  item,
  colorIndex,
}: {
  item: Extract<TimelineItem, { type: "message" }>
  colorIndex: number
}) {
  const lines = Array.from({ length: item.repeat ?? 1 })
  return (
    <div className="flex flex-col gap-0.5">
      <span
        className="font-semibold text-(color:--author-light) dark:text-(color:--author-dark)"
        style={authorStyle(colorIndex)}
      >
        {item.author}
      </span>
      {item.text &&
        lines.map((_, i) => (
          <p key={i} className="break-words leading-tight">
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

const actionKinds = {
  warn: { Icon: TriangleAlert, title: "Warn issued" },
  timeout: { Icon: Timer, title: "Timeout issued" },
  ban: { Icon: Ban, title: "Ban issued" },
} as const

function ActionEmbed({
  item,
  className,
  style,
}: {
  item: Extract<TimelineItem, { type: "action" }>
  className?: string
  style?: React.CSSProperties
}) {
  const { Icon, title } = actionKinds[item.kind]
  return (
    <div
      style={style}
      className={cn(
        "flex flex-col gap-1.5 rounded-md border-l-4 border-secondary-500 bg-white p-2.5 dark:bg-[#313338]",
        className
      )}
    >
      <p className="flex items-center gap-2 font-semibold text-[#060607] dark:text-[#f2f3f5]">
        <Icon
          aria-hidden
          className="size-4 text-secondary-600 dark:text-secondary-400"
        />
        {title}
        <span className="font-normal text-[#5c5e66] dark:text-[#b5bac1]">
          Modcord
        </span>
      </p>
      <p className="text-xs text-[#5c5e66] dark:text-[#b5bac1]">
        User{" "}
        <span className="text-[#060607] dark:text-[#f2f3f5]">
          @{item.target}
        </span>
        {item.duration && (
          <>
            {" "}
            · Duration{" "}
            <span className="text-[#060607] dark:text-[#f2f3f5]">
              {item.duration}
            </span>
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

  // Authors get colors in order of first appearance, so everyone in a short
  // conversation looks different.
  const authorOrder = new Map<string, number>()
  for (const item of items) {
    if (item.type === "message" && !authorOrder.has(item.author)) {
      authorOrder.set(item.author, authorOrder.size)
    }
  }

  return (
    <>
      {items.map((item, i) => {
        if (item.type === "message") {
          return (
            <Message
              key={i}
              item={item}
              colorIndex={authorOrder.get(item.author)!}
            />
          )
        }
        const actionIdx = actionPositions.get(i)!
        const delay = animateActions ? `${1.2 + actionIdx * 1.6}s` : undefined
        return (
          <ActionEmbed
            key={i}
            item={item}
            className={
              animateActions ? "motion-safe:animate-resolve" : undefined
            }
            style={delay ? { animationDelay: delay } : undefined}
          />
        )
      })}
    </>
  )
}
