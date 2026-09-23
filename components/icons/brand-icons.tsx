import Image from "next/image"

import { cn } from "@/lib/utils"

type IconProps = { className?: string }

function BrandIcon({ src, className }: IconProps & { src: string }) {
  return <Image src={src} alt="" width={24} height={24} className={className} />
}

// GitHub's mark is solid black, so it's inverted for dark mode; the others
// use their brand colors and read fine on both themes.
export function GithubIcon({ className }: IconProps) {
  return (
    <BrandIcon src="/icons/github.svg" className={cn("dark:invert", className)} />
  )
}

export function ModrinthIcon({ className }: IconProps) {
  return <BrandIcon src="/icons/modrinth.svg" className={className} />
}

export function DiscordIcon({ className }: IconProps) {
  return <BrandIcon src="/icons/discord.svg" className={className} />
}
