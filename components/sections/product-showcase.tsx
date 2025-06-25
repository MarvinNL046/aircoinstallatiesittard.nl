"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface Product {
  id: string
  name: string
  brand: string
  category: string
  image: string
  features: string[]
}

const products: Product[] = [
  // Daikin
  {
    id: "daikin-stylish-wit",
    name: "Stylish",
    brand: "Daikin",
    category: "Premium Design",
    image: "/images/daikin-stylish-wit.webp",
    features: ["Stijlvol design", "Fluisterstil", "Energiezuinig A+++", "WiFi bediening"]
  },
  {
    id: "daikin-stylish-zwart",
    name: "Stylish Black",
    brand: "Daikin",
    category: "Premium Design",
    image: "/images/daikin-stylish-zwart.webp",
    features: ["Mat zwart design", "Coanda luchtstroom", "Intelligente sensor", "Luchtzuivering"]
  },
  {
    id: "daikin-stylish-zilver",
    name: "Stylish Silver",
    brand: "Daikin",
    category: "Premium Design",  
    image: "/images/daikin-stylish-silver.webp",
    features: ["Zilver afwerking", "3D luchtstroom", "Ontvochtiging", "Nachtstand"]
  },
  {
    id: "daikin-emura-wit",
    name: "Emura 3",
    brand: "Daikin",
    category: "Design",
    image: "/images/daikin-emura-wit.webp",
    features: ["Europees design", "2-zone sensor", "Zelfreinigend", "Whisper quiet"]
  },
  {
    id: "daikin-emura-zwart",
    name: "Emura 3 Black",
    brand: "Daikin",
    category: "Design",
    image: "/images/daikin-emura-zwart.webp",
    features: ["Premium zwart", "R-32 koudemiddel", "Flash Streamer", "Voice control"]
  },
  {
    id: "daikin-emura-zilver",
    name: "Emura 3 Silver",
    brand: "Daikin",
    category: "Design",
    image: "/images/daikin-emura-zilver.webp",
    features: ["Zilver design", "Weekly timer", "Powerful mode", "Econo mode"]
  },
  {
    id: "daikin-perfera",
    name: "Perfera",
    brand: "Daikin",
    category: "High Performance",
    image: "/images/daikin-perfera-wit.webp",
    features: ["Hoogste energie-efficiëntie", "Bluevolution", "Allergeenfilter", "Humidity control"]
  },
  {
    id: "daikin-comfora",
    name: "Comfora",
    brand: "Daikin",
    category: "Comfort",
    image: "/images/daikin-comfora-right.webp",
    features: ["Uitstekende prijs-kwaliteit", "Comfort mode", "Timer functie", "Onecta app"]
  },
  {
    id: "daikin-sensira",
    name: "Sensira",
    brand: "Daikin",
    category: "Budget",
    image: "/images/daikin-sensira-wit.webp",
    features: ["Betaalbaar", "Betrouwbaar", "Stil", "Energiezuinig"]
  },
  {
    id: "daikin-ururu-sarara",
    name: "Ururu Sarara",
    brand: "Daikin",
    category: "Premium",
    image: "/images/Ururu-Sarara-right.webp",
    features: ["Bevochtiging & ontvochtiging", "Luchtzuivering", "Ventilatie", "Premium comfort"]
  },
  {
    id: "daikin-perfera-vloer",
    name: "Perfera Vloermodel",
    brand: "Daikin",
    category: "Vloermodel",
    image: "/images/Perfera-vloermodel-left.webp",
    features: ["Laag vloermodel", "Dubbele luchtstroom", "Vloerverwarming", "Stijlvol design"]
  },

  // LG
  {
    id: "lg-artcool-gallery",
    name: "ArtCool Gallery",
    brand: "LG",
    category: "Premium Design",
    image: "/images/lg-artcool-mirror.webp",
    features: ["Kunstwerk design", "Aanpasbaar frame", "ThinQ WiFi", "Dual Inverter"]
  },
  {
    id: "lg-artcool-black",
    name: "ArtCool Black",
    brand: "LG",
    category: "Design",
    image: "/images/rac-eu-lg-artcool-black.webp",
    features: ["Mat zwart", "Plasmaster Ionizer", "Auto cleaning", "10 jaar garantie"]
  },
  {
    id: "lg-premium",
    name: "Premium",
    brand: "LG",
    category: "Premium",
    image: "/images/rac-eu-lg-premium.webp",
    features: ["Premium prestaties", "UVnano", "Energy control", "Silent mode"]
  },
  {
    id: "lg-dualcool",
    name: "DualCool Premium",
    brand: "LG",
    category: "Performance",
    image: "/images/LG-dualcool-indoor-premium.webp",
    features: ["Dual Inverter", "Fast cooling", "Energy saving", "Low noise"]
  },
  {
    id: "lg-standard-plus",
    name: "Standard Plus",
    brand: "LG",
    category: "Comfort",
    image: "/images/rac-eu-standard-plus-.webp",
    features: ["Betrouwbaar", "Efficiënt", "Gebruiksvriendelijk", "Lange levensduur"]
  },

  // Samsung
  {
    id: "samsung-windfree-elite",
    name: "WindFree Elite",
    brand: "Samsung",
    category: "Premium",
    image: "/images/samsung/windfreeElite/WindFree Elite_S2_Front_Web_RGB.webp",
    features: ["WindFree koeling", "AI Auto Comfort", "SmartThings", "Motion detect"]
  },
  {
    id: "samsung-windfree-avant-black",
    name: "WindFree Avant Black",
    brand: "Samsung",
    category: "Premium Design",
    image: "/images/samsung/windreeAvantBlack/WindFree Avant Black_Front_Web_RGB.webp",
    features: ["Premium black design", "WindFree technologie", "Voice control", "Auto clean"]
  },
  {
    id: "samsung-windfree-comfort",
    name: "WindFree Comfort",
    brand: "Samsung",
    category: "Comfort",
    image: "/images/samsung/windfreeComfort/WindFree Comfort_S2_Front_Web_RGB.webp",
    features: ["Comfortabel", "WindFree", "Energiezuinig", "Stil"]
  },
  {
    id: "samsung-luzon",
    name: "Luzon",
    brand: "Samsung",
    category: "Budget",
    image: "/images/samsung/luzon/Luzon_S2_Front_Web_RGB.webp",
    features: ["Betaalbaar", "Betrouwbaar", "Easy filter", "Fast cooling"]
  },
  {
    id: "samsung-360-cassette",
    name: "360 Cassette",
    brand: "Samsung",
    category: "Commercieel",
    image: "/images/samsung/casette/360 Cassette - Rond - Front - Web.webp",
    features: ["360° luchtstroom", "Bladeless design", "Plafondmontage", "Groot bereik"]
  },

  // Mitsubishi Heavy Industries
  {
    id: "mitsubishi-diamond",
    name: "Diamond ZS-W",
    brand: "Mitsubishi Heavy",
    category: "Premium",
    image: "/images/Mitsubishi heavy indus/srk50zs-wf-wit-single-split-airco-wandmodel-2.5-3.5-5kw-510x510.webp",
    features: ["Diamond design", "Allergen Clear", "3D Auto", "Silent mode"]
  },
  {
    id: "mitsubishi-titanium",
    name: "Titanium ZS-WFT",
    brand: "Mitsubishi Heavy",
    category: "High Performance",
    image: "/images/Mitsubishi heavy indus/Mitsubishi-titanium-zs-wft-1.webp",
    features: ["Titanium coating", "Powerful operation", "Enzyme filter", "Long airflow"]
  },
  {
    id: "mitsubishi-vloermodel",
    name: "SRF Vloermodel",
    brand: "Mitsubishi Heavy",
    category: "Vloermodel",
    image: "/images/Mitsubishi heavy indus/Mitsubishi-Heavy-SRF-35-ZS-W-Vloer-unit-35-kW-Exclusief-buiten-unit.webp",
    features: ["Vloermontage", "Krachtig", "Breed bereik", "Robuust design"]
  },

  // Toshiba
  {
    id: "toshiba-haori-zwart",
    name: "Haori Black",
    brand: "Toshiba",
    category: "Premium Design",
    image: "/images/Haori-zwart-vooraanzicht_3_11zon.webp",
    features: ["Textiel front", "Premium design", "Ultra quiet", "PM 2.5 filter"]
  },
  {
    id: "toshiba-haori-grijs",
    name: "Haori Grey",
    brand: "Toshiba",
    category: "Premium Design",
    image: "/images/Haori-grijs-links_19_11zon.webp",
    features: ["Stof bekleding", "Interieur match", "Energy save", "WiFi ready"]
  },
  {
    id: "toshiba-daiseikai",
    name: "Daiseikai 10",
    brand: "Toshiba",
    category: "High Performance",
    image: "/images/Daiseikai 10-Wit-vooraanzicht_4_11zon.webp",
    features: ["R32 koudemiddel", "Plasma filter", "8°C heating", "Fireplace mode"]
  },
  {
    id: "toshiba-kazumi",
    name: "Kazumi Plus",
    brand: "Toshiba",
    category: "Comfort",
    image: "/images/Kazumi-plus-white-vooraanzicht_8_11zon.webp",
    features: ["Modern design", "Quiet operation", "Weekly timer", "Self-cleaning"]
  },
  {
    id: "toshiba-seiya",
    name: "Seiya Plus",
    brand: "Toshiba",
    category: "Budget",
    image: "/images/Seiya-plus-wit-vooraanzicht_12_11zon.webp",
    features: ["Instapmodel", "Betrouwbaar", "IAQ filter", "Eco mode"]
  },
  {
    id: "toshiba-console",
    name: "Console Vloermodel",
    brand: "Toshiba",
    category: "Vloermodel",
    image: "/images/toshiba-console-vloermodel-wit_13_11zon.webp",
    features: ["Lage inbouw", "Floor effect", "Wide airflow", "Touch control"]
  },

  // Tosot
  {
    id: "tosot-clivia-zwart",
    name: "Clivia Black",
    brand: "Tosot",
    category: "Design",
    image: "/images/712-clivia-zwart-vooraanzicht.webp",
    features: ["Mat zwart", "WiFi control", "I-Feel functie", "Turbo mode"]
  },
  {
    id: "tosot-clivia-wit",
    name: "Clivia White",
    brand: "Tosot",
    category: "Design",
    image: "/images/724-clivia-wit-vooraanzicht.webp",
    features: ["Elegant wit", "Smart control", "Sleep mode", "Self diagnosis"]
  },
  {
    id: "tosot-pular",
    name: "Pular",
    brand: "Tosot",
    category: "Comfort",
    image: "/images/568-Pular-indoor-vooraanzicht.webp",
    features: ["Compact design", "Cold plasma", "Gear transmission", "Long distance"]
  },
  {
    id: "tosot-cosmo",
    name: "Cosmo",
    brand: "Tosot",
    category: "Budget",
    image: "/images/787-cosmo-indoor-vooraanzicht.webp",
    features: ["Betaalbaar", "Betrouwbaar", "Easy clean", "Multi-speed"]
  },
  {
    id: "tosot-console",
    name: "Console WTS",
    brand: "Tosot",
    category: "Vloermodel",
    image: "/images/374-WTS-indoor-console-vloernmodel-tosot.webp",
    features: ["Vloerunit", "Krachtig", "Breed bereik", "Remote control"]
  },

  // Mobiele Airco's
  {
    id: "lg-mobiel",
    name: "Mobiele Airco",
    brand: "LG",
    category: "Mobiel",
    image: "/images/mobiele airco/lg mobiele airco/lg-mobiele-airco-staycoolairco.webp",
    features: ["Verplaatsbaar", "Geen installatie", "Direct gebruik", "Afstandsbediening"]
  },
  {
    id: "tosot-mobiel",
    name: "Mobiele Airco",
    brand: "Tosot",
    category: "Mobiel",
    image: "/images/mobiele airco/tosot mobiele airco/tosot-mobiele-airco-staycoolairco-1.webp",
    features: ["Plug & Play", "Flexibel", "Timer functie", "Ontvochtiging"]
  },

  // Airco Covers
  {
    id: "cover-wit",
    name: "Airco Cover Wit",
    brand: "Accessoires",
    category: "Covers",
    image: "/images/airco-covers/aircocover-wit.webp",
    features: ["Bescherming", "Stijlvol", "Weerbestendig", "Easy montage"]
  },
  {
    id: "cover-antraciet",
    name: "Airco Cover Antraciet",
    brand: "Accessoires",
    category: "Covers",
    image: "/images/airco-covers/aircocover-antraciet.webp",
    features: ["UV-bestendig", "Modern design", "Ventilatie", "Duurzaam"]
  }
]

