import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { icons } from '@/lib/icons';
import { site } from '@/data/site';
import type { Service } from '@/types';

/** Leistungs-Karte für die Startseite. Der Notdienst bekommt eine dunkle Sondervariante. */
export function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon];

  if (service.isEmergency) {
    return (
      <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-navy-900 p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
        {/* Warnband-Akzent wie Isolierband */}
        <div aria-hidden className="absolute inset-x-0 top-0 h-1.5 bg-tape" />
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-volt text-navy-950">
          <Icon aria-hidden className="h-6 w-6" />
        </div>
        <h3 className="mt-5 font-display text-xl font-semibold text-white">{service.title}</h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-white/70">{service.teaser}</p>
        <a
          href={site.phoneHref}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-volt transition-colors hover:text-white"
        >
          <Phone aria-hidden className="h-4 w-4" />
          {site.phone}
          <span className="sr-only">– Notdienst anrufen</span>
        </a>
      </div>
    );
  }

  return (
    <div className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-navy-900/25 hover:shadow-lift">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-volt transition-colors duration-300 group-hover:bg-navy-950">
        <Icon aria-hidden className="h-6 w-6" />
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold text-navy-950">{service.title}</h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-steel">{service.teaser}</p>
      <Link
        href={`/leistungen/#${service.slug}`}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 transition-colors hover:text-navy-600"
      >
        Mehr erfahren
        <ArrowRight
          aria-hidden
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        />
        <span className="sr-only">über {service.title}</span>
      </Link>
    </div>
  );
}
