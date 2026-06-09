'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'About',    href: '#about'    },
  { label: 'Contact',  href: '#contact'  },
]

export default function Navbar() {
  const { scrollY } = useScroll()
  const shadow = useTransform(scrollY, [0, 60], [0, 1])

  return (
    <motion.header className="navbar" style={{ boxShadow: `0 1px 0 rgba(229,231,235,${shadow})` }}>
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="text-base font-bold gradient-text">
          🍯 HoneyBerries
        </a>

        <nav className="flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="px-4 py-2 rounded-[var(--radius-lg)] text-sm font-medium
                         text-[var(--color-text-muted)] transition-colors duration-[150ms]
                         hover:text-[var(--color-text)] hover:bg-[var(--color-surface-muted)]"
            >
              {label}
            </a>
          ))}
          <a
            href="https://github.com/HoneyBerries"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm ml-3"
          >
            GitHub ↗
          </a>
        </nav>
      </div>
    </motion.header>
  )
}
