'use client'

import { motion } from 'framer-motion'

const easeOutExpo = [0.16, 1, 0.3, 1] as const

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { ease: easeOutExpo, duration: 0.6, delay },
})

export default function HeroSection() {
  return (
    <section className="section gradient-surface relative overflow-hidden">
      <div className="container flex flex-col items-center text-center gap-8 py-24">

        <motion.div {...fadeUp(0)} className="flex items-center gap-2">
          <span className="badge badge-accent">⛏️ Minecraft</span>
          <span className="badge badge-primary">☕ Java</span>
          <span className="badge badge-secondary">🌐 Web</span>
        </motion.div>

        <motion.h1 {...fadeUp(0.08)} className="max-w-3xl">
          Independent dev &amp;{' '}
          <span className="gradient-text-wide">Minecraft creator</span> 💎
        </motion.h1>

        <motion.p
          {...fadeUp(0.16)}
          className="max-w-xl text-lg text-[var(--color-text-muted)] leading-relaxed"
        >
          I&apos;m HoneyBerries — I build Minecraft mods, PaperMC plugins, Discord bots,
          and whatever else sounds fun 🎮✨
        </motion.p>

        <motion.div {...fadeUp(0.24)} className="flex items-center gap-3 flex-wrap justify-center">
          <a href="#projects" className="btn btn-primary btn-lg animate-pulse-glow">
            See my work 🚀
          </a>
          <a
            href="https://github.com/HoneyBerries"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-lg"
          >
            GitHub ↗
          </a>
        </motion.div>

      </div>

      {/* Decorative ambient blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full animate-float"
          style={{ background: 'radial-gradient(circle, oklch(93% 0.05 300) 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-16 -left-24 w-72 h-72 rounded-full animate-float"
          style={{
            background: 'radial-gradient(circle, oklch(95% 0.04 350) 0%, transparent 70%)',
            animationDelay: '1.2s',
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full animate-float"
          style={{
            background: 'radial-gradient(circle, oklch(94% 0.05 195) 0%, transparent 70%)',
            animationDelay: '0.6s',
          }}
        />
      </motion.div>
    </section>
  )
}
