"use client"

import { useState } from "react"

const brands = [
  { name: "Daikin", logo: "/brands/daikin.png" },
  { name: "Mitsubishi Electric", logo: "/brands/mitsubishi.png" },
  { name: "LG", logo: "/brands/lg.png" },
  { name: "Samsung", logo: "/brands/samsung.png" },
  { name: "Panasonic", logo: "/brands/panasonic.png" },
  { name: "Toshiba", logo: "/brands/toshiba.png" }
]

export function BrandLogos() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Airco Merken - Officieel Dealer Sittard
          </h2>
          <p className="text-lg text-gray-600">
            Officieel dealer van alle toonaangevende airco merken
          </p>
        </div>

        {/* Brands grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                {/* Placeholder for brand logo */}
                <div className="aspect-[3/2] relative flex items-center justify-center">
                  <div className={`text-center transition-all duration-300 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-60 grayscale'
                  }`}>
                    <div className="text-2xl font-bold text-gray-400">
                      {brand.name}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">Logo</div>
                  </div>
                  
                  {/* Use this when you have actual logos */}
                  {/* <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    fill
                    className={`object-contain transition-all duration-300 ${
                      hoveredIndex === index ? 'opacity-100 filter-none' : 'opacity-60 grayscale'
                    }`}
                  /> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">
            Op zoek naar een specifiek merk? Wij leveren en installeren alle A-merken!
          </p>
          <a 
            href="/merken" 
            className="text-orange-600 hover:text-orange-700 font-semibold inline-flex items-center gap-1 transition-colors"
          >
            Bekijk alle merken
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}