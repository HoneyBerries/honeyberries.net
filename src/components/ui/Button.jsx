import { cn } from '../../lib/utils';

/**
 * Reusable Button component with multiple variants
 * @param {Object} props - Button properties
 * @param {'primary'|'secondary'|'outline'} props.variant - Button style variant
 * @param {'sm'|'md'|'lg'} props.size - Button size
 * @param {boolean} props.disabled - Whether button is disabled
 * @param {React.ElementType} props.as - Component to render as (default: 'button')
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.children - Button content
 * @param {Object} props.restProps - Other button props
 */
export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  disabled = false,
  as = 'button',
  className = '',
  children,
  ...restProps 
}) {
  const ButtonComponent = as;
  const baseClasses = 'inline-flex items-center gap-2 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white shadow hover:-translate-y-0.5 hover:shadow-lg focus:ring-blue-500 disabled:bg-gray-400',
    secondary: 'bg-white/80 backdrop-blur-sm text-gray-800 border border-gray-300 shadow-sm hover:shadow hover:bg-white focus:ring-gray-300 disabled:bg-gray-100',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500 disabled:border-gray-300 disabled:text-gray-400'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-3 text-sm',
    lg: 'px-6 py-4 text-base'
  };
  
  return (
    <ButtonComponent
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        disabled && 'cursor-not-allowed opacity-60',
        className
      )}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </ButtonComponent>
  );
}