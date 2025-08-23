import Footer from '../../components/Footer';
import GemCard from '../../components/GemCard';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// Import gem icons
import airGem from '../../assets/icons/gem-icons/air_gem.png';
import fireGem from '../../assets/icons/gem-icons/fire_gem.png';
import waterGem from '../../assets/icons/gem-icons/water_gem.png';
import earthGem from '../../assets/icons/gem-icons/earth_gem.png';
import iceGem from '../../assets/icons/gem-icons/ice_gem.png';
import darknessGem from '../../assets/icons/gem-icons/darkness_gem.png';
import lightGem from '../../assets/icons/gem-icons/light_gem.png';

/**
 * Minecraft Server (Gem SMP) detailed project page.
 * Structured for future expansion: keep each project in /pages/projects/<Name>.jsx
 */
export default function MinecraftServer() {
  const [copied, setCopied] = useState(false);
  const [inlineCopied, setInlineCopied] = useState(false);
  const serverIP = 'gemsmp.honeyberries.net';

  const handleCopyIP = async () => {
    try {
      await navigator.clipboard.writeText(serverIP);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = serverIP;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleInlineCopyIP = async () => {
    try {
      await navigator.clipboard.writeText(serverIP);
      setInlineCopied(true);
      setTimeout(() => setInlineCopied(false), 2000);
    } catch {
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = serverIP;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setInlineCopied(true);
      setTimeout(() => setInlineCopied(false), 2000);
    }
  };
  return (
    <div className="min-h-screen relative">
      {/* Subtle background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gradient-to-r from-emerald-200/20 to-blue-200/15 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-gradient-to-l from-purple-200/20 to-pink-200/15 blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <article className="max-w-6xl mx-auto px-4 py-12">
          {/* Hero Section */}
          <header className="text-center mb-16 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/80 border border-emerald-200 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-sm font-medium text-emerald-700">Live Minecraft Server</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Gem SMP <span className="accent-text">Minecraft Server</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Craft unique elemental gems to gain powerful abilities. Competitive, ability-driven survival multiplayer with endless strategic possibilities.
            </p>
            <div className="bg-white/80 backdrop-blur-sm border border-emerald-200 rounded-2xl p-6 shadow-lg max-w-2xl mx-auto">
              <p className="font-mono text-lg">
                <span className="font-bold text-gray-900">Server IP:</span> 
                <button
                  onClick={handleInlineCopyIP}
                  className="ml-3 px-3 py-1 bg-emerald-100 hover:bg-emerald-200 text-emerald-800 rounded-lg font-semibold transition-colors cursor-pointer border border-emerald-300 hover:border-emerald-400"
                  title="Click to copy"
                >
                  {inlineCopied ? '✓ Copied!' : serverIP}
                </button>
              </p>
              <p className="text-gray-600 mt-2">Java 1.21.4+ and Bedrock on port 19132</p>
            </div>
          </header>

          {/* Main Content */}
          <div className="prose prose-slate prose-lg prose-headings:font-bold max-w-none">
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <section className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 !mt-0">Core Concept</h2>
                <p className="text-gray-700 !mb-0">
                  Discover and craft powerful one-of-a-kind elemental gems. Each gem can only be crafted once server-wide—claim it first to wield its passive buffs and an active ability. Mix strategy, exploration, and PvP mind-games as players race to unlock and protect their gem advantages.
                </p>
              </section>

              <section className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 !mt-0">Key Features</h2>
                <ul className="space-y-2 !mb-0">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                    Unique Gem Crafting System (one-of-each globally)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                    Custom Powers & Special Abilities with cooldowns
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                    Fresh survival progression with custom items
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                    Balanced competitive PvP mechanics
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                    Events, giveaways, and seasonal resets
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                    Discord integration & active staff moderation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                    Java + Bedrock cross-play support
                  </li>
                </ul>
              </section>
            </div>

            {/* Gem Cards Section */}
            <section className="mb-16">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 !mb-0">Elemental Gems & Abilities</h2>
                <p className="text-gray-600 mt-2">Discover and craft these unique elemental gems to gain powerful abilities</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 not-prose items-stretch">
                {GEMS.map((g, index) => (
                  <div 
                    key={g.id} 
                    className="animate-floatIn h-full"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <GemCard gem={g} />
                  </div>
                ))}
              </div>
            </section>

            {/* Additional Sections */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <section className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 !mt-0">How Gem Crafting Works</h2>
                <ul className="space-y-3 !mb-0">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">1</span>
                    Each elemental recipe is secret until discovered.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</span>
                    Only the first craft grants the gem permanently for the season.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</span>
                    Passive effects apply while the gem is in inventory.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">4</span>
                    Active abilities triggered via right-click; cooldown per gem.
                  </li>
                </ul>
              </section>

              <section className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 !mt-0">Competitive Loop</h2>
                <p className="text-gray-700 !mb-0">
                  Players rush early to locate resources, scout others, and attempt to solve gem recipes. Mid-game revolves around territorial control, ambushes, and protecting gem holders. Late-game culminates in coordinated raids, events, or alliances shifting power balance.
                </p>
              </section>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <section className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 !mt-0">Rules Snapshot</h2>
                <ul className="space-y-2 !mb-4">
                  <li>• No griefing or altering player builds without consent</li>
                  <li>• No spawn killing (enforced with warnings)</li>
                  <li>• Major exploits (dupe, crash, hacks) prohibited; minor QoL exploits at discretion</li>
                  <li>• One account per player; alts banned</li>
                  <li>• 3-strike warning system → temp ban at 3</li>
                  <li>• No doxxing, harassment, NSFW content</li>
                </ul>
                <p className="text-sm text-gray-500 !mb-0">See full rules in the in-depth server docs.</p>
              </section>

              <section className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 !mt-0">Tech & Ops</h2>
                <ul className="space-y-2 !mb-0">
                  <li>• PaperMC base with custom plugin layer for gem logic & abilities</li>
                  <li>• Performance tuned for entity caps, ticking, and region optimization</li>
                  <li>• Automated backups & monitoring</li>
                  <li>• Discord bot integration for status + event announcements</li>
                </ul>
              </section>
            </div>

            {/* Call to Action */}
            <section className="text-center bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200 rounded-2xl p-12 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 !mt-0">Join & Community</h2>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Jump in at{' '}
                <button
                  onClick={handleInlineCopyIP}
                  className="px-2 py-1 bg-emerald-100 hover:bg-emerald-200 text-emerald-800 rounded font-mono transition-colors cursor-pointer border border-emerald-300 hover:border-emerald-400"
                  title="Click to copy"
                >
                  {inlineCopied ? '✓ Copied!' : serverIP}
                </button>
                . Coordinate, trade, or recruit on Discord. Claim a gem, forge alliances, and shape the seasonal meta.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleCopyIP}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  {copied ? '✓ IP Copied!' : '📋 Copy Server IP'}
                </button>
                <a 
                  href="https://discord.com/invite/jGAubfCd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  💬 Join Discord
                </a>
              </div>
            </section>
          </div>
        </article>
        
        <Footer />
      </div>
    </div>
  );
}

const GEMS = [
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
