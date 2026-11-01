import { accentAt } from "@/components/site/glow-card"
import { MinecraftCard } from "@/components/site/minecraft-card"
import { Section, SectionHeader } from "@/components/site/section"
import { MODRINTH_USERNAME, SOCIAL_LINKS } from "@/lib/data/site"
import {
  getMinecraftProjects,
  groupProjects,
  type ModrinthProject,
} from "@/lib/modrinth"

function Group({
  id,
  label,
  projects,
}: {
  id: string
  label: string
  projects: ModrinthProject[]
}) {
  if (projects.length === 0) return null
  return (
    <div id={id} className="scroll-mt-24">
      <h3 className="mb-4 text-sm font-semibold tracking-wider text-muted-foreground uppercase">
        {label} · {projects.length}
      </h3>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <MinecraftCard
            key={`${id}-${project.slug}`}
            project={project}
            accent={accentAt(i)}
          />
        ))}
      </div>
    </div>
  )
}

export async function MinecraftSection() {
  const { mods, plugins } = groupProjects(await getMinecraftProjects())

  return (
    <Section id="minecraft">
      <SectionHeader
        gradient
        description={
          <>
            Everything I&apos;ve published on{" "}
            <a
              href={SOCIAL_LINKS.modrinth.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              Modrinth ({MODRINTH_USERNAME})
            </a>
            .
          </>
        }
      >
        Mods, plugins &amp; datapacks
      </SectionHeader>
      <div className="flex flex-col gap-12">
        <Group id="mods" label="Mods" projects={mods} />
        <Group id="plugins" label="Plugins & datapacks" projects={plugins} />
      </div>
    </Section>
  )
}
