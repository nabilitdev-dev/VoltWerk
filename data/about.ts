import type {
  Certification,
  CompanyValue,
  Stat,
  TeamMember,
  TimelineEvent,
} from '@/types';

export const stats: Stat[] = [
  { value: 15, suffix: '+', label: 'Jahre Erfahrung' },
  { value: 2400, suffix: '+', label: 'Abgeschlossene Projekte' },
  { value: 12, suffix: '', label: 'Fachkräfte im Team' },
  { value: 4.9, decimals: 1, suffix: '/5', label: 'Ø Kundenbewertung' },
];

export const team: TeamMember[] = [
  {
    name: 'Thomas Berger',
    role: 'Geschäftsführer · Elektromeister',
    focus: 'Projektleitung, Angebot & Abnahme',
    initials: 'TB',
  },
  {
    name: 'Sandra Wolf',
    role: 'Technische Planung',
    focus: 'Elektroplanung, PV-Auslegung, Förderanträge',
    initials: 'SW',
  },
  {
    name: 'Murat Aydın',
    role: 'Obermonteur · KNX-Partner',
    focus: 'Smart Home, Gebäudeautomation',
    initials: 'MA',
  },
  {
    name: 'Felix Braun',
    role: 'Servicetechniker',
    focus: 'E-Mobilität, Notdienst, E-CHECK',
    initials: 'FB',
  },
];

export const values: CompanyValue[] = [
  {
    title: 'Sicherheit zuerst',
    description:
      'Jede Anlage verlässt uns gemessen, geprüft und dokumentiert. Bei Sicherheit gibt es keine Kompromisse – und keine Ausnahmen.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Ehrliche Beratung',
    description:
      'Wir empfehlen, was zu Ihrem Haus und Budget passt – nicht, was die höchste Marge bringt. Auch wenn die Antwort mal „brauchen Sie nicht“ lautet.',
    icon: 'HeartHandshake',
  },
  {
    title: 'Präzision im Detail',
    description:
      'Gerade Schalterreihen, beschriftete Verteiler, saubere Kabelwege: Man sieht unserer Arbeit an, dass uns das Detail nicht egal ist.',
    icon: 'Ruler',
  },
  {
    title: 'Verantwortung für morgen',
    description:
      'PV, Speicher und E-Mobilität sind für uns kein Trend, sondern Kernkompetenz. Wir elektrifizieren München – Dach für Dach.',
    icon: 'Leaf',
  },
];

export const certifications: Certification[] = [
  { title: 'Eingetragener Elektro-Meisterbetrieb', issuer: 'HWK für München und Oberbayern' },
  { title: 'E-CHECK Fachbetrieb', issuer: 'ArGe Medien im ZVEH' },
  { title: 'Zertifizierter KNX-Partner', issuer: 'KNX Association' },
  { title: 'Fachbetrieb für Ladeinfrastruktur', issuer: 'Elektro+ / ZVEH' },
  { title: 'DGUV-Vorschrift-3-Prüfungen', issuer: 'Zertifizierte Prüftechniker' },
];

export const timeline: TimelineEvent[] = [
  {
    year: '2011',
    title: 'Gründung in München',
    description:
      'Elektromeister Thomas Berger startet mit einem Transporter, einer Werkbank in Sendling und dem Anspruch, Elektrik sauberer zu machen als üblich.',
  },
  {
    year: '2014',
    title: 'Das Team wächst',
    description:
      'Erster Großauftrag – die Elektroplanung für eine Wohnanlage mit 24 Einheiten. VoltWerk stellt die ersten drei Gesellen ein.',
  },
  {
    year: '2017',
    title: 'KNX-Zertifizierung',
    description:
      'Smart Home wird eigenes Geschäftsfeld: Zertifizierung als KNX-Partner und die ersten voll automatisierten Wohnhäuser.',
  },
  {
    year: '2020',
    title: 'Energiewende im Programm',
    description:
      'Photovoltaik, Speicher und Wallboxen kommen ins Portfolio – inklusive eigener Dachmontage-Teams.',
  },
  {
    year: '2023',
    title: 'Neue Werkstatt',
    description:
      'Umzug in die Musterstraße: mehr Lagerfläche, eigene Prüfwerkstatt und Platz für inzwischen zwölf Mitarbeitende.',
  },
  {
    year: '2026',
    title: 'Über 2.400 Projekte',
    description:
      'Vom Zählerschrank bis zum Ladepark: VoltWerk betreut heute Privathaushalte, Hausverwaltungen und Gewerbe in ganz München.',
  },
];
