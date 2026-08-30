import { Mail } from "lucide-react"

import { DiscordIcon } from "@/components/icons/discord-icon"
import { ModrinthIcon } from "@/components/icons/modrinth-icon"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {GithubIcon} from "@/components/icons/github-icon";

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <Card className="mx-auto max-w-2xl overflow-hidden text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/contact-tokyo.jpg"
          alt="A lantern-lit street in Tokyo at night"
          className="h-48 w-full object-cover sm:h-56"
        />
        <CardContent className="flex flex-col items-center gap-6 py-10">
          <Badge variant="accent">Connect</Badge>
          <h2 className="text-2xl font-bold tracking-tight">Say hi!</h2>
          <p className="max-w-md leading-relaxed text-muted-foreground">
            Check out my projects on GitHub or browse my mods on Modrinth.
            Always happy to connect with fellow Minecraft fans and modders!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
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
                <GithubIcon className="invert dark:invert-0 size-4" /> GitHub
            </Button>
            <Button
              variant="outline"
              size="lg"
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
            <Button
              variant="outline"
              size="lg"
              nativeButton={false}
              render={<a href="mailto:henry.rainbowfish@gmail.com" />}
            >
              <Mail className="size-4" /> Email
            </Button>
            <Button
              variant="outline"
              size="lg"
              nativeButton={false}
              render={
                <a
                  href="https://discord.gg/TbkHCshxjS"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <DiscordIcon className="size-4" /> Discord
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
