import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const homeBanner = '/assets/backgrounds/home-banner.webp';
import { SKILLS } from '../lib/constants';
import { HERO_CONTENT } from '../lib/content';
import Button from './ui/Button';
import Badge from './ui/Badge';

/**
 * Hero section component for the homepage
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-20 sm:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold tracking-wider text-emerald-600 uppercase">
              {HERO_CONTENT.eyebrow}
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              {HERO_CONTENT.headlineParts.map((part, idx) => (
                <span key={`${part.text}-${idx}`} className={part.accent ? 'accent-text' : ''}>
                  {part.text} {idx === HERO_CONTENT.headlineParts.length - 1 ? '' : ' '}
                </span>
              ))}
            </h1>

            <p className="mt-5 text-gray-600 max-w-xl">
              {HERO_CONTENT.subhead.split('human productivity').map((chunk, index, arr) => (
                <span key={chunk + index}>
                  {chunk}
                  {index < arr.length - 1 && <span className="accent-text">human productivity</span>}
                </span>
              ))}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {HERO_CONTENT.ctas.map((cta) => (
                <Button
                  key={cta.label}
                  as={Link}
                  to={cta.to}
                  variant={cta.variant}
                >
                  {cta.label}
                </Button>
              ))}
            </div>
          </motion.div>
          
          <HeroCard />
        </div>
      </div>
    </section>
  );
}

/**
 * Hero card component with skills display
 */
function HeroCard() {
  return (
    <div className="relative md:justify-self-end">
      <div className="card-glass p-6 max-w-md">
        <div className="aspect-video w-full rounded-xl overflow-hidden">
          <img 
            src={homeBanner} 
            alt="HoneyBerries portfolio showcase" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-4">
          <h3 className="font-semibold">{HERO_CONTENT.cardTitle}</h3>
          <p className="mt-1 text-sm text-gray-600">
            {HERO_CONTENT.cardDescription}
          </p>
          <ul className="mt-3 flex flex-wrap gap-2" role="list" aria-label="Technologies and skills">
            {SKILLS.map(skill => (
              <li key={skill}>
                <Badge variant="default" size="sm">
                  {skill}
                </Badge>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}