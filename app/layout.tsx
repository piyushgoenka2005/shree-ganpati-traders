import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import SplashCursor from '@/components/SplashCursor';
import { ThemeProvider } from '@/components/theme-provider';

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Ganpati Traders App',
  description: 'Visit Cards, Custom Bags, ID Cards, Brochures & Flyers, Banners & Signage, Stickers & Labels, Wedding Invitations, Custom Printing',
  generator: 'Ganpati Traders',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <SplashCursor />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
