import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LanguageProvider } from '@/contexts/LanguageContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EVIMO - Secure Digital Ticketing Platform',
  description: 'EVIMO revolutionizes event ticketing with encrypted QR codes that eliminate fraud and ensure authentic experiences for organizers and attendees.',
  keywords: 'digital ticketing, event security, QR codes, fraud prevention, event management, secure tickets',
  authors: [{ name: 'EVIMO Team' }],
  creator: 'EVIMO',
  publisher: 'EVIMO',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://evimo.app',
    siteName: 'EVIMO',
    title: 'EVIMO - Secure Digital Ticketing Platform',
    description: 'Revolutionary secure digital ticketing with encrypted QR codes. Eliminate fraud and protect your events.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'EVIMO Secure Digital Ticketing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EVIMO - Secure Digital Ticketing Platform',
    description: 'Revolutionary secure digital ticketing with encrypted QR codes. Eliminate fraud and protect your events.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "EVIMO",
              "description": "Secure digital ticketing platform with encrypted QR codes",
              "applicationCategory": "Event Management",
              "operatingSystem": "iOS, Android, Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/ComingSoon"
              },
              "publisher": {
                "@type": "Organization",
                "name": "EVIMO",
                "url": "https://evimo.app"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}