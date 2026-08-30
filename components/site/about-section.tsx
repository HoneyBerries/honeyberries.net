import { GithubIcon } from "@/components/icons/github-icon"
import { ModrinthIcon } from "@/components/icons/modrinth-icon"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { skills, stats } from "@/lib/data/skills"

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <Badge variant="outline" className="w-fit">
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
              render={
                <a
                  href="https://github.com/HoneyBerries"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <GithubIcon className="invert dark:invert-0 size-4" /> GitHub
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

        <Card>
          <CardHeader>
            <CardTitle>Stuff I have worked with</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 border-t pt-6 text-center">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-bold">{value}</p>
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
