'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from 'react';

interface ToastState {
  id: number;
  message: string;
}

interface ToastContextValue {
  toast: (message: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

/** Zugriff auf die Toast-Funktion – nur innerhalb des ToastProviders nutzbar. */
export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error('useToast muss innerhalb von <ToastProvider> verwendet werden.');
  }
  return ctx;
}

/** Stellt Toasts bereit und rendert den Viewport am unteren Bildschirmrand. */
export function ToastProvider({ children }: { children: ReactNode }) {
  const [current, setCurrent] = useState<ToastState | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const idRef = useRef(0);

  const toast = useCallback((message: string) => {
    idRef.current += 1;
    setCurrent({ id: idRef.current, message });
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setCurrent(null), 4500);
  }, []);

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div
        aria-live="polite"
        className="pointer-events-none fixed inset-x-0 bottom-6 z-[70] flex justify-center px-5"
      >
        <AnimatePresence>
          {current ? (
            <motion.div
              key={current.id}
              role="status"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.21, 0.6, 0.35, 1] }}
              className="pointer-events-auto flex items-center gap-3 rounded-full bg-navy-950 py-3 pl-4 pr-6 text-sm font-medium text-white shadow-chip"
            >
              <CheckCircle2 aria-hidden className="h-5 w-5 shrink-0 text-volt" />
              {current.message}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}
