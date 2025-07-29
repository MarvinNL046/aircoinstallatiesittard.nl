"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { sendEmail, trackFormSubmission, trackPixelFormSubmission } from "@/lib/emailjs"
import { toast } from "sonner"

const contactInfo = [
  {
    icon: Phone,
    title: "Telefoon",
    details: ["046 202 1430", "Ma-Do: 09:00 - 17:00", "Vr: 09:00 - 16:00"],
    primary: true
  },
  {
    icon: Mail,
    title: "E-mail",
    details: ["info@staycoolairco.nl", "Ma-Vr: 09:00 - 17:00", "Snelle reactie"],
    primary: false
  },
  {
    icon: MapPin,
    title: "Adres",
    details: ["Aan de Bogen 11", "6118 AS Nieuwstadt", "Gratis parkeren"],
    primary: false
  },
  {
    icon: Clock,
    title: "Openingstijden",
    details: ["Ma-Di: 09:00 - 17:00", "Wo-Do: 09:00 - 17:00", "Vr: 09:00 - 16:00", "Za-Zo: Gesloten"],
    primary: false
  }
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const result = await sendEmail({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      service: "Contact formulier"
    })

    if (result.success) {
      toast.success("Bedankt voor uw bericht! We nemen zo snel mogelijk contact met u op.")
      setFormData({ name: "", email: "", phone: "", message: "" })
      // Track success
      trackFormSubmission("contact_form", true)
      trackPixelFormSubmission("contact_form", true)
    } else {
      toast.error("Er ging iets mis. Probeer het later opnieuw of bel ons direct.")
      // Track failure
      trackFormSubmission("contact_form", false)
      trackPixelFormSubmission("contact_form", false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact - Airco Installateur Sittard
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Heeft u vragen of wilt u een afspraak maken? Wij staan klaar om u te helpen!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <div 
                    key={index}
                    className={`card ${info.primary ? 'border-2 border-orange-500' : ''}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        info.primary ? 'bg-orange-100' : 'bg-blue-100'
                      }`}>
                        <Icon className={`w-6 h-6 ${
                          info.primary ? 'text-orange-600' : 'text-blue-600'
                        }`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Map */}
            <div className="card p-0 overflow-hidden h-64">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d278.3387114978361!2d5.855334701435429!3d51.03556110372332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x47c0c9ee1dd18a4b%3A0x5b72866dc58ab220!2sAan%20de%20Bogen%2011%2C%206118%20AS%20Nieuwstadt!3m2!1d51.035678999999995!2d5.8554651!5e0!3m2!1snl!2snl!4v1750873030575!5m2!1snl!2snl" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="StayCool Airco Locatie"
              />
            </div>
          </div>

          {/* Contact form */}
          <div className="card">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Vraag Gratis Offerte Airco Sittard
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-gray-700">Naam *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="Uw naam"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-700">Telefoon *</Label>
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
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-700">E-mail *</Label>
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
                <Label htmlFor="message" className="text-gray-700">Bericht *</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="input-field min-h-[120px]"
                  placeholder="Vertel ons waar we u mee kunnen helpen..."
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  required
                  className="mt-1 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  Ik ga akkoord met de{" "}
                  <a href="/privacy" className="text-orange-600 hover:underline">
                    privacyverklaring
                  </a>
                </label>
              </div>

              <Button type="submit" className="btn-primary w-full">
                Verstuur Bericht
              </Button>

              <p className="text-sm text-gray-600 text-center">
                Wij reageren binnen 1 werkdag op uw bericht
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}