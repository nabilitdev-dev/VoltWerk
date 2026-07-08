import { ExternalLink, MapPin } from 'lucide-react';
import { site } from '@/data/site';

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.address.street}, ${site.address.zip} ${site.address.city}`
)}`;

/** Karten-Platzhalter: kein externes Embed, dafür ein Link zu Google Maps. */
export function MapPlaceholder() {
  return (
    <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-3xl border border-line bg-fog md:min-h-[340px]">
      <div aria-hidden className="absolute inset-0 bg-grid-light bg-grid" />
      {/* Stilisierte „Straßen“ */}
      <svg
        aria-hidden
        viewBox="0 0 800 340"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full opacity-60"
        fill="none"
      >
        <path d="M-20 220 C160 180 300 260 460 210 S760 150 820 190" stroke="#D5DDE8" strokeWidth="14" strokeLinecap="round" />
        <path d="M180 -20 C220 120 160 240 240 360" stroke="#D5DDE8" strokeWidth="10" strokeLinecap="round" />
        <path d="M560 -20 C520 100 620 220 560 360" stroke="#D5DDE8" strokeWidth="10" strokeLinecap="round" />
      </svg>

      <div className="relative flex flex-col items-center px-6 py-12 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-navy-900 text-volt shadow-lift">
          <MapPin aria-hidden className="h-6 w-6" />
        </span>
        <p className="mt-4 font-display text-lg font-semibold text-navy-950">
          {site.address.street}, {site.address.zip} {site.address.city}
        </p>
        <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-steel">
          Kartenansicht in der Demo deaktiviert
        </p>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-navy-900/20 bg-white px-5 py-2.5 text-sm font-semibold text-navy-950 shadow-card transition-all hover:border-navy-900 hover:shadow-lift"
        >
          Route in Google Maps öffnen
          <ExternalLink aria-hidden className="h-4 w-4" />
          <span className="sr-only">(öffnet in neuem Tab)</span>
        </a>
      </div>
    </div>
  );
}
