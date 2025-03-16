"use client";

import { WhyAircoTable } from "./WhyAircoTable";
import { AircoTypesTable } from "./AircoTypesTable";
import { AircoFactorsTable } from "./AircoFactorsTable";
import { AircoImage } from "./AircoImage";
import { SplitAircoDiagram } from "./SplitAircoDiagram";
import { AircoFAQ } from "./AircoFAQ";
import { AircoTableOfContents } from "./AircoTableOfContents";
import { RelatedArticles } from "@/components/sections/related-articles";
import Script from "next/script";

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

  // FAQs for schema markup
  const aircoFAQs = [
    {
      question: "Wat kost een airco inclusief installatie?",
      answer: "De kosten variëren per type: Mobiele airco (€300-€800), Monoblock (€700-€1.500 + €200-€400 installatie), Split airco (€1.000-€2.500 + €400-€800 installatie), Multi-split (€2.500-€5.000+ + €800-€1.500 installatie)."
    },
    {
      question: "Hoeveel stroom verbruikt een airco?",
      answer: "Een 2,5kW split airco met SEER 8.5 verbruikt ongeveer 0,3 kWh per uur. Bij €0,25/kWh kost dit €0,08 per uur. Bij 6 uur per dag gedurende 3 zomermaanden komt dit op ongeveer €43."
    },
    {
      question: "Heb ik toestemming nodig voor het installeren van een airco?",
      answer: "In een koopwoning is voor de binnenunit geen vergunning nodig, voor de buitenunit gelden gemeentelijke regels. Bij huurwoningen is toestemming van de verhuurder vereist, bij VvE's is toestemming van de VvE nodig."
    },
    {
      question: "Kan ik ook verwarmen met een airco?",
      answer: "Ja, moderne split airco's zijn warmtepompen die ook kunnen verwarmen. Ze werken efficiënt tot buitentemperaturen van -15°C en zijn 3-5x efficiënter dan traditionele elektrische verwarming."
    },
    {
      question: "Hoe lang gaat een airco mee?",
      answer: "De levensduur varieert per type: Split airco (10-15 jaar bij goed onderhoud), Monoblock airco (8-12 jaar), Mobiele airco (5-10 jaar). Regelmatig onderhoud verlengt de levensduur aanzienlijk."
    }
  ];

  return (
    <>
      {/* JSON-LD Schema for Article and FAQ */}
      <Script id="schema-airco-kopen" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "headline": "Waarom een Airco Kopen? Complete Gids [2025]",
          "description": "Ontdek alles over het kopen van een airco: types, kosten, energiebesparing en installatietips. Expert advies voor de beste airco keuze voor jouw ruimte.",
          "image": "https://staycoolairco.nl/images/products/Daiseikai%2010-Hout-vooraanzicht_2_11zon.webp",
          "datePublished": "2025-03-16",
          "dateModified": "2025-03-16",
          "author": {
            "@type": "Organization",
            "name": "StayCool Airco Sittard"
          },
          "publisher": {
            "@type": "Organization",
            "name": "StayCool Airco Sittard",
            "logo": {
              "@type": "ImageObject",
              "url": "https://aircoinstallatiesittard.nl/logo.png"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://aircoinstallatiesittard.nl/blog/waarom-een-airco-kopen"
          }
        })
      }} />
      
      <Script id="schema-airco-faq" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": aircoFAQs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })
      }} />

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
