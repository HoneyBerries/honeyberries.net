import PropTypes from 'prop-types';

/**
 * Reusable Button component with consistent styling
 */
export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  className = '',
  disabled = false,
  ...props 
}) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 hover:-translate-y-0.5',
    secondary: 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-gray-500',
    accent: 'bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500 hover:-translate-y-0.5',
    ghost: 'text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:ring-gray-500'
  };
  
  const sizes = {
    small: 'px-3 py-2 text-sm gap-1',
    medium: 'px-5 py-3 text-sm gap-2',
    large: 'px-6 py-4 text-base gap-2'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <button 
      className={classes}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'accent', 'ghost']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
  disabled: PropTypes.bool
};