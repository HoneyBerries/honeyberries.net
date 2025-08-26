import Footer from '../../components/Footer';
import GemCard from '../../components/GemCard';
import { Link } from 'react-router-dom';
import { MINECRAFT_GEMS } from '../../lib/data';
import { MINECRAFT_SERVER } from '../../lib/constants';
import { useCopyToClipboard } from '../../hooks';

/**
 * Minecraft Server (Gem SMP) detailed project page.
 * Structured for future expansion: keep each project in /pages/projects/<Name>.jsx
 */
export default function MinecraftServer() {
  const [headerCopied, copyToClipboardHeader] = useCopyToClipboard();
  const [inlineCopied, copyToClipboardInline] = useCopyToClipboard();

  const handleCopyIP = () => copyToClipboardHeader(MINECRAFT_SERVER.ip);
  const handleInlineCopyIP = () => copyToClipboardInline(MINECRAFT_SERVER.ip);

  return (
    <div className="min-h-screen relative">
      <BackgroundDecorations />
      
      <div className="relative z-10">
        <article className="max-w-6xl mx-auto px-4 py-12">
          <ServerHeader 
            onCopyIP={handleInlineCopyIP} 
            copied={inlineCopied} 
          />
          <ServerOverview />
          <GemsSection />
          <ServerDetails 
            onCopyIP={handleCopyIP} 
            copied={headerCopied} 
          />
        </article>
      </div>
      
      <Footer />
    </div>
  );
}

/**
 * Background decorative elements
 */
function BackgroundDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gradient-to-r from-emerald-200/20 to-blue-200/15 blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-gradient-to-l from-purple-200/20 to-pink-200/15 blur-3xl"></div>
    </div>
  );
}

/**
 * Server header section with title and quick connect info
 */
function ServerHeader({ onCopyIP, copied }) {
  return (
    <header className="text-center mb-16 max-w-4xl mx-auto">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
        Gem SMP <span className="accent-text">Minecraft Server</span>
      </h1>
      <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
        Craft unique elemental gems to gain powerful abilities. Competitive, ability-driven survival multiplayer with endless strategic possibilities.
      </p>
      <div className="card-glass border-emerald-200 p-6 shadow-lg max-w-2xl mx-auto">
        <p className="font-mono text-lg">
          <span className="font-bold text-gray-900">Server IP:</span> 
          <button
            onClick={onCopyIP}
            className="ml-3 px-3 py-1 bg-emerald-100 hover:bg-emerald-200 text-emerald-800 rounded-lg font-semibold transition-colors cursor-pointer border border-emerald-300 hover:border-emerald-400"
            title="Click to copy"
          >
            {copied ? '✓ Copied!' : MINECRAFT_SERVER.ip}
          </button>
        </p>
        <p className="text-gray-600 mt-2">{MINECRAFT_SERVER.version}</p>
      </div>
    </header>
  );
}

/**
 * Server overview section with core concept and key features
 */
