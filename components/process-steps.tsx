import { AnimatedGroup, AnimatedItem } from '@/components/animated-section';
import { processSteps } from '@/data/benefits';
import { icons } from '@/lib/icons';

/**
 * Der Ablauf als Schaltkreis: vier Stationen auf einer Leiterbahn,
 * über die ein Strom-Impuls wandert.
 */
export function ProcessSteps() {
  return (
    <div className="relative">
      {/* Horizontale Leiterbahn (nur Desktop) */}
      <div aria-hidden className="absolute inset-x-[12%] top-7 hidden md:block">
        <svg viewBox="0 0 1000 4" preserveAspectRatio="none" className="h-1 w-full" fill="none">
          <path d="M0 2 H1000" stroke="#E2E8F0" strokeWidth="2" />
          <path
            d="M0 2 H1000"
            pathLength={100}
            className="trace-pulse"
            stroke="#FFD60A"
            strokeWidth="2.5"
          />
        </svg>
      </div>

      <AnimatedGroup className="relative grid gap-10 md:grid-cols-4 md:gap-6">
        {processSteps.map((step) => {
          const Icon = icons[step.icon];
          return (
            <AnimatedItem key={step.step} className="flex gap-5 md:flex-col md:gap-0 md:text-center">
              {/* Station auf der Leiterbahn */}
              <div className="relative flex flex-col items-center md:mb-6">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full border-2 border-navy-900 bg-white text-navy-900">
                  <Icon aria-hidden className="h-6 w-6" />
                </div>
                {/* Vertikale Bahn zwischen den Schritten (nur Mobile) */}
                {step.step < 4 ? (
                  <span aria-hidden className="mt-2 w-px flex-1 bg-line md:hidden" />
                ) : null}
              </div>
              <div className="pb-2 md:pb-0">
                <p className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.18em] text-steel">
                  Schritt 0{step.step}
                </p>
                <h3 className="mt-1.5 font-display text-xl font-semibold text-navy-950">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{step.description}</p>
                <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-fog px-3 py-1 font-mono text-[0.68rem] font-medium uppercase tracking-[0.12em] text-navy-900">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-volt" />
                  {step.meta}
                </p>
              </div>
            </AnimatedItem>
          );
        })}
      </AnimatedGroup>
    </div>
  );
}
