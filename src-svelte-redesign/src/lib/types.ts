export interface NavLink {
  name: string;
  path: string;
}

export interface Skill {
  name: string;
}

export interface ContactInfo {
  email: string;
  discordUsername: string;
  discordInviteUrl: string;
}

export interface ExternalLinks {
  githubProfile: string;
  modrinthProfile: string;
  modcordRepo: string;
  modcordInvite: string;
  gemSmpDiscord: string;
}

export interface IconPaths {
  github: string;
  discord: string;
  email: string;
}

export interface SiteInfo {
  title: string;
  description: string;
  author: string;
  currentYear: number;
}

export interface MinecraftServer {
  ip: string;
  version: string;
}

export interface BackgroundLayer {
  className: string;
  animation?: string;
  delay?: number;
}

export interface HeadlinePart {
  text: string;
  accent: boolean;
}

export interface HeroCta {
  label: string;
  to: string;
  variant: string;
}

export interface Stat {
  label: string;
  value: string;
  icon?: string;
  color: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  color: string;
}

export interface TimelineEntry {
  title: string;
  time: string;
  desc: string;
  hasLink?: boolean;
  linkUrl?: string;
  linkText?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  href: string;
  imageUrl: string;
}

export interface HomeFeature {
  title: string;
  desc: string;
}

export interface MinecraftGem {
  id: string;
  name: string;
  element: string;
  passive: string;
  active: string;
  image: string;
  color: string;
}

export interface ModcordFeature {
  title: string;
  description: string;
  gradient: string;
}

export interface SuggestedLink {
  to: string;
  label: string;
  bg: string;
  text: string;
}

export interface FloatingElement {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  size: number;
  from: string;
  to: string;
  delay: string;
}

export interface ModrinthProject {
  slug: string;
  title: string;
  description: string;
  categories: string[];
  client_side: string;
  server_side: string;
  project_type: string;
  downloads: number;
  icon_url: string | null;
  date_created: string;
  date_modified: string;
  loaders: string[];
  [key: string]: unknown;
}
