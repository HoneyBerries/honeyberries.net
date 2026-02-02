import SEO from '../../components/SEO';
import { GemCard } from '../../components/cards';
import { GradientBackdrop } from '../../components/backgrounds';
import { Button, FeatureList } from '../../components/ui';
import { MINECRAFT_GEMS } from '../../lib/data';
import { MINECRAFT_SERVER, BACKGROUND_LAYERS } from '../../lib/constants';
import { GEM_SERVER_CONTENT } from '../../lib/content';
import { gradientStyle } from '../../lib/styles';
import { useCopyToClipboard } from '../../hooks';
import { motion } from 'framer-motion';
import { floatIn } from '../../lib/animations';

export default function MinecraftServer() {
  const [headerCopied, copyHeader] = useCopyToClipboard();
  const [inlineCopied, copyInline] = useCopyToClipboard();

  const handleCopyIPHeader = () => copyHeader(MINECRAFT_SERVER.ip);
  const handleCopyIPInline = () => copyInline(MINECRAFT_SERVER.ip);

  return (
    <div className="min-h-screen relative">
      <SEO
        title="Gem SMP — Minecraft Server by HoneyBerries"
        description="Gem SMP is a custom Minecraft server featuring elemental gems, unique abilities, and cross-play support. Learn more about the server and how to join."
        ogImage="/assets/backgrounds/gem-smp-background.webp"
        pathname="/projects/gem-smp"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://honeyberries.net/" },
            { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://honeyberries.net/projects" },
            { "@type": "ListItem", "position": 3, "name": "Gem SMP", "item": "https://honeyberries.net/projects/gem-smp" }
          ]
        }}
      />

      <GradientBackdrop layers={BACKGROUND_LAYERS.minecraftServer} />

      <div className="relative z-10">
        <article className="max-w-6xl mx-auto px-4 py-12 space-y-16">
          <ServerHeader copied={inlineCopied} onCopyIP={handleCopyIPInline} />
          <ServerOverview />
          <GemsSection />
          <ServerDetails copied={headerCopied} onCopyIP={handleCopyIPHeader} />
        </article>
      </div>
    </div>
  );
}

/* ---------- COMPONENTS ---------- */

const MotionSection = ({ children, delay = 0 }) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.section>
);

function ServerHeader({ copied, onCopyIP }) {
  return (
    <MotionSection>
      <header className="text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
        >
          <span className="accent-text">Gem SMP</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl text-gray-600 mb-8 leading-relaxed"
        >
          {GEM_SERVER_CONTENT.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="card-glass border-emerald-200 p-6 shadow-lg max-w-2xl mx-auto"
        >
          <p className="font-mono text-lg">
            <span className="font-bold text-gray-900">Server IP:</span>
            <button
              onClick={onCopyIP}
              className="ml-3 px-3 py-1 bg-emerald-100 hover:bg-emerald-200 text-emerald-800 rounded-lg font-semibold border border-emerald-300 hover:border-emerald-400 transition-colors"
              title="Click to copy"
            >
              {copied ? '✓ Copied!' : MINECRAFT_SERVER.ip}
            </button>
          </p>
          <p className="text-gray-600 mt-2">{MINECRAFT_SERVER.version}</p>
        </motion.div>
      </header>
    </MotionSection>
  );
}

function ServerOverview() {
  return (
    <MotionSection delay={0.2}>
      <div className="grid lg:grid-cols-2 gap-12">
        <InfoCard title="Core Concept">{GEM_SERVER_CONTENT.overview.coreConcept}</InfoCard>
        <InfoCard title="Key Features">
          <FeatureList items={GEM_SERVER_CONTENT.overview.features} />
        </InfoCard>
      </div>
    </MotionSection>
  );
}

function GemsSection() {
  return (
    <MotionSection delay={0.4}>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Elemental Gems & Abilities</h2>
      <p className="text-gray-600 mb-6">{GEM_SERVER_CONTENT.gemsLead}</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {MINECRAFT_GEMS.map((gem) => (
          <GemCard key={gem.id} gem={gem} />
        ))}
      </div>
    </MotionSection>
  );
}

function ServerDetails({ copied, onCopyIP }) {
  return (
    <MotionSection delay={0.6}>
      <div className="space-y-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <InfoCard title="How Gem Crafting Works">
            <ul className="space-y-3">
              {GEM_SERVER_CONTENT.gemSteps.map((step, i) => (
                <li key={step}>
                  <span className="step-number">{i + 1}</span> {step}
                </li>
              ))}
            </ul>
          </InfoCard>

          <InfoCard title="Competitive Loop">{GEM_SERVER_CONTENT.competitiveLoop}</InfoCard>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <InfoCard title="Rules Snapshot">
            <FeatureList items={GEM_SERVER_CONTENT.rules} />
            <p className="text-sm text-gray-500 mt-2">See full rules in the in-depth server docs.</p>
          </InfoCard>

          <InfoCard title="Tech & Ops">
            <FeatureList items={GEM_SERVER_CONTENT.techSpecs} />
          </InfoCard>
        </div>

        <CallToAction copied={copied} onCopyIP={onCopyIP} />
      </div>
    </MotionSection>
  );
}

function CallToAction({ copied, onCopyIP }) {
  const [inlineCopied, copyInline] = useCopyToClipboard();
  const handleInlineCopy = () => copyInline(MINECRAFT_SERVER.ip);
  const descriptionParts = GEM_SERVER_CONTENT.cta.description.split(MINECRAFT_SERVER.ip);

  return (
    <MotionSection delay={0.8}>
      <section className="text-center card-glass border-emerald-200 p-12 shadow-lg bg-linear-to-r from-emerald-50 to-blue-50 rounded-3xl space-y-6">
        <h2 className="text-3xl font-bold">{GEM_SERVER_CONTENT.cta.heading}</h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          {descriptionParts[0]}
          <button
            onClick={handleInlineCopy}
            className="px-2 py-1 bg-emerald-100 hover:bg-emerald-200 text-emerald-800 rounded-lg font-mono border border-emerald-300 hover:border-emerald-400 transition-colors"
          >
            {inlineCopied ? '✓ Copied!' : MINECRAFT_SERVER.ip}
          </button>
          {descriptionParts[1] || ''}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={onCopyIP} className="btn-primary" style={gradientStyle('emeraldBlue')}>
            {copied ? 'IP Copied!' : GEM_SERVER_CONTENT.cta.primaryLabel}
          </Button>
          <Button
            as="a"
            href={GEM_SERVER_CONTENT.cta.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="rounded-lg whitespace-nowrap gap-2"
            style={gradientStyle('purpleBlue')}
          >
            {GEM_SERVER_CONTENT.cta.discordLabel}
          </Button>
        </div>
      </section>
    </MotionSection>
  );
}

/* ---------- UTILITY COMPONENT ---------- */
function InfoCard({ title, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="card-glass p-8"
    >
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {children}
    </motion.section>
  );
}