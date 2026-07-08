import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/animated-section';
import { Container } from '@/components/container';
import { CtaSection } from '@/components/cta-section';
import { FaqAccordion } from '@/components/faq-accordion';
import { PageHeader } from '@/components/page-header';
import { faqItems } from '@/data/faq';

export const metadata: Metadata = {
  title: 'FAQ – Häufige Fragen zu Kosten, Ablauf & Leistungen',
  description:
    'Antworten auf die häufigsten Fragen an VoltWerk Elektro München: Angebot, Notdienst, Photovoltaik, Smart Home, Gewährleistung und mehr.',
};

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Häufige Fragen, ehrliche Antworten"
        lead="Kosten, Abläufe, Technik: Hier finden Sie die Antworten, die wir am häufigsten geben. Und wenn etwas fehlt – rufen Sie einfach an."
      />

      <section className="py-16 md:py-24">
        <Container>
          <AnimatedSection className="mx-auto max-w-3xl">
            <FaqAccordion items={faqItems} />
          </AnimatedSection>
        </Container>
      </section>

      <CtaSection
        title="Ihre Frage war nicht dabei?"
        text="Kein Problem – schreiben Sie uns oder rufen Sie kurz durch. Auf konkrete Fragen gibt es bei uns konkrete Antworten, keine Warteschleifen."
      />
    </>
  );
}
