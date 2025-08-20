import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-emerald-100 blur-3xl opacity-60"></div>
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-blue-100 blur-3xl opacity-60"></div>
      </div>
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
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white text-gray-800 px-5 py-3 text-sm font-semibold shadow-sm hover:shadow transition">
                Get in touch
              </Link>
            </div>
          </div>
          <div className="relative md:justify-self-end">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm max-w-md">
              <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-emerald-200 via-blue-200 to-purple-200" />
              <div className="mt-4">
                <h3 className="font-semibold">What I do</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Full-stack development, game servers, plugin ecosystems, and AI agents.
                </p>
                <ul className="mt-3 flex flex-wrap gap-2 text-xs text-gray-700">
                  {['Python', 'Java', 'PaperMC Plugins', 'Discord Bots', 'LLMs', "AI Agents"].map(t => (
                    <li key={t} className="rounded-full border border-gray-200 px-3 py-1 bg-white">{t}</li>
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
