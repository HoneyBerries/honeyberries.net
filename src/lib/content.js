import { CONTACT_INFO, MINECRAFT_SERVER, EXTERNAL_LINKS } from './constants';

export const BRAND = {
  name: 'HoneyBerries',
  role: 'Developer & Creator',
  siteDescription: "Developer focused on performant, clean, and delightful experiences.",
};

export const HERO_CONTENT = {
  eyebrow: "Hello, I'm HoneyBerries",
  headlineParts: [
    { text: 'Building LLMs', accent: true },
    { text: 'that automate', accent: true },
    { text: 'tasks and', accent: false },
    { text: 'improve', accent: true },
    { text: 'productivity.', accent: false },
  ],
  subhead: 'Random person who likes building AI systems and tools that exponentially speed up human productivity.',
  cardTitle: 'What I enjoy doing',
  cardDescription: "Creating AI's, particularly large language models, to automate repetitive tasks.",
  ctas: [
    { label: 'Explore Projects', to: '/projects', variant: 'primary' },
    { label: 'Get in touch', to: '/contact', variant: 'secondary' },
  ],
  bannerAlt: 'HoneyBerries portfolio showcase',
};

export const ABOUT_CONTENT = {
  badgeLabel: 'Developer & Creator',
  introTitle: "Hi, I'm HoneyBerries",
  introLead: "I'm a passionate developer who loves building sleek, performant experiences that make a difference.",
  introBody: 'From Minecraft plugins that enhance gameplay for thousands of players, to AI-powered Discord bots that help communities thrive, I enjoy creating tools that bring people together and solve real problems.',
  stats: [
    { label: 'Years Coding', value: '5+', icon: '💻', color: 'text-blue-600' },
    { label: 'Projects Built', value: '8+', icon: '🚀', color: 'text-emerald-600' },
    { label: 'Languages Used', value: 'Only 2', icon: '⚡', color: 'text-purple-600' },
    { label: 'Communities Helped', value: "idk I didn't track", icon: '🌟', color: 'text-orange-600' },
  ],
  skillCategories: [
    {
      title: 'Languages',
      skills: ['Python', 'Java'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Frameworks & Tools',
      skills: ['PyTorch', 'TensorFlow', 'Hugging Face', 'React', 'Node.js', 'GitHub', 'Gradle', 'Maven'],
      color: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Specialties',
      skills: ['AI Development', 'General Programming', 'Minecraft Plugins', 'Discord Bots', 'Math'],
      color: 'from-purple-500 to-indigo-500',
    },
  ],
  cta: {
    message: 'Want to know more about my work or discuss about one of my projects?',
    buttonLabel: 'Get In Touch',
    buttonTo: '/contact',
    gradientKey: 'redPurple',
  },
};

export const CONTACT_CONTENT = {
  badgeLabel: "Let's Connect",
  title: 'Get In Touch',
  description: 'If you want to reach out to know more about my work, have an open PR, or want to talk about pricing for a service, email or join my Discord server!',
  stats: [
    { label: 'Response Time', value: '< 24h', icon: '⚡', color: 'text-yellow-600' },
    { label: 'Time Zone', value: 'PST/PDT', icon: '🌍', color: 'text-blue-600' },
    { label: 'Preferred Method', value: 'Discord', icon: '💬', color: 'text-green-600' },
    { label: 'Available For', value: 'Projects', icon: '💼', color: 'text-purple-600' },
  ],
  emailCard: {
    title: 'Email Me',
    subtitle: 'Slower but more formal communication (best for detailed inquiries)',
    ctaLabel: 'Send Email',
    responseNote: 'Typically responds within 24 hours',
  },
  discordCard: {
    title: 'Discord',
    subtitle: 'Preferred communication method for quick chats',
    description: 'Join my Discord community for quick chats, project updates, and collaboration opportunities!',
    inviteLabel: 'Join Discord Server',
    statusNote: 'Usually online during PST business hours',
  },
  cta: {
    heading: 'Have a question about my stuff?',
    description: "If you have any questions about my projects or work, feel free to ask. I'm happy to answer questions about features, pricing, or anything else. For like general information about a project, you can join my Discord server and ask me.",
    highlights: [
      { text: 'Usually responds within 24 hours', color: 'bg-green-500' },
      { text: 'Has some time to answer questions', color: 'bg-blue-500' },
      { text: 'Open to suggestions and feedback', color: 'bg-purple-500' },
    ],
    emailLabel: 'Send Email',
    discordLabel: 'Join Discord',
  },
  footerContact: CONTACT_INFO,
};

export const PROJECTS_COPY = {
  githubCtaLabel: 'View GitHub',
};

export const MODCORD_CONTENT = {
  headerTitle: 'Modcord, Smart AI Moderation for Your Discord Server',
  headerLead: "ModCord uses LLM's to provide intelligent, context-aware moderation for Discord servers of all sizes, from a few members to millions. Designed with privacy and scalability in mind, Modcord helps keep your community safe and welcoming. We care about fair moderation that adapts to your server automatically so you don't have to run a single command.",
  heroButtons: [
    {
      label: 'Add to Discord',
      href: EXTERNAL_LINKS.modcordInvite,
      icon: 'discord',
      variant: 'primary',
      gradientKey: 'emeraldTeal',
    },
    {
      label: 'View Github Repo',
      href: EXTERNAL_LINKS.modcordRepo,
      icon: 'github',
      variant: 'secondary',
    },
  ],
  features: [
    {
      title: 'Intelligent Conversation Analysis',
      description: 'ModCord understands the conversation context because it is powered by an LLM, allowing it to intelligently detect spam, abuse, and rule violations while allowing jokes and memes, enabling your moderators to take a break knowing that nothing bad will happen and the users will still be happy.',
      icon: '🧠',
      gradient: 'from-blue-500/10 to-purple-500/10',
    },
    {
      title: 'Adaptive Rules',
      description: "ModCord's rule searching algorithm automatically scans for rule channels, allowing it to automatically follow the server's rules that users are asked to follow without manual configuration.",
      icon: '⚙️',
      gradient: 'from-purple-500/10 to-pink-500/10',
    },
    {
      title: 'Seamless Experience',
      description: "ModCord's AI Engine continuously analyzes every conversation automatically to provide real-time moderation without disrupting your chats. It runs in the background as if you never knew it was there.",
      icon: '✨',
      gradient: 'from-green-500/10 to-blue-500/10',
    },
    {
      title: 'Reliable & Scalable',
      description: 'Modcord is designed to handle servers of all sizes, from small private communities to large-scale servers with millions of members, ensuring consistent quality and performance.',
      icon: '🚀',
      gradient: 'from-orange-500/10 to-red-500/10',
    },
  ],
  cta: {
    heading: 'Ready to Enhance Your Discord Community?',
    description: 'ModCord prioritizes high performance and customization, offering extensive configurable settings and easy-to-use commands, while keeping a privacy-first design that ensures your data is never stored or shared (beyond the brief 30-second processing period).',
  },
};

export const GEM_SERVER_CONTENT = {
  tagline: 'Craft unique elemental gems to gain powerful abilities. Competitive, ability-driven survival multiplayer with endless strategic possibilities.',
  overview: {
    coreConcept: 'Discover and craft powerful one-of-a-kind elemental gems. Each gem can only be crafted once server-wide—claim it first to wield its passive buffs and an active ability. Mix strategy, exploration, and PvP mind-games as players race to unlock and protect their gem advantages.',
    features: [
      'Unique Gem Crafting System (one-of-each globally)',
      'Custom Powers & Special Abilities with cooldowns',
      'Fresh survival progression with custom items',
      'Balanced competitive PvP mechanics',
      'Events, giveaways, and seasonal resets',
      'Discord integration & active staff moderation',
      'Java + Bedrock cross-play support',
    ],
  },
  gemsLead: 'Discover and craft these unique elemental gems to gain powerful abilities',
  gemSteps: [
    'Each elemental recipe is secret until discovered.',
    'Only the first craft grants the gem permanently for the season.',
    'Passive effects apply while the gem is in inventory.',
    'Active abilities triggered via right-click; cooldown per gem.',
  ],
  competitiveLoop:
    'Players rush early to locate resources, scout others, and attempt to solve gem recipes. Mid-game revolves around territorial control, ambushes, and protecting gem holders. Late-game culminates in coordinated raids, events, or alliances shifting power balance.',
  rules: [
    'No griefing or altering player builds without consent',
    'No spawn killing (enforced with warnings)',
    'Major exploits (dupe, crash, hacks) prohibited; minor QoL exploits at discretion',
    'One account per player; alts banned',
    '3-strike warning system → temp ban at 3',
    'No doxxing, harassment, NSFW content',
  ],
  techSpecs: [
    'PaperMC base with custom plugin layer for gem logic & abilities',
    'Performance tuned for entity caps, ticking, and region optimization',
    'Automated backups & monitoring',
    'Discord bot integration for status + event announcements',
  ],
  cta: {
    heading: 'Join & Community',
    description: `Join at ${MINECRAFT_SERVER.ip}. Coordinate, trade, or recruit on Discord. Claim a gem, forge alliances, and shape the seasonal meta.`,
    primaryLabel: '📋 Copy Server IP',
    discordLabel: '💬 Join Discord',
    discordUrl: EXTERNAL_LINKS.gemSmpDiscord,
  },
  ip: MINECRAFT_SERVER.ip,
};

export const NOT_FOUND_CONTENT = {
  pageTitle: '404 — Page Not Found | HoneyBerries',
  heading: 'Oops! Page Not Found',
  lead: "The page you're looking for seems to have wandered off into the digital void.",
  subtext: "Don't worry though, even the best explorers sometimes take a wrong turn!",
  tip: "Pro tip: While you're here, why not check out my amazing projects?",
  easterEgg: 'Error code: PAGE_NOT_FOUND_BUT_YOU_FOUND_THIS_COOL_404_PAGE 🎉',
  suggestedLinks: [
    { to: '/projects/gem-smp', label: 'Gem SMP', bg: 'emerald', text: 'emerald' },
    { to: '/about', label: 'About Me', bg: 'blue', text: 'blue' },
    { to: '/contact', label: 'Get in Touch', bg: 'purple', text: 'purple' },
  ],
  floatingElements: [
    { top: '-4', left: '-4', size: 8, from: 'pink', to: 'red', delay: '0' },
    { top: '-8', right: '-8', size: 6, from: 'yellow', to: 'orange', delay: '150' },
    { bottom: '-4', left: '1/4', size: 4, from: 'green', to: 'teal', delay: '300' },
    { bottom: '-6', right: '1/3', size: 5, from: 'indigo', to: 'purple', delay: '500' },
  ],
};
