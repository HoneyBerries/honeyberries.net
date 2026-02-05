import { memo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@lib/utils';
import { pulse } from '@lib/animations';

/**
 * Gradient backdrop component for decorative page backgrounds
 * Renders fixed, pointer-event-free gradient layers with optional animations
 */
function GradientBackdropComponent({ layers = [], className = '' }) {
  if (!layers.length) return null;

  return (
    <div
      className={cn('fixed inset-0 pointer-events-none overflow-hidden', className)}
      aria-hidden="true"
    >
      {layers.map((layer, index) => {
        const { className: layerClass = '', animation, delay = 0 } =
          typeof layer === 'string' ? { className: layer } : layer || {};

        // Static layer without animation
        if (!animation) {
          return <div key={index} className={layerClass} />;
        }

        // Animated layer with pulse effect
        const motionProps = animation === 'pulse' ? pulse(delay) : {};

        return (
          <motion.div
            key={index}
            className={layerClass}
            {...motionProps}
          />
        );
      })}
    </div>
  );
}

const GradientBackdrop = memo(GradientBackdropComponent);

export default GradientBackdrop;
