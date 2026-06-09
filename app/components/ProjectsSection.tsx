'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const PROJECTS = [
  {
    emoji:   '💎',
    title:   'Gem SMP',
    desc:    'My flagship Minecraft SMP where custom gems grant players unique powers and special abilities. Built with a custom PaperMC plugin from scratch.',
    tags:    [
      { label: '☕ Java',    variant: 'badge-primary'   },
      { label: '📄 PaperMC', variant: 'badge-secondary' },
      { label: '⛏️ Minecraft', variant: 'badge-accent'  },
    ],
    href:    'https://github.com/HoneyBerries/GemMod',
    variant: '',
  },
  {
    emoji:   '🤖',
    title:   'Modcord',
    desc:    'AI-powered Discord moderation bot with message filtering and automated moderation actions. Deployed publicly on Top.gg.',
    tags:    [
      { label: '☕ Java',        variant: 'badge-primary'   },
      { label: '🤖 JDA',        variant: 'badge-secondary' },
      { label: '🐘 PostgreSQL', variant: 'badge-neutral'   },
    ],
    href:    'https://github.com/HoneyBerries/Modcord',
    variant: 'card-secondary',
  },
  {
    emoji:   '🎮',
    title:   'Fabric Mods',
    desc:    'A collection of Fabric mods for Minecraft — FPSDisplay, AutoClutch, and PlayerHealthIndicators. Published on Modrinth.',
    tags:    [
      { label: '☕ Java',      variant: 'badge-primary'   },
      { label: '⚡ Fabric API', variant: 'badge-accent'   },
      { label: '🟩 Modrinth',  variant: 'badge-neutral'   },
    ],
    href:    'https://modrinth.com/user/HoneyBerries',
    variant: 'card-accent',
  },
  {
    emoji:   '🖱️',
    title:   'InputEventHandler',
    desc:    'A Go utility library for sending keystrokes and mouse clicks on Windows. Built for automation and input timing use cases.',
    tags:    [
      { label: '🐹 Go',      variant: 'badge-accent'  },
      { label: '🪟 Windows', variant: 'badge-neutral' },
    ],
    href:    'https://github.com/HoneyBerries/InputEventHandler',
    variant: '',
  },
  {
    emoji:   '🔗',
    title:   'LifeSteal Plugin',
    desc:    'A PaperMC plugin implementing the popular LifeSteal SMP mechanic — steal hearts from players you defeat in combat.',
    tags:    [
      { label: '☕ Java',    variant: 'badge-primary'   },
      { label: '📄 PaperMC', variant: 'badge-secondary' },
    ],
    href:    'https://github.com/HoneyBerries/LifeSteal',
    variant: 'card-secondary',
  },
  {
    emoji:   '🏪',
    title:   'More Plugins',
    desc:    'A whole bunch of PaperMC plugins: XPBottling, BetterSpawnProtect, ExplodingPlayers, PlayerNotifications, PingPlayer, and more!',
    tags:    [
      { label: '☕ Java',    variant: 'badge-primary'   },
      { label: '📄 PaperMC', variant: 'badge-secondary' },
      { label: '📦 Open Source', variant: 'badge-neutral' },
    ],
    href:    'https://github.com/HoneyBerries',
    variant: 'card-accent',
  },
]

const easeOutExpo = [0.16, 1, 0.3, 1] as const

export default function ProjectsSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" ref={ref} className="section gradient-surface">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ ease: easeOutExpo, duration: 0.5 }}
          className="flex flex-col items-center text-center gap-3 mb-12"
        >
          <span className="badge badge-neutral">Projects 🚀</span>
          <h2>Things I&apos;ve built ✨</h2>
          <p className="max-w-md text-[var(--color-text-muted)]">
            From Minecraft plugins to Discord bots — here&apos;s what I&apos;ve been working on 🛠️
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map(({ emoji, title, desc, tags, href, variant }, i) => (
            <motion.a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ ease: easeOutExpo, duration: 0.55, delay: i * 0.07 }}
              className={`card ${variant} flex flex-col gap-4 no-underline`}
            >
              <div className="text-3xl">{emoji}</div>
              <h3 className="text-base font-semibold text-[var(--color-text)]">
                {title}
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed flex-1">
                {desc}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {tags.map(({ label, variant: tv }) => (
                  <span key={label} className={`badge ${tv}`}>{label}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  )
}
