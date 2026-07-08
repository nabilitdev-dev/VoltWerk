'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { navItems, site } from '@/data/site';
import { useScrolled } from '@/hooks/use-scrolled';
import { cn } from '@/lib/utils';

/** Normalisiert Pfade für den Aktiv-Vergleich (Trailing Slash egal). */
function normalize(path: string): string {
  return path !== '/' && path.endsWith('/') ? path.slice(0, -1) : path;
}

export function Navbar() {
  const pathname = usePathname();
  const scrolled = useScrolled(12);
  const [open, setOpen] = useState(false);

  // Mobile-Menü bei Routenwechsel schließen und Body-Scroll sperren
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) => normalize(pathname ?? '/') === normalize(href);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md transition-shadow duration-300',
        scrolled ? 'border-line shadow-card' : 'border-transparent'
      )}
    >
      <nav aria-label="Hauptnavigation" className="container flex h-[4.5rem] items-center justify-between">
        <Link href="/" aria-label="VoltWerk Elektro GmbH – Startseite" className="shrink-0">
          <Logo />
        </Link>

        {/* Desktop-Navigation */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={cn(
                  'relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors',
                  isActive(item.href)
                    ? 'text-navy-950'
                    : 'text-steel hover:bg-fog hover:text-navy-950'
                )}
              >
                {item.label}
                {isActive(item.href) ? (
                  <span
                    aria-hidden
                    className="absolute inset-x-3.5 -bottom-[3px] h-0.5 rounded-full bg-volt"
                  />
                ) : null}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-navy-900 transition-colors hover:bg-fog"
          >
            <Phone aria-hidden className="h-4 w-4 text-volt-700" />
            {site.phone}
          </a>
          <Button href="/kontakt/" size="sm">
            Kostenloses Angebot
          </Button>
        </div>

        {/* Mobile: Hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          className="grid h-11 w-11 place-items-center rounded-full text-navy-950 transition-colors hover:bg-fog lg:hidden"
        >
          {open ? <X aria-hidden className="h-6 w-6" /> : <Menu aria-hidden className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile-Menü */}
      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.21, 0.6, 0.35, 1] }}
            className="overflow-hidden border-t border-line bg-white lg:hidden"
          >
            <div className="container flex max-h-[calc(100dvh-4.5rem)] flex-col gap-1 overflow-y-auto py-5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={cn(
                    'flex items-center justify-between rounded-xl px-4 py-3.5 font-display text-lg font-medium transition-colors',
                    isActive(item.href) ? 'bg-fog text-navy-950' : 'text-navy-900 hover:bg-fog'
                  )}
                >
                  {item.label}
                  {isActive(item.href) ? (
                    <span aria-hidden className="h-2 w-2 rounded-full bg-volt" />
                  ) : null}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-2.5 border-t border-line pt-5">
                <Button href={site.phoneHref} variant="navy" size="lg">
                  <Phone aria-hidden className="h-4 w-4" />
                  {site.phone}
                </Button>
                <Button href="/kontakt/" size="lg">
                  Kostenloses Angebot
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
