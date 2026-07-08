import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/animated-section';
import { Container } from '@/components/container';
import { CtaSection } from '@/components/cta-section';
import { PageHeader } from '@/components/page-header';
import { ProjectsGrid } from '@/components/projects-grid';

export const metadata: Metadata = {
  title: 'Referenzen – Projekte aus München und Umgebung',
  description:
    'Neun ausgewählte Referenzprojekte von VoltWerk Elektro: Altbausanierung, Photovoltaik, Smart Home und Gewerbeinstallationen in München.',
};

export default function ReferenzenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Referenzen"
        title="Arbeit, die man sich ansehen kann"
        lead="Neun Projekte aus München und dem Umland – von der Altbau-Etage bis zum Ladepark. Filtern Sie nach dem, was Sie vorhaben."
      />

      <section className="py-16 md:py-24">
        <Container>
          <AnimatedSection preset="fade-in">
            <ProjectsGrid />
          </AnimatedSection>
        </Container>
      </section>

      <CtaSection
        title="Ihr Projekt könnte das nächste sein"
        text="Beschreiben Sie uns Ihr Vorhaben – wir sagen Ihnen ehrlich, was möglich ist, was es kostet und wann wir anfangen können."
      />
    </>
  );
}
