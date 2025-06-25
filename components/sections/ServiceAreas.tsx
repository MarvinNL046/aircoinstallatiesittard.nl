import { MapPin, CheckCircle } from "lucide-react"
import Link from "next/link"

const regions = [
  {
    name: "Zuid-Limburg",
    cities: [
      { name: "Sittard", keyword: "airco sittard" },
      { name: "Maastricht", keyword: "airco maastricht" },
      { name: "Heerlen", keyword: "airco heerlen" },
      { name: "Kerkrade", keyword: "airconditioning kerkrade" },
      { name: "Brunssum", keyword: "split airco brunssum" },
      { name: "Landgraaf", keyword: "airco landgraaf" },
      { name: "Voerendaal", keyword: "airco voerendaal" },
      { name: "Hoensbroek", keyword: "airco hoensbroek" }
    ]
  },
  {
    name: "Midden-Limburg",
    cities: [
      { name: "Roermond", keyword: "airco roermond" },
      { name: "Weert", keyword: "airco weert" },
      { name: "Echt", keyword: "airco echt" },
      { name: "Maasbracht", keyword: "airco maasbracht" }
    ]
  },
  {
    name: "Westelijke Mijnstreek",
    cities: [
      { name: "Geleen", keyword: "airco geleen" },
      { name: "Stein", keyword: "airco stein" },
      { name: "Beek", keyword: "airco beek" },
      { name: "Elsloo", keyword: "airco elsloo" }
    ]
  }
]

const services = [
  "Airco installatie Limburg",
  "Airco service Limburg", 
  "Airco onderhoud Limburg",
  "Airco montage Limburg",
  "Klimaatbeheersing Limburg",
  "Daikin airco Limburg",
  "Mitsubishi airco Limburg"
]

export function ServiceAreas() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Airco Service in Heel Limburg
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Als <strong>airco specialist Limburg</strong> zijn wij actief in alle steden en dorpen. 
            Van <strong>airco Zuid-Limburg</strong> tot Noord-Limburg, wij zijn uw lokale airco installateur.
          </p>
        </div>

        {/* Service regions grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {regions.map((region, index) => (
            <div key={index} className="card">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-orange-500" />
                {region.name}
              </h3>
              <ul className="space-y-2">
                {region.cities.map((city, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <Link 
                      href={`/steden/${city.name.toLowerCase()}`}
                      className="text-gray-700 hover:text-orange-600 transition-colors"
                    >
                      {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Services keywords */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Onze Diensten in Limburg
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {services.map((service, index) => (
              <span 
                key={index}
                className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
              >
                {service}
              </span>
            ))}
          </div>
          
          {/* Special mentions */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              <strong>Airco Limburg aanbieding</strong> • <strong>Airco bedrijf Limburg</strong> • 
              <strong>Airco Parkstad</strong> • <strong>Profi airco</strong> installateur met jarenlange ervaring
            </p>
            <p className="text-sm text-gray-500">
              Ook actief als <strong>airco service Achterhoek</strong> en grensgebieden
            </p>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Op zoek naar <strong>airco kopen en laten installeren Limburg</strong>? 
            Wij zijn de <strong>airco installateur Limburg</strong> voor al uw klimaatbeheersing!
          </p>
          <Link 
            href="/offerte"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            <MapPin className="w-5 h-5" />
            Vraag Offerte Aan voor uw Regio
          </Link>
        </div>
      </div>
    </section>
  )
}