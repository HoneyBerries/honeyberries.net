import { accentAt, GlowCard } from "@/components/site/glow-card"
import { Section, SectionHeading } from "@/components/site/section"
import { Badge } from "@/components/ui/badge"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { projects } from "@/lib/data/projects"

export function ProjectsSection() {
  return (
    <Section id="projects">
      <div className="mb-12 flex flex-col items-center gap-3 text-center">
        <SectionHeading badge="Projects" variant="secondary" gradient>
          Things I&apos;ve built
        </SectionHeading>
        <p className="max-w-md text-muted-foreground">
          From AI Discord bots to Minecraft mods, here&apos;s what I&apos;ve
          been working on.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ title, description, tags, href }, index) => {
          const accent = accentAt(index)
          return (
            <GlowCard key={title} accent={accent} href={href}>
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
            </GlowCard>
          )
        })}
      </div>
    </Section>
  )
}
