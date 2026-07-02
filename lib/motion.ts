import type { Variants } from "framer-motion";

export const viewport = { once: true, amount: 0.25 };

export const transition = {
  duration: 0.6,
  ease: "easeOut"
} as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition }
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition }
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition }
};

export const blurReveal: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { ...transition, duration: 0.7 } }
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

export const buttonStagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

export const buttonItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { ...transition, duration: 0.45 } }
};

export const heroTitle: Variants = {
  hidden: { opacity: 0, y: 35, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ...transition, duration: 0.68 }
  }
};

export const cardHover = {
  y: -6,
  scale: 1.02
};

export const strongCardHover = {
  y: -10,
  scale: 1.025
};

export const floating = {
  y: [0, -10, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }
};
