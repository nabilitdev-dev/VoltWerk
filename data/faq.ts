import type { FaqItem } from '@/types';

export const faqItems: FaqItem[] = [
  {
    question: 'Was kostet ein Angebot – und ist es verbindlich?',
    answer:
      'Das Angebot ist für Sie kostenlos und unverbindlich. Nach der Besichtigung erhalten Sie ein schriftliches Festpreisangebot mit allen Positionen. Daran halten wir uns – Mehrkosten entstehen nur, wenn Sie den Auftrag nachträglich erweitern, und immer erst nach Ihrer Freigabe.',
  },
  {
    question: 'Wie schnell ist der Notdienst bei mir?',
    answer:
      'Innerhalb Münchens sind wir in der Regel unter 60 Minuten vor Ort, im Umland je nach Lage etwas später. Am Telefon nennen wir Ihnen vorab die Notdienst-Pauschale und geben erste Hinweise, was Sie bis zu unserem Eintreffen tun können.',
  },
  {
    question: 'In welchem Gebiet sind Sie tätig?',
    answer:
      'Unser Kerngebiet ist München mit allen Stadtteilen. Projekte übernehmen wir außerdem im Umland bis etwa 30 km – zum Beispiel in Gräfelfing, Unterschleißheim, Grünwald oder Vaterstetten. Fragen Sie einfach an, ob Ihre Adresse dabei ist.',
  },
  {
    question: 'Lohnt sich Photovoltaik auf meinem Dach?',
    answer:
      'Das hängt von Ausrichtung, Neigung, Verschattung und Ihrem Verbrauch ab. Wir erstellen vor dem Angebot eine Ertragsprognose für Ihr Dach. Als Faustregel: Süd-, Ost- und Westdächer ohne starke Verschattung amortisieren sich aktuell meist in 9 bis 13 Jahren.',
  },
  {
    question: 'Übernehmen Sie auch die Anmeldung von PV-Anlage oder Wallbox?',
    answer:
      'Ja, vollständig. Wir melden Ihre Anlage beim Netzbetreiber und im Marktstammdatenregister an, Wallboxen ab 12 kW holen wir die Genehmigung ein. Sie unterschreiben nur die Vollmacht – den Papierkram erledigen wir.',
  },
  {
    question: 'Wie lange dauert eine Elektrosanierung im Altbau?',
    answer:
      'Eine 3-Zimmer-Wohnung dauert komplett etwa 3 bis 5 Wochen inklusive Schlitz- und Putzarbeiten. Bewohnte Objekte sanieren wir abschnittsweise, sodass Küche und Bad nutzbar bleiben. Den genauen Zeitplan bekommen Sie mit dem Angebot.',
  },
  {
    question: 'Was ist ein E-CHECK und wann brauche ich ihn?',
    answer:
      'Der E-CHECK ist die normierte Prüfung Ihrer Elektroanlage nach DIN VDE. Sinnvoll ist er beim Immobilienkauf, nach Wasserschäden, bei Anlagen über 20 Jahren und für Vermieter als Nachweis der Verkehrssicherungspflicht. Sie erhalten ein Prüfprotokoll mit allen Messwerten.',
  },
  {
    question: 'Kann ich mein Smart Home später erweitern?',
    answer:
      'Ja – darauf legen wir die Planung aus. KNX-Installationen sind modular erweiterbar, bei Funksystemen können Sie Raum für Raum nachrüsten. Wir dokumentieren jede Anlage so, dass auch spätere Erweiterungen sauber aufsetzen.',
  },
  {
    question: 'Geben Sie Garantie auf Ihre Arbeit?',
    answer:
      'Auf unsere Handwerksleistung geben wir die gesetzliche Gewährleistung von 5 Jahren bei Bauwerken (BGB) bzw. 2 Jahren bei sonstigen Arbeiten. Für Material gelten zusätzlich die Herstellergarantien – bei PV-Modulen z. B. bis zu 25 Jahre Leistungsgarantie.',
  },
  {
    question: 'Arbeiten Sie auch mit Hausverwaltungen und Gewerbekunden?',
    answer:
      'Ja. Für Hausverwaltungen übernehmen wir Wartung, Zählerschrank-Modernisierungen und Ladeinfrastruktur in WEGs; für Gewerbekunden bieten wir Wartungsverträge mit festen Reaktionszeiten und DGUV-V3-Prüfungen an.',
  },
];

/** Auswahl für die Startseite (8 Fragen laut Konzept). */
export const homeFaqItems = faqItems.slice(0, 8);
