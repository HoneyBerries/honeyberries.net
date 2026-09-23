import { AboutSection } from "@/components/site/about-section"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  path: "/about",
  title: "About",
  description: "About HoneyBerries — background, skills, and interests.",
})

export default function AboutPage() {
  return <AboutSection />
}
