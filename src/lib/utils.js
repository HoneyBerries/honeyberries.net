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

/**
 * Formats a number to a human-readable string (e.g., 1000 -> '1k', 1500000 -> '1.5M')
 * @param {number|null|undefined} n - Number to format
 * @returns {string} Formatted number string
 */
export function formatNumber(n) {
  if (n == null) return '';
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M';
  if (n >= 1_000) return (n / 1_000).toFixed(1) + 'k';
  return String(n);
}

/**
 * Simple string hash function for deterministic number generation
 * @param {string} str - String to hash
 * @returns {number} Hash as positive integer
 */
export function hashStringToNumber(str) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

/**
 * Generates two hue values from a seed string for gradient generation
 * @param {string} seed - Seed string
 * @returns {[number, number]} Array of two hue values (0-360)
 */
export function seededHues(seed) {
  const n = hashStringToNumber(seed || '') % 360;
  const n2 = (n + 60 + (hashStringToNumber(seed + 'b') % 60)) % 360;
  return [n, n2];
}

/**
 * Generates a CSS gradient string from a seed string
 * @param {string} seed - Seed string for deterministic color generation
 * @returns {string} CSS gradient string
 */
export function gradientFromSeed(seed) {
  const [h1, h2] = seededHues(seed);
  const color1 = `hsl(${h1} 80% 60%)`;
  const color2 = `hsl(${h2} 75% 50%)`;
  return `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`;
}