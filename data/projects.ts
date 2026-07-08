import type { Project, ProjectCategory } from '@/types';

export const categoryLabels: Record<ProjectCategory, string> = {
  privat: 'Privat',
  gewerbe: 'Gewerbe',
  pv: 'Photovoltaik',
  'smart-home': 'Smart Home',
};

export const projects: Project[] = [
  {
    id: 'altbau-schwabing',
    title: 'Komplettsanierung Altbau-Etage',
    description:
      'Denkmalgeschützte 140-m²-Wohnung: neue Leitungsführung, Zählerschrank und 42 Auslässe – in sechs Wochen.',
    category: 'privat',
    categoryLabel: categoryLabels.privat,
    location: 'München-Schwabing',
    image: '/images/altbau.svg',
    imageAlt: 'Stilisierte Altbauwohnung mit modernisierter Elektroinstallation',
  },
  {
    id: 'pv-graefelfing',
    title: 'PV-Anlage 9,8 kWp mit Speicher',
    description:
      'Süd-West-Dach mit 24 Modulen, 10-kWh-Speicher und Notstromfunktion. Autarkiegrad im ersten Jahr: 68 %.',
    category: 'pv',
    categoryLabel: categoryLabels.pv,
    location: 'Gräfelfing',
    image: '/images/pv.svg',
    imageAlt: 'Stilisierte Photovoltaikanlage auf einem Einfamilienhaus',
  },
  {
    id: 'knx-bogenhausen',
    title: 'KNX-Smart-Home im Neubau',
    description:
      'Villa mit 320 m²: Licht, Beschattung, Heizung und Multiroom-Audio über KNX – 96 Kanäle, eine App.',
    category: 'smart-home',
    categoryLabel: categoryLabels['smart-home'],
    location: 'München-Bogenhausen',
    image: '/images/smart-home.svg',
    imageAlt: 'Stilisiertes vernetztes Smart Home mit KNX-Steuerung',
  },
  {
    id: 'led-werksviertel',
    title: 'LED-Umrüstung Büroetage',
    description:
      '1.200 m² Bürofläche auf DIN-gerechte LED-Beleuchtung umgerüstet – 61 % weniger Stromverbrauch fürs Licht.',
    category: 'gewerbe',
    categoryLabel: categoryLabels.gewerbe,
    location: 'München-Werksviertel',
    image: '/images/lighting.svg',
    imageAlt: 'Stilisierte Bürobeleuchtung mit LED-Panels',
  },
  {
    id: 'ladepark-sendling',
    title: 'Ladepark Tiefgarage – 12 Ladepunkte',
    description:
      'WEG mit 48 Stellplätzen: 12 Wallboxen mit dynamischem Lastmanagement, vorbereitet für den Vollausbau.',
    category: 'gewerbe',
    categoryLabel: categoryLabels.gewerbe,
    location: 'München-Sendling',
    image: '/images/ev.svg',
    imageAlt: 'Stilisierte Tiefgarage mit Wallboxen und Elektroautos',
  },
  {
    id: 'zaehlerschrank-giesing',
    title: 'Zählerschrank-Modernisierung MFH',
    description:
      'Achtparteienhaus: alte Zähleranlage gegen normgerechten Zählerschrank mit Smart-Meter-Vorbereitung getauscht.',
    category: 'privat',
    categoryLabel: categoryLabels.privat,
    location: 'München-Giesing',
    image: '/images/altbau.svg',
    imageAlt: 'Stilisierter moderner Zählerschrank in einem Mehrfamilienhaus',
  },
  {
    id: 'pv-wallbox-trudering',
    title: 'PV + Wallbox als Kombiprojekt',
    description:
      'Doppelhaushälfte mit 7,2-kWp-Anlage und 11-kW-Wallbox: Das E-Auto lädt bevorzugt mit Sonnenstrom.',
    category: 'pv',
    categoryLabel: categoryLabels.pv,
    location: 'München-Trudering',
    image: '/images/pv.svg',
    imageAlt: 'Stilisierte PV-Anlage mit Wallbox und Elektroauto',
  },
  {
    id: 'smarthome-nymphenburg',
    title: 'Smart-Home-Nachrüstung im Bestand',
    description:
      'Funkbasierte Nachrüstung ohne Stemmarbeiten: 28 Geräte für Licht, Heizung und Sicherheit in vier Tagen.',
    category: 'smart-home',
    categoryLabel: categoryLabels['smart-home'],
    location: 'München-Nymphenburg',
    image: '/images/smart-home.svg',
    imageAlt: 'Stilisierte Smart-Home-Funknachrüstung in einer Bestandswohnung',
  },
  {
    id: 'praxis-maxvorstadt',
    title: 'Elektro & Netzwerk Zahnarztpraxis',
    description:
      'Praxisumbau mit 380 m²: Behandlungsstühle, IT-Verkabelung Cat 7, Notstromkreise und normgerechte Prüfung.',
    category: 'gewerbe',
    categoryLabel: categoryLabels.gewerbe,
    location: 'München-Maxvorstadt',
    image: '/images/network.svg',
    imageAlt: 'Stilisierte Praxisräume mit Netzwerk- und Elektroinstallation',
  },
];
