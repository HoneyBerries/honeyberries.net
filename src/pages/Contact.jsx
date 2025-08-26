import Footer from '../components/Footer';
import EmailCard from '../components/contact/EmailCard';
import DiscordCard from '../components/contact/DiscordCard';
import CallToAction from '../components/contact/CallToAction';
import { CONTACT_INFO } from '../lib/constants';

/**
 * Contact page component
 */
export default function Contact() {
  return (
    <div className="min-h-screen relative">
      {/* Enhanced background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-80 h-80 rounded-full bg-gradient-to-r from-blue-200/20 to-cyan-200/15 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 rounded-full bg-gradient-to-l from-purple-200/20 to-pink-200/15 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <main className="relative z-10 max-w-4xl mx-auto px-4 py-16" role="main">
        <ContactHeader />
        <ContactCards />
        <ContactStats />
        <CallToAction
          email={CONTACT_INFO.email}
          discordInviteUrl={CONTACT_INFO.discordInviteUrl}
        />
      </main>
      <Footer />
    </div>
  );
}

/**
 * Enhanced contact page header
 */
function ContactHeader() {
  return (
    <div className="text-center mb-16 animate-floatIn">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 border border-blue-200 mb-6">
        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
        <span className="text-sm font-medium text-blue-700">Let's Connect</span>
      </div>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
        Get In <span className="accent-text">Touch</span>
      </h1>
      <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto leading-relaxed">
        I'm always excited to collaborate on interesting projects, discuss new ideas, or help solve challenging problems.
      </p>
      <p className="text-gray-500 max-w-xl mx-auto">
        Whether you're looking for a developer, have a cool project in mind, or just want to chat about technology, feel free to reach out!
      </p>
    </div>
  );
}

/**
 * Contact cards section with improved layout
 */
function ContactCards() {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-16">
      <div className="animate-floatIn" style={{ animationDelay: '0.1s' }}>
        <EmailCard email={CONTACT_INFO.email} />
      </div>
      <div className="animate-floatIn" style={{ animationDelay: '0.2s' }}>
        <DiscordCard
          discordUsername={CONTACT_INFO.discordUsername}
          discordInviteUrl={CONTACT_INFO.discordInviteUrl}
        />
      </div>
    </div>
  );
}

/**
 * Contact stats/info section
 */
function ContactStats() {
  const stats = [
    { label: 'Response Time', value: '< 24h', icon: '⚡', color: 'text-yellow-600' },
    { label: 'Time Zone', value: 'PST/PDT', icon: '🌍', color: 'text-blue-600' },
    { label: 'Preferred Method', value: 'Discord', icon: '💬', color: 'text-green-600' },
    { label: 'Available For', value: 'Projects', icon: '💼', color: 'text-purple-600' }
  ];

  return (
    <div className="mb-16 animate-floatIn" style={{ animationDelay: '0.3s' }}>
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Quick Info</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div 
            key={stat.label}
            className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            style={{ animationDelay: `${0.4 + index * 0.1}s` }}
          >
            <div className={`text-2xl mb-2 ${stat.color}`} aria-hidden="true">
              {stat.icon}
            </div>
            <div className="text-lg font-semibold text-gray-900 mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-gray-600">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}