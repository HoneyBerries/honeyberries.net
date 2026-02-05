import { memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gradientStyleFromSeed } from '@lib/styles';

/**
 * Wrapper for project cards handling internal/external links
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
 * Features image preview, title, description, and animated CTA
 */
const ProjectCard = memo(function ProjectCard({ id, title, description, imageUrl = '', href }) {
  const isInternal = typeof href === 'string' && (href.startsWith('/') || href.startsWith('#'));

  return (
    <ProjectCardWrapper isInternal={isInternal} href={href} id={id} title={title}>
      <motion.div 
        className="flex flex-col h-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Image container */}
        <div className="relative overflow-hidden">
          <div className="aspect-video w-full bg-gray-100">
            {imageUrl ? (
              <motion.img 
                src={imageUrl} 
                alt={`${title} project preview`} 
                className="h-full w-full object-cover"
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            ) : (
              <div className="h-full w-full bg-linear-to-br from-emerald-100 via-blue-100 to-purple-100" />
            )}
          </div>
          <motion.div 
            className="absolute inset-0 pointer-events-none" 
            style={{ boxShadow: 'inset 0 0 0 2px rgba(59,130,246,0.25)' }}
            aria-hidden="true"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
        </div>
        
        {/* Content */}
        <div className="p-5 flex flex-col justify-between flex-1">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="mt-1 text-sm text-gray-600">{description}</p>
          </div>

          <div className="mt-6">
            <motion.span 
              className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold text-white shadow-sm"
              style={gradientStyleFromSeed(id)}
              whileHover={{ scale: 1.05, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}
              transition={{ duration: 0.2 }}
            >
              Click Me
            </motion.span>
          </div>
        </div>
      </motion.div>
    </ProjectCardWrapper>
  );
});

export default ProjectCard;
