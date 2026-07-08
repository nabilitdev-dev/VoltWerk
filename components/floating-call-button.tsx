'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { site } from '@/data/site';
import { useScrolled } from '@/hooks/use-scrolled';

/** Mobiler Schnellzugriff: Anruf-Button, sobald gescrollt wird. */
export function FloatingCallButton() {
  const visible = useScrolled(320);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.a
          href={site.phoneHref}
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          transition={{ duration: 0.22 }}
          aria-label={`VoltWerk anrufen: ${site.phone}`}
          className="fixed bottom-4 right-4 z-40 grid h-[3.25rem] w-[3.25rem] place-items-center rounded-full bg-volt text-navy-950 shadow-lift md:hidden"
        >
          <Phone aria-hidden className="h-5 w-5" />
        </motion.a>
      ) : null}
    </AnimatePresence>
  );
}
