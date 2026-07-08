import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        md: '2rem',
      },
      screens: {
        '2xl': '1200px',
      },
    },
    extend: {
      colors: {
        navy: {
          50: '#EEF3FA',
          100: '#DCE6F3',
          600: '#1F4C8C',
          700: '#173A6B',
          800: '#102A4E',
          900: '#0A1B33',
          950: '#050D1C',
        },
        volt: {
          DEFAULT: '#FFD60A',
          600: '#F0C400',
          700: '#D4AD00',
        },
        fog: '#F4F6FA',
        steel: '#49596E',
        line: '#E2E8F0',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(10, 27, 51, 0.05), 0 8px 24px -8px rgba(10, 27, 51, 0.10)',
        lift: '0 2px 4px rgba(10, 27, 51, 0.08), 0 20px 44px -12px rgba(10, 27, 51, 0.18)',
        chip: '0 1px 2px rgba(5, 13, 28, 0.35), 0 12px 32px -8px rgba(5, 13, 28, 0.55)',
      },
      backgroundImage: {
        // Feines Blueprint-Raster für dunkle Sections
        grid: 'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)',
        'grid-light':
          'linear-gradient(rgba(10,27,51,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(10,27,51,0.05) 1px, transparent 1px)',
        // Warnband-Streifen (Isolierband-Optik) – nur für den Notdienst-Akzent
        tape: 'repeating-linear-gradient(-45deg, #FFD60A 0 10px, #0A1B33 10px 20px)',
      },
      backgroundSize: {
        grid: '32px 32px',
      },
    },
  },
  plugins: [],
};

export default config;
