import { House, Zap } from 'lucide-react';
import { Container } from '@/components/container';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div aria-hidden className="absolute inset-0 bg-grid" />
      <Container className="relative flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-volt">
          Fehlercode E-404
        </p>
        <h1 className="mt-5 max-w-xl font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
          Hier ist der Strom ausgefallen.
        </h1>
        <p className="mt-4 max-w-md text-white/70">
          Die gesuchte Seite existiert nicht oder wurde verlegt. Keine Sorge –
          wir bringen Sie zurück ans Netz.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
          <Button href="/" size="lg">
            <House aria-hidden className="h-4 w-4" />
            Zur Startseite
          </Button>
          <Button href="/kontakt/" variant="outline-light" size="lg">
            <Zap aria-hidden className="h-4 w-4" />
            Kontakt aufnehmen
          </Button>
        </div>
      </Container>
    </section>
  );
}
