import { cn } from '@lib/utils';

/**
 * Reusable Badge component for tags, labels, and status indicators
 * Supports multiple variants and sizes for consistent styling
 */
export default function Badge({ 
  variant = 'default',
  size = 'md',
  className = '',
  children,
  ...restProps 
}) {
  const baseClasses = 'inline-flex items-center rounded-full font-medium bg-white/70 backdrop-blur-sm';
  
  const variantClasses = {
    default: 'border border-gray-200 text-gray-700',
    primary: 'border border-blue-200 text-blue-700 bg-blue-50/70',
    success: 'border border-emerald-200 text-emerald-700 bg-emerald-50/70',
    warning: 'border border-amber-200 text-amber-700 bg-amber-50/70',
    error: 'border border-red-200 text-red-700 bg-red-50/70',
  };
  
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-xs',
    lg: 'px-4 py-1.5 text-sm',
  };
  
  return (
    <span
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...restProps}
    >
      {children}
    </span>
  );
}
