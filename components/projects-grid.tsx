'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { ProjectCard } from '@/components/project-card';
import { projects } from '@/data/projects';
import type { ProjectCategory } from '@/types';
import { cn } from '@/lib/utils';

type Filter = 'alle' | ProjectCategory;

const filters: { value: Filter; label: string }[] = [
  { value: 'alle', label: 'Alle' },
  { value: 'privat', label: 'Privat' },
  { value: 'gewerbe', label: 'Gewerbe' },
  { value: 'pv', label: 'PV' },
  { value: 'smart-home', label: 'Smart Home' },
];

/** Filterbares Referenzen-Grid mit animiertem Layoutwechsel. */
export function ProjectsGrid() {
  const [active, setActive] = useState<Filter>('alle');

  const visible =
    active === 'alle' ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div
        role="group"
        aria-label="Referenzen nach Kategorie filtern"
        className="flex flex-wrap gap-2"
      >
        {filters.map((filter) => {
          const isActive = active === filter.value;
          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActive(filter.value)}
              aria-pressed={isActive}
              className={cn(
                'rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200',
                isActive
                  ? 'border-navy-900 bg-navy-900 text-white'
                  : 'border-line bg-white text-steel hover:border-navy-900/40 hover:text-navy-950'
              )}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-steel">
        {visible.length} {visible.length === 1 ? 'Projekt' : 'Projekte'}
      </p>

      <motion.div layout className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.21, 0.6, 0.35, 1] }}
            >
              <ProjectCard project={project} priority={index < 3} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
