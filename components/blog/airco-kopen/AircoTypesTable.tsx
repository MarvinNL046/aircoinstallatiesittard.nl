"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function AircoTypesTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-indigo-200 shadow-lg my-8 bg-gradient-to-br from-white to-indigo-50">
      <div className="px-6 pt-6 pb-4">
        <h3 className="text-lg font-bold text-indigo-800 mb-2">Vergelijking van Airco Types</h3>
        <p className="text-indigo-600 text-sm">Elk type airco heeft zijn eigen unieke eigenschappen</p>
      </div>
      
      <Table className="min-w-full">
        <TableHeader>
          <TableRow className="bg-gradient-to-r from-indigo-600 to-purple-500">
            <TableHead className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">Type</TableHead>
            <TableHead className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Voordelen
              </div>
            </TableHead>
            <TableHead className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Nadelen
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="hover:bg-indigo-100 transition-colors">
            <TableCell className="px-6 py-4">
              <div className="flex flex-col">
                <span className="font-bold text-indigo-700">Split airco</span>
                <span className="text-xs text-indigo-500 mt-1">Meest populair</span>
              </div>
            </TableCell>
            <TableCell className="px-6 py-4">
              <ul className="list-disc list-inside text-green-700 space-y-1">
                <li>Hoog rendement</li>
                <li>Zeer stil</li>
                <li>Geschikt voor grotere ruimtes</li>
              </ul>
            </TableCell>
            <TableCell className="px-6 py-4">
              <ul className="list-disc list-inside text-red-600 space-y-1">
                <li>Vereist professionele installatie</li>
                <li>Hogere aanschafprijs</li>
              </ul>
            </TableCell>
          </TableRow>
          <TableRow className="bg-indigo-50 hover:bg-indigo-100 transition-colors">
            <TableCell className="px-6 py-4">
              <div className="flex flex-col">
                <span className="font-bold text-indigo-700">Monoblock airco</span>
                <span className="text-xs text-indigo-500 mt-1">Middenklasse</span>
              </div>
            </TableCell>
            <TableCell className="px-6 py-4">
              <ul className="list-disc list-inside text-green-700 space-y-1">
                <li>Geen buitenunit</li>
                <li>Eenvoudiger te installeren</li>
              </ul>
            </TableCell>
            <TableCell className="px-6 py-4">
              <ul className="list-disc list-inside text-red-600 space-y-1">
                <li>Lager rendement</li>
                <li>Kan luidruchtiger zijn</li>
              </ul>
            </TableCell>
          </TableRow>
          <TableRow className="hover:bg-indigo-100 transition-colors">
            <TableCell className="px-6 py-4">
              <div className="flex flex-col">
                <span className="font-bold text-indigo-700">Mobiele airco</span>
                <span className="text-xs text-indigo-500 mt-1">Budget optie</span>
              </div>
            </TableCell>
            <TableCell className="px-6 py-4">
              <ul className="list-disc list-inside text-green-700 space-y-1">
                <li>Draagbaar</li>
                <li>Geen installatie nodig</li>
                <li>Voordelige prijs</li>
              </ul>
            </TableCell>
            <TableCell className="px-6 py-4">
              <ul className="list-disc list-inside text-red-600 space-y-1">
                <li>Minder krachtig</li>
                <li>Niet geschikt voor grote ruimtes</li>
                <li>Minder energiezuinig</li>
              </ul>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="px-6 py-4 bg-gradient-to-r from-indigo-100 to-purple-100">
        <p className="text-sm text-indigo-700 italic">Advies: Voor de meeste huishoudens biedt een split airco de beste balans tussen comfort en kosten.</p>
      </div>
    </div>
  );
}
