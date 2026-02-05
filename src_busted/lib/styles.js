// Shared style tokens for gradients and reusable style helpers
export const GRADIENTS = {
  emeraldCyan: 'linear-gradient(135deg, #22c55e 0%, #06b6d4 100%)',
  emeraldTeal: 'linear-gradient(135deg, #22c55e 0%, #0891b2 100%)',
  emeraldBlue: 'linear-gradient(135deg, #059669 0%, #0284c7 100%)',
  emeraldBlueBright: 'linear-gradient(135deg, #059669 0%, #3b82f6 100%)',
  emeraldDeep: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
  purpleBlue: 'linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)',
  redPurple: 'linear-gradient(135deg, #dc2626 0%, #9333ea 100%)',
  orangePurple: 'linear-gradient(135deg, #f97316 0%, #c084fc 100%)',
  purpleOrange: 'linear-gradient(135deg, #f97316 0%, #9333ea 100%)',
};

const GRADIENT_KEYS = Object.keys(GRADIENTS);

export function gradientStyle(key) {
  const gradient = GRADIENTS[key] || GRADIENTS.emeraldCyan;
  return { background: gradient };
}

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

export function gradientStyleFromSeed(seed, fallbackKey = 'emeraldCyan') {
  return { background: gradientFromSeed(seed, fallbackKey) };
}
