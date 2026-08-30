import Image from "next/image"

import { cn } from "@/lib/utils"

export function GithubIcon({ className }: { className?: string }) {
  return (
    <Image
      src="/icons/github.svg"
      alt=""
      width={24}
      height={24}
      className={cn("dark:invert", className)}
    />
  )
}
