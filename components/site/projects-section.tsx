import { Badge, type badgeVariants } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { projects } from "@/lib/data/projects"
import type { VariantProps } from "class-variance-authority"

// Each entry pairs a card's hover glow with a tag badge color that's
// guaranteed not to match it, so the two can never drift out of sync.
const cardAccents: {
  hover: string
  tag: NonNullable<VariantProps<typeof badgeVariants>["variant"]>
}[] = [
  {
    hover:
      "hover:bg-primary-500/5 hover:ring-primary-500/40 hover:shadow-lg hover:shadow-primary-500/10",
    tag: "secondary",
  },
  {
    hover:
      "hover:bg-secondary-500/5 hover:ring-secondary-500/40 hover:shadow-lg hover:shadow-secondary-500/10",
    tag: "accent",
  },
  {
    hover:
      "hover:bg-accent-500/5 hover:ring-accent-500/40 hover:shadow-lg hover:shadow-accent-500/10",
    tag: "default",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <div className="mb-12 flex flex-col items-center gap-3 text-center">
        <Badge variant="secondary">Projects</Badge>
        <h2 className="gradient-text text-2xl font-bold tracking-tight">
          Things I&apos;ve built
        </h2>
        <p className="max-w-md text-muted-foreground">
          From Minecraft plugins to Discord bots — here&apos;s what
          I&apos;ve been working on.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ title, description, tags, href }, index) => {
          const accent = cardAccents[index % cardAccents.length]
          return (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card
                className={cn(
                  "h-full ring-1 ring-foreground/10 transition-all",
                  accent.hover
                )}
              >
                <CardHeader>
                  <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent className="flex h-full flex-col gap-4">
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                      <Badge key={tag} variant={accent.tag}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </a>
          )
        })}
      </div>
    </section>
  )
}
