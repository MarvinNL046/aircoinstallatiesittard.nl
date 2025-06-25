import { Metadata } from "next"
import { ProductShowcase } from "@/components/sections/product-showcase"
import { CTAWithForm } from "@/components/sections/cta-with-form"
import { Breadcrumb } from "@/components/navigation/breadcrumb"

export const metadata: Metadata = {
  title: "Airco Modellen | StayCool Airco - Daikin, LG, Samsung & Meer",
  description: "Ontdek ons uitgebreide assortiment airco's van topmerken zoals Daikin, LG, Samsung, Mitsubishi en Toshiba. Vind de perfecte airco voor uw woning of bedrijf in Limburg.",
  openGraph: {
    title: "Airco Modellen | StayCool Airco Sittard",
    description: "Bekijk alle airco modellen van topmerken. Professionele installatie in heel Limburg.",
    url: "https://aircoinstallatiesittard.nl/producten",
    siteName: "StayCool Airco Sittard",
    locale: "nl_NL",
    type: "website",
  },
}

export default function ProductenPage() {
  const breadcrumbItems = [
    { label: "Producten", href: "/producten" }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />
      
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Ontdek Ons <span className="text-orange-500">Airco Assortiment</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Van stijlvolle wandmodellen tot krachtige vloermodellen - wij hebben de perfecte airco voor elke ruimte. 
          Alle modellen worden professioneel geïnstalleerd door onze gecertificeerde monteurs.
        </p>
      </div>

      <ProductShowcase />

      <CTAWithForm
        title="Hulp nodig bij het kiezen?"
        description="Onze experts helpen u graag bij het vinden van de perfecte airco voor uw situatie. Neem vrijblijvend contact op voor persoonlijk advies."
      />
    </div>
  )
}