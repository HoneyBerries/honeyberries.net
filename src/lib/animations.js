/**
 * Framer Motion animation presets and utilities
 * Shared animation configurations for consistent motion across the site
 */

// Smooth easing curve for natural-feeling animations
const EASE_OUT = [0.22, 1, 0.36, 1];

/**
 * Variant for float-in animation with fade and scale
 */
export const floatInVariant = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: EASE_OUT,
      delay: custom,
    },
  }),
};

/**
 * Stagger container variant for animating children sequentially
 * @param {number} stagger - Delay between children
 * @param {number} delay - Initial delay before first child
 */
export const staggerContainer = (stagger = 0.12, delay = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

/**
 * Float-in animation props
 * @param {number} delay - Animation delay in seconds
 * @param {number} y - Initial Y offset
 */
export const floatIn = (delay = 0, y = 24) => ({
  initial: { opacity: 0, y, scale: 0.98 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: EASE_OUT,
      delay,
    },
  },
});

/**
 * Pulse animation for status indicators and decorative elements
 * @param {number} delay - Animation delay in seconds
 * @param {number} scale - Maximum scale value
 */
export const pulse = (delay = 0, scale = 1.08) => ({
  initial: { scale: 1, opacity: 1 },
  animate: {
    scale: [1, scale, 1],
    opacity: [1, 0.78, 1],
    transition: {
      duration: 1.6,
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeInOut',
      delay,
    },
  },
});

/**
 * Bounce animation for floating elements
 * @param {number} delay - Animation delay in seconds
 * @param {number} distance - Bounce distance in pixels
 */
export const bounce = (delay = 0, distance = 10) => ({
  initial: { y: 0 },
  animate: {
    y: [0, -distance, 0],
    transition: {
      duration: 2.2,
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeInOut',
      delay,
    },
  },
});

/**
 * Spin animation for loading indicators
 * @param {number} duration - Rotation duration in seconds
 */
export const spin = (duration = 0.9) => ({
  animate: {
    rotate: 360,
    transition: {
      duration,
      repeat: Infinity,
      ease: 'linear',
    },
  },
});

/**
 * Gentle floating animation for background elements
 * @param {number} delay - Animation delay
 * @param {number} distance - Float distance in pixels
 */
export const gentleFloat = (delay = 0, distance = 6) => ({
  initial: { y: 0 },
  animate: {
    y: [0, -distance, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeInOut',
      delay,
    },
  },
});

/**
 * Fade-in-up animation for scroll reveal
 * @param {number} delay - Animation delay
 */
export const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, delay },
});

/**
 * Page transition variants for smooth page navigation
 */
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: EASE_OUT,
    }
  },
  exit: { 
    opacity: 0, 
    y: -10,
    transition: {
      duration: 0.3,
    }
  },
};

/**
 * Card hover animation preset
 */
export const cardHover = {
  initial: { scale: 1 },
  whileHover: { 
    scale: 1.02,
    y: -4,
    transition: { duration: 0.2 }
  },
  whileTap: { scale: 0.98 },
};
