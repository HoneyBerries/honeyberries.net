import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

const navLinkClass = ({ isActive }) =>
  `px-3 py-2 text-sm font-medium rounded-md transition-colors ${
    isActive ? 'text-blue-700' : 'text-gray-700 hover:text-gray-900'
  }`

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-semibold tracking-tight">HoneyBerries</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>

            {/* Projects dropdown */}
            <div className="relative group">
              <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute left-0 mt-2 w-56 bg-white shadow-xl border border-gray-200 rounded-lg p-2">
                <Link to="/projects#minecraft-plugins" className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                  Minecraft Plugins
                </Link>
                <Link to="/projects#minecraft-server" className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                  Minecraft Server
                </Link>
                <Link to="/projects#discord-ai-agent" className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                  Discord AI Agent
                </Link>
              </div>
            </div>

            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </nav>

          {/* Mobile menu button */}
          <button onClick={() => setOpen(v => !v)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100">
            <span className="sr-only">Open menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              {open ? (
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M3.75 6.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zm0 4.5a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zm0 4.5a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" clipRule="evenodd" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <div className="md:hidden pb-3 animate-floatIn">
            <nav className="flex flex-col gap-1 border-t border-gray-200 pt-2">
              <NavLink onClick={() => setOpen(false)} to="/" className={navLinkClass}>Home</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/about" className={navLinkClass}>About</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/projects" className={navLinkClass}>Projects</NavLink>
              <div className="pl-3">
                <Link onClick={() => setOpen(false)} to="/projects#minecraft-plugins" className="block px-3 py-1.5 text-sm text-gray-600">• Minecraft Plugins</Link>
                <Link onClick={() => setOpen(false)} to="/projects#minecraft-server" className="block px-3 py-1.5 text-sm text-gray-600">• Minecraft Server</Link>
                <Link onClick={() => setOpen(false)} to="/projects#discord-ai-agent" className="block px-3 py-1.5 text-sm text-gray-600">• Discord AI Agent</Link>
              </div>
              <NavLink onClick={() => setOpen(false)} to="/contact" className={navLinkClass}>Contact</NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
