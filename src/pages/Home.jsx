import Hero from '../components/Hero'
import Footer from '../components/Footer'

const features = [
    {
        title: 'Minecraft Plugins & Servers',
        desc: 'Custom plugins and hosted servers focused on fun, stability, and player experience.'
    },
    {
        title: 'AI Discord Agents',
        desc: 'Smart bots for moderation, engagement, and automation tailored to your community.'
    },
    {
        title: 'Community Tools & Support',
        desc: 'Integrations, dashboards, and ongoing support to help communities grow and stay healthy.'
    }
]

export default function Home() {
return (
    <>
        <Hero />
        <section className="max-w-6xl mx-auto px-4 pb-16">
            <div className="grid sm:grid-cols-3 gap-4">
                {features.map((f) => (
                    <div key={f.title} className="rounded-xl border border-gray-200 p-6 bg-white shadow-sm hover:shadow-md transition">
                        <h3 className="font-semibold">{f.title}</h3>
                        <p className="mt-1 text-sm text-gray-600">{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
        <Footer />
    </>
)
}
