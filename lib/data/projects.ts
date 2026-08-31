export interface Project {
  title: string
  description: string
  tags: string[]
  href: string
}

export const projects: Project[] = [
  {
    title: "Modcord",
    description:
      "I couldn't moderate my Discord servers since it wasted my time, so I got AI to automate it",
    tags: ["Discord", "LLM", "AI Agent"],
    href: "https://github.com/HoneyBerries/Modcord",
  },
  {
    title: "Pepmon Client",
    description:
        "I attempted to make a ghost client for my friend, and it was successful",
    tags: ["Minecraft", "Hacks"],
    href: "https://github.com/HoneyBerries/PepmonClient",
  },
  {
    title: "This Website",
    description:
        "Since I didn't have any website after I bought a domain, I decided to create one for fun",
    tags: ["Web Development"],
    href: "https://github.com/HoneyBerries/honeyberries.net",
  },
  {
    title: "Minecraft Mods",
    description:
      "My friend, Pepmon270, told me to make some fabric mods so we could earn some money from Modrinth",
    tags: ["Minecraft", "Mods"],
    href: "https://modrinth.com/user/HoneyBerries/mods",
  },
  {
    title: "Minecraft Plugins",
    description:
      "A collection of PaperMC plugins I made when I was young",
    tags: ["Minecraft", "Plugins"],
    href: "https://modrinth.com/user/HoneyBerries/plugins",
  },
  {
    title: "Gem SMP (Legacy)",
    description:
      "During 8th grade, I decided to make a custom Minecraft server, writing my own plugin to add custom gems " +
        "into the game, which made it very fun.",
    tags: ["Minecraft", "Server"],
    href: "https://github.com/HoneyBerries/GemMod",
  }
]
