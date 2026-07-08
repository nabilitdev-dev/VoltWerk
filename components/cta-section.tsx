import { Phone } from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';
import { CircuitTrace } from '@/components/circuit-trace';
import { Container } from '@/components/container';
import { Button } from '@/components/ui/button';
import { site } from '@/data/site';

interface CtaSectionProps {
  title?: string;
  text?: string;
}

/** Wiederverwendbares CTA-Band auf dunklem Grund mit Leiterbahn-Dekor. */
export function CtaSection({
  title = 'Bereit für Ihr Projekt?',
  text = 'Erzählen Sie uns, was Sie vorhaben – Sie erhalten innerhalb von 24 Stunden eine Rückmeldung und ein kostenloses Festpreisangebot.',
}: CtaSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <AnimatedSection preset="scale">
          <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-6 py-14 md:px-16 md:py-16">
            <div aria-hidden className="absolute inset-0 bg-grid" />
            <div
              aria-hidden
              className="absolute -right-16 top-0 hidden h-full w-[420px] opacity-50 lg:block"
            >
              <CircuitTrace />
            </div>
            <div className="relative max-w-xl">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
                {title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/70">{text}</p>
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Button href="/kontakt/" size="lg">
                  Kontakt aufnehmen
                </Button>
                <Button href={site.phoneHref} variant="outline-light" size="lg">
                  <Phone aria-hidden className="h-4 w-4" />
                  {site.phone}
                </Button>
              </div>
              <p className="mt-5 font-mono text-xs text-white/45">
                Kostenlos & unverbindlich · {site.hours}
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
