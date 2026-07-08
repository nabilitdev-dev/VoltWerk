'use client';

import { Send } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = { name: '', email: '', phone: '', message: '' };

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = 'Bitte geben Sie Ihren Namen an.';
  if (!values.email.trim()) {
    errors.email = 'Bitte geben Sie Ihre E-Mail-Adresse an.';
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse an.';
  }
  if (!values.message.trim()) errors.message = 'Bitte beschreiben Sie kurz Ihr Anliegen.';
  return errors;
}

const inputClasses =
  'w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-steel/60 transition-colors focus:border-navy-900 focus:outline-none focus:ring-2 focus:ring-navy-900/15 aria-[invalid=true]:border-red-500';

/** Kontaktformular – reines Frontend, zeigt beim Absenden einen Demo-Toast. */
export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const { toast } = useToast();

  const set = (field: keyof FormValues) => (value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
    // Fehler live zurücknehmen, sobald korrigiert wird
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    toast('Vielen Dank! Dies ist eine Demo.');
    setValues(initialValues);
  };

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-sm font-semibold text-navy-950">
            Name <span aria-hidden className="text-volt-700">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={(e) => set('name')(e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
            placeholder="Max Mustermann"
            className={inputClasses}
          />
          {errors.name ? (
            <p id="contact-name-error" className="mt-1.5 text-xs font-medium text-red-600">
              {errors.name}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-sm font-semibold text-navy-950">
            E-Mail <span aria-hidden className="text-volt-700">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={(e) => set('email')(e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            placeholder="max@beispiel.de"
            className={inputClasses}
          />
          {errors.email ? (
            <p id="contact-email-error" className="mt-1.5 text-xs font-medium text-red-600">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-semibold text-navy-950">
          Telefon <span className="font-normal text-steel">(optional)</span>
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={(e) => set('phone')(e.target.value)}
          placeholder="089 12345678"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-semibold text-navy-950">
          Nachricht <span aria-hidden className="text-volt-700">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          value={values.message}
          onChange={(e) => set('message')(e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          placeholder="Beschreiben Sie kurz Ihr Vorhaben – z. B. „PV-Anlage für Einfamilienhaus in Trudering“."
          className={cn(inputClasses, 'resize-y')}
        />
        {errors.message ? (
          <p id="contact-message-error" className="mt-1.5 text-xs font-medium text-red-600">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          <Send aria-hidden className="h-4 w-4" />
          Anfrage senden
        </Button>
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-steel">
          * Pflichtfeld · Antwort &lt; 24 h
        </p>
      </div>
    </form>
  );
}
