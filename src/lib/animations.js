// Shared framer-motion animation helpers to replace CSS keyframes
// Keep these minimal and reusable so components can opt-in with concise props

const EASE_OUT = [0.22, 1, 0.36, 1];

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

export const staggerContainer = (stagger = 0.12, delay = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

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