import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';
import { pulse } from '../../lib/animations';

/**
 * Consistent section header with optional eyebrow and description
 */
export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}) {
  const alignment = align === 'left' ? 'text-left items-start' : 'text-center items-center';

  return (
    <div className={cn('flex flex-col gap-3', alignment, className)}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/80 border border-emerald-200 text-sm font-medium text-emerald-700">
          <motion.span
            className="w-2 h-2 rounded-full bg-emerald-500"
            aria-hidden="true"
            {...pulse()}
          />
          <span>{eyebrow}</span>
        </div>
      )}
      {title && <h2 className="text-3xl font-bold text-gray-900">{title}</h2>}
      {description && (
        <p className="text-lg text-gray-600 max-w-2xl" role="note">
          {description}
        </p>
      )}
    </div>
  );
}
