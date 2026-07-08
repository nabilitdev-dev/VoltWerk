import { cn } from '@/lib/utils';

interface CircuitTraceProps {
  className?: string;
}

/**
 * Signature-Element: stilisierte Leiterbahnen mit wanderndem Strom-Impuls.
 * Rein dekorativ – wird für Screenreader ausgeblendet.
 */
export function CircuitTrace({ className }: CircuitTraceProps) {
  return (
    <svg
      viewBox="0 0 480 360"
      className={cn('h-full w-full', className)}
      fill="none"
      aria-hidden
    >
      {/* Basisbahnen */}
      <g stroke="rgba(255,255,255,0.14)" strokeWidth="2">
        <path d="M16 320 H150 V210 H280 V104 H464" />
        <path d="M16 244 H104 V150 H208 V64 H320" />
        <path d="M240 320 H340 V236 H464" />
        <path d="M320 64 H400 V150 H464" />
      </g>

      {/* Strom-Impulse auf zwei Bahnen */}
      <path
        d="M16 320 H150 V210 H280 V104 H464"
        pathLength={100}
        className="trace-pulse"
        stroke="#FFD60A"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M16 244 H104 V150 H208 V64 H320"
        pathLength={100}
        className="trace-pulse trace-pulse--slow"
        stroke="#FFD60A"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Knotenpunkte an den Abzweigen */}
      <g fill="#0A1B33" stroke="rgba(255,255,255,0.45)" strokeWidth="2">
        <circle cx="150" cy="210" r="5" />
        <circle cx="280" cy="104" r="5" />
        <circle cx="104" cy="150" r="5" />
        <circle cx="340" cy="236" r="5" />
        <circle cx="400" cy="150" r="5" />
      </g>

      {/* Kontaktpads an den Enden */}
      <g fill="rgba(255,255,255,0.35)">
        <rect x="10" y="314" width="12" height="12" rx="2" />
        <rect x="10" y="238" width="12" height="12" rx="2" />
        <rect x="234" y="314" width="12" height="12" rx="2" />
        <rect x="314" y="58" width="12" height="12" rx="2" />
      </g>
      <g fill="#FFD60A">
        <rect x="458" y="98" width="12" height="12" rx="2" />
        <rect x="458" y="230" width="12" height="12" rx="2" />
        <rect x="458" y="144" width="12" height="12" rx="2" />
      </g>
    </svg>
  );
}
