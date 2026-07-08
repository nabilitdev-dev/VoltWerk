import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  /** Mono-Label über der Überschrift – im Stil einer Schaltplan-Beschriftung. */
  eyebrow: string;
  title: string;
  lead?: string;
  align?: 'left' | 'center';
  /** 'dark' für Sections mit Navy-Hintergrund. */
  tone?: 'light' | 'dark';
  className?: string;
}

/** Einheitlicher Section-Kopf: Eyebrow mit Knotenpunkt, Titel, optionaler Leadtext. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  tone = 'light',
  className,
}: SectionHeadingProps) {
  const dark = tone === 'dark';
  const centered = align === 'center';

  return (
    <div
      className={cn(
        'max-w-2xl',
        centered && 'mx-auto flex flex-col items-center text-center',
        className
      )}
    >
      <p
        className={cn(
          'flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-[0.18em]',
          dark ? 'text-white/60' : 'text-steel'
        )}
      >
        {/* Knotenpunkt wie im Schaltplan */}
        <span aria-hidden className="inline-flex items-center gap-0">
          <span className="h-[5px] w-[5px] rounded-full bg-volt" />
          <span className={cn('h-px w-6', dark ? 'bg-white/25' : 'bg-navy-900/20')} />
        </span>
        {eyebrow}
      </p>
      <h2
        className={cn(
          'mt-4 font-display text-3xl font-semibold leading-[1.12] tracking-tight md:text-[2.6rem]',
          dark ? 'text-white' : 'text-navy-950'
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p className={cn('mt-4 text-base leading-relaxed md:text-lg', dark ? 'text-white/70' : 'text-steel')}>
          {lead}
        </p>
      ) : null}
    </div>
  );
}
