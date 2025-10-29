const emailIcon = '/assets/icons/email-icon.svg';
import { useCopyToClipboard } from '../../hooks';
import { ContactCard, CopyButton } from '../ui';

/**
 * Enhanced email contact card with copy functionality
 */
export default function EmailCard({ email }) {
  const [copied, copy] = useCopyToClipboard();

  return (
    <ContactCard
      title="Email Me"
      subtitle="Quick and reliable contact"
      iconSrc={emailIcon}
      iconAlt="Email"
      gradientFrom="from-blue-50/50"
      gradientTo="to-cyan-50/30"
      hoverColor="group-hover:text-blue-600"
    >
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
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </a>
        
        <CopyButton
          textToCopy={email}
          copied={copied}
          onCopy={copy}
          variant="outlined"
        />
      </div>

      {/* Response time indicator */}
      <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
        <span>Typically responds within 24 hours</span>
      </div>
    </ContactCard>
  );
}
