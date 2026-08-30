import { GithubIcon } from "@/components/icons/github-icon"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 py-24 text-center">
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
          size="lg"
          nativeButton={false}
          className="bg-linear-to-br from-primary-600 to-secondary-500 text-white hover:opacity-90 hover:shadow-lg hover:shadow-primary-500/25"
          render={<a href="/projects" />}
        >
          See My Projects
        </Button>
        <Button
          variant="outline"
          size="lg"
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
      </div>
    </section>
  )
}
