import Image from 'next/image';
import { Check, Phone } from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';
import { Container } from '@/components/container';
import { Button } from '@/components/ui/button';
import { site } from '@/data/site';
import { icons } from '@/lib/icons';
import { cn } from '@/lib/utils';
import type { Service } from '@/types';

interface ServiceSectionProps {
  service: Service;
  index: number;
}

/** Ausführliche Leistungs-Section mit alternierendem Bild/Text-Layout. */
export function ServiceSection({ service, index }: ServiceSectionProps) {
  const Icon = icons[service.icon];
  const reversed = index % 2 === 1;

  return (
    <section
      id={service.slug}
      className={cn('scroll-mt-24 py-16 md:py-20', index % 2 === 1 && 'bg-fog')}
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection className={cn(reversed && 'lg:order-2')}>
            <p className="flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-[0.18em] text-steel">
              <span aria-hidden className="h-[5px] w-[5px] rounded-full bg-volt" />
              Leistung {String(index + 1).padStart(2, '0')}
            </p>
            <div className="mt-4 flex items-center gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy-900 text-volt">
                <Icon aria-hidden className="h-6 w-6" />
              </span>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-navy-950 md:text-3xl">
                {service.title}
              </h2>
            </div>
            <p className="mt-5 leading-relaxed text-steel">{service.description}</p>
            <ul className="mt-6 space-y-2.5">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-sm font-medium text-navy-900">
                  <span
                    aria-hidden
                    className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-volt"
                  >
                    <Check className="h-3 w-3 text-navy-950" />
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Button href="/kontakt/">Angebot anfordern</Button>
              <Button href={site.phoneHref} variant="ghost">
                <Phone aria-hidden className="h-4 w-4 text-volt-700" />
                {site.phone}
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection preset="scale" className={cn(reversed && 'lg:order-1')}>
            <div className="group relative overflow-hidden rounded-3xl border border-line bg-navy-900 shadow-card">
              <Image
                src={service.image}
                alt={service.imageAlt}
                width={800}
                height={600}
                priority={index === 0}
                className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
