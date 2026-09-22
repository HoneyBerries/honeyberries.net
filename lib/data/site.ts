export const SITE_NAME = "HoneyBerries"
export const SITE_URL = "https://honeyberries.net"
export const SITE_TITLE = `${SITE_NAME} — Computer Science Student & Developer`
export const SITE_DESCRIPTION =
  "Personal portfolio of HoneyBerries, a Computer Science student at UC Berkeley building AI agents, Discord bots, and Minecraft mods."
export const SHARE_IMAGE_ALT = "Mount Fuji seen from a hillside overlook"

export const SOCIAL_LINKS = {
  github: { label: "GitHub", href: "https://github.com/HoneyBerries" },
  modrinth: { label: "Modrinth", href: "https://modrinth.com/user/HoneyBerries" },
  email: { label: "Email", href: "mailto:henry.rainbowfish@gmail.com" },
  discord: { label: "Discord", href: "https://discord.gg/TbkHCshxjS" },
} as const

export type SocialLink = keyof typeof SOCIAL_LINKS
