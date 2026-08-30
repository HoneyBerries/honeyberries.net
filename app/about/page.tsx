import type { Metadata } from "next"

import { AboutSection } from "@/components/site/about-section"

const title = "About"
const fullTitle = "About · HoneyBerries"
const description = "About HoneyBerries — background, skills, and interests."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    url: "/about",
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

export default function AboutPage() {
  return <AboutSection />
}
