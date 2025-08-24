import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Card from '../components/ui/Card';
import { features } from '../constants';

export default function Home() {
  return (
    <>
      <Hero />
      <section className="section-container">
        <div className="grid sm:grid-cols-3 gap-4">
          {features.map((feature) => (
            <Card key={feature.title} hover>
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{feature.desc}</p>
            </Card>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
