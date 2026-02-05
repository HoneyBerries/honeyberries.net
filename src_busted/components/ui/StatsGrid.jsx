import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

/**
 * Reusable stats grid to reduce repeated markup across pages
 * @param {Object} props
 * @param {Array<{label:string,value:string,icon?:string,color?:string}>} props.items - Stats to display
 * @param {string} [props.className] - Optional wrapper class overrides
 * @param {number} [props.animationStart=0] - Initial animation delay in seconds
 * @param {number} [props.animationStep=0.1] - Incremental animation delay per item in seconds
 * @param {string} [props.gridClassName] - Override grid layout classes
 */
export default function StatsGrid({
  items = [],
  className = '',
  animationStart = 0,
  animationStep = 0.1,
  gridClassName = 'grid grid-cols-2 lg:grid-cols-4 gap-4'
}) {
  return (
    <div className={className}>
      <div className={gridClassName}>
        {items.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="card-lift p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: animationStart + index * animationStep }}
          >
            {stat.icon && (
              <div className={cn('text-2xl mb-2', stat.color)} aria-hidden="true">
                {stat.icon}
              </div>
            )}
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-gray-600">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
