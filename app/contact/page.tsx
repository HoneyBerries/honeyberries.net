import { ContactSection } from "@/components/site/contact-section"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  path: "/contact",
  title: "Contact",
  description:
    "Get in touch with HoneyBerries via GitHub, Modrinth, email, or Discord.",
})

export default function ContactPage() {
  return <ContactSection />
}
