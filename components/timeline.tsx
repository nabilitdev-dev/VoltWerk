import { AnimatedGroup, AnimatedItem } from '@/components/animated-section';
import { timeline } from '@/data/about';

/** Firmengeschichte als vertikale Leiterbahn mit Stationen. */
export function Timeline() {
  return (
    <AnimatedGroup className="relative ml-2 space-y-10 border-l-2 border-line pl-8 md:ml-6">
      {timeline.map((event, index) => (
        <AnimatedItem key={event.year} className="relative">
          {/* Knotenpunkt auf der Bahn */}
          <span
            aria-hidden
            className="absolute -left-[2.75rem] top-1 grid h-5 w-5 place-items-center rounded-full border-2 border-navy-900 bg-white"
          >
            {index === timeline.length - 1 ? (
              <span className="h-2 w-2 rounded-full bg-volt" />
            ) : null}
          </span>
          <p className="font-mono text-sm font-semibold tracking-[0.08em] text-volt-700">
            {event.year}
          </p>
          <h3 className="mt-1.5 font-display text-xl font-semibold text-navy-950">
            {event.title}
          </h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-steel">{event.description}</p>
        </AnimatedItem>
      ))}
    </AnimatedGroup>
  );
}
