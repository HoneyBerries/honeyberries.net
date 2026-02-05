/**
 * Shared style tokens for gradients and reusable style helpers
 * Each gradient is designed for a specific use case with distinct colors
 */

// Named gradient presets with distinct, harmonious color combinations
export const GRADIENTS = {
  // Primary CTAs and buttons
  emeraldCyan: 'linear-gradient(135deg, #22c55e 0%, #06b6d4 100%)',
  emeraldTeal: 'linear-gradient(135deg, #22c55e 0%, #0891b2 100%)',
  emeraldBlue: 'linear-gradient(135deg, #059669 0%, #0284c7 100%)',
  emeraldBlueBright: 'linear-gradient(135deg, #059669 0%, #3b82f6 100%)',
  emeraldDeep: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
  
  // Alternative accent gradients
  purpleBlue: 'linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)',
  redPurple: 'linear-gradient(135deg, #dc2626 0%, #9333ea 100%)',
  orangePurple: 'linear-gradient(135deg, #f97316 0%, #c084fc 100%)',
  purpleOrange: 'linear-gradient(135deg, #f97316 0%, #9333ea 100%)',
  
  // Warm gradients
  sunsetWarm: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
  pinkRose: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
  
  // Cool gradients
  skyIndigo: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)',
  cyanViolet: 'linear-gradient(135deg, #22d3ee 0%, #8b5cf6 100%)',
  
  // Neutral gradients
  slateGray: 'linear-gradient(135deg, #475569 0%, #1e293b 100%)',
};

const GRADIENT_KEYS = Object.keys(GRADIENTS);

/**
 * Returns a style object with background gradient
 * @param {string} key - Gradient key from GRADIENTS
 * @returns {Object} Style object with background property
 */
export function gradientStyle(key) {
  const gradient = GRADIENTS[key] || GRADIENTS.emeraldCyan;
  return { background: gradient };
}

/**
 * Generates a gradient based on seed string (deterministic)
 * @param {string} seed - Seed string for deterministic selection
 * @param {string} fallbackKey - Fallback gradient key
 * @returns {string} CSS gradient string
 */
export function gradientFromSeed(seed, fallbackKey = 'emeraldCyan') {
  if (!seed) return GRADIENTS[fallbackKey];

  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    const char = seed.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash &= hash;
  }

  const index = Math.abs(hash) % GRADIENT_KEYS.length;
  return GRADIENTS[GRADIENT_KEYS[index]];
}

/**
 * Returns a style object with seed-based gradient
 * @param {string} seed - Seed string
 * @param {string} fallbackKey - Fallback gradient key
 * @returns {Object} Style object with background property
 */
export function gradientStyleFromSeed(seed, fallbackKey = 'emeraldCyan') {
  return { background: gradientFromSeed(seed, fallbackKey) };
}
