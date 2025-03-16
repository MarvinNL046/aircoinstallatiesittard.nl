import { Metadata } from "next"
import { AircoKopenContent } from "@/components/blog/airco-kopen/airco-kopen-content"

export const metadata: Metadata = {
  title: "Waarom een Airco Kopen? | Complete Gids | Airco Offerte Limburg",
  description: "Alles wat je moet weten over het kopen van een airco: vergelijk types, leer over belangrijke factoren en krijg praktische tips voor de beste keuze.",
}

export default function AircoKopenBlogPage() {
  return (
    <>
      {/* Hero banner with gradient background */}
      <div className="relative w-full bg-gradient-to-r from-blue-600 to-cyan-400 py-16">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <div className="absolute inset-0 opacity-20 bg-[url('/images/cool-pattern.png')] bg-repeat"></div>
          <div className="relative z-10">
            <h1 className="text-5xl font-extrabold mb-6 text-white drop-shadow-md">
              Waarom een Airco Kopen?
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Ontdek alles wat je moet weten over het aanschaffen van de perfecte airconditioning voor jouw huis of kantoor
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white backdrop-blur-sm border border-white/30 text-sm font-medium">
                advies
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white backdrop-blur-sm border border-white/30 text-sm font-medium">
                airco
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white backdrop-blur-sm border border-white/30 text-sm font-medium">
                kopen
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-sm mb-10 border border-blue-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                <path fillRule="evenodd" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-blue-800">Kennisartikel</h2>
          </div>
          <p className="text-blue-700">
            Gepubliceerd op {new Date("2025-03-16").toLocaleDateString("nl-NL", {
              year: "numeric",
              month: "long",
              day: "numeric"
            })} • 10 minuten leestijd
          </p>
        </div>

        <AircoKopenContent />
      </div>
    </>
  )
}
