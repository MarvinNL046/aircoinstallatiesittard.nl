import { FileText, Users, Phone, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const benefits = [
  {
    icon: FileText,
    title: "Gratis Offerte",
    description: "Vrijblijvend advies en een transparante prijsopgave binnen 1 werkdag"
  },
  {
    icon: Users,
    title: "Gecertificeerde Monteurs",
    description: "F-gassen gecertificeerd team met ruim 10 jaar ervaring"
  },
  {
    icon: Phone,
    title: "Direct Contact",
    description: "Bereikbaar tijdens kantooruren voor al uw vragen"
  },
  {
    icon: Shield,
    title: "5 Jaar Garantie",
    description: "Uitgebreide garantie op alle installaties en onderdelen"
  }
]

export function WhyUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Erkend Airco Installateur Sittard - StayCool Airco
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Als erkend installateur staan wij garant voor kwaliteit, service en betrouwbaarheid
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div 
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 transition-colors duration-300">
                  <Icon className="w-10 h-10 text-orange-600 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Professionele Airco Installatie in Sittard
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Vraag vandaag nog uw gratis offerte aan en ontvang binnen 1 werkdag reactie
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/offerte">
              <Button className="btn-primary bg-orange-500 hover:bg-orange-600 border-0">
                Gratis Offerte Aanvragen
              </Button>
            </Link>
            <Link href="tel:0462021430">
              <Button 
                variant="outline" 
                className="bg-transparent text-white border-white hover:bg-white hover:text-blue-700"
              >
                <Phone className="w-5 h-5 mr-2" />
                Bel 046 202 1430
              </Button>
            </Link>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-gray-900">500+</div>
            <div className="text-gray-600">Tevreden klanten</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900">10+</div>
            <div className="text-gray-600">Jaar ervaring</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900">Ma-Vr</div>
            <div className="text-gray-600">09:00 - 17:00</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900">4.7/5</div>
            <div className="text-gray-600">163 Google Reviews</div>
          </div>
        </div>
      </div>
    </section>
  )
}