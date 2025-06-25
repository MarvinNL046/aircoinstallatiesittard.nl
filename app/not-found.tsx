import Link from "next/link"
import { Home, Phone, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Icon */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-orange-500">404</div>
          <h1 className="text-4xl font-bold text-gray-900 mt-4">
            Pagina Niet Gevonden
          </h1>
        </div>

        {/* Message */}
        <p className="text-xl text-gray-600 mb-8">
          Sorry, de pagina die u zoekt bestaat niet of is verplaatst. 
          Misschien kunnen we u helpen met een van de onderstaande opties:
        </p>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="card text-center">
            <Search className="w-12 h-12 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Populaire Steden</h3>
            <div className="space-y-1 text-sm">
              <Link href="/steden/sittard" className="block text-orange-600 hover:underline">
                Airco Sittard
              </Link>
              <Link href="/steden/maastricht" className="block text-orange-600 hover:underline">
                Airco Maastricht
              </Link>
              <Link href="/steden/heerlen" className="block text-orange-600 hover:underline">
                Airco Heerlen
              </Link>
              <Link href="/steden/geleen" className="block text-orange-600 hover:underline">
                Airco Geleen
              </Link>
            </div>
          </div>

          <div className="card text-center">
            <Home className="w-12 h-12 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Onze Diensten</h3>
            <div className="space-y-1 text-sm">
              <Link href="/diensten/installatie" className="block text-orange-600 hover:underline">
                Airco Installatie
              </Link>
              <Link href="/diensten/onderhoud" className="block text-orange-600 hover:underline">
                Airco Onderhoud
              </Link>
              <Link href="/diensten/reparatie" className="block text-orange-600 hover:underline">
                Airco Reparatie
              </Link>
            </div>
          </div>

          <div className="card text-center">
            <Phone className="w-12 h-12 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Direct Contact</h3>
            <p className="text-sm text-gray-600 mb-3">
              Liever persoonlijk contact? Bel ons direct!
            </p>
            <Link href="tel:0462021430">
              <Button className="btn-primary">
                <Phone className="w-4 h-4 mr-2" />
                046 202 1430
              </Button>
            </Link>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50">
              <Home className="w-4 h-4 mr-2" />
              Naar Homepage
            </Button>
          </Link>
          <Link href="/offerte">
            <Button className="btn-primary">
              Gratis Offerte Aanvragen
            </Button>
          </Link>
        </div>

        {/* SEO Text */}
        <div className="mt-12 text-sm text-gray-500">
          <p>
            StayCool Airco - Uw specialist voor airco installatie in heel Limburg. 
            Actief in Sittard, Maastricht, Heerlen, Roermond en alle andere steden in Zuid-Limburg.
          </p>
        </div>
      </div>
    </div>
  )
}