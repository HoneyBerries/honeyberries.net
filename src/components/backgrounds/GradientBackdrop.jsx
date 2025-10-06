import { memo } from 'react';
import { cn } from '../../lib/utils';

/**
 * Renders a fixed, pointer-event-free backdrop made up of positioned gradient layers.
 * @param {Object} props
 * @param {string[]} props.layers - Tailwind className strings for each background layer div.
 * @param {string} [props.className] - Additional wrapper classes.
 */
function GradientBackdropComponent({ layers = [], className = '' }) {
  if (!layers.length) return null;

  return (
    <div
      className={cn('fixed inset-0 pointer-events-none overflow-hidden', className)}
      aria-hidden="true"
    >
      {layers.map((layerClass, index) => (
        <div key={index} className={layerClass} />
      ))}
    </div>
  );
}

const GradientBackdrop = memo(GradientBackdropComponent);

export default GradientBackdrop;
