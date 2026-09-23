import { ProjectsSection } from "@/components/site/projects-section"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  path: "/projects",
  title: "Projects",
  description:
    "Projects built by HoneyBerries — from Minecraft plugins to Discord bots.",
})

export default function ProjectsPage() {
  return <ProjectsSection />
}
