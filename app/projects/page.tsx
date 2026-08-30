import type { Metadata } from "next"

import { ProjectsSection } from "@/components/site/projects-section"

export const metadata: Metadata = {
  title: "Projects · HoneyBerries",
  description:
    "Projects built by HoneyBerries — from Minecraft plugins to Discord bots.",
}

export default function ProjectsPage() {
  return <ProjectsSection />
}
