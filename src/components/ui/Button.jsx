import { cn } from '@lib/utils';
import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { gradientStyle, gradientStyleFromSeed } from '@lib/styles';

// Pre-create motion components for common elements
const MotionButton = motion.button;
const MotionAnchor = motion.a;

/**
 * Reusable Button component with multiple variants and animation support
 * Uses Framer Motion for smooth hover and tap interactions
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
  // Create a motion wrapper for the 'as' component if it's not a string
  const MotionComponent = useMemo(() => {
    if (typeof as === 'string') {
      return as === 'a' ? MotionAnchor : MotionButton;
    }
    // For React Router Link or other components, wrap with motion
    return motion(as);
  }, [as]);
  // Generate location-based gradient for primary buttons
  const primaryGradientStyle = useMemo(() => {
    const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
    return gradientStyleFromSeed(pathname);
  }, []);
  
  const variantClasses = {
    primary: 'text-white shadow-lg focus:ring-blue-500 disabled:opacity-60 disabled:cursor-not-allowed',
    outline: 'bg-white/80 backdrop-blur-sm text-gray-850 border border-gray-300 shadow-sm focus:ring-blue-500 disabled:opacity-60 disabled:cursor-not-allowed',
    success: 'text-white shadow-lg focus:ring-green-500 disabled:opacity-60 disabled:cursor-not-allowed',
    ghost: 'text-gray-700 hover:bg-gray-100 disabled:opacity-60 disabled:cursor-not-allowed',
  };
  
  const roundingClasses = {
    primary: 'rounded-xl',
    outline: 'rounded-lg',
    success: 'rounded-xl',
    ghost: 'rounded-lg',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-3 text-sm',
    lg: 'px-6 py-4 text-base',
  };
  
  // Determine background style based on variant
  const primaryStyle = (() => {
    if (variant === 'primary') return primaryGradientStyle;
    if (variant === 'success') return gradientStyle('emeraldDeep');
    return undefined;
  })();
  
  const commonProps = {
    className: cn(
      'inline-flex items-center gap-2 font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2',
      roundingClasses[variant],
      variantClasses[variant],
      sizeClasses[size],
      className
    ),
    style: primaryStyle,
    whileHover: disabled ? {} : { scale: 1.05 },
    whileTap: disabled ? {} : { scale: 0.95 },
    transition: { duration: 0.2 },
    ...restProps
  };
  
  // Render with the appropriate motion component
  return <MotionComponent disabled={disabled} {...commonProps}>{children}</MotionComponent>;
}
