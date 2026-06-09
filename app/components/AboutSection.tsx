'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const SKILLS = [
  { label: '☕ Java',         variant: 'badge-primary'   },
  { label: '🐹 Go',           variant: 'badge-accent'    },
  { label: '⚡ TypeScript',   variant: 'badge-primary'   },
  { label: '⚛️ React',        variant: 'badge-primary'   },
  { label: '🌐 Next.js',      variant: 'badge-accent'    },
  { label: '🎨 Tailwind CSS', variant: 'badge-accent'    },
  { label: '⛏️ Fabric API',   variant: 'badge-secondary' },
  { label: '📄 PaperMC',      variant: 'badge-secondary' },
  { label: '🤖 JDA',          variant: 'badge-neutral'   },
  { label: '🐘 PostgreSQL',   variant: 'badge-neutral'   },
]

const easeOutExpo = [0.16, 1, 0.3, 1] as const

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="section">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ ease: easeOutExpo, duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <span className="badge badge-neutral w-fit">About me 🍯</span>
            <h2>Hi, I&apos;m HoneyBerries! 👋</h2>
            <p className="text-[var(--color-text-muted)] leading-relaxed">
              I&apos;m an indie developer based in the Bay Area 🌉 I build Minecraft
              mods and plugins, Discord bots, and web projects — all under the
              HoneyBerries brand.
            </p>
            <p className="text-[var(--color-text-muted)] leading-relaxed">
              My biggest project is <strong>Gem SMP</strong> 💎 — a Minecraft SMP where
              custom gems grant players unique powers and abilities. Outside of that,
              I love math, systems programming, and learning new things 📚
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://github.com/HoneyBerries"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-fit"
              >
                GitHub ↗
              </a>
              <a
                href="https://modrinth.com/user/HoneyBerries"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary w-fit"
              >
                Modrinth ↗
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ ease: easeOutExpo, duration: 0.6, delay: 0.1 }}
            className="card"
          >
            <h3 className="text-base font-semibold text-[var(--color-text)] mb-4">
              Tech stack 🛠️
            </h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map(({ label, variant }) => (
                <span key={label} className={`badge ${variant}`}>
                  {label}
                </span>
              ))}
            </div>

            <div className="divider my-5" />

            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { value: '18+', label: 'Public repos 📦' },
                { value: '5+',  label: 'Live projects 🚀' },
                { value: '∞',   label: 'Lines of Java ☕' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-bold gradient-text">{value}</p>
                  <p className="text-xs text-[var(--color-text-subtle)] mt-1 leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
