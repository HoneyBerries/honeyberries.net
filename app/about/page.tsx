import type { Metadata } from "next"

import { AboutSection } from "@/components/site/about-section"
import { SHARE_IMAGE_ALT } from "@/lib/data/site"

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
    images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630, alt: SHARE_IMAGE_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description,
    images: [{ url: "/twitter-image.jpg", alt: SHARE_IMAGE_ALT }],
  },
}

export default function AboutPage() {
  return <AboutSection />
}
