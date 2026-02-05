import { cn } from '@lib/utils';

/**
 * Reusable Card component for consistent container styling
 * Supports multiple variants for different visual contexts
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
    bordered: 'border-2 border-gray-200 p-6 hover:border-gray-300',
    glass: 'bg-white/80 backdrop-blur-sm border border-gray-200 p-6 shadow-sm',
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
