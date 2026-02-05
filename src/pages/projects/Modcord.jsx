import SEO from '@components/SEO';
import { GradientBackdrop } from '@components/backgrounds';
import { BACKGROUND_LAYERS, EXTERNAL_LINKS, ICON_PATHS } from '@lib/constants';
import { MODCORD_CONTENT } from '@lib/content';
import { gradientStyle } from '@lib/styles';
import { Link } from 'react-router-dom';
import { Button } from '@components/ui';
import { motion } from 'framer-motion';

/**
 * Modcord project page
 * Showcases the AI moderation bot for Discord
 */
export default function Modcord() {
  return (
    <div className="min-h-screen relative">
      <SEO
        title="Modcord, AI Moderation Bot for Discord"
        description="Modcord uses AI to provide intelligent, context-aware moderation for Discord servers. Designed for privacy and scalability."
        ogImage="/assets/backgrounds/modcord-background.webp"
        pathname="/projects/modcord"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://honeyberries.net/" },
            { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://honeyberries.net/projects" },
            { "@type": "ListItem", "position": 3, "name": "Modcord", "item": "https://honeyberries.net/projects/modcord" }
          ]
        }}
      />
      <GradientBackdrop layers={BACKGROUND_LAYERS.modcord} />
      
      <div className="relative z-10">
        <article className="max-w-6xl mx-auto px-4 py-12">
          <ModcordHeader />
          <FeaturesSection />
          <CallToActionSection />
        </article>
      </div>
    </div>
  );
}

/**
 * Hero header section
 */
function ModcordHeader() {
  return (
    <motion.header 
      className="text-center mb-16 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
        Modcord: <span className="accent-text">Smart AI Moderation</span> for Your Discord Server
      </h1>
      <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
        {MODCORD_CONTENT.headerLead}
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        {MODCORD_CONTENT.heroButtons.map((btn) => (
          <Button
            key={btn.label}
            as="a"
            href={btn.href}
            target="_blank"
            rel="noopener noreferrer"
            variant={btn.variant}
            className="rounded-lg whitespace-nowrap gap-2"
            style={btn.gradientKey ? gradientStyle(btn.gradientKey) : undefined}
          >
            {btn.icon === 'discord' && (
              <img src={ICON_PATHS.discord} alt="Discord" className="w-5 h-5" />
            )}
            {btn.icon === 'github' && (
              <img src={ICON_PATHS.github} alt="GitHub" className="w-5 h-5" />
            )}
            {btn.label}
          </Button>
        ))}
      </div>
    </motion.header>
  );
}

/**
 * Features section with animated cards
 */
function FeaturesSection() {
  return (
    <motion.section 
      className="mb-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-950 mb-2">Why Choose ModCord over Others?</h3>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {MODCORD_CONTENT.features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className={`card-glass p-8 h-full bg-linear-to-br ${feature.gradient}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            whileHover={{ 
              y: -8,
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

/**
 * Call to action section
 */
function CallToActionSection() {
  return (
    <motion.section 
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="card-glass p-8 max-w-4xl mx-auto bg-linear-to-r from-blue-50/50 to-purple-50/50">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{MODCORD_CONTENT.cta.heading}</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {MODCORD_CONTENT.cta.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            as="a"
            href={EXTERNAL_LINKS.modcordInvite}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            style={gradientStyle('emeraldBlueBright')}
          >
            Get Started
          </Button>
          <Button
            as={Link}
            to="/contact"
            variant="primary"
            style={gradientStyle('orangePurple')}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
