'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useId, useState } from 'react';
import type { FaqItem } from '@/types';
import { cn } from '@/lib/utils';

interface FaqAccordionProps {
  items: FaqItem[];
}

/** Barrierearmes Accordion – immer genau eine Frage geöffnet. */
export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-white shadow-card">
      {items.map((item, index) => {
        const open = openIndex === index;
        const headerId = `${baseId}-header-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                id={headerId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-fog/60"
              >
                <span
                  className={cn(
                    'font-display text-base font-semibold md:text-lg',
                    open ? 'text-navy-950' : 'text-navy-900'
                  )}
                >
                  {item.question}
                </span>
                <span
                  aria-hidden
                  className={cn(
                    'grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300',
                    open
                      ? 'rotate-45 border-volt bg-volt text-navy-950'
                      : 'border-line text-navy-900'
                  )}
                >
                  <Plus className="h-4 w-4" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.21, 0.6, 0.35, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-sm leading-relaxed text-steel md:text-base">
                    {item.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
