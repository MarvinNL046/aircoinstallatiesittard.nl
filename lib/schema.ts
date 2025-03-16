import { Organization, WithContext, Service, LocalBusiness, BreadcrumbList } from "schema-dts"

export function generateOrganizationSchema(): WithContext<Organization> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "StayCool Airco Sittard",
    url: "https://aircoinstallatiesittard.nl",
    logo: "https://staycoolairco.nl/logo.png",
    description: "Professionele airconditioning installatie in Sittard door StayCool Airco",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sittard",
      addressRegion: "Limburg",
      addressCountry: "NL",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+31-46-202-1430",
      contactType: "customer service",
    },
    sameAs: [
      "https://staycoolairco.nl",
      "https://facebook.com/staycoolairco",
      "https://instagram.com/staycoolairco",
      "https://linkedin.com/company/staycoolairco",
    ],
    areaServed: {
      "@type": "City",
      name: "Sittard",
    }
  }
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  price: string;
}): WithContext<Service> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "StayCool Airco",
    },
    areaServed: {
      "@type": "City",
      name: "Sittard",
    },
    offers: {
      "@type": "Offer",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: service.price,
        priceCurrency: "EUR",
      },
    },
  }
}

export function generateLocalBusinessSchema(city: string): WithContext<LocalBusiness> {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `StayCool Airco - Airco Installatie ${city}`,
    description: `Professionele airconditioning installatie en onderhoud in ${city} door StayCool Airco. Erkend en gecertificeerd installateur.`,
    url: `https://aircoinstallatiesittard.nl/steden/${city.toLowerCase()}`,
    telephone: "+31462021430",
    email: "info@staycoolairco.nl",
    areaServed: {
      "@type": "City",
      name: city,
      containedIn: {
        "@type": "State",
        name: "Limburg",
      },
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "Limburg",
      addressCountry: "NL",
    },
    priceRange: "€€",
  }
}

export function generateBreadcrumbSchema(items: { name: string; item: string }[]): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://aircoinstallatiesittard.nl${item.item}`,
    })),
  }
}
