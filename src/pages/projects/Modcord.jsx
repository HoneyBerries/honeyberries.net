import SEO from '../../components/SEO';
import { GradientBackdrop } from '../../components/backgrounds';
import { BACKGROUND_LAYERS } from '../../lib/constants';
import { Link } from 'react-router-dom';

/**
 * Modcord page — describes the AI moderation bot for Discord
 */
export default function Modcord() {
  return (
    <div className="min-h-screen relative">
      <SEO
        title="Modcord — AI Moderation Bot for Discord"
        description="Modcord uses AI to provide intelligent, context-aware moderation for Discord servers. Designed for privacy and scalability."
        ogImage="/assets/backgrounds/discord-ai-agent-background.webp"
        pathname="/projects/modcord"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://honeyberries.net/" },
            { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://honeyberries.net/projects" },
            { "@type": "ListItem", "position": 3, "name": "Modcord", "item": "https://honeyberries.net/projects/modcord" }
          ]
                }}
      />
      <GradientBackdrop layers={BACKGROUND_LAYERS.modcord} />
      
      <div className="relative z-10">
        <article className="max-w-6xl mx-auto px-4 py-12">
          <ModcordHeader />
          <FeaturesSection />
          <CallToActionSection />
        </article>
      </div>
      
    </div>
  );
}

/**
 * Hero header section with enhanced typography and styling
 */
function ModcordHeader() {
  return (
    <header className="text-center mb-16 max-w-4xl mx-auto">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
        Modcord — <span className="accent-text">Smart AI Moderation</span> for Your Discord Server
      </h1>
      <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
        Keep your community safe, friendly, and well-organized with Modcord, an AI-powered moderation bot that
        understands context and enforces rules intelligently. Modcord adapts to your server, helping maintain a
        positive environment automatically.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href="https://discord.com/oauth2/authorize?client_id=1387903423592005663"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center justify-center"
        >
          <img src="/assets/icons/discord-icon.svg" alt="Discord" className="w-5 h-5 mr-2" />
          Add to Discord
        </a>
        <a
          href="https://github.com/honeyberries/modcord"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
        >
          <img src="/assets/icons/github-icon.svg" alt="GitHub" className="w-5 h-5 mr-2" />
          View Github Repo
        </a>
      </div>
    </header>
  );
}

/**
 * Enhanced features section with better visual hierarchy
 */
function FeaturesSection() {
  const features = [
    {
      title: "Intelligent Message Analysis",
      description: "Modcord understands conversation context to detect spam, abuse, and rule violations, powered by the same technology as ChatGPT, allowing your moderators to take a break knowing that nothing bad will happen.",
      icon: "🧠",
      gradient: "from-blue-500/10 to-purple-500/10"
    },
    {
      title: "Adaptive Rules",
      description: "Modcord automatically scans for rule channels, allowing it to automatically follow your server's unique rules and guidelines without manual configuration.",
      icon: "⚙️",
      gradient: "from-purple-500/10 to-pink-500/10"
    },
    {
      title: "Seamless Experience",
      description: "We continuously analyze every conversation automatically to provide real-time moderation without disrupting your chats. It runs in the background as if you never knew it was there.",
      icon: "✨",
      gradient: "from-green-500/10 to-blue-500/10"
    },
    {
      title: "Reliable & Scalable",
      description: "Modcord is designed to handle servers of all sizes, from small communities to large-scale servers with thousands of members, ensuring a consistent lag-free performance.",
      icon: "🚀",
      gradient: "from-orange-500/10 to-red-500/10"
    }
  ];

  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Modcord?</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Advanced AI technology meets Discord server admins' needs
        </p>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className="opacity-0 animate-floatIn"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <div className={`card-glass hover:shadow-xl transition-all duration-300 p-8 h-full bg-gradient-to-br ${feature.gradient}`}>
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/**
 * Call to action section with privacy note
 */
function CallToActionSection() {
  return (
    <section className="text-center">
      <div className="card-glass p-8 max-w-4xl mx-auto bg-gradient-to-r from-blue-50/50 to-purple-50/50">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Enhance Your Discord Community?</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Modcord prioritizes privacy and configurability — you control how strict it is and what data it stores. 
          Get intelligent moderation that adapts to your community's unique needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://discord.com/oauth2/authorize?client_id=1387903423592005663"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            Get Started Now
          </a>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            💬 Need Help? Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
