// Use public /assets paths for images so they remain stable across builds (no hashing)
const BACKGROUNDS = {
  minecraftPlugin: '/assets/backgrounds/minecraft-plugin-background.webp',
  minecraftServer: '/assets/backgrounds/minecraft-server-background.webp'
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
    description: 'A suite of quality-of-life, admin tools, and a few wild experiments for Paper/Spigot.',
    href: '/projects/minecraft-plugins',
    imageUrl: BACKGROUNDS.minecraftPlugin
  },
  {
    id: 'minecraft-server',
    title: 'Gem SMP Minecraft Server',
    description: 'Custom gems, new PvP mechanics, and a refined gameplay experience.',
    href: '/projects/minecraft-server',
    imageUrl: BACKGROUNDS.minecraftServer
  },
  {
    id: 'discord-ai-agent',
    title: 'Discord AI Moderator Agent',
    description: 'Autonomous chat moderation and action powered by LLMs, allowing for seamless community management on Discord.',
    href: '/projects/modcord',
    imageUrl: ''
  }
];

/**
 * Timeline data for about page, in chronological order
 */
export const TIMELINE = [
  {
    title: 'Created Plugin Suite',
    time: '2024 Fall',
    desc: 'Developed multiple high-quality plugins for PaperMC/Spigot, posted them on Modrinth.',
    hasLink: true,
    linkUrl: 'https://modrinth.com/user/HoneyBerries',
    linkText: 'posted them on Modrinth'
  },
  {
    title: 'Shipped the Gem SMP',
    time: '2025 Spring',
    desc: 'Designed and deployed a scalable community server.'
  },
  {
    title: 'Launched Discord AI Agent',
    time: '2025 Summer',
    desc: 'Built an agent for moderation and automation.'
  }
];

/**
 * Current projects for about page
 */
export const CURRENT_PROJECTS = [
  'Building AI Agents to automate various tasks',
  'Shipping new features for the Discord AI Agent',
  "Making a social media platform that doesn't share data with anyone and is highly secure.",
  'Being terrible at everything else :)'
];

/**
 * Home page features
 */
export const HOME_FEATURES = [
  {
    title: 'Minecraft Plugins & Servers',
    desc: 'Custom plugins and hosted servers focused on fun, stability, and player experience.'
  },
  {
    title: 'AI Discord Agents',
    desc: 'Smart bots for moderation, engagement, and automation tailored to your community.'
  },
  {
    title: 'Community Tools & Support',
    desc: 'Integrations, dashboards, and ongoing support to help communities grow and stay healthy.'
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