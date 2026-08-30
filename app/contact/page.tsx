import type { Metadata } from "next"

import { ContactSection } from "@/components/site/contact-section"

export const metadata: Metadata = {
  title: "Contact · HoneyBerries",
  description:
    "Get in touch with HoneyBerries via GitHub, Modrinth, email, or Discord.",
}

export default function ContactPage() {
  return <ContactSection />
}