const categories = ["Alle", "Premium Design", "Premium", "High Performance", "Design", "Comfort", "Budget", "Vloermodel", "Commercieel", "Mobiel", "Covers"]
const brands = ["Alle", "Daikin", "LG", "Samsung", "Mitsubishi Heavy", "Toshiba", "Tosot", "Accessoires"]

export function ProductShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("Alle")
  const [selectedBrand, setSelectedBrand] = useState("Alle")

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === "Alle" || product.category === selectedCategory
    const brandMatch = selectedBrand === "Alle" || product.brand === selectedBrand
    return categoryMatch && brandMatch
  })

  return (
    <div className="space-y-8">
      {/* Filters */}
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium mb-2">Filter op merk</h3>
          <div className="flex flex-wrap gap-2">
            {brands.map((brand) => (
              <Button
                key={brand}
                variant={selectedBrand === brand ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedBrand(brand)}
                className={cn(
                  selectedBrand === brand && "bg-orange-500 hover:bg-orange-600"
                )}
              >
                {brand}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">Filter op categorie</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  selectedCategory === category && "bg-blue-600 hover:bg-blue-700"
                )}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-square relative bg-gray-50">
              <Image
                src={product.image}
                alt={`${product.brand} ${product.name}`}
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="p-4 space-y-3">
              <div>
                <p className="text-sm text-gray-500">{product.brand}</p>
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-sm text-orange-600">{product.category}</p>
              </div>
              
              <ul className="space-y-1">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-blue-600" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="pt-3 space-y-2">
                <Button className="w-full btn-primary" asChild>
                  <a href="/offerte">
                    Vraag Offerte Aan
                  </a>
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href="tel:0462021430">
                      <Phone className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href="mailto:info@staycoolairco.nl">
                      <Mail className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">Geen producten gevonden met deze filters.</p>
        </div>
      )}
    </div>
  )
}