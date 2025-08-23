import { useState } from 'react';
import discordIcon from '../../assets/icons/discord-icon.svg';

/**
 * Enhanced Discord contact card with copy functionality and improved design
 */
export default function DiscordCard({ discordUsername, discordInviteUrl }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(discordUsername);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy username:', err);
    }
  };

  return (
    <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Floating elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-indigo-200/20 to-purple-200/10 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500"></div>
      <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-purple-200/15 to-indigo-200/10 rounded-full blur-2xl group-hover:scale-105 transition-transform duration-700"></div>

      <div className="relative z-10">
        {/* Header with icon */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <img
              src={discordIcon}
              alt="Discord"
              className="w-7 h-7 filter brightness-0 invert"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
              Discord Chat
            </h3>
            <p className="text-gray-600">Real-time communication</p>
          </div>
        </div>

        {/* Username section */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-2">Discord Username</p>
          <div className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-lg border">
            <span className="text-lg font-mono text-gray-800 flex-1">
              {discordUsername}
            </span>
            <button
              onClick={handleCopy}
              className={`px-3 py-1 text-sm font-medium rounded-md transition-all duration-300 ${
                copied
                  ? 'bg-green-100 text-green-600'
                  : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
              }`}
              aria-label="Copy Discord username"
            >
              {copied ? (
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Copied!
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Server invitation */}
        <div className="mb-6">
          <p className="text-sm text-gray-600 mb-4">
            Join my Discord community for quick chats, project updates, and collaboration opportunities!
          </p>
          <a
            href={discordInviteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Join Discord server"
          >
            <img src={discordIcon} alt="Discord" className="w-5 h-5 filter brightness-0 invert" />
            <span>Join Discord Server</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Status indicator */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span>Usually online during PST business hours</span>
        </div>
      </div>
    </div>
  );
}
