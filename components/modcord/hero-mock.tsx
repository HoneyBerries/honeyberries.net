import { ExampleFigure } from "@/components/modcord/chat"
import { examples, HERO_EXAMPLE_ID } from "@/lib/data/modcord-examples"

export function HeroMock() {
  const example = examples.find((e) => e.id === HERO_EXAMPLE_ID)
  if (!example) {
    throw new Error(`Hero example "${HERO_EXAMPLE_ID}" is missing from examples`)
  }

  return (
    <ExampleFigure
      example={example}
      label={`Preview: ${example.title}`}
      className="max-h-72 sm:max-h-[24rem]"
      animateActions
    />
  )
}
