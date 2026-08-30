import type { Metadata } from "next"

import { HeroSection } from "@/components/site/hero-section"
import { SHARE_IMAGE_ALT, SITE_NAME } from "@/lib/data/site"

const title = `${SITE_NAME} — Computer Science Student & Developer`
const description =
  "Personal portfolio of HoneyBerries, a Computer Science student at UC Berkeley building AI agents, Discord bots, and Minecraft mods."

export const metadata: Metadata = {
  description,
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title,
    description,
    images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630, alt: SHARE_IMAGE_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [{ url: "/twitter-image.jpg", alt: SHARE_IMAGE_ALT }],
  },
}

export default function Home() {
  return <HeroSection />
}
