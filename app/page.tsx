import Image from 'next/image';
import type { Metadata } from 'next';
import { ArrowRight, BadgeCheck } from 'lucide-react';
import {
  AnimatedGroup,
  AnimatedItem,
  AnimatedSection,
} from '@/components/animated-section';
import { BenefitCard } from '@/components/benefit-card';
import { Container } from '@/components/container';
import { ContactForm } from '@/components/contact-form';
import { ContactInfo } from '@/components/contact-info';
import { CtaSection } from '@/components/cta-section';
import { FaqAccordion } from '@/components/faq-accordion';
import { Hero } from '@/components/hero';
import { MapPlaceholder } from '@/components/map-placeholder';
import { ProcessSteps } from '@/components/process-steps';
import { ProjectCard } from '@/components/project-card';
import { SectionHeading } from '@/components/section-heading';
import { ServiceCard } from '@/components/service-card';
import { Stats } from '@/components/stats';
import { TestimonialCard } from '@/components/testimonial-card';
import { Button } from '@/components/ui/button';
import { benefits } from '@/data/benefits';
import { homeFaqItems } from '@/data/faq';
import { projects } from '@/data/projects';
import { homeServices } from '@/data/services';
import { testimonials } from '@/data/testimonials';

export const metadata: Metadata = {
  title: {
    absolute: 'VoltWerk Elektro GmbH – Ihr Elektriker Meisterbetrieb in München',
  },
  description:
    'Elektroinstallation, Smart Home, Photovoltaik, Wallboxen und 24/7-Notdienst in München. Meisterbetrieb mit Festpreisgarantie – Angebot innerhalb von 24 Stunden.',
};

