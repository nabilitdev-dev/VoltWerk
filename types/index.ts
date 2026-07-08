/** Namen der verwendeten Lucide-Icons – als Union, damit Daten serialisierbar bleiben. */
export type IconName =
  | 'PlugZap'
  | 'Building2'
  | 'House'
  | 'Sun'
  | 'BatteryCharging'
  | 'Lightbulb'
  | 'Network'
  | 'Siren'
  | 'Award'
  | 'Clock'
  | 'Receipt'
  | 'CalendarClock'
  | 'BadgeCheck'
  | 'Sparkles'
  | 'Send'
  | 'Users'
  | 'Wrench'
  | 'ClipboardCheck'
  | 'ShieldCheck'
  | 'HeartHandshake'
  | 'Ruler'
  | 'Leaf';

export type ProjectCategory = 'privat' | 'gewerbe' | 'pv' | 'smart-home';

export interface Service {
  slug: string;
  title: string;
  /** Kurztext für die Karte auf der Startseite. */
  teaser: string;
  /** Ausführlicher Text für die Leistungs-Section. */
  description: string;
  bullets: string[];
  icon: IconName;
  image: string;
  imageAlt: string;
  /** Auf der Startseite als Karte zeigen. */
  onHome: boolean;
  /** Auf der Leistungsseite als eigene Section zeigen. */
  onServicesPage: boolean;
  /** Notdienst bekommt eine abweichende Karte. */
  isEmergency?: boolean;
}

export interface Benefit {
  title: string;
  description: string;
  icon: IconName;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  meta: string;
  icon: IconName;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  categoryLabel: string;
  location: string;
  image: string;
  imageAlt: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  context: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Stat {
  value: number;
  /** Deutsche Formatierung, z. B. 1 Nachkommastelle für „4,9“. */
  decimals?: number;
  suffix: string;
  label: string;
}

export interface TeamMember {
  name: string;
  role: string;
  focus: string;
  initials: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface CompanyValue {
  title: string;
  description: string;
  icon: IconName;
}

export interface Certification {
  title: string;
  issuer: string;
}

export interface NavItem {
  label: string;
  href: string;
}
