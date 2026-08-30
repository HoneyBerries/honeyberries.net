import Image from "next/image"

export function ModrinthIcon({ className }: { className?: string }) {
  return (
    <Image
      src="/icons/modrinth.svg"
      alt=""
      width={24}
      height={24}
      className={className}
    />
  )
}
