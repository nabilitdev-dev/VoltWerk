import Image from 'next/image';
import type { Metadata } from 'next';
import { ShieldCheck } from 'lucide-react';
import {
  AnimatedGroup,
  AnimatedItem,
  AnimatedSection,
} from '@/components/animated-section';
import { Container } from '@/components/container';
import { CtaSection } from '@/components/cta-section';
import { PageHeader } from '@/components/page-header';
import { SectionHeading } from '@/components/section-heading';
import { Stats } from '@/components/stats';
import { Timeline } from '@/components/timeline';
import { certifications, team, values } from '@/data/about';
import { icons } from '@/lib/icons';

export const metadata: Metadata = {
  title: 'Über uns – Meisterbetrieb seit 2011',
  description:
    'Lernen Sie VoltWerk Elektro kennen: Münchner Meisterbetrieb seit 2011, zwölf zertifizierte Fachkräfte, über 2.400 Projekte – und Werte, die man an der Arbeit sieht.',
};

export default function UeberUnsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Über uns"
        title="Wir machen Elektrik, die man nicht nachbessern muss"
        lead="Seit 2011 arbeiten wir in München nach einem einfachen Prinzip: lieber einmal richtig. Das hat uns über 2.400 Projekte und eine Weiterempfehlungsquote gebracht, auf die wir stolz sind."
      />

      {/* Geschichte + Zahlen */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <SectionHeading
                eyebrow="Unsere Geschichte"
                title="Vom Ein-Mann-Betrieb zum zwölfköpfigen Team"
              />
              <div className="mt-6 space-y-4 leading-relaxed text-steel">
                <p>
                  Angefangen hat alles 2011 mit einem Transporter und einer
                  Werkbank in Sendling. Elektromeister Thomas Berger hatte nach
                  Jahren als angestellter Obermonteur genug davon, dass „passt
                  schon“ als Qualitätsmaßstab durchging – und gründete VoltWerk.
                </p>
                <p>
                  Heute arbeiten zwölf Fachkräfte in fester Anstellung an
                  Projekten in ganz München: Gesellen, Techniker, ein
                  KNX-zertifizierter Obermonteur und zwei Auszubildende. Geblieben
                  ist der Anspruch aus der Anfangszeit – jede Anlage verlässt uns
                  gemessen, geprüft und so dokumentiert, dass auch in zwanzig
                  Jahren jeder Kollege sofort durchblickt.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection preset="scale">
              <div className="overflow-hidden rounded-3xl border border-line shadow-card">
                <Image
                  src="/images/workshop.svg"
                  alt="Stilisierte Illustration der VoltWerk-Werkstatt"
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

      {/* Werte */}
      <section className="bg-fog py-16 md:py-24">
        <Container>
          <AnimatedSection>
            <SectionHeading
              eyebrow="Unsere Werte"
              title="Woran Sie uns messen können"
              align="center"
            />
          </AnimatedSection>
          <AnimatedGroup className="mt-12 grid gap-5 md:grid-cols-2">
            {values.map((value) => {
              const Icon = icons[value.icon];
              return (
                <AnimatedItem key={value.title} className="h-full">
                  <div className="flex h-full gap-5 rounded-2xl bg-white p-6 shadow-card">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy-900 text-volt">
                      <Icon aria-hidden className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-navy-950">
                        {value.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-steel">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </AnimatedItem>
              );
            })}
          </AnimatedGroup>
        </Container>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24">
        <Container>
          <AnimatedSection>
            <SectionHeading
              eyebrow="Das Team"
              title="Die Menschen hinter VoltWerk"
              lead="Vier Gesichter stellvertretend für das ganze Team – vom Meister bis zum Servicetechniker."
              align="center"
            />
          </AnimatedSection>
          <AnimatedGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <AnimatedItem key={member.name} className="h-full">
                <div className="flex h-full flex-col items-center rounded-2xl border border-line bg-white p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span
                    aria-hidden
                    className="grid h-20 w-20 place-items-center rounded-2xl bg-navy-900 font-display text-2xl font-bold text-volt"
                  >
                    {member.initials}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-navy-950">
                    {member.name}
                  </h3>
                  <p className="mt-1 font-mono text-[0.65rem] font-medium uppercase tracking-[0.14em] text-volt-700">
                    {member.role}
                  </p>
                  <p className="mt-2.5 text-sm leading-relaxed text-steel">{member.focus}</p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedGroup>
        </Container>
      </section>

      {/* Zertifizierungen */}
      <section className="bg-fog py-16 md:py-24">
        <Container>
          <AnimatedSection>
            <SectionHeading
              eyebrow="Zertifizierungen"
              title="Qualifikation, schwarz auf weiß"
              lead="Vertrauen ist gut – Nachweise sind besser. Diese Qualifikationen bringt unser Team mit."
            />
          </AnimatedSection>
          <AnimatedGroup className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <AnimatedItem key={cert.title} className="h-full">
                <div className="flex h-full items-start gap-4 rounded-2xl bg-white p-5 shadow-card">
                  <ShieldCheck aria-hidden className="mt-0.5 h-6 w-6 shrink-0 text-volt-700" />
                  <div>
                    <h3 className="text-sm font-semibold text-navy-950">{cert.title}</h3>
                    <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-steel">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedGroup>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24">
        <Container>
          <AnimatedSection>
            <SectionHeading
              eyebrow="Meilensteine"
              title="15 Jahre unter Spannung"
              lead="Von der Gründung bis heute – die wichtigsten Stationen unserer Firmengeschichte."
            />
          </AnimatedSection>
          <div className="mt-12">
            <Timeline />
          </div>
        </Container>
      </section>

      <CtaSection
        title="Lust, mit uns zu arbeiten?"
        text="Ob als Kunde oder als Kollege: Wir freuen uns auf Ihre Nachricht. Für Projekte gibt es ein kostenloses Festpreisangebot – für Bewerbungen ein ehrliches Gespräch."
      />
    </>
  );
}
