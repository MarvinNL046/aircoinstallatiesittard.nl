// Modified for static export compatibility
// Using static HTML instead of interactive features

export function AircoTableOfContents() {
  // Static sections list instead of dynamic tracking
  const sections = [
    { id: "waarom-een-airco", title: "Waarom een Airco?", level: 2 },
    { id: "types-van-aircos", title: "Types van Airco's", level: 2 },
    { id: "vergelijking-airco-types", title: "Vergelijking van Airco Types", level: 3 },
    { id: "factoren-om-te-overwegen", title: "Factoren om te Overwegen", level: 2 },
    { id: "airco-in-woonkamer", title: "Airco in een Woonkamer", level: 3 },
    { id: "tips-voor-kiezen", title: "Tips voor het Kiezen", level: 2 },
    { id: "belangrijke-factoren", title: "Belangrijke Factoren", level: 3 },
    { id: "veelgestelde-vragen", title: "Veelgestelde Vragen", level: 2 },
    { id: "conclusie", title: "Conclusie", level: 2 },
  ];
  
  return (
    <div className="sticky top-24 bg-white p-5 rounded-xl border border-blue-100 shadow-sm mb-10 max-w-xs">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-blue-100">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <h3 className="font-semibold text-blue-800">Inhoud</h3>
      </div>
      
      <nav className="toc-nav">
        <ul className="space-y-2 text-sm">
          {sections.map((section) => (
            <li 
              key={section.id} 
              className={`${section.level === 3 ? 'ml-4' : ''}`}
            >
              <a 
                href={`#${section.id}`}
                className="block py-1 px-2 rounded transition-colors text-blue-600 hover:bg-blue-50"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="mt-6 pt-4 border-t border-blue-100">
        <a 
          href="/offerte" 
          className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-2 px-4 rounded-md hover:from-blue-700 hover:to-cyan-600 transition-colors font-medium text-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Offerte Aanvragen
        </a>
      </div>
    </div>
  );
}
