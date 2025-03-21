// Removed "use client" directive for static export compatibility
import { WhyAircoTable } from "./WhyAircoTable";
import { AircoTypesTable } from "./AircoTypesTable";
import { AircoFactorsTable } from "./AircoFactorsTable";
import { AircoImage } from "./AircoImage";
import { SplitAircoDiagram } from "./SplitAircoDiagram";
import { AircoFAQ } from "./AircoFAQ";
import { AircoTableOfContents } from "./AircoTableOfContents";
import { RelatedArticles } from "@/components/sections/related-articles";

export function AircoKopenContent() {
  const relatedArticles = [
    {
      title: "De 7 Belangrijkste Voordelen van een Airconditioning",
      description: "Ontdek waarom een airconditioning meer is dan alleen koeling",
      slug: "voordelen-van-airconditioning"
    },
    {
      title: "Onderhoudstips voor Optimale Prestaties",
      description: "Essentiële tips voor het onderhoud van uw airconditioning",
      slug: "onderhoud-tips"
    },
    {
      title: "SCOP en SEER Waarden Uitgelegd",
      description: "Alles over de energie-efficiëntie van airconditioners",
      slug: "scop-seer-waarden"
    }
  ];

  return (
    <>
      {/* Structured data is now added directly to the page component */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <aside className="lg:w-1/4">
          <AircoTableOfContents />
        </aside>
        
        {/* Main Content */}
        <article className="prose max-w-none lg:w-3/4">
          <section className="mb-8">
            <p className="mb-6 text-lg font-medium leading-relaxed text-blue-700">
              In de zomermaanden kan de temperatuur in Nederland flink oplopen, wat het soms oncomfortabel maakt om thuis of op kantoor te verblijven. 
              Een <a href="/kennisbank/hoe-werkt-airco" className="text-blue-600 hover:text-blue-800 font-medium underline decoration-blue-300 underline-offset-2">airco</a> biedt de perfecte oplossing om je ruimte koel en aangenaam te houden. 
              Maar waar moet je op letten als je een airco wilt kopen? In dit blogbericht ontdek je alles wat je moet weten over het kopen van een airco.
            </p>
          </section>

          <section id="waarom-een-airco" className="mb-10">
            <h2 className="text-2xl font-semibold mt-8 mb-4">Waarom een Airco?</h2>
            <p className="mb-4">
              Hieronder een overzicht van de redenen om een airco aan te schaffen:
            </p>
            <WhyAircoTable />
          </section>

          <section id="types-van-aircos" className="mb-10">
            <h2 className="text-2xl font-semibold mt-10 mb-4">Types van Airco's</h2>
            <p className="mb-6">
              Er zijn drie hoofdtypen airco's waaruit je kunt kiezen: <a href="/kennisbank/soorten-airco" className="text-blue-600 hover:text-blue-800 font-medium underline decoration-blue-300 underline-offset-2">split airco's</a>, monoblock airco's en mobiele airco's. 
              Elk type heeft zijn eigen voor- en nadelen, afhankelijk van je situatie en behoeften.
            </p>

            <div id="vergelijking-airco-types" className="mt-8">
              <h3 className="text-xl font-semibold mt-6 mb-4">Vergelijking van Airco Types</h3>
              <p className="mb-4">
                Om je te helpen kiezen, hier een tabel met de voor- en nadelen van elk type airco:
              </p>
              <AircoTypesTable />
            </div>
          </section>

          <section id="factoren-om-te-overwegen" className="mb-10">
            <h2 className="text-2xl font-semibold mt-10 mb-4">Factoren om te Overwegen</h2>
            <p className="mb-6">
              Bij het kopen van een airco zijn er een aantal belangrijke aspecten om rekening mee te houden, 
              zoals ruimtegrootte, <a href="/kennisbank/scop-seer-waarden" className="text-blue-600 hover:text-blue-800 font-medium underline decoration-blue-300 underline-offset-2">energie-efficiëntie</a> en geluidsniveau. Laten we deze factoren verder verkennen.
            </p>

            <div id="airco-in-woonkamer" className="mt-8">
              <h3 className="text-xl font-semibold mt-6 mb-4">Airco in een Woonkamer</h3>
              <p className="mb-4">
                Hieronder een voorbeeld van hoe een split airco eruit kan zien in een woonkamer:
              </p>
              <AircoImage />
            </div>
          </section>

          <section id="tips-voor-kiezen" className="mb-10">
            <h2 className="text-2xl font-semibold mt-10 mb-4">Tips voor het Kiezen van de Juiste Airco</h2>
            <p className="mb-6">
              Met zoveel opties kan het lastig zijn om de juiste airco te kiezen. Hier zijn enkele praktische tips: 
              meet je ruimte zorgvuldig, lees reviews en <a href="/contact" className="text-blue-600 hover:text-blue-800 font-medium underline decoration-blue-300 underline-offset-2">vraag eventueel advies aan experts</a>.
            </p>

            <div id="belangrijke-factoren" className="mt-8">
              <h3 className="text-xl font-semibold mt-6 mb-4">Belangrijke Factoren</h3>
              <p className="mb-4">
                Hier een overzicht van de factoren om te overwegen bij het kiezen van een airco:
              </p>
              <AircoFactorsTable />
            </div>
          </section>
          
          <section id="veelgestelde-vragen" className="mb-10">
            <h2 className="text-2xl font-semibold mt-10 mb-4">Veelgestelde Vragen</h2>
            <p className="mb-6">
              Hieronder vind je antwoorden op de meest gestelde vragen over airconditioning:
            </p>
            <AircoFAQ />
          </section>

          <section id="conclusie" className="mb-10">
            <h2 className="text-2xl font-semibold mt-10 mb-4">Conclusie</h2>
            <p className="mb-6">
              Het kopen van een airco vraagt om aandacht voor het type, de grootte en de energie-efficiëntie. 
              Met de juiste keuze geniet je de hele zomer van een koele en comfortabele ruimte. Wil je direct een passende airco voor jouw situatie? <a href="/offerte" className="text-blue-600 hover:text-blue-800 font-medium underline decoration-blue-300 underline-offset-2">Vraag een vrijblijvende offerte aan</a> bij onze specialisten.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4">Diagram van een Split Airco</h3>
            <p className="mb-4">
              Tot slot, een diagram om te laten zien hoe een split airco werkt:
            </p>
            <SplitAircoDiagram />
          </section>

          <section className="mt-16 pt-10 border-t border-blue-100">
            <h2 className="text-2xl font-semibold mb-8">Gerelateerde Artikelen</h2>
            <RelatedArticles articles={relatedArticles} type="blog" />
          </section>
        </article>
      </div>
    </>
  );
}
