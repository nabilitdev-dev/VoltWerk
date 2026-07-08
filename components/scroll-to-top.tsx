'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useScrolled } from '@/hooks/use-scrolled';

/** Erscheint nach längerem Scrollen und führt sanft zurück nach oben. */
export function ScrollToTop() {
  const visible = useScrolled(600);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Zurück nach oben"
          className="fixed bottom-[4.75rem] right-4 z-40 grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-navy-950 shadow-lift transition-colors hover:border-navy-900 md:bottom-6 md:right-6"
        >
          <ArrowUp aria-hidden className="h-5 w-5" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
