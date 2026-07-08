'use client';

import { animate, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { stats } from '@/data/about';
import type { Stat } from '@/types';

function formatNumber(value: number, decimals = 0): string {
  return new Intl.NumberFormat('de-DE', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

/** Einzelner Zähler: zählt beim ersten Sichtbarwerden hoch. */
function CountUp({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(() => formatNumber(0, stat.decimals));

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setDisplay(formatNumber(stat.value, stat.decimals));
      return;
    }
    const controls = animate(0, stat.value, {
      duration: 1.6,
      ease: [0.16, 0.6, 0.2, 1],
      onUpdate: (v) => setDisplay(formatNumber(v, stat.decimals)),
    });
    return () => controls.stop();
  }, [inView, reduceMotion, stat.value, stat.decimals]);

  return (
    <span ref={ref}>
      {display}
      <span className="text-volt">{stat.suffix}</span>
    </span>
  );
}

/** Kennzahlen-Band auf dunklem Grund – Zahlen im Stil einer Messanzeige. */
export function Stats() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-6 py-12 md:px-12">
      <div aria-hidden className="absolute inset-0 bg-grid" />
      <dl className="relative grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <dd className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
              <CountUp stat={stat} />
            </dd>
            <dt className="mt-2 font-mono text-[0.7rem] font-medium uppercase tracking-[0.16em] text-white/55">
              {stat.label}
            </dt>
          </div>
        ))}
      </dl>
    </div>
  );
}
