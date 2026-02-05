import { EmailCard, DiscordCard, CallToAction } from '../components/contact';
import { GradientBackdrop } from '../components/backgrounds';
import { CONTACT_INFO, BACKGROUND_LAYERS } from '../lib/constants';
import { CONTACT_CONTENT } from '../lib/content';
import { StatsGrid } from '../components/ui';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { pulse } from '../lib/animations';

/**
 * Contact page component
 */
export default function Contact() {
  return (
    <div className="min-h-screen relative">
      <SEO
        title="Contact HoneyBerries"
        description="Contact HoneyBerries for collaboration, support, or questions about web development, Minecraft plugins, or AI bots."
        ogImage="/assets/backgrounds/minecraft-plugin-background.webp"
        pathname="/contact"
      />
      <GradientBackdrop layers={BACKGROUND_LAYERS.contact} />

      <main className="relative z-10 max-w-4xl mx-auto px-4 py-16" role="main">
        <ContactHeader />
        <ContactCards />
        <ContactStats />
        <CallToAction
          email={CONTACT_INFO.email}
          discordInviteUrl={CONTACT_INFO.discordInviteUrl}
          copy={CONTACT_CONTENT.cta}
        />
      </main>
    </div>
  );
}

/**
 * Enhanced contact page header
 */
function ContactHeader() {
  const [beforeTouch, afterTouch] = CONTACT_CONTENT.title.split('Touch');

  return (
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 border border-blue-200 mb-6">
        <motion.span className="w-2 h-2 rounded-full bg-blue-500" {...pulse()} />
        <span className="text-sm font-medium text-blue-700">{CONTACT_CONTENT.badgeLabel}</span>
      </div>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
        {beforeTouch || CONTACT_CONTENT.title}
        {afterTouch ? <span className="accent-text">Touch</span> : null}
        {afterTouch}
      </h1>
      <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto leading-relaxed">
        {CONTACT_CONTENT.description}
      </p>
    </motion.div>
  );
}

/**
 * Contact cards section with improved layout
 */
function ContactCards() {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <EmailCard email={CONTACT_INFO.email} copy={CONTACT_CONTENT.emailCard} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <DiscordCard
          discordUsername={CONTACT_INFO.discordUsername}
          discordInviteUrl={CONTACT_INFO.discordInviteUrl}
          copy={CONTACT_CONTENT.discordCard}
        />
      </motion.div>
    </div>
  );
}

/**
 * Contact stats/info section
 */
function ContactStats() {
  return (
    <motion.div 
      className="mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Quick Info</h2>
      <StatsGrid
        items={CONTACT_CONTENT.stats}
        animationStart={0.4}
        animationStep={0.1}
        gridClassName="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-center mx-auto"
        className="flex justify-center"
      />
    </motion.div>
  );
}