import { Metadata } from "next"
import { HeroOptimized } from "@/components/sections/HeroOptimized"
import { ServicesOptimized } from "@/components/sections/ServicesOptimized"
import { WhyUs } from "@/components/sections/WhyUs"
import { BrandLogos } from "@/components/sections/BrandLogos"
import { ServiceAreas } from "@/components/sections/ServiceAreas"
import { ContactSection } from "@/components/sections/ContactSection"
import { generateOrganizationSchema } from "@/lib/schema"
import Script from "next/script"

export const metadata: Metadata = {
  title: 'Airco Limburg | StayCool - Airco Specialist Zuid-Limburg ✓',
  description: 'Airco installateur Limburg voor airco service in Sittard, Maastricht, Heerlen, Roermond & heel Zuid-Limburg. ✓ Airco kopen en laten installeren ✓ Daikin & Mitsubishi dealer ✓ Airco onderhoud Limburg. Bel: 046 202 1430',
  alternates: {
    canonical: 'https://aircoinstallatiesittard.nl'
  }
}

export default function HomePage() {
  const organizationSchema = generateOrganizationSchema()

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      <main>
        <HeroOptimized />
        <ServicesOptimized />
        <WhyUs />
        <BrandLogos />
        <ServiceAreas />
        <ContactSection />
      </main>
    </>
  )
}