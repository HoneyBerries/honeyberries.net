import ProjectCard from '../components/ProjectCard'
import Footer from '../components/Footer'
import minecraftBg from '../assets/backgrounds/minecraft-background.webp'

const projects = [
  {
    id: 'minecraft-plugins',
    title: 'Minecraft Plugins',
    description: 'A suite of quality-of-life, admin tools, and a few wild experiments for Paper/Spigot.',
    href: '#',
    imageUrl: minecraftBg
  },
  {
    id: 'minecraft-server',
    title: 'Minecraft Server',
    description: 'Custom gameplay, new PvP mechanics, and a thriving community.',
  href: '#',
  
  },
  {
    id: 'discord-ai-agent',
    title: 'Discord AI Agent',
    description: 'Moderation, Q&A, and automation powered by LLMs.',
    href: '#'
  }
]

export default function Projects() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold">Projects</h1>
            <p className="mt-2 text-gray-600">Selected work with hover effects and links.</p>
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}
