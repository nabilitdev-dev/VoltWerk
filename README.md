# VoltWerk Elektro GmbH – Demo-Website

Premium-Demo-Website für einen fiktiven Münchner Elektro-Meisterbetrieb.
Gebaut als Referenzprojekt: Next.js 15 (App Router), TypeScript (strict),
Tailwind CSS, Framer Motion, Lucide Icons – vollständig statisch, ohne Backend.

## Entwicklung

```bash
npm install
npm run dev      # http://localhost:3021
npm run build    # statischer Export nach /out
```

## Seiten

| Route           | Inhalt                                                        |
| --------------- | ------------------------------------------------------------- |
| `/`             | Hero, Leistungen, Benefits, Ablauf, Referenzen, FAQ, Kontakt   |
| `/leistungen/`  | 7 Leistungsbereiche mit Anker-Navigation                       |
| `/ueber-uns/`   | Geschichte, Werte, Team, Zertifizierungen, Timeline, Zahlen    |
| `/referenzen/`  | 9 Projekte mit Kategorie-Filter                                |
| `/faq/`         | Accordion mit 10 Fragen                                        |
| `/kontakt/`     | Kontaktdaten, Demo-Formular, Karten-Platzhalter                |
| `/impressum/`, `/datenschutz/` | Rechtsseiten mit Demo-Hinweis                   |

## Designsystem

- **Farben:** Nachtblau `#0A1B33`, Signalgelb `#FFD60A`, Nebelgrau `#F4F6FA`
- **Typografie:** Space Grotesk (Display), Instrument Sans (Body), IBM Plex Mono (technische Labels)
- **Signature:** Leiterbahn-Motiv mit animiertem Strom-Impuls (Hero, Ablauf, CTA, Footer)
- Alle Illustrationen sind eigene SVGs im Blueprint-Stil (`public/images/`)

## Hinweise

- Kontaktformular ist reines Frontend (Demo-Toast, keine Datenübertragung)
- Keine Cookies, keine externen Embeds – die Karte ist ein Platzhalter mit Google-Maps-Link
- `prefers-reduced-motion` wird respektiert (Framer Motion + CSS-Animationen)
