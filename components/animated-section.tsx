'use client';

import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';
import { staggerContainer, staggerItem } from '@/lib/animations';

const EASE = [0.21, 0.6, 0.35, 1] as const;

type AnimationPreset = 'fade-up' | 'fade-in' | 'scale';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  preset?: AnimationPreset;
  delay?: number;
}

function buildVariants(preset: AnimationPreset, delay: number): Variants {
  const base = { duration: 0.55, ease: EASE, delay };
  switch (preset) {
    case 'fade-in':
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: base },
      };
    case 'scale':
      return {
        hidden: { opacity: 0, scale: 0.96 },
        visible: { opacity: 1, scale: 1, transition: base },
      };
    default:
      return {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: base },
      };
  }
}

/** Blendet Inhalte beim Scrollen in den Viewport ein (einmalig). */
export function AnimatedSection({
  children,
  className,
  preset = 'fade-up',
  delay = 0,
}: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={buildVariants(preset, delay)}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedGroupProps {
  children: ReactNode;
  className?: string;
}

/** Eltern-Container, der seine AnimatedItem-Kinder gestaffelt einblendet. */
export function AnimatedGroup({ children, className }: AnimatedGroupProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}

/** Kind-Element für AnimatedGroup. */
export function AnimatedItem({ children, className }: AnimatedGroupProps) {
  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  );
}
