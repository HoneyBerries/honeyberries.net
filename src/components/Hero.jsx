import { Link } from 'react-router-dom';
import homeBanner from '../assets/backgrounds/home-banner.webp';
import { SKILLS } from '../lib/constants';
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
          <div className="animate-floatIn">
            <p className="text-sm font-semibold tracking-wider text-emerald-600 uppercase">
              Hello, I'm HoneyBerries
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Building <span className="accent-text">useful</span> things for the web, games, and communities.
            </h1>
            <p className="mt-5 text-gray-600 max-w-xl">
              Developer focused on performant, clean, and delightful experiences.
              I make Minecraft plugins/servers and AI-powered Discord agents.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button 
                as={Link} 
                to="/projects" 
                className="glow"
                aria-label="View my projects"
              >
                Explore Projects
                <span className="inline-block animate-bounceX" aria-hidden="true">→</span>
              </Button>
              <Button 
                as={Link} 
                to="/contact" 
                variant="secondary"
              >
                Get in touch
              </Button>
            </div>
          </div>
          
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
      <div className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm p-6 shadow-sm max-w-md">
        <div className="aspect-video w-full rounded-xl overflow-hidden">
          <img 
            src={homeBanner} 
            alt="HoneyBerries portfolio showcase" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-4">
          <h3 className="font-semibold">What I do</h3>
          <p className="mt-1 text-sm text-gray-600">
            Full-stack development, game servers, plugin ecosystems, and AI agents.
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