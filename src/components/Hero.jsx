import { Link } from 'react-router-dom';
import { skills } from '../constants';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-emerald-100 blur-3xl opacity-60" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-blue-100 blur-3xl opacity-60" />
      </div>
      <div className="max-w-6xl mx-auto px-4 py-20 sm:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-floatIn">
            <p className="text-sm font-semibold tracking-wider text-emerald-600 uppercase">Hello, I'm HoneyBerries</p>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Building <span className="accent-text">useful</span> things for the web, games, and communities.
            </h1>
            <p className="mt-5 text-gray-600 max-w-xl">
              Developer focused on performant, clean, and delightful experiences.
              I make Minecraft plugins/servers and AI-powered Discord agents.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/projects" className="glow btn-primary">
                Explore Projects
                <span className="inline-block animate-bounceX">→</span>
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get in touch
              </Link>
            </div>
          </div>

          <div className="relative md:justify-self-end">
            <div className="card-base p-6 max-w-md">
              <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-emerald-200 via-blue-200 to-purple-200" />
              <div className="mt-4">
                <h3 className="font-semibold">What I do</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Full-stack development, game servers, plugin ecosystems, and AI agents.
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <li key={skill} className="skill-tag">{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}