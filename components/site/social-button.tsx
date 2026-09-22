import type { ComponentType } from "react"
import { Mail } from "lucide-react"

import {
  DiscordIcon,
  GithubIcon,
  ModrinthIcon,
} from "@/components/icons/brand-icons"
import { Button } from "@/components/ui/button"
import { SOCIAL_LINKS, type SocialLink } from "@/lib/data/site"

const ICONS: Record<SocialLink, ComponentType<{ className?: string }>> = {
  github: GithubIcon,
  modrinth: ModrinthIcon,
  email: Mail,
  discord: DiscordIcon,
}

// The single source of truth for how social links look, so they match on
// every page they appear on.
export function SocialButton({ link }: { link: SocialLink }) {
  const { label, href } = SOCIAL_LINKS[link]
  const Icon = ICONS[link]
  const external = href.startsWith("http")

  return (
    <Button
      variant="outline"
      size="lg"
      nativeButton={false}
      render={
        <a
          href={href}
          {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        />
      }
    >
      <Icon className="size-4" /> {label}
    </Button>
  )
}
