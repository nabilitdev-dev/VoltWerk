import { cn } from '@/lib/utils';

interface LogoProps {
  /** 'dark' = Wortmarke in Weiß (für Navy-Hintergründe). */
  tone?: 'light' | 'dark';
  className?: string;
}

/** VoltWerk-Logo: Blitz-Bildmarke mit Wortmarke. */
export function Logo({ tone = 'light', className }: LogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <span
        aria-hidden
        className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-navy-900"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#FFD60A" aria-hidden>
          <path d="M13 2 3.5 13.5h6L8 22l9.5-11.5h-6L13 2Z" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-display text-lg font-bold tracking-tight',
            tone === 'dark' ? 'text-white' : 'text-navy-950'
          )}
        >
          VoltWerk
        </span>
        <span
          className={cn(
            'mt-0.5 font-mono text-[0.6rem] uppercase tracking-[0.22em]',
            tone === 'dark' ? 'text-white/50' : 'text-steel'
          )}
        >
          Elektro GmbH
        </span>
      </span>
    </span>
  );
}
