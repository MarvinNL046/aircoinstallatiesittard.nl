import Link from "next/link"
import { AirVent, Mail, MapPin, Phone, Star, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const cities = [
  "Maastricht",
  "Venlo", 
  "Roermond",
  "Heerlen",
  "Sittard",
  "Weert",
  "Kerkrade",
  "Brunssum",
]

const services = [
  { name: "Airco Installatie", href: "/diensten/installatie" },
  { name: "Airco Onderhoud", href: "/diensten/onderhoud" },
  { name: "Airco Reparatie", href: "/diensten/reparatie" },
  { name: "Gratis Offerte", href: "/offerte" },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA Section */}
      <div className="bg-blue-700 py-12">
        <div className="container">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">
              Klaar voor een Perfect Klimaat?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Vraag vandaag nog uw gratis offerte aan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/offerte">
                <Button className="btn-primary bg-orange-500 hover:bg-orange-600 border-0">
                  Gratis Offerte Aanvragen
                </Button>
              </Link>
              <Link href="tel:0462021430">
                <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-blue-700">
                  <Phone className="w-5 h-5 mr-2" />
                  Bel Direct: 046 202 1430
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <AirVent className="h-8 w-8 text-orange-500" />
              <span className="font-bold text-xl">StayCool Airco</span>
            </div>
            <p className="text-gray-400">
              Dé specialist in airconditioning voor Sittard en omgeving. 
              Professionele installatie, onderhoud en reparatie.
            </p>
            
            {/* Rating */}
            <div className="flex items-center gap-2 bg-gray-800 rounded-lg p-3 inline-flex">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < 4 ? 'text-orange-500 fill-orange-500' : 'text-gray-600'}`} />
                ))}
              </div>
              <div>
                <span className="font-bold">4.7/5</span>
                <span className="text-gray-400 text-sm ml-1">(163 Google reviews)</span>
              </div>
            </div>

            <p className="text-sm text-gray-400">
              <a href="https://staycoolairco.nl" className="text-orange-500 hover:text-orange-400 transition-colors" target="_blank" rel="noopener noreferrer">
                Bezoek onze hoofdwebsite →
              </a>
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">046 202 1430</p>
                  <p className="text-sm">Ma-Do: 09:00 - 17:00, Vr: 09:00 - 16:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">06 3648 1054</p>
                  <p className="text-sm">WhatsApp beschikbaar</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@staycoolairco.nl" className="hover:text-orange-500 transition-colors">
                  info@staycoolairco.nl
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white">Aan de Bogen 11</p>
                  <p className="text-sm">6118 AS Nieuwstadt</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Storingsdienst</p>
                  <p className="text-sm">Tijdens kantooruren</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Onze Diensten</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link 
                    href={service.href} 
                    className="text-gray-400 hover:text-orange-500 transition-colors inline-flex items-center gap-1"
                  >
                    {service.name}
                    <span className="text-xs">→</span>
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="font-semibold text-lg mb-4 mt-8">Informatie</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/over-ons" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Over Ons
                </Link>
              </li>
              <li>
                <Link href="/kennisbank" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Kennisbank
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Veelgestelde Vragen
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Werkgebieden</h3>
            <div className="grid grid-cols-2 gap-2">
              {cities.map((city) => (
                <Link 
                  key={city}
                  href={`/steden/${city.toLowerCase()}`} 
                  className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                >
                  {city}
                </Link>
              ))}
            </div>
            
            {/* Certifications */}
            <div className="mt-8 p-4 bg-gray-800 rounded-lg">
              <h4 className="font-semibold mb-2">Certificeringen</h4>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>✓ F-gassen gecertificeerd</li>
                <li>✓ Erkend installateur</li>
                <li>✓ 5 jaar garantie</li>
                <li>✓ Alle topmerken</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} StayCool Airco Sittard. Alle rechten voorbehouden.
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-orange-500 transition-colors">
                Privacy
              </Link>
              <Link href="/voorwaarden" className="text-gray-400 hover:text-orange-500 transition-colors">
                Voorwaarden
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-orange-500 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}