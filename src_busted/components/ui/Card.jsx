import { cn } from '../../lib/utils';

/**
 * Reusable Card component for consistent layout
 * @param {Object} props - Card properties
 * @param {'default'|'elevated'|'bordered'} props.variant - Card style variant
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.children - Card content
 * @param {Object} props.restProps - Other div props
 */
export default function Card({ 
  variant = 'default',
  className = '',
  children,
  ...restProps 
}) {
  const baseClasses = 'rounded-xl bg-white transition-all duration-200';
  
  const variantClasses = {
    default: 'border border-gray-200 p-6 shadow-sm hover:shadow-md',
    elevated: 'p-6 shadow-lg hover:shadow-xl',
    bordered: 'border-2 border-gray-200 p-6 hover:border-gray-300'
  };
  
  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  );
}