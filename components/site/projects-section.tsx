import { accentAt, CARD_GRID, GlowCard } from "@/components/site/glow-card"
import { Section, SectionHeader } from "@/components/site/section"
import { Badge } from "@/components/ui/badge"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { projects } from "@/lib/data/projects"

export function ProjectsSection() {
  return (
    <Section id="projects">
      <SectionHeader
        badge="Projects"
        variant="secondary"
        gradient
        description="From AI Discord bots to Minecraft mods, here's what I've been working on."
      >
        Things I&apos;ve built
      </SectionHeader>

      <div className={CARD_GRID}>
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
