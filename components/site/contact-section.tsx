import Image from "next/image"

import { Section, SectionHeading } from "@/components/site/section"
import { SocialButton } from "@/components/site/social-button"
import { Card, CardContent } from "@/components/ui/card"

export function ContactSection() {
  return (
    <Section id="contact">
      <Card className="mx-auto max-w-2xl overflow-hidden text-center">
        <Image
          src="/images/contact-tokyo.jpg"
          alt="A lantern-lit street in Tokyo at night"
          width={1600}
          height={1068}
          sizes="(min-width: 672px) 672px, 100vw"
          className="h-48 w-full object-cover sm:h-56"
        />
        <CardContent className="flex flex-col items-center gap-6 py-10">
          <SectionHeading badge="Connect" variant="accent">
            Say hi!
          </SectionHeading>
          <p className="max-w-md leading-relaxed text-muted-foreground">
            Check out my projects on GitHub or browse my mods on Modrinth.
            Always happy to connect with fellow Minecraft fans and modders!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <SocialButton link="github" />
            <SocialButton link="modrinth" />
            <SocialButton link="email" />
            <SocialButton link="discord" />
          </div>
        </CardContent>
      </Card>
    </Section>
  )
}
