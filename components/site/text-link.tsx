import Link from "next/link"
import type { ReactNode } from "react"

import { externalProps, isExternal } from "@/lib/utils"

// Inline text link: client-side navigation for internal paths, a new tab for
// external URLs.
export function TextLink({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) {
  const className = "text-primary underline underline-offset-4"
  return isExternal(href) ? (
    <a href={href} className={className} {...externalProps(href)}>
      {children}
    </a>
  ) : (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}
