import { Clock, Mail, MapPin, Phone, Siren } from 'lucide-react';
import { site } from '@/data/site';

const items = [
  {
    icon: Phone,
    label: 'Telefon',
    value: site.phone,
    href: site.phoneHref,
    note: 'Mo–Fr direkt erreichbar',
  },
  {
    icon: Mail,
    label: 'E-Mail',
    value: site.email,
    href: `mailto:${site.email}`,
    note: 'Antwort innerhalb von 24 h',
  },
  {
    icon: MapPin,
    label: 'Adresse',
    value: `${site.address.street}, ${site.address.zip} ${site.address.city}`,
    href: undefined,
    note: 'Termine nach Vereinbarung',
  },
  {
    icon: Clock,
    label: 'Öffnungszeiten',
    value: site.hours,
    href: undefined,
    note: 'Sa/So: Notdienst',
  },
];

/** Kontaktdaten als kompakte Liste – plus Notdienst-Hinweis. */
export function ContactInfo() {
  return (
    <div className="space-y-3.5">
      {items.map((item) => {
        const content = (
          <>
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-900 text-volt">
              <item.icon aria-hidden className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block font-mono text-[0.65rem] font-medium uppercase tracking-[0.16em] text-steel">
                {item.label}
              </span>
              <span className="mt-0.5 block truncate text-sm font-semibold text-navy-950">
                {item.value}
              </span>
              <span className="mt-0.5 block text-xs text-steel">{item.note}</span>
            </span>
          </>
        );

        return item.href ? (
          <a
            key={item.label}
            href={item.href}
            className="flex items-center gap-4 rounded-2xl border border-line bg-white p-4 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-navy-900/25 hover:shadow-lift"
          >
            {content}
          </a>
        ) : (
          <div
            key={item.label}
            className="flex items-center gap-4 rounded-2xl border border-line bg-white p-4 shadow-card"
          >
            {content}
          </div>
        );
      })}

      {/* Notdienst-Hinweis mit Warnband-Akzent */}
      <div className="relative overflow-hidden rounded-2xl bg-navy-900 p-5">
        <div aria-hidden className="absolute inset-x-0 top-0 h-1.5 bg-tape" />
        <div className="flex items-center gap-4">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-volt text-navy-950">
            <Siren aria-hidden className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-semibold text-white">Elektro-Notdienst</p>
            <p className="mt-0.5 text-xs text-white/65">{site.emergencyNote}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
