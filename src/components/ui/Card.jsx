import PropTypes from 'prop-types';

/**
 * Reusable Card component with consistent styling
 */
export default function Card({ 
  children, 
  variant = 'default',
  padding = 'medium',
  className = '',
  hover = false,
  ...props 
}) {
  const baseClasses = 'bg-white border border-gray-200 rounded-xl';
  
  const variants = {
    default: 'shadow-sm',
    elevated: 'shadow-md',
    outlined: 'border-2'
  };
  
  const paddings = {
    none: '',
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8'
  };
  
  const hoverClasses = hover ? 'hover:shadow-lg transition-shadow cursor-pointer' : '';
  
  const classes = `${baseClasses} ${variants[variant]} ${paddings[padding]} ${hoverClasses} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'elevated', 'outlined']),
  padding: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
  className: PropTypes.string,
  hover: PropTypes.bool
};