import { useState } from 'react'
import Footer from '../components/Footer'
import discordIcon from '../assets/discord-icon.svg'
import emailIcon from '../assets/email-icon.svg'

export default function Contact() {
    const [copied, setCopied] = useState(false)
    
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText('honey_berries')
            setCopied(true)
            setTimeout(() => setCopied(false), 1500)
        } catch (_) {
            // Fallback for browsers that don't support clipboard API
            const textArea = document.createElement('textarea')
            textArea.value = 'honey_berries'
            document.body.appendChild(textArea)
            textArea.select()
            document.execCommand('copy')
            document.body.removeChild(textArea)
            setCopied(true)
            setTimeout(() => setCopied(false), 1500)
        }
    }

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
                    {/* Email Card */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <img src={emailIcon} alt="Email icon" className="w-6 h-6" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                                <a
                                    href="mailto:henry.rainbowfish@gmail.com"
                                    className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition-colors"
                                >
                                    henry.rainbowfish@gmail.com
                                </a>
                                <p className="text-sm text-gray-500 mt-2">Best for professional inquiries and detailed discussions</p>
                            </div>
                        </div>
                    </div>

                    {/* Discord Card */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                                    <img src={discordIcon} alt="Discord icon" className="w-6 h-6" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">Discord</h3>
                                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-medium text-gray-900">honey_berries</span>
                                        <button
                                            onClick={handleCopy}
                                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                                        >
                                            {copied ? '✓ Copied!' : 'Copy'}
                                        </button>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-3">Join my Discord community for quick chats and updates</p>
                                    <a
                                        href="https://discord.com/invite/jGAubfCd"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transform hover:-translate-y-0.5 transition-all shadow-sm hover:shadow-md"
                                    >
                                        <img src={discordIcon} alt="Discord icon" className="w-4 h-4 mr-2" />
                                        Join Discord
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to collaborate?</h3>
                    <p className="text-gray-600 mb-4">Whether you have a project idea, need help with something, or just want to chat about technology, I'd love to hear from you!</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href="mailto:henry.rainbowfish@gmail.com"
                            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
                        >
                            Send A Message
                        </a>
                        <a
                            href="https://discord.com/invite/jGAubfCd"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors shadow-sm hover:shadow-md"
                        >
                            <img src={discordIcon} alt="Discord icon" className="w-4 h-4 mr-2" />
                            Join My Discord
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}