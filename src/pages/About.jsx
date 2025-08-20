import Footer from '../components/Footer'

export default function About() {
return (
    <>
        <section className="max-w-3xl mx-auto px-4 py-12">
            <h1 className="text-3xl sm:text-4xl font-bold">About</h1>
            <p className="mt-3 text-gray-600">
                Hi, I’m HoneyBerries — a developer who enjoys building sleek, performant experiences.
                I work across various projects using modern programming languages, including but not limited to Python, Java, C++, C#, etc.
            </p>

            <div className="mt-10">
                <h2 className="text-xl font-semibold">Timeline</h2>
                <ol className="mt-3 space-y-4 border-l border-gray-200 pl-4">
                    {[{
                        title: 'Launched Discord AI Agent', time: '2025 Summer', desc: 'Built an agent for moderation and automation.'
                    }, {
                        title: 'Shipped the Gem SMP', time: '2025 Spring', desc: 'Designed and deployed a scalable community server.'
                    }, {
                        title: 'Created Plugin Suite', time: '2024 Fa`l`l', desc: (
                            <>
                                Developed multiple high-quality plugins for PaperMC/Spigot,{' '}
                                <a
                                    href="https://modrinth.com/user/HoneyBerries"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-emerald-600 hover:underline"
                                >
                                    posted them on Modrinth
                                </a>.
                            </>
                        )
                    }].map(item => (
                        <li key={item.title} className="relative">
                            <span className="absolute -left-2 top-1 w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            <div>
                                <div className="text-sm text-gray-500">{item.time}</div>
                                <div className="font-semibold">{item.title}</div>
                                <div className="text-sm text-gray-600">{item.desc}</div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>

            <div className="mt-10">
                <h2 className="text-xl font-semibold">What I’m working on now</h2>
                <div className="mt-3 grid sm:grid-cols-2 gap-4">
                    {[
                        'Optimizing a Minecraft server economy and anti-cheat',
                        'Shipping new features for the Discord AI Agent',
                        'Exploring React Server Components and Tailwind 4',
                        'Automating deployments with CI/CD'
                    ].map(i => (
                        <div key={i} className="rounded-xl border border-gray-200 p-4 bg-white">
                            <p className="text-sm text-gray-700">{i}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <Footer />
    </>
)
}
