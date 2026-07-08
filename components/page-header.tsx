import { AnimatedSection } from '@/components/animated-section';
import { Container } from '@/components/container';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  lead?: string;
}

/** Dunkler Seitenkopf für Unterseiten – konsistent zum Hero der Startseite. */
export function PageHeader({ eyebrow, title, lead }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div aria-hidden className="absolute inset-0 bg-grid" />
      <div
        aria-hidden
        className="absolute -top-32 right-[-8%] h-[26rem] w-[26rem] rounded-full bg-navy-600/25 blur-[110px]"
      />
      <Container className="relative py-16 md:py-20">
        <AnimatedSection>
          <p className="flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-[0.18em] text-white/60">
            <span aria-hidden className="h-[5px] w-[5px] rounded-full bg-volt" />
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl">
            {title}
          </h1>
          {lead ? (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              {lead}
            </p>
          ) : null}
        </AnimatedSection>
      </Container>
    </section>
  );
}
