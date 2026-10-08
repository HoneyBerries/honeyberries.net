import Link from "next/link"

import { CommandsTable } from "@/components/modcord/commands-table"
import { Examples } from "@/components/modcord/examples"
import { FeatureList } from "@/components/modcord/feature-list"
import { HeroMock } from "@/components/modcord/hero-mock"
import { RetentionTable } from "@/components/modcord/retention-table"
import { Section } from "@/components/site/section"
import { Button } from "@/components/ui/button"
import { MODCORD_INVITE_URL, MODCORD_REPO_URL } from "@/lib/data/site"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  path: "/projects/modcord",
  title: "Modcord",
  description:
    "Modcord is a free, open-source Discord moderation bot that uses AI to read the conversation and your server's rules before it acts.",
})

function InviteButton({ className }: { className?: string }) {
  return (
    <Button
      size="lg"
      className={className ?? "h-10 px-5 text-base"}
      nativeButton={false}
      render={
        <a href={MODCORD_INVITE_URL} target="_blank" rel="noopener noreferrer" />
      }
    >
      Add to Discord
    </Button>
  )
}

export default function ModcordPage() {
  return (
    <>
      <Section className="grid gap-12 py-16 md:grid-cols-[1fr_1.1fr] md:items-center md:py-24">
        <div className="flex flex-col items-start gap-6">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Moderation that reads the room.
          </h1>
          <p className="max-w-prose text-lg leading-relaxed text-muted-foreground">
            Modcord uses AI to read recent conversation and your server&apos;s
            rules before it acts, so a joke between friends and a real problem
            are treated differently.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <InviteButton />
            <Button
              variant="outline"
              size="lg"
              className="h-10 px-5 text-base"
              nativeButton={false}
              render={
                <a
                  href={MODCORD_REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              View on GitHub
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Free and open source under the GPL-3.0.
          </p>
        </div>
        <HeroMock />
      </Section>

      <Section className="py-12">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight">
          What it does
        </h2>
        <FeatureList />
      </Section>

      <Section className="py-12">
        <h2 className="mb-2 text-2xl font-semibold tracking-tight">
          Real examples
        </h2>
        <p className="mb-8 max-w-prose text-muted-foreground">
          These are actual decisions Modcord made in a server I run. The
          reasons are exactly what it posted.
        </p>
        <Examples />
      </Section>

      <Section className="py-12">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight">Commands</h2>
        <CommandsTable />
      </Section>

      <Section className="py-12">
        <h2 className="mb-2 text-2xl font-semibold tracking-tight">
          What we keep
        </h2>
        <p className="mb-6 max-w-prose text-muted-foreground">
          Modcord does not store your messages. Here is what it does store, and
          for how long. The full details are in the{" "}
          <Link
            href="/projects/modcord/privacy"
            className="text-primary underline underline-offset-4"
          >
            Privacy Policy
          </Link>{" "}
          and the{" "}
          <Link
            href="/projects/modcord/terms"
            className="text-primary underline underline-offset-4"
          >
            Terms of Service
          </Link>
          .
        </p>
        <RetentionTable />
      </Section>

      <Section className="flex flex-col items-start gap-4 py-16">
        <h2 className="text-2xl font-semibold tracking-tight">
          Try it in your server
        </h2>
        <InviteButton />
      </Section>
    </>
  )
}
