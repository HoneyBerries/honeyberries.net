import { MinecraftCard } from "@/components/site/minecraft-card"
import { Section, SectionHeading } from "@/components/site/section"
import { MODRINTH_USERNAME, SOCIAL_LINKS } from "@/lib/data/site"
import {
  getMinecraftProjects,
  groupProjects,
  type ModrinthProject,
} from "@/lib/modrinth"

// Same three hover glows as the Projects cards, rotated in order.
const hovers = [
  "hover:bg-primary-500/5 hover:ring-primary-500/40 hover:shadow-lg hover:shadow-primary-500/10",
  "hover:bg-secondary-500/5 hover:ring-secondary-500/40 hover:shadow-lg hover:shadow-secondary-500/10",
  "hover:bg-accent-500/5 hover:ring-accent-500/40 hover:shadow-lg hover:shadow-accent-500/10",
]

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
            hover={hovers[i % hovers.length]}
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
      <div className="mb-12 flex flex-col items-center gap-3 text-center">
        <SectionHeading gradient>
          Mods, plugins &amp; datapacks
        </SectionHeading>
        <p className="max-w-md text-muted-foreground">
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
        </p>
      </div>
      <div className="flex flex-col gap-12">
        <Group id="mods" label="Mods" projects={mods} />
        <Group id="plugins" label="Plugins & datapacks" projects={plugins} />
      </div>
    </Section>
  )
}
