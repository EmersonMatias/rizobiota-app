import './globals.css'
import { Nunito_Sans, Gabarito } from 'next/font/google'
import { Metadata } from 'next'
import Script from 'next/script'
import Header from '@/components/sections/header'
import Footer from '@/components/sections/footer'

const nunito = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
  display: 'swap'
})

const gabarito = Gabarito({
  subsets: ['latin'],
  variable: '--font-gabarito',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Rizobiota',
  description: '',
  // This is the base URL for the metadata, used for Open Graph and other social media tags
  metadataBase: new URL('https://voluble-sopapillas-8116ab.netlify.app/'),
  openGraph: {
    type: 'website',
    title: 'Rizobiota',
    description: '',
    // This is the URL of the page that will be shared on social media
    url: 'https://voluble-sopapillas-8116ab.netlify.app/'
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  description: '',
  author: {
    '@type': 'Organization',
    name: '',
    url: ''
  },
  datePublished: '',
  dateModified: ''
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${nunito.variable} ${gabarito.variable}`}>
      <Script
        id="blackgenn-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
        }}
      />
      <head>
        <link
          rel="canonical"
          href="https://voluble-sopapillas-8116ab.netlify.app/"
          key="canonical"
        />
        <meta
          property="og:image"
          content="https://opengraph.b-cdn.net/production/images/a5268a56-5b3f-4e7f-9c47-467290bfa4ae.png?token=HV99uhsHiLmObJsmdUW7IcA5h_cVVdQ1J7wCy-hu9Qc&height=590&width=1200&expires=33286877763"
        />
      </head>

      <body className={'antialiased'}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
