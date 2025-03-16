"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AircoFAQ() {
  return (
    <div className="my-12 rounded-xl border border-blue-200 overflow-hidden shadow-md">
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-6">
        <h2 className="text-2xl font-bold text-white">Veelgestelde Vragen</h2>
        <p className="text-blue-100 mt-2">
          Antwoorden op de meest voorkomende vragen over airconditioning
        </p>
      </div>
      
      <div className="bg-white p-6">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-b border-blue-100">
            <AccordionTrigger className="text-blue-800 hover:text-blue-600 py-4">
              Wat kost een airco inclusief installatie?
            </AccordionTrigger>
            <AccordionContent className="text-blue-700 pb-4">
              <p>
                De totale kosten variëren afhankelijk van het type airco en de complexiteit van de installatie:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><span className="font-medium">Mobiele airco:</span> €300 - €800 (geen installatiekosten)</li>
                <li><span className="font-medium">Monoblock airco:</span> €700 - €1.500 + €200 - €400 installatiekosten</li>
                <li><span className="font-medium">Split airco:</span> €1.000 - €2.500 + €400 - €800 installatiekosten</li>
                <li><span className="font-medium">Multi-split airco:</span> €2.500 - €5.000+ + €800 - €1.500 installatiekosten</li>
              </ul>
              <p className="mt-3">
                <a href="/offerte" className="text-blue-600 hover:underline font-medium">
                  Vraag een offerte aan
                </a>{" "}
                voor een exacte prijsopgave aangepast aan uw specifieke situatie.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border-b border-blue-100">
            <AccordionTrigger className="text-blue-800 hover:text-blue-600 py-4">
              Hoeveel stroom verbruikt een airco?
            </AccordionTrigger>
            <AccordionContent className="text-blue-700 pb-4">
              <p>
                Het stroomverbruik hangt af van het vermogen, de energie-efficiëntie (SEER/SCOP-waarde) en de gebruiksduur:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Een moderne 2,5kW split airco met een SEER van 8.5 verbruikt ongeveer 0,3 kWh per uur</li>
                <li>Bij een gemiddeld stroomtarief van €0,25 per kWh kost dit ongeveer €0,08 per uur</li>
                <li>Bij dagelijks gebruik van 6 uur gedurende 3 zomermaanden komt dit neer op ongeveer €43</li>
              </ul>
              <p className="mt-3">
                Energiezuinige modellen met een hoge SEER-waarde (A+++) kunnen het verbruik aanzienlijk verlagen.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className="border-b border-blue-100">
            <AccordionTrigger className="text-blue-800 hover:text-blue-600 py-4">
              Heb ik toestemming nodig voor het installeren van een airco?
            </AccordionTrigger>
            <AccordionContent className="text-blue-700 pb-4">
              <p>Dit hangt af van uw woonsituatie:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><span className="font-medium">Koopwoning:</span> Voor de binnendeel is geen vergunning nodig. Voor de buitenunit gelden gemeentelijke regels, check bij uw gemeente.</li>
                <li><span className="font-medium">Huurwoning:</span> Toestemming van de verhuurder is meestal vereist.</li>
                <li><span className="font-medium">VvE:</span> Toestemming van de Vereniging van Eigenaren is nodig, vooral voor de buitenunit.</li>
              </ul>
              <p className="mt-3">
                In sommige gemeenten is de installatie van een airco vergunningsvrij als de buitenunit aan de achterkant van het huis wordt geplaatst, maar dit verschilt per gemeente en situatie.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="border-b border-blue-100">
            <AccordionTrigger className="text-blue-800 hover:text-blue-600 py-4">
              Kan ik ook verwarmen met een airco?
            </AccordionTrigger>
            <AccordionContent className="text-blue-700 pb-4">
              <p>
                Ja, de meeste moderne split airco's zijn warmtepompen die ook kunnen verwarmen:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Ze werken als een omgekeerde koelkast: warmte van buiten wordt naar binnen gebracht</li>
                <li>Deze functie werkt efficiënt tot buitentemperaturen van ongeveer -15°C</li>
                <li>Het rendement (SCOP-waarde) is meestal 3-5x efficiënter dan traditionele elektrische verwarming</li>
                <li>Voor optimaal verwarmingscomfort is een airco met specifieke winterfunctie aan te raden</li>
              </ul>
              <p className="mt-3">
                <a href="/kennisbank/verwarmen-met-airco" className="text-blue-600 hover:underline font-medium">
                  Meer informatie over verwarmen met airco
                </a>
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-blue-800 hover:text-blue-600 py-4">
              Hoe lang gaat een airco mee?
            </AccordionTrigger>
            <AccordionContent className="text-blue-700 pb-4">
              <p>
                De levensduur van een airco wordt bepaald door meerdere factoren:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><span className="font-medium">Split airco:</span> 10-15 jaar bij goed onderhoud</li>
                <li><span className="font-medium">Monoblock airco:</span> 8-12 jaar</li>
                <li><span className="font-medium">Mobiele airco:</span> 5-10 jaar</li>
              </ul>
              <p className="mt-3">
                Regelmatig onderhoud zoals filter reinigen (elke 2-4 weken) en jaarlijkse professionele controle kan de levensduur aanzienlijk verlengen. Kwaliteitsmerken gaan over het algemeen langer mee dan goedkopere alternatieven.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
