import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { projects } from "@/lib/data/projects"

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
        {projects.map(({ title, description, tags, href }) => (
          <a
            key={title}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card className="h-full ring-1 ring-foreground/10 transition-all hover:bg-muted/50 hover:ring-primary/40 hover:shadow-lg hover:shadow-primary-500/10">
              <CardHeader>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent className="flex h-full flex-col gap-4">
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <Badge key={tag} variant="accent">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </section>
  )
}
