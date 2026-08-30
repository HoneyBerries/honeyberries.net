import type { Metadata } from "next"

import { ProjectsSection } from "@/components/site/projects-section"

const title = "Projects"
const fullTitle = "Projects · HoneyBerries"
const description =
  "Projects built by HoneyBerries — from Minecraft plugins to Discord bots."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/projects" },
  openGraph: {
    url: "/projects",
    title: fullTitle,
    description,
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description,
    images: ["/twitter-image"],
  },
}

export default function ProjectsPage() {
  return <ProjectsSection />
}
