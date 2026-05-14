'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const easeOutExpo = [0.16, 1, 0.3, 1] as const

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" ref={ref} className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ ease: easeOutExpo, duration: 0.6 }}
          className="card max-w-2xl mx-auto text-center flex flex-col items-center gap-6 py-16"
        >
          <span className="badge badge-secondary">Connect 💌</span>
          <h2>Say hi! 👋</h2>
          <p className="text-[var(--color-text-muted)] max-w-md leading-relaxed">
            Check out my projects on GitHub or find my mods on Modrinth.
            Always happy to connect with fellow Minecraft fans and devs! 🎮
          </p>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <a
              href="https://github.com/HoneyBerries"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              GitHub ↗
            </a>
            <a
              href="https://modrinth.com/user/HoneyBerries"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-lg"
            >
              Modrinth ↗
            </a>
            <a
              href="https://top.gg/bot/modcord"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-lg"
            >
              Top.gg ↗
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
