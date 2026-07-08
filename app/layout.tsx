import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Mono, Instrument_Sans, Space_Grotesk } from 'next/font/google';
import type { ReactNode } from 'react';
import { FloatingCallButton } from '@/components/floating-call-button';
import { Footer } from '@/components/footer';
import { MotionProvider } from '@/components/motion-provider';
import { Navbar } from '@/components/navbar';
import { ScrollToTop } from '@/components/scroll-to-top';
import { StructuredData } from '@/components/structured-data';
import { site } from '@/data/site';
import { ToastProvider } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import './globals.css';

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const sans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'VoltWerk Elektro GmbH – Elektriker Meisterbetrieb in München',
    template: '%s | VoltWerk Elektro München',
  },
  description:
    'Elektro-Meisterbetrieb in München: Elektroinstallation, Smart Home, Photovoltaik, Wallboxen und 24/7-Notdienst. Festpreisangebot innerhalb von 24 Stunden.',
  keywords: [
    'Elektriker München',
    'Elektroinstallation',
    'Smart Home',
    'Photovoltaik München',
    'Wallbox Installation',
    'Elektro Notdienst München',
  ],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: site.url,
    siteName: site.name,
    title: 'VoltWerk Elektro GmbH – Elektriker Meisterbetrieb in München',
    description:
      'Elektroinstallation, Smart Home, Photovoltaik und E-Mobilität – präzise ausgeführt, sauber dokumentiert, zum Festpreis.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#0A1B33',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" className={cn(display.variable, sans.variable, mono.variable)}>
      <body>
        <MotionProvider>
          <ToastProvider>
            <a
              href="#inhalt"
              className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-navy-950 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
            >
              Zum Inhalt springen
            </a>
            <Navbar />
            <main id="inhalt">{children}</main>
            <Footer />
            <ScrollToTop />
            <FloatingCallButton />
          </ToastProvider>
        </MotionProvider>
        <StructuredData />
      </body>
    </html>
  );
}
