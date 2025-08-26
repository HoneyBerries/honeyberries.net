import emailIcon from '../../assets/icons/email-icon.svg';
import discordIcon from '../../assets/icons/discord-icon.svg';

/**
 * Enhanced call-to-action section for contact page
 */
export default function CallToAction({ email, discordInviteUrl }) {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-12 overflow-hidden animate-floatIn" style={{ animationDelay: '0.4s' }}>
      {/* Background decorations */}
      <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-indigo-200/20 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-tr from-purple-200/30 to-indigo-200/20 rounded-full blur-3xl"></div>
      
      {/* Floating particles */}
      <div className="absolute top-8 left-16 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-24 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-500"></div>
      <div className="absolute bottom-16 right-16 w-3 h-3 bg-indigo-400 rounded-full animate-pulse delay-1000"></div>

      <div className="relative text-center">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready to <span className="accent-text">Collaborate</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Let's turn your ideas into reality. Choose your preferred way to get in touch and let's start building something amazing together.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
          <a
            href={`mailto:${email}`}
            className="group flex-1 w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            aria-label={`Send email to ${email}`}
          >
            <img src={emailIcon} alt="Email" className="w-5 h-5 filter brightness-0 invert group-hover:scale-110 transition-transform duration-300" />
            <span>Send Email</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </a>

          <span className="text-gray-400 font-medium">or</span>

          <a
            href={discordInviteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-1 w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            aria-label="Join Discord server"
          >
            <img src={discordIcon} alt="Discord" className="w-5 h-5 filter brightness-0 invert group-hover:scale-110 transition-transform duration-300" />
            <span>Join Discord</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Additional info */}
        <div className="mt-8 pt-8 border-t border-gray-200/50">
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span>Usually responds within 24 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span>Open to project discussions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              <span>Open to collaborations</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
