import Link from "next/link"

import { GithubIcon } from "@/components/icons/github-icon"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="gradient-text font-bold tracking-tight">
          HoneyBerries
        </Link>

        <nav className="flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
            >
              {label}
            </a>
          ))}
          <Button
            variant="ghost"
            size="icon"
            className="ml-1"
            nativeButton={false}
            render={
              <a
                href="https://github.com/HoneyBerries"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              />
            }
          >
            <GithubIcon className="size-4" />
          </Button>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
