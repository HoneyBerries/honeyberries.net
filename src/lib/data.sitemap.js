/**
 * Sitemap data configuration for build-time generation
 * Note: This file is imported by the sitemap generation script
 */

export const SITEMAP_PAGES = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/about', priority: 0.8, changefreq: 'monthly' },
  { path: '/projects', priority: 0.9, changefreq: 'weekly' },
  { path: '/projects/minecraft-mods-plugins', priority: 0.7, changefreq: 'weekly' },
  { path: '/projects/gem-smp', priority: 0.7, changefreq: 'monthly' },
  { path: '/projects/modcord', priority: 0.8, changefreq: 'monthly' },
  { path: '/projects/modcord/privacy-policy', priority: 0.3, changefreq: 'yearly' },
  { path: '/projects/modcord/terms-of-service', priority: 0.3, changefreq: 'yearly' },
  { path: '/contact', priority: 0.7, changefreq: 'monthly' },
];

/**
 * Project data for sitemap generation (no asset imports)
 */
export const PROJECTS = [
  {
    id: 'minecraft-mods-plugins',
    title: 'Minecraft Mods & Plugins',
    href: '/projects/minecraft-mods-plugins',
  },
  {
    id: 'gem-smp',
    title: 'Gem SMP',
    href: '/projects/gem-smp',
  },
  {
    id: 'modcord',
    title: 'ModCord',
    href: '/projects/modcord',
  }
];
