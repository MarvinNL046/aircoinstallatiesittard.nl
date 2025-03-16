import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function WhyAircoTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-blue-200 shadow-md my-8">
      <Table className="min-w-full">
        <TableHeader>
          <TableRow className="bg-gradient-to-r from-blue-600 to-cyan-500">
            <TableHead className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">Reden</TableHead>
            <TableHead className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">Beschrijving</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="bg-gradient-to-r from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 transition-colors">
            <TableCell className="px-6 py-4 whitespace-nowrap font-medium text-blue-700">
              <div className="flex items-center">
                <div className="mr-3 p-2 bg-blue-500 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                Comfort
              </div>
            </TableCell>
            <TableCell className="px-6 py-4 text-blue-600">Houdt je ruimte koel en aangenaam, zelfs op de heetste dagen.</TableCell>
          </TableRow>
          <TableRow className="bg-white hover:bg-blue-50 transition-colors">
            <TableCell className="px-6 py-4 whitespace-nowrap font-medium text-blue-700">
              <div className="flex items-center">
                <div className="mr-3 p-2 bg-cyan-500 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                Productiviteit
              </div>
            </TableCell>
            <TableCell className="px-6 py-4 text-blue-600">Een koele omgeving verbetert focus en werkprestaties.</TableCell>
          </TableRow>
          <TableRow className="bg-gradient-to-r from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 transition-colors">
            <TableCell className="px-6 py-4 whitespace-nowrap font-medium text-blue-700">
              <div className="flex items-center">
                <div className="mr-3 p-2 bg-blue-500 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                Gezondheid
              </div>
            </TableCell>
            <TableCell className="px-6 py-4 text-blue-600">Vermindert hitte-gerelateerde klachten zoals uitdroging.</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
