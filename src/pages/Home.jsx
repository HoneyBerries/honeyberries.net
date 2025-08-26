import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Card from '../components/ui/Card';
import { HOME_FEATURES } from '../lib/data';

/**
 * Home page component
 */
export default function Home() {
  return (
    <>
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
