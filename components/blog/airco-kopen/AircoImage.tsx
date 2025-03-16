import Image from "next/image";

export function AircoImage() {
  return (
    <div className="my-12 max-w-3xl mx-auto">
      <div className="relative overflow-hidden rounded-xl shadow-2xl">
        {/* Decorative elements */}
        <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500 rounded-full opacity-20"></div>
        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-cyan-400 rounded-full opacity-30"></div>
        
        {/* Image container with gradient border */}
        <div className="relative p-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl overflow-hidden">
          <Image
            src="https://staycoolairco.nl/images/products/Daiseikai%2010-Hout-vooraanzicht_2_11zon.webp"
            alt="Toshiba Daiseikai 10 split airco unit in moderne woonkamer"
            width={800}
            height={600}
            className="rounded-lg"
          />
          
          {/* Overlay with text */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent flex items-end">
            <div className="p-6 w-full">
              <h4 className="text-white text-xl font-bold">Split Airco in Moderne Woonkamer</h4>
              <p className="text-blue-100 mt-2">
                De onopvallende binnendeel zorgt voor een stijlvolle integratie in elk interieur
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Afbeelding: Moderne split-unit airconditioning
        </span>
      </div>
    </div>
  );
}
