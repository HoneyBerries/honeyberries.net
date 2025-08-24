import PropTypes from 'prop-types';

/**
 * Timeline component for displaying chronological events
 */
export default function Timeline({ items }) {
  const renderDescription = (desc) => {
    if (typeof desc === 'string') {
      return desc;
    }
    
    // Handle object with link
    if (desc.text && desc.linkText && desc.linkUrl) {
      return (
        <>
          {desc.text}
          <a
            href={desc.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 hover:underline"
          >
            {desc.linkText}
          </a>
          .
        </>
      );
    }
    
    return desc;
  };

  return (
    <ol className="space-y-4 border-l border-gray-200 pl-4">
      {items.map((item) => (
        <li key={item.title} className="relative">
          <span className="absolute -left-2 top-1 w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <div>
            <div className="text-sm text-gray-500">{item.time}</div>
            <div className="font-semibold">{item.title}</div>
            <div className="text-sm text-gray-600">
              {renderDescription(item.desc)}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

Timeline.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      desc: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          linkText: PropTypes.string.isRequired,
          linkUrl: PropTypes.string.isRequired
        })
      ]).isRequired
    })
  ).isRequired
};