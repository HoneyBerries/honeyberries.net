import { CONTACT_INFO, MINECRAFT_SERVER, EXTERNAL_LINKS } from './constants';

export const BRAND = {
  name: 'HoneyBerries',
  role: 'Dev & Creator',
  siteDescription: "Bringing performant, clean, and delightful online experiences.",
};

export const HERO_CONTENT = {
  eyebrow: "Hi, I'm HoneyBerries",
  headlineParts: [
    { text: 'Building LLMs', accent: true },
    { text: 'that automate', accent: true },
    { text: 'tasks and', accent: false },
    { text: 'boost', accent: true },
    { text: 'productivity.', accent: false },
  ],
  subhead: 'Passionate about creating AI systems and tools that make work faster, smarter, and more enjoyable.',
  cardTitle: 'What I Love to Do',
  cardDescription: "Building AI, especially large language models, to automate repetitive tasks and empower users.",
  ctas: [
    { label: 'Explore Projects', to: '/projects', variant: 'primary' },
    { label: 'Get in Touch', to: '/contact', variant: 'primary' },
  ],
  bannerAlt: 'HoneyBerries portfolio showcase',
};

export const ABOUT_CONTENT = {
  badgeLabel: 'Developer & Creator',
  introTitle: "Hey, I'm HoneyBerries",
  introLead: "I love crafting clean, performant experiences that make an impact.",
  introBody: 'From Minecraft mods & plugins which improve gameplay for thousands, to AI agents and tools that integrates into your workflow, I enjoy building tools that solve real problems and bring people together.',
  stats: [
    { label: 'Years Coding', value: '5+', icon: '💻', color: 'text-blue-500' },
    { label: 'Projects Built', value: '8+', icon: '🚀', color: 'text-emerald-500' },
    { label: 'Languages Used', value: '4', icon: '⚡', color: 'text-purple-500' },
    { label: 'Communities Helped', value: "Countless", icon: '🌟', color: 'text-orange-500' },
  ],
  skillCategories: [
    {
      title: 'Languages',
      skills: ['Python', 'Java', 'JavaScript', 'SQL', 'HTML & CSS', 'Bash'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Frameworks & Tools',
      skills: ['PyTorch', 'Numpy', 'Unsloth', 'Hugging Face', 'React', 'Node.js', 'Git', 'Gradle', 'Maven'],
      color: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Specialties',
      skills: ['AI Development', 'General Programming', 'Minecraft Plugins', 'Discord Bots', 'Math'],
      color: 'from-purple-500 to-indigo-500',
    },
  ],
  cta: {
    message: 'Want to learn more about my work or talk about a project?',
    buttonLabel: 'Get in Touch',
    buttonTo: '/contact',
    gradientKey: 'redPurple',
  },
};

export const CONTACT_CONTENT = {
  badgeLabel: "Let's Connect",
  title: 'Reach Out',
  description: 'Whether you want to learn more about my projects, submit a PR, or negotiate pricing, feel free to email me or join my Discord!',
  stats: [
    { label: 'Response Time', value: '< 24h', color: 'text-yellow-500' },
    { label: 'Time Zone', value: 'PST/PDT', color: 'text-blue-500' },
    { label: 'Preferred Method', value: 'Discord', color: 'text-green-500' }
  ],
  emailCard: {
    title: 'Email Me',
    subtitle: 'Best for detailed inquiries (formal communication)',
    ctaLabel: 'Send Email',
    responseNote: 'Typically responds within 24 hours',
  },
  discordCard: {
    title: 'Discord',
    subtitle: 'Quick chats and real-time collaboration',
    description: 'Join my Discord community for project updates, discussions, and support!',
    inviteLabel: 'Join Discord Server',
    statusNote: 'Usually online during PST business hours',
  },
  cta: {
    heading: 'Have a question?',
    description: "I'm happy to answer questions about features, pricing, or anything related to my projects. For general inquiries, Discord is the fastest way to reach me.",
    highlights: [
      { text: 'Usually responds within 24 hours', color: 'bg-green-500' },
      { text: 'Available for support', color: 'bg-blue-500' },
      { text: 'Open to feedback & suggestions', color: 'bg-purple-500' },
    ],
    emailLabel: 'Send Email',
    discordLabel: 'Join Discord',
  },
  footerContact: CONTACT_INFO,
};

export const PROJECTS_COPY = {
  githubCtaLabel: 'View my GitHub',
};

export const MODCORD_CONTENT = {
  headerTitle: 'Modcord: Smart AI Moderation for Your Discord Server',
  headerLead: "Modcord uses LLMs for context-aware moderation, keeping communities safe while letting members have fun. Privacy and scalability are built in, so moderation is automatic and fair.",
  heroButtons: [
    {
      label: 'Add to Discord',
      href: EXTERNAL_LINKS.modcordInvite,
      icon: 'discord',
      variant: 'primary',
      gradientKey: 'emeraldTeal',
    },
    {
      label: 'View GitHub Repo',
      href: EXTERNAL_LINKS.modcordRepo,
      icon: 'github',
      variant: 'outline',
    },
  ],
  features: [
    {
      title: 'LLM-grade Conversation Analysis',
      description: 'Powered by LLMs, Modcord detects spam, abuse, and rule violations without disrupting jokes or memes, letting moderators relax while users stay happy.',
      gradient: 'from-blue-500/10 to-purple-500/10',
    },
    {
      title: 'Dynamic Rule Adaptation',
      description: "Automatically detects and follows server rules, reducing manual setup and ensuring consistent enforcement.",
      gradient: 'from-purple-500/10 to-pink-500/10',
    },
    {
      title: 'No-fuss Experience',
      description: "Real-time AI moderation runs quietly in the background, maintaining conversations without interruptions.",
      gradient: 'from-green-500/10 to-blue-500/10',
    },
    {
      title: 'Reliable & Scalable',
      description: 'Handles servers of any size, from small communities to millions of members, maintaining consistent performance.',
      gradient: 'from-orange-500/10 to-red-500/10',
    },
  ],
  cta: {
    heading: 'Protect Your Discord Server Now',
    description: 'By combining high performance, customization, and privacy, Modcord gives you autonomous moderation without compromising data.',
  },
};

export const GEM_SERVER_CONTENT = {
  tagline: 'Craft elemental gems and unlock unique powers. Competitive survival with endless strategic possibilities.',
  overview: {
    coreConcept: 'Craft one-of-a-kind elemental gems with global exclusivity-first come, first serve! Each gem grants passive buffs and an active ability. Mix exploration, strategy, and PvP as players race to secure their advantages.',
    features: [
      'Unique Gem Crafting (one-of-each globally)',
      'Custom Powers & Abilities with cooldowns',
      'Fresh survival progression with custom items',
      'Balanced competitive PvP',
      'Events, giveaways, and seasonal resets',
      'Discord integration & active moderation',
      'Java + Bedrock cross-play support',
    ],
  },
  gemsLead: 'Discover and craft elemental gems to gain powerful abilities',
  gemSteps: [
    'Recipes are secret until discovered.',
    'Only the first crafting grants the gem permanently for the season.',
    'Passive effects apply while in inventory.',
    'Active abilities triggered via right-click; cooldown per gem.',
  ],
  competitiveLoop:
    'Early game: rush for resources and gem recipes. Mid-game: control territory, ambush, and protect gem holders. Late-game: coordinate raids, events, and shifting alliances.',
  rules: [
    'No griefing or altering builds without consent',
    'No spawn killing (warnings enforced)',
    'Major exploits prohibited; minor QoL exploits at discretion',
    'One account per player; alts banned',
    'Three-strike warning system → temporary ban at strike 3',
    'No doxxing, harassment, or NSFW content',
  ],
  techSpecs: [
    'PaperMC with custom plugin layer for gem logic & abilities',
    'Performance tuned for entity caps and region optimization',
    'Automated backups & monitoring',
    'Discord bot integration for status & event announcements',
  ],
  cta: {
    heading: 'Join the Adventure & Community',
    description: `Play at ${MINECRAFT_SERVER.ip}. Coordinate, trade, or recruit on Discord. Claim a gem, forge alliances, and shape the seasonal meta.`,
    primaryLabel: 'Copy Server IP',
    discordLabel: 'Join Our Discord',
    discordUrl: EXTERNAL_LINKS.gemSmpDiscord,
  },
  ip: MINECRAFT_SERVER.ip,
};

export const NOT_FOUND_CONTENT = {
  pageTitle: '404 - Page Not Found | HoneyBerries',
  heading: 'Oops! Page Not Found',
  lead: "Looks like this page wandered off into the digital void.",
  subtext: "Even the best explorers take a wrong turn sometimes!",
  tip: "Pro tip: Check out my amazing projects while you're here!",
  easterEgg: 'Error code: PAGE_NOT_FOUND_BUT_YOU_FOUND_THIS_COOL_404_PAGE 🎉',
  suggestedLinks: [
    { to: '/projects/gem-smp', label: 'Gem SMP', bg: 'emerald-500', text: 'emerald-50' },
    { to: '/about', label: 'About Me', bg: 'blue-500', text: 'blue-50' },
    { to: '/contact', label: 'Get in Touch', bg: 'purple-500', text: 'purple-50' },
  ],
  floatingElements: [
    { top: '-4', left: '-4', size: 8, from: 'pink-400', to: 'red-500', delay: '0' },
    { top: '-8', right: '-8', size: 6, from: 'yellow-400', to: 'orange-500', delay: '150' },
    { bottom: '-4', left: '1/4', size: 4, from: 'green-400', to: 'teal-500', delay: '300' },
    { bottom: '-6', right: '1/3', size: 5, from: 'indigo-400', to: 'purple-500', delay: '500' },
  ],
};