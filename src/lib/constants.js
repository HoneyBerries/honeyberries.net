/**
 * Application constants and configuration
 */

// Navigation configuration
export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' }
];

// Skills/technologies list
export const SKILLS = [
  'Python', 
  'Java', 
  'PaperMC Plugins', 
  'Discord Bots', 
  'LLMs', 
  'AI Agents'
];

// Contact information
export const CONTACT_INFO = {
  email: 'henry.rainbowfish@gmail.com',
  discordUsername: 'honey_berries',
  discordInviteUrl: 'https://discord.gg/tSMgBPYb48'
};

// Site metadata
export const SITE_INFO = {
  title: 'HoneyBerries Portfolio',
  description: 'Developer focused on performant, clean, and delightful experiences.',
  author: 'HoneyBerries',
  currentYear: new Date().getFullYear()
};

// Base site URL used for canonical links and Open Graph URLs
// Prefer explicit base to avoid relying on runtime window.location for crawlers
export const BASE_URL = 'https://honeyberries.net';

// Minecraft Server configuration
export const MINECRAFT_SERVER = {
  ip: 'gemsmp.honeyberries.net',
  version: 'Java 1.21.4+ and Bedrock on port 19132'
};