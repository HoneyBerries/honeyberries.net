import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isExternal = (href: string) => /^https?:/.test(href)

// Props that open an http(s) link in a new tab safely; empty for internal links.
export function externalProps(href: string) {
  return isExternal(href)
    ? ({ target: "_blank", rel: "noopener noreferrer" } as const)
    : {}
}
