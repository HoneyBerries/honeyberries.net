import { motion } from 'framer-motion';
import { Card } from '@components/ui';
import { Hero } from '@components';
import { HOME_FEATURES } from '@lib/data';
import SEO from '@components/SEO';

/**
 * Home page component
 * Features hero section and animated feature cards
 */
export default function Home() {
  return (
    <>
      <SEO
        title="HoneyBerries - Some random guy on the internet"
        description="HoneyBerries builds sleek web applications, Minecraft plugins, and AI-powered Discord bots. Explore projects and get in touch."
        ogImage="/assets/backgrounds/home-banner.webp"
        pathname="/"
      />
      <Hero />
      <FeaturesSection features={HOME_FEATURES} />
    </>
  );
}

/**
 * Features section with animated cards
 */
function FeaturesSection({ features }) {
  return (
    <section
      className="max-w-6xl mx-auto px-4 pb-16"
      aria-labelledby="features-heading"
    >
      <h2 id="features-heading" className="sr-only">
        Featured capabilities
      </h2>
      <div className="grid sm:grid-cols-3 gap-6">
        {features.map(({ title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.03, y: -4 }}
          >
            <Card
              variant="default"
              className="card-glass h-full"
            >
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
