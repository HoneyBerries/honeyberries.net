import type { NavLink, ContactInfo, ExternalLinks, IconPaths, SiteInfo, MinecraftServer, BackgroundLayer } from '$lib/types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' }
];

export const SKILLS: string[] = [
  'Python',
  'Java',
  'Minecraft Plugins',
  'Discord Bots',
  'LLMs',
  'Machine Learning',
];

export const CONTACT_INFO: ContactInfo = {
  email: 'henry.rainbowfish@gmail.com',
  discordUsername: 'honey_berries',
  discordInviteUrl: 'https://discord.gg/tSMgBPYb48'
};

export const EXTERNAL_LINKS: ExternalLinks = {
  githubProfile: 'https://github.com/HoneyBerries',
  modrinthProfile: 'https://modrinth.com/user/HoneyBerries',
  modcordRepo: 'https://github.com/honeyberries/modcord',
  modcordInvite: 'https://discord.com/oauth2/authorize?client_id=1387903423592005663',
  gemSmpDiscord: 'https://discord.gg/c354AX236r'
};

export const ICON_PATHS: IconPaths = {
  github: '/assets/icons/github-icon.svg',
  discord: '/assets/icons/discord-icon.svg',
  email: '/assets/icons/email-icon.svg'
};

export const SITE_INFO: SiteInfo = {
  title: 'HoneyBerries Portfolio',
  description: 'Developer focused on performant, clean, and delightful experiences.',
  author: 'HoneyBerries',
  currentYear: new Date().getFullYear()
};

export const BASE_URL = 'https://honeyberries.net';

export const MINECRAFT_SERVER: MinecraftServer = {
  ip: 'gemsmp.honeyberries.net',
  version: 'Java 1.21.4+ and Bedrock on port 19132'
};

export const BACKGROUND_LAYERS: Record<string, BackgroundLayer[]> = {
  layout: [
    { className: 'absolute inset-0 bg-gradient-to-br from-white via-emerald-50/40 to-purple-50/20' },
    { className: 'absolute -top-48 -left-48 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-emerald-300/30 via-teal-200/25 to-cyan-300/20 blur-3xl', animation: 'pulse', delay: 0 },
    { className: 'absolute top-1/4 -right-40 w-96 h-96 rounded-full bg-gradient-to-l from-blue-300/30 via-indigo-200/25 to-purple-300/20 blur-3xl', animation: 'pulse', delay: 1 },
  ],
  about: [
    { className: 'absolute top-1/3 -left-32 w-80 h-80 rounded-full bg-gradient-to-r from-amber-200/20 to-orange-200/15 blur-3xl', animation: 'pulse' },
    { className: 'absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-gradient-to-l from-rose-200/20 to-pink-200/15 blur-3xl', animation: 'pulse', delay: 1 },
  ],
  contact: [
    { className: 'absolute top-1/4 -left-32 w-80 h-80 rounded-full bg-gradient-to-r from-cyan-200/20 to-sky-200/15 blur-3xl', animation: 'pulse' },
    { className: 'absolute bottom-1/3 -right-32 w-96 h-96 rounded-full bg-gradient-to-l from-violet-200/20 to-fuchsia-200/15 blur-3xl', animation: 'pulse', delay: 1 },
  ],
  minecraftServer: [
    { className: 'absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gradient-to-r from-lime-200/20 to-emerald-200/15 blur-3xl', animation: 'pulse' },
    { className: 'absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-gradient-to-l from-teal-200/20 to-cyan-200/15 blur-3xl', animation: 'pulse', delay: 1 },
  ],
  modcord: [
    { className: 'absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gradient-to-r from-indigo-200/20 to-blue-200/15 blur-3xl', animation: 'pulse' },
    { className: 'absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-gradient-to-l from-purple-200/20 to-violet-200/15 blur-3xl', animation: 'pulse', delay: 1 },
  ],
};
