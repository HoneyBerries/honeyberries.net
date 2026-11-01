import Link from "next/link"
import type { ReactNode } from "react"
import type { VariantProps } from "class-variance-authority"

import { type badgeVariants } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type BadgeVariant = NonNullable<VariantProps<typeof badgeVariants>["variant"]>

// Each accent bundles the classes that keep a card's look consistent: the
// hover glow (and `active`, the same look held on for a selected item), a tag
// badge color guaranteed not to match the glow, and a tint for icons and code
// chips inside the card.
const ACCENTS = [
  {
    hover:
      "hover:bg-primary-500/5 hover:ring-primary-500/40 hover:shadow-lg hover:shadow-primary-500/10",
    active:
      "bg-primary-500/5 ring-primary-500/40 shadow-lg shadow-primary-500/10",
    tag: "secondary",
    tint: "bg-primary-500/10 text-primary-600 dark:text-primary-400",
  },
  {
    hover:
      "hover:bg-secondary-500/5 hover:ring-secondary-500/40 hover:shadow-lg hover:shadow-secondary-500/10",
    active:
      "bg-secondary-500/5 ring-secondary-500/40 shadow-lg shadow-secondary-500/10",
    tag: "accent",
    tint: "bg-secondary-500/10 text-secondary-700 dark:text-secondary-400",
  },
  {
    hover:
      "hover:bg-accent-500/5 hover:ring-accent-500/40 hover:shadow-lg hover:shadow-accent-500/10",
    active: "bg-accent-500/5 ring-accent-500/40 shadow-lg shadow-accent-500/10",
    tag: "default",
    tint: "bg-accent-500/10 text-accent-700 dark:text-accent-400",
  },
] satisfies {
  hover: string
  active: string
  tag: BadgeVariant
  tint: string
}[]

/** Rotates through the three accents by position in a list. */
export function accentAt(index: number) {
  return ACCENTS[index % ACCENTS.length]
}

export type Accent = ReturnType<typeof accentAt>

/**
 * The site's shared card: a bordered Card. With `href` the whole card is a
 * link (internal paths use next/link, anything else opens in a new tab) and
 * glows in its accent color on hover; without it, it's a plain card.
 */
export function GlowCard({
  accent,
  href,
  className,
  children,
}: {
  accent: Accent
  href?: string
  className?: string
  children: ReactNode
}) {
  const card = (
    <Card
      className={cn(
        "h-full ring-1 ring-foreground/10",
        // Only linked cards glow, so a glow always means "clickable".
        href && ["transition-all", accent.hover],
        className
      )}
    >
      {children}
    </Card>
  )

  if (!href) return card

  const linkClass =
    "block rounded-xl focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"

  return href.startsWith("/") ? (
    <Link href={href} className={linkClass}>
      {card}
    </Link>
  ) : (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={linkClass}
    >
      {card}
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  )
}
