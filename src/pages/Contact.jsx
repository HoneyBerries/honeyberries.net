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
    <div className="min-h-screen">
      <main className="max-w-2xl mx-auto px-4 py-16" role="main">
        <ContactHeader />
        <ContactCards />
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
 * Contact page header
 */
function ContactHeader() {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact</h1>
      <p className="text-xl text-gray-600">I'm open to collaborations and interesting problems.</p>
    </div>
  );
}

/**
 * Contact cards section
 */
function ContactCards() {
  return (
    <div className="space-y-6">
      <EmailCard email={CONTACT_INFO.email} />
      <DiscordCard
        discordUsername={CONTACT_INFO.discordUsername}
        discordInviteUrl={CONTACT_INFO.discordInviteUrl}
      />
    </div>
  );
}