import type { NavItem } from '@/types';

export const site = {
  name: 'VoltWerk Elektro GmbH',
  shortName: 'VoltWerk',
  tagline: 'Elektro-Meisterbetrieb in München',
  url: 'https://www.voltwerk-elektro.de',
  phone: '089 12345678',
  phoneHref: 'tel:+498912345678',
  email: 'info@voltwerk-elektro.de',
  address: {
    street: 'Musterstraße 12',
    zip: '80331',
    city: 'München',
  },
  hours: 'Mo–Fr 07:00–18:00 Uhr',
  emergencyNote: 'Notdienst rund um die Uhr – 365 Tage im Jahr',
  founded: 2011,
  social: [
    { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
    { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  ],
} as const;

export const navItems: NavItem[] = [
  { label: 'Startseite', href: '/' },
  { label: 'Leistungen', href: '/leistungen/' },
  { label: 'Über uns', href: '/ueber-uns/' },
  { label: 'Referenzen', href: '/referenzen/' },
  { label: 'FAQ', href: '/faq/' },
  { label: 'Kontakt', href: '/kontakt/' },
];
