import { icons } from '@/lib/icons';
import type { Benefit } from '@/types';

/** Benefit-Eintrag für die „Warum wir“-Section. */
export function BenefitCard({ benefit }: { benefit: Benefit }) {
  const Icon = icons[benefit.icon];

  return (
    <div className="group flex gap-5 rounded-2xl bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative h-12 w-12 shrink-0">
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-fog text-navy-900 transition-colors duration-300 group-hover:bg-navy-900 group-hover:text-volt">
          <Icon aria-hidden className="h-6 w-6" />
        </div>
        <span
          aria-hidden
          className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-volt"
        />
      </div>
      <div>
        <h3 className="font-display text-lg font-semibold text-navy-950">{benefit.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-steel">{benefit.description}</p>
      </div>
    </div>
  );
}
