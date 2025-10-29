import { memo } from 'react';
import { Link } from 'react-router-dom';

/**
 * Generate gradient colors based on project id for consistent visuals
 * Uses green-blue, red-purple-orange, and aqua-blue-purple themes
 */
function getProjectGradient(projectId) {
  const gradients = [
    // Green-Blue theme
    { from: '#10b981', to: '#06b6d4' },      // emerald to cyan
    { from: '#22c55e', to: '#0891b2' },      // green to cyan-dark
    { from: '#16a34a', to: '#0284c7' },      // green-dark to blue
    { from: '#059669', to: '#3b82f6' },      // teal to blue
    
    // Red-Purple-Orange theme
    { from: '#dc2626', to: '#9333ea' },      // red to purple
    { from: '#ef4444', to: '#a855f7' },      // red-light to purple-light
    { from: '#f97316', to: '#c084fc' },      // orange to purple-lighter
    { from: '#ea580c', to: '#7c3aed' },      // orange-dark to violet
    
    // Aqua-Blue-Purple theme
    { from: '#06b6d4', to: '#3b82f6' },      // aqua to blue
    { from: '#0891b2', to: '#6366f1' },      // cyan-dark to indigo
    { from: '#0284c7', to: '#8b5cf6' },      // blue to purple
    { from: '#00d9ff', to: '#a855f7' },      // bright aqua to purple
  ];
  
  let hash = 0;
  for (let i = 0; i < projectId.length; i++) {
    const char = projectId.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  
  const index = Math.abs(hash) % gradients.length;
  return gradients[index];
}

/**
 * Wrapper component for project cards that handles both internal and external links
 */
function ProjectCardWrapper({ isInternal, href, id, title, children }) {
  const commonClassName = "group block card-hover overflow-hidden h-full";
  const ariaLabel = `View ${title} project`;

  if (isInternal) {
    return (
      <Link id={id} to={href} className={commonClassName} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <a id={id} href={href} target="_blank" rel="noopener noreferrer" className={commonClassName} aria-label={ariaLabel}>
      {children}
    </a>
  );
}

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
  const gradient = getProjectGradient(id);

  return (
    <ProjectCardWrapper isInternal={isInternal} href={href} id={id} title={title}>
      <div className="flex flex-col h-full">
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
        <div className="p-5 flex flex-col justify-between flex-1">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="mt-1 text-sm text-gray-600">{description}</p>
          </div>

          <div className="mt-6">
            {/* Non-interactive pill to avoid nested links (card is already clickable) */}
            <span 
              className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold text-white shadow-sm group-hover:shadow-md transition-all duration-200 group-hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${gradient.from} 0%, ${gradient.to} 100%)`
              }}
            >
              Visit Project
            </span>
          </div>
        </div>
      </div>
    </ProjectCardWrapper>
  );
});

export default ProjectCard;
