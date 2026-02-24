/**
 * Combines CSS class names, filtering out falsy values
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Generates class names for navigation links based on active state
 */
export function getNavLinkClass(isActive: boolean): string {
  return cn(
    'px-3 py-2 text-sm font-medium rounded-md transition-colors',
    isActive
      ? 'text-blue-700'
      : 'text-gray-700 hover:text-gray-900'
  );
}

/**
 * Truncates text to a specified length with ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (typeof text !== 'string') return '';
  if (!maxLength || maxLength <= 0) return '';
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '…';
}

/**
 * Formats a date to a human-readable string
 */
export function formatDate(date: Date | string | number): string {
  const d = new Date(date);
  if (isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Formats a number to a human-readable string (e.g., 1000 -> '1k')
 */
export function formatNumber(n: number | null | undefined): string {
  if (n == null || isNaN(n)) return '';
  const abs = Math.abs(n);
  if (abs >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
  if (abs >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, '') + 'k';
  return String(n);
}

/**
 * Simple string hash function for deterministic number generation
 */
export function hashStringToNumber(str: string): number {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h;
}

/**
 * Generates two hue values from a seed string for gradient generation
 */
export function seededHues(seed = ''): [number, number] {
  const n = hashStringToNumber(seed) % 360;
  const n2 = (n + 60 + (hashStringToNumber(seed + 'b') % 60)) % 360;
  return [n, n2];
}

/**
 * Generates a CSS gradient string from a seed string
 */
export function gradientFromSeed(seed = ''): string {
  const [h1, h2] = seededHues(seed);
  const color1 = `hsl(${h1} 80% 60%)`;
  const color2 = `hsl(${h2} 75% 50%)`;
  return `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`;
}
