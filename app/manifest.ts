import type { MetadataRoute } from 'next';
import { site } from '@/data/site';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description:
      'Elektro-Meisterbetrieb in München: Elektroinstallation, Smart Home, Photovoltaik und 24/7-Notdienst.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#0A1B33',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
    ],
  };
}
