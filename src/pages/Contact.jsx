import Footer from '../components/Footer'
import EmailCard from '../components/contact/EmailCard'
import DiscordCard from '../components/contact/DiscordCard'
import CallToAction from '../components/contact/CallToAction'

const contactDetails = {
    email: 'henry.rainbowfish@gmail.com',
    discordUsername: 'honey_berries',
    discordInviteUrl: 'https://discord.com/invite/jGAubfCd'
}

export default function Contact() {
    return (
        <div className="min-h-screen bg-white">
            {/* Main Content (site-level Navbar is rendered by App) */}
            <main className="max-w-2xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact</h1>
                    <p className="text-xl text-gray-600">I'm open to collaborations and interesting problems.</p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-6">
                    <EmailCard email={contactDetails.email} />
                    <DiscordCard
                        discordUsername={contactDetails.discordUsername}
                        discordInviteUrl={contactDetails.discordInviteUrl}
                    />
                </div>

                <CallToAction
                    email={contactDetails.email}
                    discordInviteUrl={contactDetails.discordInviteUrl}
                />
            </main>

            <Footer />
        </div>
    )
}