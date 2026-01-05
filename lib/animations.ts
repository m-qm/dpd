/**
 * Reusable Framer Motion animation variants and configurations
 * Inspired by Flora Fauna's smooth, purposeful animations
 */

import { Variants } from "framer-motion"

// Easing functions
export const easings = {
  smooth: [0.16, 1, 0.3, 1], // Smooth ease-out
  spring: { type: "spring", stiffness: 300, damping: 30 },
  springLight: { type: "spring", stiffness: 200, damping: 25 },
}

// Text reveal animations - word by word
export const textRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easings.smooth,
    },
  },
}

// Stagger children animation
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

export const staggerContainerFastVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0,
    },
  },
}

// Fade in and slide up
export const fadeInUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easings.smooth,
    },
  },
}

// Fade in and slide from left
export const fadeInLeftVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: easings.smooth,
    },
  },
}

// Fade in and slide from right
export const fadeInRightVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: easings.smooth,
    },
  },
}

// Scale up reveal
export const scaleUpVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easings.smooth,
    },
  },
}

// Card hover variants
export const cardHoverVariants = {
  rest: {
    scale: 1,
    y: 0,
  },
  hover: {
    scale: 1.02,
    y: -8,
    transition: easings.springLight,
  },
}

// Section variants - for full section reveals
export const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easings.smooth,
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

// Grid item variants
export const gridItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easings.smooth,
    },
  },
}

// Draw line animation (for process steps)
export const drawLineVariants: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        duration: 1.5,
        ease: "easeInOut",
      },
      opacity: {
        duration: 0.3,
      },
    },
  },
}

// Word swap variants (for hero animated text)
export const wordSwapVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    rotateX: -90,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: easings.smooth,
    },
  },
  exit: {
    opacity: 0,
    y: -30,
    rotateX: 90,
    transition: {
      duration: 0.4,
      ease: easings.smooth,
    },
  },
}

// Parallax configuration
export const parallaxConfig = {
  amount: 0.2, // How much to move relative to scroll
  clamp: true, // Prevent overscrolling
}

// Default viewport settings for scroll animations
export const defaultViewport = {
  once: true, // Animate only once
  amount: 0.3, // Trigger when 30% visible
  margin: "0px 0px -100px 0px", // Trigger slightly before element enters viewport
}

// Viewport for early trigger (good for large sections)
export const earlyViewport = {
  once: true,
  amount: 0.15,
  margin: "0px 0px -150px 0px",
}

// Viewport for late trigger (good for small elements)
export const lateViewport = {
  once: true,
  amount: 0.5,
  margin: "0px",
}

// Helper function to check if user prefers reduced motion
export const prefersReducedMotion = () => {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

// Helper to get appropriate animation based on user preference
export const getAnimation = (animation: any, fallback: any = {}) => {
  return prefersReducedMotion() ? fallback : animation
}

// Horizontal scroll snap configuration
export const horizontalScrollConfig = {
  drag: "x" as const,
  dragConstraints: { left: 0, right: 0 },
  dragElastic: 0.2,
  dragTransition: { bounceStiffness: 600, bounceDamping: 20 },
}

// Button/interactive element animations
export const buttonVariants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1] as any,
    },
  },
  tap: {
    scale: 0.98,
  },
}

// Page transition variants
export const pageTransitionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easings.smooth,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
}

