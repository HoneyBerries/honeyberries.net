import Link from "next/link"

import { Section } from "@/components/site/section"
import { SocialButton } from "@/components/site/social-button"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <Section className="flex max-w-3xl flex-col items-center gap-8 text-center">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Badge variant="default">Berkeley</Badge>
        <Badge variant="secondary">Computer Science</Badge>
        <Badge variant="accent">Machine Learning</Badge>
        <Badge variant="outline">AI</Badge>
      </div>

      <h1 className="gradient-text text-4xl font-bold tracking-tight sm:text-5xl">
        A Person With Many Interests
      </h1>

      <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
        Hi, I&apos;m HoneyBerries. When I was younger, I enjoyed playing Minecraft and making mods.
          Now, I truly like CS and AI, aiming to master both subjects.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button
          variant="gradient"
          size="lg"
          nativeButton={false}
          render={<Link href="/projects" />}
        >
          See My Projects
        </Button>
        <SocialButton link="github" />
      </div>
    </Section>
  )
}