const aboutHighlights = [
  'Eingetragener Meisterbetrieb der HWK München',
  'Zwölf festangestellte, zertifizierte Fachkräfte',
  'Festpreisangebot vor Projektstart',
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Leistungen */}
      <section className="py-16 md:py-24">
        <Container>
          <AnimatedSection className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Leistungen"
              title="Alles rund um Strom – aus einer Hand"
              lead="Von der einzelnen Steckdose bis zum kompletten Energiekonzept: Wir planen, installieren und warten Ihre gesamte Elektrotechnik."
            />
            <Button href="/leistungen/" variant="outline" className="mb-1">
              Alle Leistungen
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Button>
          </AnimatedSection>
          <AnimatedGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeServices.map((service) => (
              <AnimatedItem key={service.slug} className="h-full">
                <ServiceCard service={service} />
              </AnimatedItem>
            ))}
          </AnimatedGroup>
        </Container>
      </section>

      {/* Warum wir */}
      <section className="bg-fog py-16 md:py-24">
        <Container>
          <AnimatedSection>
            <SectionHeading
              eyebrow="Warum VoltWerk"
              title="Handwerk, auf das Sie sich verlassen können"
              lead="Sechs Gründe, warum Privathaushalte, Hausverwaltungen und Gewerbe in München seit 2011 mit uns bauen."
            />
          </AnimatedSection>
          <AnimatedGroup className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <AnimatedItem key={benefit.title} className="h-full">
                <BenefitCard benefit={benefit} />
              </AnimatedItem>
            ))}
          </AnimatedGroup>
        </Container>
      </section>

      {/* Ablauf */}
      <section className="py-16 md:py-24">
        <Container>
          <AnimatedSection>
            <SectionHeading
              eyebrow="So läuft's"
              title="In vier Schritten zum fertigen Projekt"
              lead="Klar geregelt von der ersten Anfrage bis zur dokumentierten Abnahme – damit Sie jederzeit wissen, wo Ihr Projekt steht."
              align="center"
            />
          </AnimatedSection>
          <div className="mt-14">
            <ProcessSteps />
          </div>
        </Container>
      </section>

      {/* Referenzen (Auszug) */}
      <section className="bg-fog py-16 md:py-24">
        <Container>
          <AnimatedSection className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Referenzen"
              title="Projekte, die für uns sprechen"
              lead="Ein Auszug aus über 2.400 abgeschlossenen Projekten in München und Umgebung."
            />
            <Button href="/referenzen/" variant="outline" className="mb-1">
              Alle Referenzen
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Button>
          </AnimatedSection>
          <AnimatedGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <AnimatedItem key={project.id} className="h-full">
                <ProjectCard project={project} />
              </AnimatedItem>
            ))}
          </AnimatedGroup>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <Container>
          <AnimatedSection>
            <SectionHeading
              eyebrow="Kundenstimmen"
              title="Was unsere Kunden sagen"
              lead="4,9 von 5 Sternen aus über 200 Bewertungen – hier sind drei davon."
              align="center"
            />
          </AnimatedSection>
          <AnimatedGroup className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <AnimatedItem key={testimonial.name} className="h-full">
                <TestimonialCard testimonial={testimonial} />
              </AnimatedItem>
            ))}
          </AnimatedGroup>
        </Container>
      </section>

      {/* Über uns (kurz) + Zahlen */}
      <section className="bg-fog py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <SectionHeading
                eyebrow="Über uns"
                title="Ein Münchner Meisterbetrieb mit Haltung"
                lead="Seit 2011 steht VoltWerk für Elektrotechnik, die man nicht nachbessern muss. Gegründet von Elektromeister Thomas Berger, heute ein Team aus zwölf Fachkräften mit eigener Werkstatt in der Musterstraße."
              />
              <ul className="mt-7 space-y-3">
                {aboutHighlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3 text-sm font-medium text-navy-900 md:text-base">
                    <BadgeCheck aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-volt-700" />
                    {highlight}
                  </li>
                ))}
              </ul>
              <Button href="/ueber-uns/" variant="navy" className="mt-8">
                Mehr über uns
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Button>
            </AnimatedSection>
            <AnimatedSection preset="scale">
              <div className="relative overflow-hidden rounded-3xl border border-line shadow-card">
                <Image
                  src="/images/workshop.svg"
                  alt="Stilisierte Illustration der VoltWerk-Werkstatt mit Werkzeug und Schaltplänen"
                  width={800}
                  height={600}
                  className="h-auto w-full"
                />
              </div>
            </AnimatedSection>
          </div>
          <AnimatedSection className="mt-16" preset="scale">
            <Stats />
          </AnimatedSection>
        </Container>
      </section>

      <CtaSection />

      {/* FAQ */}
      <section className="pb-16 md:pb-24">
        <Container>
          <AnimatedSection>
            <SectionHeading
              eyebrow="FAQ"
              title="Häufige Fragen, ehrliche Antworten"
              lead="Kosten, Abläufe, Fördermittel: die acht Fragen, die uns am häufigsten gestellt werden."
              align="center"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="mx-auto mt-12 max-w-3xl">
            <FaqAccordion items={homeFaqItems} />
            <p className="mt-6 text-center text-sm text-steel">
              Ihre Frage war nicht dabei?{' '}
              <a href="/faq/" className="font-semibold text-navy-900 underline decoration-volt decoration-2 underline-offset-4 hover:text-navy-600">
                Alle Fragen im FAQ
              </a>
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Kontakt */}
      <section className="bg-fog py-16 md:py-24">
        <Container>
          <AnimatedSection>
            <SectionHeading
              eyebrow="Kontakt"
              title="Sprechen wir über Ihr Projekt"
              lead="Rufen Sie an, schreiben Sie uns oder nutzen Sie das Formular – wir melden uns innerhalb von 24 Stunden."
            />
          </AnimatedSection>
          <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <AnimatedSection delay={0.05}>
              <ContactInfo />
            </AnimatedSection>
            <AnimatedSection delay={0.12}>
              <div className="rounded-3xl border border-line bg-white p-6 shadow-card md:p-8">
                <h3 className="font-display text-xl font-semibold text-navy-950">
                  Projekt anfragen
                </h3>
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
