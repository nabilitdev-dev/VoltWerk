import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        volt: 'bg-volt text-navy-950 shadow-card hover:bg-volt-600 hover:shadow-lift focus-visible:outline-navy-600',
        navy: 'bg-navy-900 text-white hover:bg-navy-800 focus-visible:outline-navy-600',
        outline:
          'border border-line bg-white text-navy-900 hover:border-navy-900 hover:bg-fog focus-visible:outline-navy-600',
        'outline-light':
          'border border-white/30 text-white hover:border-volt hover:text-volt focus-visible:outline-volt',
        ghost: 'text-navy-900 hover:bg-fog focus-visible:outline-navy-600',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-sm',
        lg: 'h-12 px-7 text-base',
      },
    },
    defaultVariants: {
      variant: 'volt',
      size: 'md',
    },
  }
);

type ButtonBaseProps = VariantProps<typeof buttonVariants>;

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Shadcn-Style-Button mit CVA-Varianten.
 * Mit `href` rendert er einen Next-Link, sonst einen nativen Button.
 */
export function Button({ className, variant, size, ...props }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (props.href !== undefined) {
    const { href, ...rest } = props;
    const isExternal = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:');
    if (isExternal) {
      return <a href={href} className={classes} {...rest} />;
    }
    return <Link href={href} className={classes} {...rest} />;
  }

  return <button className={classes} {...props} />;
}
