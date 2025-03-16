export function AircoFactorsTable() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 p-1">
        <div className="absolute inset-0 bg-white/10 rounded-lg"></div>
        <div className="bg-white p-6 rounded-lg h-full flex flex-col">
          <div className="h-14 w-14 mb-4 rounded-full bg-gradient-to-r from-teal-400 to-emerald-500 flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-teal-800 mb-2">Ruimtegrootte</h3>
          <p className="text-teal-700 flex-grow">Meet de ruimte (L x B x H in m³) om de juiste capaciteit te bepalen.</p>
          <div className="mt-4 pt-4 border-t border-teal-100">
            <p className="text-sm text-teal-600 font-medium">TIP: 25-35m³ = ~2.5kW</p>
          </div>
        </div>
      </div>
      
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 p-1">
        <div className="absolute inset-0 bg-white/10 rounded-lg"></div>
        <div className="bg-white p-6 rounded-lg h-full flex flex-col">
          <div className="h-14 w-14 mb-4 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-amber-800 mb-2">Energie-efficiëntie</h3>
          <p className="text-amber-700 flex-grow">Kies een model met een hoog energielabel (A+++) voor lagere gebruikskosten.</p>
          <div className="mt-4 pt-4 border-t border-amber-100">
            <p className="text-sm text-amber-600 font-medium">TIP: Let op SCOP & SEER waarden</p>
          </div>
        </div>
      </div>
      
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 p-1">
        <div className="absolute inset-0 bg-white/10 rounded-lg"></div>
        <div className="bg-white p-6 rounded-lg h-full flex flex-col">
          <div className="h-14 w-14 mb-4 rounded-full bg-gradient-to-r from-purple-400 to-violet-500 flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m5.656-5.656a1 1 0 10-1.414 1.414 1 1 0 001.414-1.414z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-purple-800 mb-2">Geluidsniveau</h3>
          <p className="text-purple-700 flex-grow">Kies een stille airco voor slaapkamers (bijv. split airco met lager decibel niveau).</p>
          <div className="mt-4 pt-4 border-t border-purple-100">
            <p className="text-sm text-purple-600 font-medium">TIP: &lt;30dB voor slaapkamers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
