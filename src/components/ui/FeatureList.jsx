import { cn } from '../../lib/utils';

/**
 * Bullet list component for reusable feature/rule lists
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
