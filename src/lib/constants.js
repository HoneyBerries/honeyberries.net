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
  'Minecraft Plugins', 
  'Discord Bots', 
  'LLMs', 
  'Machine Learning',
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

/**
 * Background gradient layer configurations for different pages
 * These provide consistent decorative backgrounds across the site
 */
export const BACKGROUND_LAYERS = {
  // Main layout background (used site-wide)
  layout: [
    'absolute inset-0 bg-gradient-to-br from-white via-emerald-50/40 to-purple-50/20',
    'absolute -top-48 -left-48 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-emerald-300/30 via-teal-200/25 to-cyan-300/20 blur-3xl animate-pulse',
    'absolute top-1/4 -right-40 w-96 h-96 rounded-full bg-gradient-to-l from-blue-300/30 via-indigo-200/25 to-purple-300/20 blur-3xl animate-pulse delay-1000',
  ],
  
  // About page background
  about: [
    'absolute top-1/3 -left-32 w-80 h-80 rounded-full bg-gradient-to-r from-emerald-200/20 to-teal-200/15 blur-3xl animate-pulse',
    'absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-gradient-to-l from-blue-200/20 to-indigo-200/15 blur-3xl animate-pulse delay-1000',
  ],
  
  // Contact page background
  contact: [
    'absolute top-1/4 -left-32 w-80 h-80 rounded-full bg-gradient-to-r from-blue-200/20 to-cyan-200/15 blur-3xl animate-pulse',
    'absolute bottom-1/3 -right-32 w-96 h-96 rounded-full bg-gradient-to-l from-purple-200/20 to-pink-200/15 blur-3xl animate-pulse delay-1000',
  ],
  
  // Minecraft Server page background
  minecraftServer: [
    'absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gradient-to-r from-emerald-200/20 to-blue-200/15 blur-3xl',
    'absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-gradient-to-l from-purple-200/20 to-pink-200/15 blur-3xl',
  ],
  
  // Modcord project page background
  modcord: [
    'absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gradient-to-r from-indigo-200/20 to-purple-200/15 blur-3xl',
    'absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-gradient-to-l from-blue-200/20 to-cyan-200/15 blur-3xl',
  ],
};