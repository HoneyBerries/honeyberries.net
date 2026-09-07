import type { Metadata } from "next"
import Link from "next/link"
import { Compass } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Page Not Found",
}

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 py-24 text-center">
      <Badge variant="outline">HTTP 404</Badge>

      <Compass
        className="animate-float size-10 text-primary-400"
        strokeWidth={1.5}
      />

      <h1 className="gradient-text text-6xl font-bold tracking-tight sm:text-7xl">
        404
      </h1>

      <h2 className="text-xl font-semibold sm:text-2xl">
        Chunk Not Generated
      </h2>

      <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
        Looks like you&apos;ve wandered off the render distance. This page
        either moved, never spawned, or got voided like an unsaved build.
      </p>

      <Button
        size="lg"
        nativeButton={false}
        className="bg-linear-to-br from-primary-600 to-secondary-500 text-white hover:opacity-90 hover:shadow-lg hover:shadow-primary-500/25"
        render={<Link href="/" />}
      >
        Back to Home
      </Button>
    </section>
  )
}
