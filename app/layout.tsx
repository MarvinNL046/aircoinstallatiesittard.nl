import { Inter } from "next/font/google"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
})

export const metadata = {
  metadataBase: new URL('https://aircoinstallatiesittard.nl'),
  title: {
    default: 'Airco Limburg | Airco Installateur Zuid-Limburg | StayCool ✓',
    template: '%s | Airco Specialist Limburg'
  },
  description: 'Airco Limburg - StayCool is dé airco specialist voor heel Limburg! ✓ Airco installatie Sittard, Maastricht, Heerlen ✓ Airco service Zuid-Limburg ✓ Mitsubishi & Daikin airco dealer ✓ Airco kopen en installeren. Bel: 046 202 1430',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/icon-192.png' },
    ],
  },
  keywords: [
    // Primaire Limburg zoektermen
    'airco limburg',
    'airco service limburg',
    'airco specialist limburg',
    'airco installateur limburg',
    'airco zuid limburg',
    'klimaatbeheersing limburg',
    
    // Steden specifiek
    'airco sittard',
    'airco maastricht',
    'airco heerlen',
    'airco roermond',
    'airco kerkrade',
    'airco brunssum',
    'airco geleen',
    'airco landgraaf',
    'airco parkstad',
    'airco voerendaal',
    'airco hoensbroek',
    
    // Installatie en service
    'professionele airco installatie',
    'airco installatie kosten',
    'split airco installatie',
    'multisplit airco sittard',
    'airco onderhoud sittard',
    'airco storing oplossen',
    'snelle airco service',
    
    // Producten en systemen
    'energiezuinige airco',
    'split airco systemen',
    'multi-split airconditioning',
    'stille airco installatie',
    'airco met verwarming',
    
    // Doelgroep specifiek
    'airco voor woning',
    'airco voor bedrijf',
    'airco voor slaapkamer',
    'beste airco voor thuis',
    
    // Commercieel Limburg
    'airco kopen limburg',
    'airco kopen en laten installeren limburg',
    'airco installatie limburg',
    'airco bedrijf limburg',
    'airco bedrijven limburg',
    'airco montage limburg',
    'airco onderhoud limburg',
    'airco limburg aanbieding',
    'profi airco',
    'airco direct geleen',
    
    // Merken specifiek
    'mitsubishi airco limburg',
    'daikin airco limburg',
    'airco kopen en laten installeren mitsubishi',
    
    // Service gebieden
    'aircoservice limburg',
    'aircospecialist limburg',
    'airco service sittard',
    'airco service geleen',
    'airco service voerendaal',
    'airco service achterhoek',
    'split airco brunssum',
    'airconditioning kerkrade',
    'airconditioning sittard',
    
    // Conversie gericht
    'airco plaatsen limburg',
    'air conditioning near me',
    'air conditioning installation near me',
    'airco offerte aanvragen',
    'airco laten plaatsen',
    
    // Seizoensgebonden
    'airco voor zomer en winter',
    'klimaatbeheersing',
    'duurzame koeling',
    'warmtepomp'
  ],
  authors: [{ name: 'StayCool Airco' }],
  creator: 'StayCool Airco',
  publisher: 'StayCool Airco',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: '/',
    siteName: 'StayCool Airco Sittard',
    title: 'Airco Installatie Sittard | StayCool Airco | Gratis Offerte Binnen 24 Uur ✓',
    description: 'Dé airco specialist in Sittard! ✓ Professionele installatie door StayCool Airco ✓ Erkend installateur ✓ Alle topmerken ✓ Binnen 24 uur reactie ✓ Beste prijs-kwaliteit',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'StayCool Airco Sittard - Professionele Airconditioning Services'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Airco Installatie Sittard | StayCool Airco | Gratis Offerte Binnen 24 Uur ✓',
    description: 'Dé airco specialist in Sittard! ✓ Professionele installatie door StayCool Airco ✓ Erkend installateur ✓ Alle topmerken ✓ Binnen 24 uur reactie',
    images: ['/opengraph-image'],
    creator: '@staycoolairco',
    site: '@staycoolairco'
  },
  alternates: {
    canonical: 'https://aircoinstallatiesittard.nl'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: ['F7ziqeuiZtQK3wDaKBZ65SgfDN61xAKq09v9PUpqQSY', 'MdrWkChgCAkLEzChgLv_KvDquI5UppXLSFI-WrxLS6E', 'YY44pWAORvVgaulbAKZ5k-zH0o_kjIXXNkTk1RkKah4'],
    yandex: 'verification_token',
    yahoo: 'verification_token',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="nl" 
      suppressHydrationWarning
      className="scroll-smooth antialiased"
    >
      <head>
        <meta name="google-site-verification" content="EQpJdpght562VGBvM8W5osmqUNSCOAKV1bFnvB9rCig" />
      </head>
      <body 
        className={`${inter.className} min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main id="main-content">{children}</main>
            <Footer />
          </div>
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  )
}
