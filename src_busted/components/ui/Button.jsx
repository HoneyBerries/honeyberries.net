import { cn } from '../../lib/utils';
import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { gradientStyle, gradientStyleFromSeed } from '../../lib/styles';

/**
 * Reusable Button component with multiple variants
 * @param {Object} props - Button properties
 * @param {'primary'|'outline'|'success'} props.variant - Button style variant
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
    primary: 'text-white shadow-lg focus:ring-blue-500 disabled:opacity-60 disabled:cursor-not-allowed',

    outline: 'bg-white/80 backdrop-blur-sm text-gray-850 border border-gray-300 shadow-sm focus:ring-blue-500 disabled:opacity-60 disabled:cursor-not-allowed',

    success: 'text-white shadow-lg focus:ring-green-500 disabled:opacity-60 disabled:cursor-not-allowed'
  };
  
  const roundingClasses = {
    primary: 'rounded-xl',
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
      whileHover={disabled ? {} : { scale: variant === 'primary' || variant === 'outline' || variant === 'success' ? 1.1 : 1 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      transition={{ duration: 0.3 }}
      {...restProps}
    >
      {children}
    </MotionComponent>
  );
}