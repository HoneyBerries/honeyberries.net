import { Link } from 'react-router-dom'
import homeBanner from '../assets/backgrounds/home-banner.webp'

const skills = ['Python', 'Java', 'PaperMC Plugins', 'Discord Bots', 'LLMs', "AI Agents"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-20 sm:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-floatIn">
            <p className="text-sm font-semibold tracking-wider text-emerald-600 uppercase">Hello, I’m HoneyBerries</p>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Building <span className="accent-text">useful</span> things for the web, games, and communities.
            </h1>
            <p className="mt-5 text-gray-600 max-w-xl">
              Developer focused on performant, clean, and delightful experiences.
              I make Minecraft plugins/servers and AI-powered Discord agents.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/projects" className="glow inline-flex items-center gap-2 rounded-lg bg-blue-600 text-white px-5 py-3 text-sm font-semibold shadow transition hover:-translate-y-0.5">
                Explore Projects
                <span className="inline-block animate-bounceX">→</span>
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white/80 backdrop-blur-sm text-gray-800 px-5 py-3 text-sm font-semibold shadow-sm hover:shadow transition">
                Get in touch
              </Link>
            </div>
          </div>
          <div className="relative md:justify-self-end">
            <div className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm p-6 shadow-sm max-w-md">
              <div className="aspect-video w-full rounded-xl overflow-hidden">
                <img src={homeBanner} alt="Home banner" className="w-full h-full object-cover" />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold">What I do</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Full-stack development, game servers, plugin ecosystems, and AI agents.
                </p>
                <ul className="mt-3 flex flex-wrap gap-2 text-xs text-gray-700">
                  {skills.map(t => (
                    <li key={t} className="rounded-full border border-gray-200 px-3 py-1 bg-white/70 backdrop-blur-sm">{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
