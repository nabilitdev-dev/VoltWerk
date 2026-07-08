import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/animated-section';
import { Container } from '@/components/container';
import { CtaSection } from '@/components/cta-section';
import { PageHeader } from '@/components/page-header';
import { ServiceSection } from '@/components/service-section';
import { detailServices } from '@/data/services';

export const metadata: Metadata = {
  title: 'Leistungen – Elektroinstallation, Smart Home, PV & mehr',
  description:
    'Alle Leistungen von VoltWerk Elektro München: Elektroinstallation, Altbausanierung, Smart Home, Photovoltaik, Wallboxen, Beleuchtung und Netzwerktechnik.',
};

export default function LeistungenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Leistungen"
        title="Was wir für Sie unter Strom setzen"
        lead="Sieben Fachbereiche, ein Anspruch: Elektrotechnik, die sicher läuft und sauber dokumentiert ist – vom Altbau bis zum Neubau, vom Einfamilienhaus bis zur Gewerbefläche."
      />

      {/* Sprungnavigation zu den Leistungen */}
      <div className="border-b border-line bg-white">
        <Container>
          <AnimatedSection preset="fade-in">
            <nav aria-label="Leistungsbereiche" className="flex flex-wrap gap-2 py-5">
              {detailServices.map((service) => (
                <a
                  key={service.slug}
                  href={`#${service.slug}`}
                  className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-steel transition-colors hover:border-navy-900/40 hover:text-navy-950"
                >
                  {service.title}
                </a>
              ))}
            </nav>
          </AnimatedSection>
        </Container>
      </div>

      {detailServices.map((service, index) => (
        <ServiceSection key={service.slug} service={service} index={index} />
      ))}

      <CtaSection
        title="Ihre Leistung war nicht dabei?"
        text="Fragen Sie trotzdem an – vieles lösen wir projektbezogen, und wenn wir es nicht können, empfehlen wir Ihnen ehrlich den richtigen Betrieb."
      />
    </>
  );
}
