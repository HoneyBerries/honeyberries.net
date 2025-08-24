import { memo } from 'react';
import { Link } from 'react-router-dom';

/**
 * Project card component displaying project information
 * @param {Object} props - Project card properties
 * @param {string} props.id - Project ID for anchoring
 * @param {string} props.title - Project title
 * @param {string} props.description - Project description
 * @param {string} props.imageUrl - Project image URL
 * @param {string} props.href - Project link URL
 */
const ProjectCard = memo(function ProjectCard({ id, title, description, imageUrl = '', href }) {
  const isInternal = typeof href === 'string' && (href.startsWith('/') || href.startsWith('#'));

  const Wrapper = ({ children }) => {
    if (isInternal) {
      return (
        <Link id={id} to={href} className="group block card-hover overflow-hidden" aria-label={`View ${title} project`}>
          {children}
        </Link>
      );
    }

    return (
      <a id={id} href={href} target="_blank" rel="noopener noreferrer" className="group block card-hover overflow-hidden" aria-label={`View ${title} project`}>
        {children}
      </a>
    );
  };

  return (
    <Wrapper>
      <div className="relative">
        <div className="aspect-[16/9] w-full bg-gray-100 overflow-hidden">
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={`${title} project preview`} 
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-emerald-100 via-blue-100 to-purple-100" />
          )}
        </div>
        <div 
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" 
          style={{boxShadow:'inset 0 0 0 2px rgba(59,130,246,0.25)'}}
          aria-hidden="true"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
        <div className="mt-4 inline-flex items-center text-sm font-medium text-blue-700">
          Visit <span className="ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
        </div>
      </div>
  </Wrapper>
  );
});

export default ProjectCard;
