import type { Benefit, ProcessStep } from '@/types';

export const benefits: Benefit[] = [
  {
    title: 'Eingetragener Meisterbetrieb',
    description:
      'Geführt von Elektromeister Thomas Berger, eingetragen bei der Handwerkskammer für München und Oberbayern.',
    icon: 'Award',
  },
  {
    title: '24/7 Notdienst',
    description:
      'Stromausfall kennt keine Öffnungszeiten. Unser Notdienst ist rund um die Uhr erreichbar – auch an Feiertagen.',
    icon: 'Siren',
  },
  {
    title: 'Transparente Festpreise',
    description:
      'Sie erhalten ein schriftliches Angebot mit Festpreis, bevor wir anfangen. Nachträge gibt es nur nach Absprache.',
    icon: 'Receipt',
  },
  {
    title: 'Über 15 Jahre Erfahrung',
    description:
      'Seit 2011 haben wir mehr als 2.400 Projekte in München und dem Umland umgesetzt – vom Altbau bis zum Gewerbe.',
    icon: 'CalendarClock',
  },
  {
    title: 'Zertifizierte Elektriker',
    description:
      'Unsere zwölf Fachkräfte sind VDE-geschult, KNX-zertifiziert und bilden sich jedes Jahr verpflichtend weiter.',
    icon: 'BadgeCheck',
  },
  {
    title: 'Saubere Übergabe',
    description:
      'Staubschutz, Endreinigung und vollständige Dokumentation gehören bei uns zum Auftrag – nicht zu den Extras.',
    icon: 'Sparkles',
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Anfrage',
    description:
      'Sie beschreiben uns Ihr Vorhaben – per Formular, E-Mail oder Anruf. Wir melden uns innerhalb von 24 Stunden.',
    meta: 'Antwort < 24 h',
    icon: 'Send',
  },
  {
    step: 2,
    title: 'Beratung',
    description:
      'Vor-Ort-Termin oder Videocall: Wir klären den Umfang, messen wo nötig und erstellen ein Festpreisangebot.',
    meta: 'Angebot in 2–4 Tagen',
    icon: 'Users',
  },
  {
    step: 3,
    title: 'Umsetzung',
    description:
      'Unser Team arbeitet nach Plan und Termin – mit Staubschutz, Markenmaterial und täglicher Baustellenabnahme.',
    meta: 'Zum vereinbarten Termin',
    icon: 'Wrench',
  },
  {
    step: 4,
    title: 'Abnahme',
    description:
      'Gemeinsame Endabnahme mit Messprotokoll und Dokumentation. Erst wenn alles passt, stellen wir die Rechnung.',
    meta: 'Inkl. Prüfprotokoll',
    icon: 'ClipboardCheck',
  },
];
