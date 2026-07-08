import { cva, type VariantProps } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full font-mono text-[0.7rem] font-medium uppercase tracking-[0.14em]',
  {
    variants: {
      variant: {
        outline: 'border border-line bg-white px-3 py-1 text-steel',
        navy: 'bg-navy-900 px-3 py-1 text-white',
        volt: 'bg-volt px-3 py-1 text-navy-950',
        'ghost-light': 'border border-white/15 bg-white/5 px-3 py-1 text-white/80',
      },
    },
    defaultVariants: {
      variant: 'outline',
    },
  }
);

type BadgeProps = HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>;

/** Kleines Mono-Label im Stil einer Schaltplan-Beschriftung. */
export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
