import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { siteConfig } from "@/lib/site-config"
import { structuredData } from "@/lib/structured-data"
import { FloatingActions } from "@/components/floating-actions"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://protfolio-master.vercel.app'),
  title: {
    default: `Yugal Jakasaniya - Full Stack Developer | Portfolio`,
    template: `%s | Yugal Jakasaniya`
  },
  description: `Yugal Jakasaniya - Full Stack Developer specializing in MERN/MEAN stack. Expert in React, Next.js, Node.js, MongoDB. Based in Rajkot, Gujarat, India. View portfolio, projects, and contact information.`,
  keywords: [
    'Yugal Jakasaniya',
    'Yugal Jakasaniya Portfolio',
    'Yugal Jakasaniya Developer',
    'Yugal Jakasaniya Full Stack',
    'Full Stack Developer Rajkot',
    'Web Developer Gujarat',
    'MERN Stack Developer India',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'JavaScript Developer',
    'TypeScript Developer',
    'Portfolio Yugal',
    'Yugal Developer',
    'Jakasaniya Portfolio'
  ],
  authors: [{ name: 'Yugal Jakasaniya', url: 'https://protfolio-master.vercel.app' }],
  creator: 'Yugal Jakasaniya',
  publisher: 'Yugal Jakasaniya',
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
  generator: "v0.app",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://protfolio-master.vercel.app',
    title: 'Yugal Jakasaniya - Full Stack Developer Portfolio',
    description: 'Yugal Jakasaniya - Full Stack Developer specializing in MERN/MEAN stack. Expert in React, Next.js, Node.js, MongoDB. Based in Rajkot, Gujarat, India.',
    siteName: 'Yugal Jakasaniya Portfolio',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Yugal Jakasaniya - Full Stack Developer Portfolio'
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Yugal Jakasaniya - Full Stack Developer',
    description: 'Full Stack Developer specializing in MERN/MEAN stack. React, Next.js, Node.js, MongoDB expert.',
    creator: '@yugaljakasaniya',
    images: ['/og-image.png'],
  },
  verification: {
    google: 'your-google-verification-code', // Add after Google Search Console setup
  },
  alternates: {
    canonical: 'https://protfolio-master.vercel.app',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark overflow-x-hidden" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'dark';
                  document.documentElement.classList.add(theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`font-sans antialiased bg-background text-foreground overflow-x-hidden`}>
        {children}
        <FloatingActions />
        <Analytics />
      </body>
    </html>
  )
}