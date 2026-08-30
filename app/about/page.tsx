import type { Metadata } from "next"

import { AboutSection } from "@/components/site/about-section"

export const metadata: Metadata = {
  title: "About · HoneyBerries",
  description: "About HoneyBerries — background, skills, and interests.",
}

export default function AboutPage() {
  return <AboutSection />
}
