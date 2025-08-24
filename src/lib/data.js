import minecraftPluginBg from '../assets/backgrounds/minecraft-plugin-background.webp';
import minecraftServerBg from '../assets/backgrounds/minecraft-server-background.webp';

// Import gem icons
import airGem from '../assets/icons/gem-icons/air_gem.png';
import fireGem from '../assets/icons/gem-icons/fire_gem.png';
import waterGem from '../assets/icons/gem-icons/water_gem.png';
import earthGem from '../assets/icons/gem-icons/earth_gem.png';
import iceGem from '../assets/icons/gem-icons/ice_gem.png';
import darknessGem from '../assets/icons/gem-icons/darkness_gem.png';
import lightGem from '../assets/icons/gem-icons/light_gem.png';


/**
 * Projects data configuration
 */
export const PROJECTS = [
  {
    id: 'minecraft-plugins',
    title: 'Minecraft Plugins',
    description: 'A suite of quality-of-life, admin tools, and a few wild experiments for Paper/Spigot.',
    href: '#',
    imageUrl: minecraftPluginBg
  },
  {
    id: 'minecraft-server',
    title: 'Gem SMP Minecraft Server',
    description: 'Custom gems, new PvP mechanics, and a refined gameplay experience.',
  href: '/projects/minecraft-server',
    imageUrl: minecraftServerBg
  },
  {
    id: 'discord-ai-agent',
    title: 'Discord AI Moderator Agent',
    description: 'Autonomous chat moderation and action powered by LLMs, allowing for seamless community management on Discord.',
    href: '#',
    imageUrl: ''
  }
];

/**
 * Timeline data for about page
 */
export const TIMELINE = [
  {
    title: 'Launched Discord AI Agent',
    time: '2025 Summer',
    desc: 'Built an agent for moderation and automation.'
  },
  {
    title: 'Shipped the Gem SMP',
    time: '2025 Spring',
    desc: 'Designed and deployed a scalable community server.'
  },
  {
    title: 'Created Plugin Suite',
    time: '2024 Fall',
    desc: 'Developed multiple high-quality plugins for PaperMC/Spigot, posted them on Modrinth.',
    hasLink: true,
    linkUrl: 'https://modrinth.com/user/HoneyBerries',
    linkText: 'posted them on Modrinth'
  }
];

/**
 * Current projects for about page
 */
export const CURRENT_PROJECTS = [
  'Optimizing a Minecraft server economy and player experience',
  'Shipping new features for the Discord AI Agent',
  'Exploring React Server Components and Tailwind to build modern UIs that you will love',
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
    passive: 'Negate fall damage & improved aerial mobility.', 
    active: 'Directional air dash; safe collision handling.',
    image: airGem,
    color: 'air'
  },
  { 
    id: 'fire', 
    name: 'Pyro Gem', 
    element: 'Fire', 
    passive: 'Fire & lava immunity.', 
    active: 'Launch explosive fireballs.',
    image: fireGem,
    color: 'fire'
  },
  { 
    id: 'water', 
    name: 'Hydro Gem', 
    element: 'Water', 
    passive: 'Aquatic affinity & control (expanding set).', 
    active: 'Incoming — reserved ability slot.',
    image: waterGem,
    color: 'water'
  },
  { 
    id: 'earth', 
    name: 'Dendro Gem', 
    element: 'Earth', 
    passive: 'Haste II, Speed II, Strength II.', 
    active: 'Short invulnerability window.',
    image: earthGem,
    color: 'earth'
  },
  { 
    id: 'ice', 
    name: 'Cryo Gem', 
    element: 'Ice', 
    passive: 'Icy terrain manipulation potential.', 
    active: 'Freeze targets / create paths (coming).',
    image: iceGem,
    color: 'ice'
  },
  { 
    id: 'dark', 
    name: 'Shadow Gem', 
    element: 'Darkness', 
    passive: 'Stealth advantages.', 
    active: 'Temporary invisibility + blindness AoE.',
    image: darknessGem,
    color: 'darkness'
  },
  { 
    id: 'light', 
    name: 'Photo Gem', 
    element: 'Light', 
    passive: 'Enhanced vision & tracking.', 
    active: 'Call down precision lightning.',
    image: lightGem,
    color: 'light'
  }
];