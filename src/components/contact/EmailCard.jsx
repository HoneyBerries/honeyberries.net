import { useState } from 'react';
import emailIcon from '../../assets/icons/email-icon.svg';

/**
 * Enhanced email contact card with copy functionality
 */
export default function EmailCard({ email }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Floating elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-200/20 to-cyan-200/10 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500"></div>
      <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-indigo-200/15 to-blue-200/10 rounded-full blur-2xl group-hover:scale-105 transition-transform duration-700"></div>

      <div className="relative z-10">
        {/* Header with icon */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <img
              src={emailIcon}
              alt="Email"
              className="w-7 h-7 filter brightness-0 invert"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              Email Me
            </h3>
            <p className="text-gray-600">Quick and reliable contact</p>
          </div>
        </div>

        {/* Email address */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-2">Email Address</p>
          <p className="text-lg font-mono text-gray-800 bg-gray-50 px-4 py-3 rounded-lg border break-all">
            {email}
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={`mailto:${email}`}
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label={`Send email to ${email}`}
          >
            <span>Send Email</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </a>
          
          <button
            onClick={handleCopyEmail}
            className={`px-6 py-3 border-2 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
              copied
                ? 'border-green-500 text-green-600 bg-green-50'
                : 'border-blue-500 text-blue-600 hover:bg-blue-50'
            }`}
            aria-label="Copy email address to clipboard"
          >
            {copied ? (
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Copied!
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy
              </span>
            )}
          </button>
        </div>

        {/* Response time indicator */}
        <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span>Typically responds within 24 hours</span>
        </div>
      </div>
    </div>
  );
}
