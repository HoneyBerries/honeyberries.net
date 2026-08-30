import type { Metadata } from "next"

import { ContactSection } from "@/components/site/contact-section"

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
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description,
    images: ["/twitter-image"],
  },
}

export default function ContactPage() {
  return <ContactSection />
}
