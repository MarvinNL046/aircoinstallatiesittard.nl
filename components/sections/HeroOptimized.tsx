"use client"

import { useState, useEffect } from "react"
import { Phone, Star, CheckCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { sendEmail, trackFormSubmission, trackPixelFormSubmission } from "@/lib/emailjs"
import { toast } from "sonner"

const rotatingHeadlines = [
  "Airco Specialist Limburg - Sittard & Omgeving",
  "Airco Installateur Zuid-Limburg - Erkend & Gecertificeerd",
  "Airco Service Limburg - Van Maastricht tot Roermond",
  "Airco Kopen en Laten Installeren in Heel Limburg"
]

export function HeroOptimized() {
  const [currentHeadline, setCurrentHeadline] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: ""
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false)
      setTimeout(() => {
        setCurrentHeadline((prev) => (prev + 1) % rotatingHeadlines.length)
        setIsTyping(true)
      }, 200)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const result = await sendEmail({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      postcode: formData.postcode,
      service: "Gratis offerte aanvraag via Hero sectie"
    })

    if (result.success) {
      toast.success("Bedankt voor uw aanvraag! We nemen binnen 24 uur contact met u op.")
      setFormData({ name: "", email: "", phone: "", postcode: "" })
      // Track success
      trackFormSubmission("hero_quote_form", true)
      trackPixelFormSubmission("hero_quote_form", true)
    } else {
      toast.error("Er ging iets mis. Probeer het later opnieuw of bel ons direct.")
      // Track failure
      trackFormSubmission("hero_quote_form", false)
      trackPixelFormSubmission("hero_quote_form", false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="relative min-h-[90vh] bg-hero-gradient overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.2] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left column - Content */}
          <div className="text-white space-y-8">
            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
                <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
                <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
                <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
                <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
                <span className="ml-2 font-semibold">4.7/5</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="font-semibold">163 Google Reviews</span>
              </div>
            </div>

            {/* Headline with typewriter effect */}
            <div className="space-y-4">
              <div className="min-h-[8rem] md:min-h-[10rem] lg:min-h-[12rem] flex items-start">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className={`block ${isTyping ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
                    {rotatingHeadlines[currentHeadline]}
                  </span>
                </h1>
              </div>
              <h2 className="text-xl md:text-2xl text-gray-100">
                Airco Installatie Sittard - Erkend Installateur met 5 Jaar Garantie
              </h2>
            </div>

            {/* Benefits list */}
            <ul className="space-y-3 text-lg">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                <span>Gratis offerte & advies op maat</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                <span>Gecertificeerde monteurs met 10+ jaar ervaring</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                <span>Beste prijs-kwaliteit verhouding gegarandeerd</span>
              </li>
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="tel:0462021430">
                <Button className="btn-primary w-full sm:w-auto flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Bel Direct: 046 202 1430
                </Button>
              </Link>
              <Button variant="outline" className="btn-secondary w-full sm:w-auto bg-transparent text-white border-white hover:bg-white hover:text-gray-900">
                Bekijk Onze Diensten
              </Button>
            </div>

            {/* Urgency message */}
            <div className="flex items-center gap-2 text-orange-400">
              <Clock className="w-5 h-5" />
              <span className="font-medium">Nu 15% korting op alle installaties!</span>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="relative">
            {/* Ribbon */}
            <div className="absolute -top-5 -right-5 bg-orange-500 text-white px-8 py-2 rounded-full shadow-lg transform rotate-12 z-20">
              <span className="font-bold">Binnen 1 werkdag reactie</span>
            </div>

            {/* Form card */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Gratis Offerte Airco Installatie Sittard
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-gray-700">Naam</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="Uw volledige naam"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="uw@email.nl"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-700">Telefoon</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="06 12345678"
                  />
                </div>

                <div>
                  <Label htmlFor="postcode" className="text-gray-700">Postcode</Label>
                  <Input
                    id="postcode"
                    name="postcode"
                    type="text"
                    required
                    value={formData.postcode}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="6131 XX"
                  />
                </div>

                <Button type="submit" className="btn-primary w-full text-lg py-6">
                  Ontvang Gratis Offerte
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  ✓ Geen verplichtingen ✓ 100% gratis ✓ Direct reactie
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}