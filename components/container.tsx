import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

/** Zentrierter Seitencontainer mit einheitlichem Seitenabstand. */
export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('container', className)} {...props} />;
}
