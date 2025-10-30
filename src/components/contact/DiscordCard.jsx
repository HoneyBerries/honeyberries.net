const discordIcon = '/assets/icons/discord-icon.svg';
import { useCopyToClipboard } from '../../hooks';
import { ContactCard, CopyButton } from '../ui';

/**
 * Enhanced Discord contact card with copy functionality and improved design
 */
export default function DiscordCard({ discordUsername, discordInviteUrl }) {
  const [copied, copy] = useCopyToClipboard();

  return (
    <ContactCard
      title="Discord"
      subtitle="Perfered communication method for quick chats"
      iconSrc={discordIcon}
      iconAlt="Discord"
      gradientFrom="from-indigo-50/50"
      gradientTo="to-purple-50/30"
      hoverColor="group-hover:text-indigo-600"
    >
      {/* Username section */}
      <div className="mb-6">
        <p className="text-sm text-gray-500 mb-2">Discord Username</p>
        <div className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-lg border">
          <span className="text-lg font-mono text-gray-800 flex-1">
            {discordUsername}
          </span>
          <CopyButton
            textToCopy={discordUsername}
            copied={copied}
            onCopy={copy}
            variant="inline"
          />
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
          className="btn-primary inline-flex items-center justify-center gap-2 w-full"
          style={{background: 'linear-gradient(135deg, #10b981 0%, #0891b2 100%)'}}
          aria-label="Join Discord server"
        >
          <img src={discordIcon} alt="Discord" className="w-5 h-5" />
          <span>Join Discord Server</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      {/* Status indicator */}
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
        <span>Usually online during PST business hours</span>
      </div>
    </ContactCard>
  );
}
