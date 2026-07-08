import type { Metadata } from 'next';
import { Info } from 'lucide-react';
import { Container } from '@/components/container';
import { PageHeader } from '@/components/page-header';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung der VoltWerk Elektro GmbH (Demo-Website).',
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHeader eyebrow="Rechtliches" title="Datenschutzerklärung" />
      <section className="py-16 md:py-20">
        <Container className="max-w-3xl">
          <div className="mb-10 flex items-start gap-4 rounded-2xl border border-volt/60 bg-volt/10 p-5">
            <Info aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-navy-900" />
            <p className="text-sm leading-relaxed text-navy-900">
              <strong>Hinweis:</strong> Dies ist eine Demo-Website ohne echten
              Geschäftsbetrieb. Es werden keine personenbezogenen Daten
              verarbeitet, gespeichert oder übertragen.
            </p>
          </div>

          <div className="space-y-8 text-sm leading-relaxed text-steel [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-navy-950">
            <div>
              <h2>1. Verantwortlicher</h2>
              <p className="mt-3">
                {site.name}, {site.address.street}, {site.address.zip}{' '}
                {site.address.city} (fiktives Unternehmen, Demo-Zwecke).
              </p>
            </div>
            <div>
              <h2>2. Statische Website ohne Datenverarbeitung</h2>
              <p className="mt-3">
                Diese Website ist rein statisch. Sie verwendet keine Cookies,
                keine Analyse- oder Tracking-Dienste und bindet keine externen
                Inhalte wie Kartendienste oder Schriftarten von Drittservern zur
                Laufzeit ein.
              </p>
            </div>
            <div>
              <h2>3. Kontaktformular</h2>
              <p className="mt-3">
                Das Kontaktformular dient nur der Demonstration. Beim Absenden
                werden keine Daten übertragen oder gespeichert – die Eingaben
                verbleiben ausschließlich in Ihrem Browser und werden nach dem
                Absenden verworfen.
              </p>
            </div>
            <div>
              <h2>4. Server-Logfiles</h2>
              <p className="mt-3">
                Beim Aufruf der Website kann der Hosting-Anbieter technisch
                notwendige Zugriffsdaten (z. B. IP-Adresse, Zeitpunkt des
                Abrufs) in Logfiles verarbeiten. Rechtsgrundlage wäre Art. 6
                Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb).
              </p>
            </div>
            <div>
              <h2>5. Ihre Rechte</h2>
              <p className="mt-3">
                Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung,
                Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit
                und Widerspruch zu (Art. 15–21 DSGVO) sowie ein Beschwerderecht
                bei einer Datenschutz-Aufsichtsbehörde, z. B. dem Bayerischen
                Landesamt für Datenschutzaufsicht.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
