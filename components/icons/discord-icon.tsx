import Image from "next/image"

export function DiscordIcon({ className }: { className?: string }) {
  return (
    <Image
      src="/icons/discord.svg"
      alt=""
      width={24}
      height={24}
      className={className}
    />
  )
}
