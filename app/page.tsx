import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <footer className="border-t border-[var(--color-border)] py-8">
        <div className="container flex items-center justify-between text-sm text-[var(--color-text-subtle)]">
          <span>© 2026 HoneyBerries 🍯</span>
          <span className="gradient-text font-medium">honeyberries.net</span>
        </div>
      </footer>
    </>
  )
}
