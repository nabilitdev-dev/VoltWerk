import type { Metadata } from 'next';
import { Info } from 'lucide-react';
import { Container } from '@/components/container';
import { PageHeader } from '@/components/page-header';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum der VoltWerk Elektro GmbH (Demo-Website).',
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <PageHeader eyebrow="Rechtliches" title="Impressum" />
      <section className="py-16 md:py-20">
        <Container className="max-w-3xl">
          <div className="mb-10 flex items-start gap-4 rounded-2xl border border-volt/60 bg-volt/10 p-5">
            <Info aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-navy-900" />
            <p className="text-sm leading-relaxed text-navy-900">
              <strong>Hinweis:</strong> Dies ist eine Demo-Website. Die VoltWerk
              Elektro GmbH existiert nicht – alle Angaben auf dieser Seite sind
              frei erfunden und dienen ausschließlich der Präsentation.
            </p>
          </div>

          <div className="space-y-8 text-sm leading-relaxed text-steel [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-navy-950">
            <div>
              <h2>Angaben gemäß § 5 DDG</h2>
              <p className="mt-3">
                {site.name}
                <br />
                {site.address.street}
                <br />
                {site.address.zip} {site.address.city}
              </p>
            </div>
            <div>
              <h2>Vertreten durch</h2>
              <p className="mt-3">Geschäftsführer: Thomas Berger (Elektromeister)</p>
            </div>
            <div>
              <h2>Kontakt</h2>
              <p className="mt-3">
                Telefon: {site.phone}
                <br />
                E-Mail: {site.email}
              </p>
            </div>
            <div>
              <h2>Registereintrag</h2>
              <p className="mt-3">
                Handelsregister: Amtsgericht München, HRB 000000 (fiktiv)
                <br />
                Umsatzsteuer-ID gemäß § 27a UStG: DE000000000 (fiktiv)
              </p>
            </div>
            <div>
              <h2>Aufsichtsbehörde / Kammer</h2>
              <p className="mt-3">
                Handwerkskammer für München und Oberbayern
                <br />
                Eingetragen in der Handwerksrolle: Elektrotechniker-Handwerk
              </p>
            </div>
            <div>
              <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
              <p className="mt-3">
                Thomas Berger, Anschrift wie oben.
              </p>
            </div>
            <div>
              <h2>Streitschlichtung</h2>
              <p className="mt-3">
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                teilzunehmen.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
