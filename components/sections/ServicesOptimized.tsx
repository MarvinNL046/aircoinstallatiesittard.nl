import { Wrench, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    title: "Airco Installatie",
    description: "Professionele installatie van split-unit en multi-split airconditioners. Inclusief montage, aansluiting en inbedrijfstelling.",
    icon: Wrench,
    features: [
      "Gratis inmeting en advies",
      "Installatie binnen 1-2 dagen",
      "5 jaar installatiegarantie",
      "Alle topmerken"
    ],
    link: "/diensten/installatie"
  },
  {
    title: "Onderhoud & Service",
    description: "Regelmatig onderhoud voor optimale prestaties en langere levensduur. Voorkom storingen en bespaar energie.",
    icon: Shield,
    features: [
      "Jaarlijkse onderhoudsbeurt",
      "Filterreiniging en controle",
      "Koudemiddel bijvullen",
      "Storingsdienst tijdens kantooruren"
    ],
    link: "/diensten/onderhoud"
  },
  {
    title: "Reparatie & Storing",
    description: "Snelle diagnose en vakkundige reparatie bij storingen. Meestal dezelfde dag nog geholpen.",
    icon: Clock,
    features: [
      "Snelle service tijdens kantooruren",
      "Snelle response tijd",
      "Transparante prijzen",
      "Garantie op reparaties"
    ],
    link: "/diensten/reparatie"
  }
]

export function ServicesOptimized() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Airco Installatie, Onderhoud & Reparatie Sittard
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Van installatie tot onderhoud - StayCool Airco is uw complete partner voor klimaatbeheersing
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div 
                key={index} 
                className="card hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                {/* Icon header */}
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title} Sittard
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-orange-500 mt-0.5">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href={service.link}>
                  <Button 
                    variant="outline" 
                    className="w-full border-orange-500 text-orange-600 hover:bg-orange-50"
                  >
                    Meer informatie →
                  </Button>
                </Link>
              </div>
            )
          })}
        </div>

        {/* Video section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Video */}
            <div className="relative aspect-video lg:aspect-auto">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/9m-jkGgfLog"
                title="StayCool Airco Services"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Waarom StayCool Airco Sittard Kiezen?
              </h3>
              <p className="text-gray-600 mb-6">
                Met meer dan 10 jaar ervaring en 500+ tevreden klanten zijn wij dé specialist 
                voor airconditioning in Sittard en omgeving. Bekijk onze video en ontdek 
                waarom klanten voor ons kiezen.
              </p>
              <div className="space-y-4">
                <Link href="/over-ons">
                  <Button className="btn-primary">
                    Ontdek Meer Over Ons
                  </Button>
                </Link>
                <p className="text-sm text-gray-500">
                  ★★★★★ 4.7/5 op basis van 163 Google reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}