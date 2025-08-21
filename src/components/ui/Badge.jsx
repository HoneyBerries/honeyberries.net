import { cn } from '../../lib/utils';

/**
 * Reusable Badge component for tags and labels
 * @param {Object} props - Badge properties
 * @param {'default'|'primary'|'secondary'|'success'} props.variant - Badge color variant
 * @param {'sm'|'md'} props.size - Badge size
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.children - Badge content
 * @param {Object} props.restProps - Other span props
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
    secondary: 'border border-purple-200 text-purple-700 bg-purple-50/70',
    success: 'border border-emerald-200 text-emerald-700 bg-emerald-50/70'
  };
  
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-xs'
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