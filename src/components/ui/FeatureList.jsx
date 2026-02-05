import { cn } from '@lib/utils';

/**
 * Feature list component with bullet points
 * Renders items with consistent spacing and emerald bullet markers
 */
export default function FeatureList({ items = [], className = '', itemClassName = '' }) {
  if (!items.length) return null;

  return (
    <ul className={cn('space-y-2', className)}>
      {items.map((item) => (
        <li key={item} className={cn('feature-item', itemClassName)}>
          <span className="feature-bullet" aria-hidden="true"></span>
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  );
}
