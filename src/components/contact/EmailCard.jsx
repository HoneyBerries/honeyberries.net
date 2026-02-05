import { useCopyToClipboard } from '@hooks';
import { ContactCard, CopyButton, Button } from '@components/ui';
import { ICON_PATHS } from '@lib/constants';
import { gradientStyle } from '@lib/styles';
import { motion } from 'framer-motion';
import { pulse } from '@lib/animations';

/**
 * Email contact card with copy-to-clipboard functionality
 * Features gradient background and animated status indicator
 */
export default function EmailCard({ email, copy: copyContent }) {
  const [copied, copyToClipboard] = useCopyToClipboard();

  const title = copyContent?.title || 'Email Me';
  const subtitle = copyContent?.subtitle || 'Slower but more formal communication (best for detailed inquiries)';
  const ctaLabel = copyContent?.ctaLabel || 'Send Email';
  const responseNote = copyContent?.responseNote || 'Typically responds within 24 hours';

  return (
    <ContactCard
      title={title}
      subtitle={subtitle}
      iconSrc={ICON_PATHS.email}
      iconAlt="Email"
      gradientFrom="from-blue-50/50"
      gradientTo="to-cyan-50/30"
      hoverColor="group-hover:text-blue-600"
    >
      {/* Email address display */}
      <div className="mb-6">
        <p className="text-sm text-gray-500 mb-2">Email Address</p>
        <p
          className="text-lg font-mono text-gray-800 bg-gray-50 px-4 py-3 rounded-lg border min-h-[72px] sm:min-h-[56px] flex items-center break-words sm:whitespace-nowrap sm:truncate"
          title={email}
        >
          {email}
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex flex-row gap-3">
        <Button
          as="a"
          href={`mailto:${email}`}
          className="min-w-2.5 px-4"
          variant="primary"
          style={gradientStyle('emeraldCyan')}
          aria-label={`Send email to ${email}`}
        >
          <span>{ctaLabel}</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </Button>
        
        <CopyButton
          textToCopy={email}
          copied={copied}
          onCopy={copyToClipboard}
          variant="outlined"
        />
      </div>

      {/* Response time indicator */}
      <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
        <motion.div className="w-2 h-2 rounded-full bg-green-500" {...pulse()} />
        <span>{responseNote}</span>
      </div>
    </ContactCard>
  );
}
