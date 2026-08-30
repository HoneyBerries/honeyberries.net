import type { Metadata } from "next"

import { ProjectsSection } from "@/components/site/projects-section"
import { SHARE_IMAGE_ALT } from "@/lib/data/site"

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
    images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630, alt: SHARE_IMAGE_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description,
    images: [{ url: "/twitter-image.jpg", alt: SHARE_IMAGE_ALT }],
  },
}

export default function ProjectsPage() {
  return <ProjectsSection />
}
