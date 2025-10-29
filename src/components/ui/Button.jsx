import { cn } from '../../lib/utils';
import { useMemo } from 'react';

/**
 * Generate a consistent gradient based on the current location
 * Uses page-based seeding for consistent colors across all users
 * Includes three color themes: green-blue, red-purple-orange, and aqua-blue-purple
 */
function generateGradientColors(pathname) {
  // Hash the pathname to get a consistent number
  let hash = 0;
  for (let i = 0; i < pathname.length; i++) {
    const char = pathname.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  
  const gradients = [
    // Green-Blue theme
    { from: '#10b981', to: '#06b6d4' },      // emerald to cyan
    { from: '#22c55e', to: '#0891b2' },      // green to cyan-dark
    { from: '#16a34a', to: '#0284c7' },      // green-dark to blue
    { from: '#059669', to: '#3b82f6' },      // teal to blue
    
    // Red-Purple-Orange theme
    { from: '#dc2626', to: '#9333ea' },      // red to purple
    { from: '#ef4444', to: '#a855f7' },      // red-light to purple-light
    { from: '#f97316', to: '#c084fc' },      // orange to purple-lighter
    { from: '#ea580c', to: '#7c3aed' },      // orange-dark to violet
    
    // Aqua-Blue-Purple theme
    { from: '#06b6d4', to: '#3b82f6' },      // aqua to blue
    { from: '#0891b2', to: '#6366f1' },      // cyan-dark to indigo
    { from: '#0284c7', to: '#8b5cf6' },      // blue to purple
    { from: '#00d9ff', to: '#a855f7' },      // bright aqua to purple
  ];
  
  const index = Math.abs(hash) % gradients.length;
  return gradients[index];
}

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
  const gradientColors = useMemo(() => {
    const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
    return generateGradientColors(pathname);
  }, []);
  
  const baseClasses = 'inline-flex items-center gap-2 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
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
  
  const primaryStyle = (variant === 'primary' || variant === 'success') ? {
    background: variant === 'success' ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : `linear-gradient(135deg, ${gradientColors.from} 0%, ${gradientColors.to} 100%)`,
  } : undefined;
  
  return (
    <ButtonComponent
      className={cn(
        'inline-flex items-center gap-2 font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2',
        roundingClasses[variant],
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      style={primaryStyle}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </ButtonComponent>
  );
}