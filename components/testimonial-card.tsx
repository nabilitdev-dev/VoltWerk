import { Star } from 'lucide-react';
import type { Testimonial } from '@/types';

/** Kundenstimme mit Bewertung. */
export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div
        className="flex gap-1"
        role="img"
        aria-label={`Bewertung: ${testimonial.rating} von 5 Sternen`}
      >
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} aria-hidden className="h-4 w-4 fill-volt text-volt" />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-navy-900">
        „{testimonial.quote}“
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
        <span
          aria-hidden
          className="grid h-10 w-10 place-items-center rounded-full bg-navy-900 font-display text-sm font-bold text-volt"
        >
          {testimonial.name
            .split(' ')
            .map((part) => part[0])
            .slice(0, 2)
            .join('')}
        </span>
        <div>
          <p className="text-sm font-semibold text-navy-950">{testimonial.name}</p>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-steel">
            {testimonial.context}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
