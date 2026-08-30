import type { Metadata } from "next"

import { ContactSection } from "@/components/site/contact-section"
import { SHARE_IMAGE_ALT } from "@/lib/data/site"

const title = "Contact"
const fullTitle = "Contact · HoneyBerries"
const description =
  "Get in touch with HoneyBerries via GitHub, Modrinth, email, or Discord."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
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

export default function ContactPage() {
  return <ContactSection />
}
