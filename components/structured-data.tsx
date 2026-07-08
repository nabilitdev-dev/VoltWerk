import { site } from '@/data/site';

/** JSON-LD: LocalBusiness-Schema für den Elektrobetrieb (Demo-Daten). */
export function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    name: site.name,
    url: site.url,
    telephone: '+49 89 12345678',
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      postalCode: site.address.zip,
      addressLocality: site.address.city,
      addressCountry: 'DE',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '18:00',
    },
    areaServed: 'München',
    priceRange: '€€',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
