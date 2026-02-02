import { cn } from '../../lib/utils';
import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { gradientStyle, gradientStyleFromSeed } from '../../lib/styles';

/**
 * Reusable Button component with multiple variants
 * @param {Object} props - Button properties
 * @param {'primary'|'secondary'|'outline'|'success'} props.variant - Button style variant
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
  
  // Get location-based gradient for primary buttons
  const primaryGradientStyle = useMemo(() => {
    const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
    return gradientStyleFromSeed(pathname);
  }, []);
  
  const variantClasses = {
    primary: 'text-white shadow-lg transform hover:scale-105 hover:shadow-xl focus:ring-blue-500 disabled:opacity-60 disabled:scale-100 disabled:cursor-not-allowed',
    secondary: 'bg-white/80 backdrop-blur-sm text-gray-800 border border-gray-300 shadow-sm btn-secondary-glow focus:ring-gray-300 disabled:bg-gray-100 disabled:shadow-sm disabled:cursor-not-allowed',
    outline: 'bg-white/80 backdrop-blur-sm text-gray-800 border border-gray-300 shadow-sm btn-secondary-glow focus:ring-gray-300 disabled:bg-gray-100 disabled:shadow-sm disabled:cursor-not-allowed',
    success: 'text-white shadow-lg transform hover:scale-105 hover:shadow-xl focus:ring-green-500 disabled:opacity-60 disabled:scale-100 disabled:cursor-not-allowed'
  };
  
  const roundingClasses = {
    primary: 'rounded-xl',
    secondary: 'rounded-lg',
    outline: 'rounded-lg',
    success: 'rounded-xl'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-3 text-sm',
    lg: 'px-6 py-4 text-base'
  };
  
  const primaryStyle = (() => {
    if (variant === 'primary') return primaryGradientStyle;
    if (variant === 'success') return gradientStyle('emeraldDeep');
    return undefined;
  })();
  
  const MotionComponent = motion(ButtonComponent);
  
  return (
    <MotionComponent
      className={cn(
        'inline-flex items-center gap-2 font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2',
        roundingClasses[variant],
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      style={primaryStyle}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: variant === 'primary' || variant === 'success' ? 1.05 : 1 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      transition={{ duration: 0.2 }}
      {...restProps}
    >
      {children}
    </MotionComponent>
  );
}