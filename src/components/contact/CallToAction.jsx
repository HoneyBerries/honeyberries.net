import discordIcon from '../../assets/icons/discord-icon.svg'

export default function CallToAction({ email, discordInviteUrl }) {
    return (
        <div className="text-center mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to collaborate?</h3>
            <p className="text-gray-600 mb-4">Whether you have a project idea, need help with something, or just want to chat about technology, I'd love to hear from you!</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
                >
                    Send A Message
                </a>
                <a
                    href={discordInviteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors shadow-sm hover:shadow-md"
                >
                    <img src={discordIcon} alt="Discord icon" className="w-4 h-4 mr-2" />
                    Join My Discord
                </a>
            </div>
        </div>
    )
}
