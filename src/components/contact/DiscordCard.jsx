import { useCopyToClipboard } from '@hooks';
import { ContactCard, CopyButton, Button } from '@components/ui';
import { ICON_PATHS } from '@lib/constants';
import { gradientStyle } from '@lib/styles';
import { motion } from 'framer-motion';
import { pulse } from '@lib/animations';

/**
 * Discord contact card with username copy and server invite
 * Features gradient styling and animated status indicator
 */
export default function DiscordCard({ discordUsername, discordInviteUrl, copy: copyContent }) {
  const [copied, copyToClipboard] = useCopyToClipboard();

  const title = copyContent?.title || 'Discord';
  const subtitle = copyContent?.subtitle || 'Preferred communication method for quick chats';
  const description = copyContent?.description || 'Join my Discord community for quick chats, project updates, and collaboration opportunities!';
  const inviteLabel = copyContent?.inviteLabel || 'Join Discord Server';
  const statusNote = copyContent?.statusNote || 'Usually online during PST business hours';

  return (
    <ContactCard
      title={title}
      subtitle={subtitle}
      iconSrc={ICON_PATHS.discord}
      iconAlt="Discord"
      gradientFrom="from-indigo-50/50"
      gradientTo="to-purple-50/30"
      hoverColor="group-hover:text-indigo-600"
    >
      {/* Username section */}
      <div className="mb-6">
        <p className="text-sm text-gray-500 mb-2">Discord Username</p>
        <div className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-lg border min-h-[72px] sm:min-h-[56px]">
          <span className="text-lg font-mono text-gray-800 flex-1 break-words sm:whitespace-nowrap sm:truncate" title={discordUsername}>
            {discordUsername}
          </span>
          <CopyButton
            textToCopy={discordUsername}
            copied={copied}
            onCopy={copyToClipboard}
            variant="inline"
          />
        </div>
      </div>

      {/* Server invitation */}
      <div className="mb-6">
        <p className="text-sm text-gray-600 mb-4">
          {description}
        </p>
        <div className="flex justify-center">
          <Button
            as="a"
            href={discordInviteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-5 px-4"
            variant="primary"
            style={gradientStyle('emeraldTeal')}
            aria-label="Join Discord server"
          >
            <img src={ICON_PATHS.discord} alt="Discord" className="w-5 h-5" />
            <span>{inviteLabel}</span>
          </Button>
        </div>
      </div>

      {/* Status indicator */}
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <motion.div className="w-2 h-2 rounded-full bg-green-500" {...pulse()} />
        <span>{statusNote}</span>
      </div>
    </ContactCard>
  );
}
