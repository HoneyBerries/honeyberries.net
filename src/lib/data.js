import minecraftBg from '../assets/backgrounds/minecraft-background.webp';

/**
 * Projects data configuration
 */
export const PROJECTS = [
  {
    id: 'minecraft-plugins',
    title: 'Minecraft Plugins',
    description: 'A suite of quality-of-life, admin tools, and a few wild experiments for Paper/Spigot.',
    href: '#',
    imageUrl: minecraftBg
  },
  {
    id: 'minecraft-server',
    title: 'Minecraft Server',
    description: 'Custom gameplay, new PvP mechanics, and a thriving community.',
    href: '#',
    imageUrl: ''
  },
  {
    id: 'discord-ai-agent',
    title: 'Discord AI Agent',
    description: 'Moderation, Q&A, and automation powered by LLMs.',
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
  'Optimizing a Minecraft server economy and anti-cheat',
  'Shipping new features for the Discord AI Agent',
  'Exploring React Server Components and Tailwind 4',
  'Automating deployments with CI/CD'
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