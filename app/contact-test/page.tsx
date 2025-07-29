import { ContactSection } from "@/components/sections/ContactSection"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export const metadata = {
  title: "Test Webhook Integration - StayCool Airco",
  description: "Test pagina voor GoHighLevel webhook integratie",
  robots: "noindex, nofollow", // Prevent indexing of test page
}

export default function ContactTestPage() {
  return (
    <>
      {/* Test notice banner */}
      <div className="bg-orange-500 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold">🧪 Test Webhook Integration</h1>
            <Link 
              href="/" 
              className="flex items-center gap-2 hover:underline"
            >
              <ChevronLeft className="w-4 h-4" />
              Terug naar homepage
            </Link>
          </div>
          <p className="text-sm mt-1">
            Deze pagina is voor het testen van de GHL webhook integratie.
          </p>
        </div>
      </div>

      {/* Contact section with form */}
      <ContactSection />

      {/* Debug info section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">📊 Debug Informatie</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Test Checklist:</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>✅ Form submissie test</li>
                  <li>✅ Data verschijnt in GHL</li>
                  <li>✅ EmailJS backup werkt bij webhook failure</li>
                  <li>✅ Success/error berichten worden getoond</li>
                  <li>✅ Analytics events worden geactiveerd</li>
                  <li>✅ Mobile responsive design</li>
                  <li>✅ Loading states werken correct</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Form Types in gebruik:</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• contact_form - Algemeen contact formulier</li>
                  <li>• hero_quote_form - Hero sectie offerte formulier</li>
                  <li>• city_contact_form - Stad-specifiek contact formulier</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Let op:</strong> Open de browser console (F12) om debug logs te zien 
                  wanneer DEBUG_MODE = true in /lib/emailjs.ts
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}