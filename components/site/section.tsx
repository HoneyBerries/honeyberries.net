import type { ComponentProps, ReactNode } from "react"

import { Badge, type badgeVariants } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { VariantProps } from "class-variance-authority"

export function Section({ className, ...props }: ComponentProps<"section">) {
  return (
    <section
      className={cn("mx-auto max-w-5xl px-6 py-24", className)}
      {...props}
    />
  )
}

// The badge + heading pair that opens each section; the surrounding layout
// and body copy stay with the caller since they differ per section.
export function SectionHeading({
  badge,
  variant,
  gradient,
  children,
}: {
  badge: string
  variant: VariantProps<typeof badgeVariants>["variant"]
  gradient?: boolean
  children: ReactNode
}) {
  return (
    <>
      <Badge variant={variant} className="w-fit">
        {badge}
      </Badge>
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
