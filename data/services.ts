import type { Service } from '@/types';

export const services: Service[] = [
  {
    slug: 'elektroinstallation',
    title: 'Elektroinstallation',
    teaser:
      'Komplette Installationen für Neubau und Bestand – von der Unterverteilung bis zur letzten Steckdose.',
    description:
      'Ob Neubau, Umbau oder Erweiterung: Wir planen und installieren Ihre gesamte Elektrik nach aktueller DIN VDE 0100 – sauber dokumentiert und auf Wunsch mit E-CHECK-Protokoll. Vom Zählerschrank über Unterverteilungen bis zu Schalterprogrammen arbeiten wir ausschließlich mit Markenkomponenten.',
    bullets: [
      'Zählerschrank- und Verteilermodernisierung',
      'Neuinstallation nach DIN VDE 0100',
      'E-CHECK mit Prüfprotokoll',
    ],
    icon: 'PlugZap',
    image: '/images/panel.svg',
    imageAlt: 'Stilisierte Darstellung eines Verteilerschranks mit Leiterbahnen',
    onHome: true,
    onServicesPage: true,
  },
  {
    slug: 'altbausanierung',
    title: 'Altbausanierung',
    teaser:
      'Alte Leitungen raus, sichere Elektrik rein – denkmalgerecht und mit minimalen Eingriffen.',
    description:
      'Stoffummantelte Leitungen, zweiadrige Installationen ohne Schutzleiter, überlastete Sicherungen: In Münchner Altbauten schlummern oft echte Risiken. Wir sanieren Etagen- und Hausinstallationen abschnittsweise, koordinieren uns mit anderen Gewerken und halten Staub und Lärm so gering wie möglich.',
    bullets: [
      'Bestandsanalyse mit Messprotokoll',
      'Sanierung im bewohnten Zustand möglich',
      'FI-Schutz und moderne Leitungsführung',
    ],
    icon: 'Building2',
    image: '/images/altbau.svg',
    imageAlt: 'Stilisierte Altbaufassade mit erneuerten Elektroleitungen',
    onHome: false,
    onServicesPage: true,
  },
  {
    slug: 'smart-home',
    title: 'Smart Home',
    teaser:
      'KNX- und Funk-Systeme, die Licht, Heizung und Beschattung intelligent vernetzen.',
    description:
      'Als zertifizierter KNX-Partner planen wir Smart-Home-Systeme, die im Alltag wirklich helfen: Szenen für Licht und Beschattung, Heizungssteuerung mit Anwesenheitserkennung, Zutritt und Sicherheit – bedienbar per Taster, App oder Sprache. Auch als Funk-Nachrüstung im Bestand ohne Stemmarbeiten.',
    bullets: [
      'KNX-Planung und -Programmierung',
      'Funk-Nachrüstung im Bestand',
      'Herstellerunabhängige Beratung',
    ],
    icon: 'House',
    image: '/images/smart-home.svg',
    imageAlt: 'Stilisiertes vernetztes Haus mit Smart-Home-Knotenpunkten',
    onHome: true,
    onServicesPage: true,
  },
  {
    slug: 'photovoltaik',
    title: 'Photovoltaik',
    teaser:
      'PV-Anlagen mit Speicher – geplant, montiert und angemeldet aus einer Hand.',
    description:
      'Wir übernehmen Ihr PV-Projekt komplett: Ertragsprognose, Statik-Check, Montage, Speicher, Wechselrichter, Netzanmeldung und Inbetriebnahme. Als Elektro-Meisterbetrieb führen wir den Netzanschluss selbst aus – Sie brauchen keinen zweiten Betrieb und haben einen Ansprechpartner für alles.',
    bullets: [
      'Dachanlagen von 5 bis 30 kWp',
      'Batteriespeicher und Notstromlösungen',
      'Netzanmeldung und Marktstammdatenregister',
    ],
    icon: 'Sun',
    image: '/images/pv.svg',
    imageAlt: 'Stilisierte Solarmodule mit Sonne und Energiefluss',
    onHome: true,
    onServicesPage: true,
  },
  {
    slug: 'wallbox',
    title: 'Wallboxen & E-Mobilität',
    teaser:
      'Ladelösungen für zu Hause und Firmenparkplätze – inklusive Lastmanagement.',
    description:
      'Von der 11-kW-Wallbox am Einfamilienhaus bis zum Ladepark mit Lastmanagement in der Tiefgarage: Wir prüfen den Hausanschluss, übernehmen die Anmeldung beim Netzbetreiber und installieren förderfähige Ladepunkte – auf Wunsch mit PV-Überschussladen.',
    bullets: [
      'Wallboxen 11 und 22 kW',
      'Lastmanagement für Mehrfamilienhäuser',
      'PV-Überschussladen konfigurierbar',
    ],
    icon: 'BatteryCharging',
    image: '/images/ev.svg',
    imageAlt: 'Stilisierte Wallbox mit Elektroauto und Ladekabel',
    onHome: true,
    onServicesPage: true,
  },
  {
    slug: 'beleuchtung',
    title: 'Beleuchtung',
    teaser:
      'Lichtplanung und LED-Technik für Wohnräume, Büros und Verkaufsflächen.',
    description:
      'Gutes Licht ist geplant, nicht gekauft. Wir entwerfen Beleuchtungskonzepte mit Lichtszenen, Human-Centric-Lighting und effizienter LED-Technik – vom Wohnzimmer bis zur Bürofläche mit normgerechter Arbeitsplatzbeleuchtung nach DIN EN 12464.',
    bullets: [
      'Lichtplanung mit Visualisierung',
      'LED-Umrüstung mit Amortisationsrechnung',
      'Dimm- und Szenensteuerung',
    ],
    icon: 'Lightbulb',
    image: '/images/lighting.svg',
    imageAlt: 'Stilisierte Pendelleuchten mit warmem Lichtkegel',
    onHome: true,
    onServicesPage: true,
  },
  {
    slug: 'netzwerktechnik',
    title: 'Netzwerktechnik',
    teaser:
      'Strukturierte Verkabelung, WLAN und Glasfaser – stabil bis in den letzten Raum.',
    description:
      'Homeoffice, Streaming, Smart Home: Ohne solides Netzwerk läuft nichts. Wir verlegen strukturierte Verkabelung (Cat 7), richten WLAN-Access-Points mit flächendeckender Ausleuchtung ein und bereiten Glasfaser bis in die Wohnung vor – gemessen und dokumentiert.',
    bullets: [
      'Cat-7-Verkabelung und Patchfelder',
      'WLAN-Ausleuchtung nach Messung',
      'Glasfaser-Hausverkabelung (FTTH)',
    ],
    icon: 'Network',
    image: '/images/network.svg',
    imageAlt: 'Stilisierte Netzwerkverkabelung mit Verteilerknoten',
    onHome: false,
    onServicesPage: true,
  },
  {
    slug: 'notdienst',
    title: '24/7 Notdienst',
    teaser:
      'Stromausfall, Kurzschluss, Brandgeruch? Wir sind rund um die Uhr für Sie erreichbar.',
    description:
      'Bei Stromausfall, ausgelöstem FI-Schalter oder Schmorgeruch zählt jede Minute. Unser Notdienst ist an 365 Tagen erreichbar – mit transparenten Pauschalen, die wir Ihnen am Telefon nennen, bevor wir losfahren.',
    bullets: [
      'Erreichbar rund um die Uhr',
      'Transparente Notdienst-Pauschale',
      'Anfahrt in München meist unter 60 Minuten',
    ],
    icon: 'Siren',
    image: '/images/panel.svg',
    imageAlt: 'Notdienst-Symbol',
    onHome: true,
    onServicesPage: false,
    isEmergency: true,
  },
];

export const homeServices = services.filter((s) => s.onHome);
export const detailServices = services.filter((s) => s.onServicesPage);
