import { GithubIcon } from "@/components/icons/github-icon"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 py-24 text-center">
      <div className="flex items-center gap-2">
        <Badge variant="secondary">Minecraft</Badge>
        <Badge variant="secondary">Java</Badge>
        <Badge variant="secondary">Web</Badge>
      </div>

      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        A Person With Many Interests
      </h1>

      <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
        Hi, I&apos;m HoneyBerries. When I was younger, I enjoyed playing Minecraft and making mods.
          Now, I truly like CS and AI, aiming to master both subjects.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button size="lg" nativeButton={false} render={<a href="#projects" />}>
          See My Projects
        </Button>
        <Button
          variant="outline"
          size="lg"
          nativeButton={false}
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
      </div>
    </section>
  )
}
