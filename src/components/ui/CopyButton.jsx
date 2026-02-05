/**
 * Copy-to-clipboard button with visual feedback
 * Displays checkmark on successful copy with smooth transition
 */
export default function CopyButton({ 
  textToCopy,
  copied,
  onCopy,
  className = ''
}) {
  const handleClick = () => {
    onCopy(textToCopy);
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-300 ${
        copied
          ? 'border-green-500 text-green-600 bg-green-50'
          : 'bg-white/80 backdrop-blur-sm text-gray-800 border-gray-300 hover:shadow-md hover:border-blue-400'
      } ${className}`}
      aria-label={copied ? 'Copied to clipboard' : 'Copy to clipboard'}
    >
      {copied ? (
        <span className="flex items-center gap-2">
          <CheckIcon />
          Copied!
        </span>
      ) : (
        <span className="flex items-center gap-2">
          <CopyIcon />
          Copy
        </span>
      )}
    </button>
  );
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  );
}
