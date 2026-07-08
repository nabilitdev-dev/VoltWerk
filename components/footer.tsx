import Link from 'next/link';
import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Siren } from 'lucide-react';
import { Logo } from '@/components/logo';
import { detailServices } from '@/data/services';
import { navItems, site } from '@/data/site';

const socialIcons = {
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
} as const;

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      {/* Leiterbahn-Trenner */}
      <div aria-hidden className="flex items-center gap-2 px-6">
        <span className="h-px flex-1 bg-white/10" />
        <span className="h-1.5 w-1.5 rounded-full bg-volt" />
        <span className="h-px w-24 bg-volt/60" />
        <span className="h-1.5 w-1.5 rounded-full bg-volt" />
        <span className="h-px flex-1 bg-white/10" />
      </div>

      <div className="container grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <Link href="/" aria-label="VoltWerk Elektro GmbH – Startseite" className="inline-block">
            <Logo tone="dark" />
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            Ihr Elektro-Meisterbetrieb in München – von der Steckdose bis zum
            Smart Home, von der PV-Anlage bis zum Ladepark.
          </p>
          <ul className="mt-6 flex gap-3">
            {site.social.map((s) => {
              const Icon = socialIcons[s.icon as keyof typeof socialIcons];
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`VoltWerk auf ${s.label} (öffnet in neuem Tab)`}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-volt hover:text-volt"
                  >
                    <Icon aria-hidden className="h-[18px] w-[18px]" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <nav aria-label="Footer-Navigation">
          <h2 className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-white/50">
            Navigation
          </h2>
          <ul className="mt-5 space-y-2.5">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/75 transition-colors hover:text-volt"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Leistungen">
          <h2 className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-white/50">
            Leistungen
          </h2>
          <ul className="mt-5 space-y-2.5">
            {detailServices.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/leistungen/#${service.slug}`}
                  className="text-sm text-white/75 transition-colors hover:text-volt"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-white/50">
            Kontakt
          </h2>
          <ul className="mt-5 space-y-3.5 text-sm text-white/75">
            <li className="flex items-start gap-3">
              <MapPin aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-volt" />
              <span>
                {site.address.street}
                <br />
                {site.address.zip} {site.address.city}
              </span>
            </li>
            <li>
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 transition-colors hover:text-volt"
              >
                <Phone aria-hidden className="h-4 w-4 shrink-0 text-volt" />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 transition-colors hover:text-volt"
              >
                <Mail aria-hidden className="h-4 w-4 shrink-0 text-volt" />
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-volt" />
              <span>{site.hours}</span>
            </li>
            <li className="flex items-start gap-3">
              <Siren aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-volt" />
              <span>{site.emergencyNote}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/45 sm:flex-row">
          <p>
            © 2026 {site.name} · Demo-Website – kein reales Unternehmen
          </p>
          <ul className="flex items-center gap-5">
            <li>
              <Link href="/impressum/" className="transition-colors hover:text-volt">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz/" className="transition-colors hover:text-volt">
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
