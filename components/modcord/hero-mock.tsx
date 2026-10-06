import { ChatPanel, ChatTimeline } from "@/components/modcord/chat"
import { examples, HERO_EXAMPLE_ID } from "@/lib/data/modcord-examples"

export function HeroMock() {
  const example = examples.find((e) => e.id === HERO_EXAMPLE_ID)
  if (!example) {
    throw new Error(`Hero example "${HERO_EXAMPLE_ID}" is missing from examples`)
  }

  return (
    <figure className="flex flex-col gap-2">
      <ChatPanel label={`Example: ${example.title}`}>
        <ChatTimeline items={example.timeline} animateActions />
      </ChatPanel>
      <figcaption className="text-xs text-muted-foreground">
        {example.capturedNote} Other members&apos; messages omitted.
      </figcaption>
    </figure>
  )
}
