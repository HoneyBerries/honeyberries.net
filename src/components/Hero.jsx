import { Link } from 'react-router-dom';
const homeBanner = '/assets/backgrounds/home-banner.webp';
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
              <span className="accent-text">Building LLMs</span> that <span className="accent-text">automate</span> tasks and <span className="accent-text">improve</span> productivity.
            </h1>

            <p className="mt-5 text-gray-600 max-w-xl">
              Random person who likes building AI systems and tools that exponentially speed up <span className="accent-text">human productivity</span>.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button 
                as={Link} 
                to="/projects" 
                variant="primary"
              >
                Explore Projects
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
      <div className="card-glass p-6 max-w-md">
        <div className="aspect-video w-full rounded-xl overflow-hidden">
          <img 
            src={homeBanner} 
            alt="HoneyBerries portfolio showcase" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-4">
          <h3 className="font-semibold">What I enjoy doing</h3>
          <p className="mt-1 text-sm text-gray-600">
            Creating AI's, particularly large language models, to automate repetitive tasks.
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