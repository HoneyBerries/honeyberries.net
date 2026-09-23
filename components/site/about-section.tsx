import Image from "next/image"

import { Section, SectionHeading } from "@/components/site/section"
import { SocialButton } from "@/components/site/social-button"
import { Badge, type badgeVariants } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { skills, stats } from "@/lib/data/skills"
import type { VariantProps } from "class-variance-authority"

const SKILL_BADGE_VARIANTS: NonNullable<
  VariantProps<typeof badgeVariants>["variant"]
>[] = ["default", "secondary", "accent"]

export function AboutSection() {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <SectionHeading badge="About me" variant="accent">
            Hi, I&apos;m HoneyBerries!
          </SectionHeading>
          <p className="leading-relaxed text-muted-foreground">
            I&apos;m a interesting person who loves to understand why things work
            and how to create and improve them.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            My favorite project is <strong>Modcord</strong>, a Discord bot
            that helps moderate Discord servers using a self-built LLM agent loop. It can also
            read images, and I aim to eventually be able to read video and audio as well.
          </p>
          <div className="flex flex-wrap gap-3">
            <SocialButton link="github" />
            <SocialButton link="modrinth" />
          </div>
        </div>

        <Card className="overflow-hidden">
          <Image
            src="/images/about-fuji.jpg"
            alt="Mount Fuji seen from a hillside overlook"
            width={1600}
            height={1068}
            sizes="(min-width: 768px) 480px, 100vw"
            loading="eager"
            className="h-48 w-full object-cover sm:h-56"
          />
          <CardHeader>
            <CardTitle>Stuff I have worked with</CardTitle>
            <CardDescription>
              Languages and tools I keep reaching for.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge
                  key={skill}
                  variant={
                    SKILL_BADGE_VARIANTS[index % SKILL_BADGE_VARIANTS.length]
                  }
                >
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="grid auto-cols-fr grid-flow-col gap-4 border-t pt-6 text-center">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="gradient-text text-2xl font-bold">{value}</p>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  )
}
