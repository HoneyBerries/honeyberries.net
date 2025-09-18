import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Card from '../components/ui/Card';
import { HOME_FEATURES } from '../lib/data';
import SEO from '../components/SEO';
import heroImg from '../assets/backgrounds/home-banner.webp';

/**
 * Home page component
 */
export default function Home() {
  return (
    <>
      <SEO
        title="HoneyBerries Portfolio — Modern Web & AI Projects"
        description="Explore HoneyBerries' portfolio of modern web apps, AI bots, and open-source projects. Sleek, performant, and built for real communities."
        ogImage={heroImg}
      />
      <Hero />
      <FeaturesSection />
      <Footer />
    </>
  );
}

/**
 * Features section component
 */
function FeaturesSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 pb-16">
      <div className="grid sm:grid-cols-3 gap-4">
        {HOME_FEATURES.map((feature) => (
          <Card key={feature.title} variant="default" className="card-glass">
            <h3 className="font-semibold">{feature.title}</h3>
            <p className="mt-1 text-sm text-gray-600">{feature.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
