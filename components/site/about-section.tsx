import { GithubIcon } from "@/components/icons/github-icon"
import { ModrinthIcon } from "@/components/icons/modrinth-icon"
import { Badge, type badgeVariants } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <Badge variant="accent" className="w-fit">
            About me
          </Badge>
          <h2 className="text-2xl font-bold tracking-tight">
            Hi, I&apos;m HoneyBerries!
          </h2>
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
            <Button
              nativeButton={false}
              className="border-black/10 bg-white text-black hover:bg-neutral-100 dark:border-white/10 dark:bg-black dark:text-white dark:hover:bg-neutral-900"
              render={
                <a
                  href="https://github.com/HoneyBerries"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <GithubIcon className="size-4" /> GitHub
            </Button>
            <Button
              variant="outline"
              nativeButton={false}
              render={
                <a
                  href="https://modrinth.com/user/HoneyBerries"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <ModrinthIcon className="size-4" /> Modrinth
            </Button>
          </div>
        </div>

        <Card className="overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/about-fuji.jpg"
            alt="Mount Fuji seen from a hillside overlook"
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

            <div className="grid grid-cols-3 gap-4 border-t pt-6 text-center">
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
    </section>
  )
}
