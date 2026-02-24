export const GRADIENTS: Record<string, string> = {
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
 */
export function gradientStyle(key: string): { background: string } {
  const gradient = GRADIENTS[key] || GRADIENTS.emeraldCyan;
  return { background: gradient };
}

/**
 * Generates a gradient based on seed string (deterministic)
 */
export function gradientFromSeed(seed: string, fallbackKey = 'emeraldCyan'): string {
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
 */
export function gradientStyleFromSeed(seed: string, fallbackKey = 'emeraldCyan'): { background: string } {
  return { background: gradientFromSeed(seed, fallbackKey) };
}
