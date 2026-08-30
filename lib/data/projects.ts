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
      "I couldn't moderate my Discord servers since my mom told me it is a waste of time (I totally agree), so I got AI to automate it",
    tags: ["Discord"],
    href: "https://github.com/HoneyBerries/Modcord",
  },
  {
    title: "Pepmon Client",
    description:
        "I once tried to make a ghost client for my friend, and it went pretty well. He really enjoys it!",
    tags: ["Minecraft"],
    href: "https://github.com/HoneyBerries/PepmonClient",
  },
  {
    title: "This Website",
    description:
        "Since I didn't have any website after I bought a domain, I decided to create one for fun",
    tags: ["Minecraft"],
    href: "https://github.com/HoneyBerries/PepmonClient",
  },
  {
    title: "Minecraft Mods",
    description:
      "My friend, Pepmon270, told me to make some fabric mods so we could get some money from Modrinth",
    tags: ["Minecraft"],
    href: "https://modrinth.com/user/HoneyBerries",
  },
  {
    title: "Minecraft Plugins",
    description:
      "A collection of PaperMC plugins I made when I was young",
    tags: ["Minecraft"],
    href: "https://github.com/HoneyBerries",
  },
]
