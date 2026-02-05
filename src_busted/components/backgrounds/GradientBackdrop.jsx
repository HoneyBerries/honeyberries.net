import { memo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { pulse } from '../../lib/animations';

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
      {layers.map((layer, index) => {
        const { className: layerClass = '', animation, delay = 0 } =
          typeof layer === 'string' ? { className: layer } : layer || {};

        if (!animation) {
          return <div key={index} className={layerClass} />;
        }

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
