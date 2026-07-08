import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/animated-section';
import { Container } from '@/components/container';
import { ContactForm } from '@/components/contact-form';
import { ContactInfo } from '@/components/contact-info';
import { MapPlaceholder } from '@/components/map-placeholder';
import { PageHeader } from '@/components/page-header';

export const metadata: Metadata = {
  title: 'Kontakt – Angebot anfordern oder direkt anrufen',
  description:
    'Kontaktieren Sie VoltWerk Elektro München: Telefon 089 12345678, info@voltwerk-elektro.de oder per Formular. Antwort innerhalb von 24 Stunden.',
};

export default function KontaktPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kontakt"
        title="Sprechen wir über Ihr Projekt"
        lead="Ob konkretes Vorhaben oder erste Idee: Sie erreichen uns telefonisch, per E-Mail oder über das Formular – wir antworten innerhalb von 24 Stunden."
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <AnimatedSection>
              <ContactInfo />
            </AnimatedSection>
            <AnimatedSection delay={0.08}>
              <div className="rounded-3xl border border-line bg-white p-6 shadow-card md:p-8">
                <h2 className="font-display text-xl font-semibold text-navy-950">
                  Projekt anfragen
                </h2>
                <p className="mt-1.5 text-sm text-steel">
                  Kostenlos und unverbindlich – Sie erhalten ein Festpreisangebot.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </AnimatedSection>
          </div>
          <AnimatedSection className="mt-10" preset="fade-in">
            <MapPlaceholder />
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
