/**
 * Reusable copy-to-clipboard button component
 * @param {Object} props - Component properties
 * @param {string} props.textToCopy - Text to copy to clipboard
 * @param {boolean} props.copied - Whether text has been copied
 * @param {Function} props.onCopy - Callback when copy button is clicked
 * @param {'inline'|'outlined'} props.variant - Button style variant
 * @param {string} props.className - Additional CSS classes
 */
export default function CopyButton({ 
  textToCopy,
  copied,
  onCopy,
  variant = 'inline',
  className = ''
}) {
  const handleClick = () => {
    onCopy(textToCopy);
  };

  if (variant === 'inline') {
    return (
      <button
        onClick={handleClick}
        className={`px-3 py-1 text-sm font-medium rounded-md transition-all duration-300 ${
          copied
            ? 'bg-green-100 text-green-600'
            : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
        } ${className}`}
        aria-label={copied ? 'Copied to clipboard' : 'Copy to clipboard'}
      >
        {copied ? (
          <span className="flex items-center gap-1">
            <CheckIcon />
            Copied!
          </span>
        ) : (
          <span className="flex items-center gap-1">
            <CopyIcon />
            Copy
          </span>
        )}
      </button>
    );
  }

  // outlined variant
  return (
    <button
      onClick={handleClick}
      className={`px-6 py-3 border-2 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
        copied
          ? 'border-green-500 text-green-600 bg-green-50'
          : 'border-blue-500 text-blue-600 hover:bg-blue-50'
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
