import Link from "next/link"

import { SITE_NAME } from "@/lib/data/site"

export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 text-sm text-muted-foreground">
        <span>© 2026 {SITE_NAME}</span>
        <nav aria-label="Modcord legal" className="flex gap-4">
          <Link
            href="/projects/modcord/privacy"
            className="underline-offset-4 hover:text-foreground hover:underline"
          >
            Modcord privacy
          </Link>
          <Link
            href="/projects/modcord/terms"
            className="underline-offset-4 hover:text-foreground hover:underline"
          >
            Modcord terms
          </Link>
        </nav>
        <span className="font-medium">honeyberries.net</span>
      </div>
    </footer>
  )
}
