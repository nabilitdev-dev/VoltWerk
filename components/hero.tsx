'use client';

import { motion } from 'framer-motion';
import { BadgeCheck, Phone, ShieldCheck, Star, Zap } from 'lucide-react';
import { CircuitTrace } from '@/components/circuit-trace';
import { Button } from '@/components/ui/button';
import { site } from '@/data/site';

const EASE = [0.21, 0.6, 0.35, 1] as const;

/** Orchestrierte Einblende-Sequenz beim Laden der Startseite. */
const item = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: EASE, delay },
});

const trustItems = [
  { icon: BadgeCheck, label: 'Eingetragener Meisterbetrieb' },
  { icon: ShieldCheck, label: 'E-CHECK Fachbetrieb' },
  { icon: Zap, label: 'KNX-Partner' },
  { icon: Star, label: '4,9/5 · 214 Bewertungen' },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      {/* Blueprint-Raster + Lichtschein */}
      <div aria-hidden className="absolute inset-0 bg-grid" />
      <div
        aria-hidden
        className="absolute -top-40 right-[-10%] h-[34rem] w-[34rem] rounded-full bg-navy-600/30 blur-[120px]"
      />

      <div className="container relative grid items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-28">
        <div>
          <motion.p
            {...item(0)}
            className="flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-[0.18em] text-white/60"
          >
            <span aria-hidden className="h-[5px] w-[5px] rounded-full bg-volt" />
            Elektro-Meisterbetrieb · München
          </motion.p>

          <motion.h1
            {...item(0.08)}
            className="mt-5 font-display text-[2.6rem] font-bold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Strom in{' '}
            <span className="relative inline-block text-volt">
              besten Händen
              <svg
                aria-hidden
                viewBox="0 0 220 8"
                className="absolute -bottom-2 left-0 w-full"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 6 H70 L78 2 H140 L148 6 H218"
                  stroke="#FFD60A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.7"
                />
              </svg>
            </span>
            .
          </motion.h1>

          <motion.p
            {...item(0.16)}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
          >
            VoltWerk plant und installiert Elektrotechnik, die Bestand hat:
            Elektroinstallation, Smart Home, Photovoltaik und Ladeinfrastruktur –
            präzise ausgeführt, sauber dokumentiert, zum Festpreis.
          </motion.p>

          <motion.div {...item(0.24)} className="mt-9 flex flex-wrap items-center gap-3.5">
            <Button href="/kontakt/" size="lg">
              Kostenloses Angebot
            </Button>
            <Button href={site.phoneHref} variant="outline-light" size="lg">
              <Phone aria-hidden className="h-4 w-4" />
              Jetzt anrufen
            </Button>
          </motion.div>

          <motion.p {...item(0.32)} className="mt-5 font-mono text-xs text-white/45">
            Antwort innerhalb von 24 h · Notdienst rund um die Uhr
          </motion.p>
        </div>

        {/* Visual: Leiterbahn-Panel mit Status-Chips */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-navy-950/70 shadow-chip">
            <div aria-hidden className="absolute inset-0 bg-grid opacity-70" />
            <CircuitTrace className="relative" />
          </div>

          {/* Schwebende Status-Chips */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.55 }}
            className="absolute -left-3 top-6 rounded-2xl bg-white px-4 py-3 shadow-lift sm:-left-6"
          >
            <p className="font-mono text-[0.62rem] font-medium uppercase tracking-[0.16em] text-steel">
              PV-Ertrag heute
            </p>
            <p className="mt-1 font-display text-xl font-bold text-navy-950">
              42,3 <span className="text-sm font-semibold text-steel">kWh</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.7 }}
            className="absolute -bottom-5 right-2 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lift sm:right-[-14px]"
          >
            <span aria-hidden className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-volt opacity-75 motion-reduce:hidden" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-volt" />
            </span>
            <div>
              <p className="text-sm font-semibold text-navy-950">24/7 Notdienst</p>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-steel">
                Jetzt erreichbar
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Trust-Leiste */}
      <div className="relative border-t border-white/10">
        <ul className="container flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-5 lg:justify-between">
          {trustItems.map((t) => (
            <li
              key={t.label}
              className="flex items-center gap-2.5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.14em] text-white/55"
            >
              <t.icon aria-hidden className="h-4 w-4 text-volt" />
              {t.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