function ServerOverview() {
  const features = [
    'Unique Gem Crafting System (one-of-each globally)',
    'Custom Powers & Special Abilities with cooldowns',
    'Fresh survival progression with custom items',
    'Balanced competitive PvP mechanics',
    'Events, giveaways, and seasonal resets',
    'Discord integration & active staff moderation',
    'Java + Bedrock cross-play support'
  ];

  return (
    <div className="prose prose-slate prose-lg prose-headings:font-bold max-w-none">
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <section className="card-glass p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 !mt-0">Core Concept</h2>
          <p className="text-gray-700 !mb-0">
            Discover and craft powerful one-of-a-kind elemental gems. Each gem can only be crafted once server-wide—claim it first to wield its passive buffs and an active ability. Mix strategy, exploration, and PvP mind-games as players race to unlock and protect their gem advantages.
          </p>
        </section>

        <section className="card-glass p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 !mt-0">Key Features</h2>
          <ul className="space-y-2 !mb-0">
            {features.map((feature, index) => (
              <li key={index} className="feature-item">
                <span className="feature-bullet"></span>
                {feature}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

/**
 * Elemental gems showcase section
 */
function GemsSection() {
  return (
    <section className="mb-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Elemental Gems & Abilities</h2>
        <p className="text-gray-600 mt-2">Discover and craft these unique elemental gems to gain powerful abilities</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {MINECRAFT_GEMS.map((gem, index) => (
          <div 
            key={gem.id} 
            className="animate-floatIn h-full"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <GemCard gem={gem} />
          </div>
        ))}
      </div>
    </section>
  );
}

/**
 * Detailed server information sections
 */
function ServerDetails({ onCopyIP, copied }) {
  return (
    <div className="prose prose-slate prose-lg prose-headings:font-bold max-w-none">
      <GemCraftingInfo />
      <GameplayLoop />
      <ServerRulesAndTech />
      <CallToAction onCopyIP={onCopyIP} copied={copied} />
    </div>
  );
}

/**
 * How gem crafting works section
 */
function GemCraftingInfo() {
  const steps = [
    'Each elemental recipe is secret until discovered.',
    'Only the first craft grants the gem permanently for the season.',
    'Passive effects apply while the gem is in inventory.',
    'Active abilities triggered via right-click; cooldown per gem.'
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-12 mb-16">
      <section className="card-glass p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 !mt-0">How Gem Crafting Works</h2>
        <ul className="space-y-3 !mb-0">
          {steps.map((step, index) => (
            <li key={index} className="step-item">
              <span className="step-number">
                {index + 1}
              </span>
              {step}
            </li>
          ))}
        </ul>
      </section>

      <section className="card-glass p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 !mt-0">Competitive Loop</h2>
        <p className="text-gray-700 !mb-0">
          Players rush early to locate resources, scout others, and attempt to solve gem recipes. Mid-game revolves around territorial control, ambushes, and protecting gem holders. Late-game culminates in coordinated raids, events, or alliances shifting power balance.
        </p>
      </section>
    </div>
  );
}

/**
 * Gameplay loop section
 */
function GameplayLoop() {
  return null; // This is now part of GemCraftingInfo
}

/**
 * Server rules and technical information
 */
function ServerRulesAndTech() {
  const rules = [
    'No griefing or altering player builds without consent',
    'No spawn killing (enforced with warnings)',
    'Major exploits (dupe, crash, hacks) prohibited; minor QoL exploits at discretion',
    'One account per player; alts banned',
    '3-strike warning system → temp ban at 3',
    'No doxxing, harassment, NSFW content'
  ];

  const techSpecs = [
    'PaperMC base with custom plugin layer for gem logic & abilities',
    'Performance tuned for entity caps, ticking, and region optimization',
    'Automated backups & monitoring',
    'Discord bot integration for status + event announcements'
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-12 mb-16">
      <section className="card-glass p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 !mt-0">Rules Snapshot</h2>
        <ul className="space-y-2 !mb-4">
          {rules.map((rule, index) => (
            <li key={index}>• {rule}</li>
          ))}
        </ul>
        <p className="text-sm text-gray-500 !mb-0">See full rules in the in-depth server docs.</p>
      </section>

      <section className="card-glass p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 !mt-0">Tech & Ops</h2>
        <ul className="space-y-2 !mb-0">
          {techSpecs.map((spec, index) => (
            <li key={index}>• {spec}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

/**
 * Call to action section with server join buttons
 */
function CallToAction({ onCopyIP, copied }) {
  const [inlineCopied, copyToClipboardInline] = useCopyToClipboard();
  
  const handleInlineCopyIP = () => copyToClipboardInline(MINECRAFT_SERVER.ip);

  return (
    <section className="text-center card-glass border-emerald-200 p-12 shadow-lg bg-gradient-to-r from-emerald-50 to-blue-50">
      <h2 className="text-3xl font-bold text-gray-900 mb-4 !mt-0">Join & Community</h2>
      <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
        Jump in at{' '}
        <button
          onClick={handleInlineCopyIP}
          className="px-2 py-1 bg-emerald-100 hover:bg-emerald-200 text-emerald-800 rounded font-mono transition-colors cursor-pointer border border-emerald-300 hover:border-emerald-400"
          title="Click to copy"
        >
          {inlineCopied ? '✓ Copied!' : MINECRAFT_SERVER.ip}
        </button>
        . Coordinate, trade, or recruit on Discord. Claim a gem, forge alliances, and shape the seasonal meta.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button 
          onClick={onCopyIP}
          className="btn-primary bg-emerald-600 hover:bg-emerald-700"
        >
          {copied ? '✓ IP Copied!' : '📋 Copy Server IP'}
        </button>
        <a 
          href="https://discord.com/invite/jGAubfCd"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary bg-blue-600 hover:bg-blue-700"
        >
          💬 Join Discord
        </a>
      </div>
    </section>
  );
}
