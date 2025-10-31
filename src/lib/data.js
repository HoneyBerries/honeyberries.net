// Use public /assets paths for images so they remain stable across builds (no hashing)
const BACKGROUNDS = {
  minecraftPlugin: '/assets/backgrounds/minecraft-plugin-background.webp',
  minecraftServer: '/assets/backgrounds/minecraft-server-background.webp',
  discordAIAagent: '/assets/backgrounds/discord-ai-agent-background.webp'
};

// Gem icons (served from public)
const GEM_ICONS = {
  air: '/assets/icons/gem-icons/air_gem.png',
  fire: '/assets/icons/gem-icons/fire_gem.png',
  water: '/assets/icons/gem-icons/water_gem.png',
  earth: '/assets/icons/gem-icons/earth_gem.png',
  ice: '/assets/icons/gem-icons/ice_gem.png',
  darkness: '/assets/icons/gem-icons/darkness_gem.png',
  light: '/assets/icons/gem-icons/light_gem.png'
};

/**
 * Projects data configuration
 */
export const PROJECTS = [
  {
    id: 'minecraft-plugins',
    title: 'Minecraft Plugins',
    description: 'Some high quality plugins for Paper/Spigot, including quality-of-life improvements, admin tools, and a few wild experiments.',
    href: '/projects/minecraft-plugins',
    imageUrl: BACKGROUNDS.minecraftPlugin
  },
  {
    id: 'minecraft-server',
    title: 'Gem SMP Minecraft Server',
    description: 'Custom gems, new PvP mechanics, and an improved gameplay experience.',
    href: '/projects/minecraft-server',
    imageUrl: BACKGROUNDS.minecraftServer
  },
  {
    id: 'discord-ai-agent',
    title: 'Discord AI Moderator Agent',
    description: 'Autonomous chat and image moderation powered by LLMs, allowing for seamless community management on Discord.',
    href: '/projects/modcord',
    imageUrl: '/assets/backgrounds/discord-ai-agent-background.webp'
  }
];

/**
 * Timeline data for about page, in chronological order
 */
export const TIMELINE = [
  {
    title: 'Wrote some Minecraft Plugins',
    time: '2024 Fall',
    desc: 'Developed multiple high-quality plugins for PaperMC/Spigot, posted them on Modrinth because I was bored.',
    hasLink: true,
    linkUrl: 'https://modrinth.com/user/HoneyBerries',
    linkText: 'posted them on Modrinth'
  },
  {
    title: 'Opened the Gem SMP',
    time: '2025 Spring',
    desc: 'I still don\'t know why to this day, but for some reason I made a Minecraft server with custom elemental gems (maybe I was bored with vanilla).',
  },
  {
    title: 'Created ModCord',
    time: '2025 Summer',
    desc: 'Some random gangsters from my school decided to troll on my server by sending pictures of my face randomly (I still don\'t know how they got them) and I couldn\'t delete them as fast as they could send, so I needed an AI which was fast enough to do it.'
  }
];

/**
 * Current projects for about page
 */
export const CURRENT_PROJECTS = [
  'Adding features for ModCord to make it smarter and more reliable',
  "Failing at making a communication platform that is end-to-end encrypted and has accounts unlike other end-to-end encrypted platforms",
  'Being terrible at everything else :)',
  'Sleeping'
];

/**
 * Home page features
 */
export const HOME_FEATURES = [
  {
    title: 'Minecraft Plugins & Servers',
    desc: 'Used to make Minecraft plugins which made servers more fun and improve player\'s experience.'
  },
  {
    title: 'AI Discord Agents',
    desc: 'Made a discord AI agent (ModCord) which moderated servers using large language models, and it was pretty cool.'
  },
  {
    title: 'More advanced AI Stuff',
    desc: 'Trying to make a custom LLM to make ModCord smarter and more human-like.'
  }
];

/**
 * Minecraft server elemental gems data
 */
export const MINECRAFT_GEMS = [
  {
    id: 'air',
    name: 'Aero Gem',
    element: 'Air',
    passive: 'Negates fall damage.',
    active: 'Lets you dash very far.',
    image: GEM_ICONS.air,
    color: 'air'
  },
  {
    id: 'fire',
    name: 'Pyro Gem',
    element: 'Fire',
    passive: 'Grants Fire resistance and lets you swim in lava.',
    active: 'Launch fireballs at players or structures that explode with more explosive power than 10 charged creepers.',
    image: GEM_ICONS.fire,
    color: 'fire'
  },
  {
    id: 'water',
    name: 'Hydro Gem',
    element: 'Water',
    passive: "Grants Dolphin's Grace and Water Breathing.",
    active: 'Freezes players for a few seconds.',
    image: GEM_ICONS.water,
    color: 'water'
  },
  {
    id: 'earth',
    name: 'Dendro Gem',
    element: 'Earth',
    passive: 'Grants Haste II, Speed II, and Strength II.',
    active: 'You can become invulnerable for a couple seconds.',
    image: GEM_ICONS.earth,
    color: 'earth'
  },
  {
    id: 'ice',
    name: 'Cryo Gem',
    element: 'Ice',
    passive: 'Enables icy terrain manipulation.',
    active: 'Freezes targets or creates paths (coming).',
    image: GEM_ICONS.ice,
    color: 'ice'
  },
  {
    id: 'dark',
    name: 'Shadow Gem',
    element: 'Darkness',
    passive: 'Attacking players gives them blindness and spawns particles which obscure vision.',
    active: 'Temporarily grants true invisibility, which hides armor, arrows, and effects, rendering you undetectable.',
    image: GEM_ICONS.darkness,
    color: 'darkness'
  },
  {
    id: 'light',
    name: 'Photo Gem',
    element: 'Light',
    passive: 'Makes other players glow.',
    active: 'Lets you strike players with lightning, dealing 20 hearts of damage.',
    image: GEM_ICONS.light,
    color: 'light'
  }
];