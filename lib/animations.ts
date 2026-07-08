import type { Variants } from 'framer-motion';

/** Sanftes Einblenden von unten – Standard für Sections. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.21, 0.6, 0.35, 1] },
  },
};

/** Reines Einblenden ohne Bewegung. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

/** Leichtes Aufskalieren – für Bild-Panels und Karten. */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.21, 0.6, 0.35, 1] },
  },
};

/** Eltern-Variante: staffelt die Kinder nacheinander. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

/** Kind-Variante für gestaffelte Grids. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.6, 0.35, 1] },
  },
};
