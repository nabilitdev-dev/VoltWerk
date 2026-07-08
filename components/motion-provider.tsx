'use client';

import { MotionConfig } from 'framer-motion';
import type { ReactNode } from 'react';

/** Respektiert systemweit „Bewegung reduzieren“ für alle Framer-Motion-Animationen. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
