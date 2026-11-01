import type { ComponentProps, ReactNode } from "react"

import { Badge, type badgeVariants } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { VariantProps } from "class-variance-authority"

export function Section({
  className,
  band,
  ...props
}: ComponentProps<"section"> & {
  /** Full-bleed tinted background behind the (width-capped) section. */
  band?: boolean
}) {
  const section = (
    <section
      className={cn("mx-auto max-w-5xl px-6 py-24", className)}
      {...props}
    />
  )
  return band ? <div className="bg-muted/30">{section}</div> : section
}

// The badge + heading pair that opens each section; the surrounding layout
// and body copy stay with the caller since they differ per section.
export function SectionHeading({
  badge,
  variant,
  gradient,
  children,
}: {
  badge?: string
  variant?: VariantProps<typeof badgeVariants>["variant"]
  gradient?: boolean
  children: ReactNode
}) {
  return (
    <>
      {badge && (
        <Badge variant={variant} className="w-fit">
          {badge}
        </Badge>
      )}
      <h2
        className={cn(
          "text-2xl font-bold tracking-tight",
          gradient && "gradient-text"
        )}
      >
        {children}
      </h2>
    </>
  )
}

// A full section opener: centered heading plus an optional line of body copy.
export function SectionHeader({
  description,
  ...heading
}: ComponentProps<typeof SectionHeading> & { description?: ReactNode }) {
  return (
    <div className="mb-12 flex flex-col items-center gap-3 text-center">
      <SectionHeading {...heading} />
      {description && (
        <p className="max-w-md text-muted-foreground">{description}</p>
      )}
    </div>
  )
}
