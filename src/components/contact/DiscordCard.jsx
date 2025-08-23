import { useState } from 'react'
import discordIcon from '../../assets/icons/discord-icon.svg'

export default function DiscordCard({ discordUsername, discordInviteUrl }) {
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(discordUsername)
            setCopied(true)
            setTimeout(() => setCopied(false), 1500)
        } catch {
            // Fallback for browsers that don't support clipboard API
            const textArea = document.createElement('textarea')
            textArea.value = discordUsername
            document.body.appendChild(textArea)
            textArea.select()
            document.execCommand('copy')
            document.body.removeChild(textArea)
            setCopied(true)
            setTimeout(() => setCopied(false), 1500)
        }
    }

    return (
        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
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
                            <span className="font-medium text-gray-900">{discordUsername}</span>
                            <button
                                onClick={handleCopy}
                                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                {copied ? '✓ Copied!' : 'Copy'}
                            </button>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">Join my Discord community for quick chats and updates</p>
                        <a
                            href={discordInviteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transform hover:-translate-y-0.5 transition-all shadow-sm hover:shadow-md"
                        >
                            <img src={discordIcon} alt="Discord icon" className="w-4 h-4 mr-2" />
                            Join My Discord Server
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
