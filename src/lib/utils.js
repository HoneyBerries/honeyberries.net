/**
 * Utility functions for common operations
 */

/**
 * Combines CSS class names, filtering out falsy values
 * @param {...(string|undefined|null|false)} classes - Class names to combine
 * @returns {string} Combined class string
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Generates class names for navigation links based on active state
 * @param {boolean} isActive - Whether the link is currently active
 * @returns {string} Navigation link class names
 */
export function getNavLinkClass(isActive) {
  return cn(
    'px-3 py-2 text-sm font-medium rounded-md transition-colors',
    isActive 
      ? 'text-blue-700' 
      : 'text-gray-700 hover:text-gray-900'
  );
}

/**
 * Truncates text to a specified length with ellipsis
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length before truncation
 * @returns {string} Truncated text
 */
export function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

/**
 * Formats a date to a human-readable string
 * @param {Date|string} date - Date to format
 * @returns {string} Formatted date string
 */
export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}