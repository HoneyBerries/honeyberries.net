import { Suspense } from "react"

import { MinecraftSection } from "@/components/site/minecraft-section"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  path: "/projects/minecraft",
  title: "Minecraft",
  description:
    "Minecraft mods, plugins and datapacks by HoneyBerries, published on Modrinth.",
})

export default function MinecraftPage() {
  return (
    <Suspense>
      <MinecraftSection />
    </Suspense>
  )
}
