/**
 * Motion system configuration
 * Consistent timing and easing for premium animations
 */

export const motionDuration = {
  fast: 150,
  medium: 350,
  slow: 600,
} as const;

export const motionEasing = {
  standard: [0.4, 0.0, 0.2, 1] as const,
  entrance: [0.2, 0.6, 0.2, 1] as const,
  exit: [0.4, 0.0, 1, 1] as const,
  overshoot: [0.2, 0.9, 0.1, 1.0] as const,
} as const;

export const staggerDelay = 50;
export const parallaxDepth = 3;

// Animation variants
export const pageVariants = {
  initial: {
    opacity: 0,
    y: 16,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionDuration.medium / 1000,
      ease: motionEasing.standard,
    },
  },
  exit: {
    opacity: 0,
    y: -16,
    filter: 'blur(4px)',
    transition: {
      duration: motionDuration.medium / 1000,
      ease: motionEasing.exit,
    },
  },
};

export const cardVariants = {
  initial: { opacity: 0, y: 16 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: motionDuration.medium / 1000,
      delay: (index * staggerDelay) / 1000,
      ease: motionEasing.standard,
    },
  }),
};

export const cardHoverVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.03,
    boxShadow: '0 12px 24px rgba(0,0,0,0.16)',
    transition: {
      duration: motionDuration.fast / 1000,
      ease: motionEasing.entrance,
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: motionDuration.fast / 1000,
      ease: motionEasing.entrance,
    },
  },
};

export const productRevealVariants = {
  initial: { opacity: 0, y: 8, scale: 0.985 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: motionDuration.slow / 1000,
      ease: motionEasing.overshoot,
    },
  },
};

export const logoStaggerVariants = {
  initial: { opacity: 0 },
  animate: (index: number) => ({
    opacity: 1,
    transition: {
      duration: 300 / 1000,
      delay: (index * 60) / 1000,
      ease: motionEasing.standard,
    },
  }),
};

export const counterVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 500 / 1000,
      ease: motionEasing.standard,
    },
  },
};
