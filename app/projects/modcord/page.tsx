import { Check } from "lucide-react"
import type { ReactNode } from "react"

import { CommandsTable } from "@/components/modcord/commands-table"
import { Examples } from "@/components/modcord/examples"
import { FeatureList } from "@/components/modcord/feature-list"
import { RetentionTable } from "@/components/modcord/retention-table"
import { Section, SectionHeader } from "@/components/site/section"
import { TextLink } from "@/components/site/text-link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MODCORD_INVITE_URL, MODCORD_REPO_URL } from "@/lib/data/site"
import { pageMetadata } from "@/lib/metadata"
import { externalProps } from "@/lib/utils"

export const metadata = pageMetadata({
  path: "/projects/modcord",
  title: "Modcord",
  description:
    "Modcord is a free, open-source Discord moderation bot that uses AI to read the conversation and your server's rules before it acts.",
})

function ExternalButton({
  href,
  variant,
  children,
}: {
  href: string
  variant: "gradient" | "outline"
  children: string
}) {
  return (
    <Button
      variant={variant}
      size="lg"
      className="h-10 px-4 text-sm sm:px-5 sm:text-base"
      nativeButton={false}
      render={<a href={href} {...externalProps(href)} />}
    >
      {children}
    </Button>
  )
}

// A page section: gradient heading with a line of copy above its content.
function ModcordSection({
  title,
  description,
  band,
  children,
}: {
  title: string
  description: ReactNode
  band?: boolean
  children: ReactNode
}) {
  return (
    <Section band={band} className="py-16 md:py-20">
      <SectionHeader gradient description={description}>
        {title}
      </SectionHeader>
      {children}
    </Section>
  )
}

const highlights = [
  "Free and open source",
  "Reads context and your rules",
  "Every action logged with its reason",
]

export default function ModcordPage() {
  return (
    <>
      <div className="relative overflow-hidden">
        {/* Decorative glow behind the hero. */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 h-96 w-[48rem] max-w-full -translate-x-1/2 rounded-full bg-linear-to-r from-primary-500/20 via-secondary-500/15 to-accent-500/20 blur-3xl"
        />
        <Section className="relative py-16 md:py-24">
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="default">Open source</Badge>
              <Badge variant="secondary">Free</Badge>
              <Badge variant="accent">GPL-3.0</Badge>
            </div>
            <h1 className="gradient-text text-4xl font-bold tracking-tight sm:text-5xl">
              Moderation that reads the room.
            </h1>
            <p className="max-w-prose text-lg leading-relaxed text-muted-foreground">
              Modcord uses AI to read recent conversation and your server&apos;s
              rules before it acts, so a joke between friends and a real problem
              are treated differently.
            </p>
            <div className="flex items-center gap-2 sm:gap-3">
              <ExternalButton variant="gradient" href={MODCORD_INVITE_URL}>
                Add to Discord
              </ExternalButton>
              <ExternalButton variant="outline" href={MODCORD_REPO_URL}>
                View on GitHub
              </ExternalButton>
            </div>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check aria-hidden className="size-4 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Section>
      </div>

      <ModcordSection
        title="What it does"
        description="Modcord reads the conversation and your server's rules before it acts."
      >
        <FeatureList />
      </ModcordSection>

      <ModcordSection
        band
        title="Examples"
        description="The first two are real decisions Modcord made in a server I run, with the reasons exactly as it posted them. The last two are recreated or written to show common cases."
      >
        <Examples />
      </ModcordSection>

      <ModcordSection
        title="Commands"
        description="Slash commands for setup, manual moderation and appeals."
      >
        <CommandsTable />
      </ModcordSection>

      <ModcordSection
        band
        title="What we keep"
        description={
          <>
            Modcord does not store the text of your messages. Here is what it
            does store, and for how long. The full details are in the{" "}
            <TextLink href="/projects/modcord/privacy">
              Privacy Policy
            </TextLink>{" "}
            and the{" "}
            <TextLink href="/projects/modcord/terms">
              Terms of Service
            </TextLink>
            .
          </>
        }
      >
        <RetentionTable />
      </ModcordSection>
    </>
  )
}
