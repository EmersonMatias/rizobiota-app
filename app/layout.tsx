import './globals.css'
import { Nunito_Sans, Gabarito } from 'next/font/google'
import { Metadata } from 'next'
import Script from 'next/script'

const nunito = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap'
})

const gabarito = Gabarito({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: '',
  description: '',
  // This is the base URL for the metadata, used for Open Graph and other social media tags
  metadataBase: new URL(''),
  openGraph: {
    type: 'website',
    title: '',
    description: '',
    // This is the URL of the page that will be shared on social media
    url: ''
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
    <html lang="pt-BR" className={(gabarito.className, nunito.className)}>
      <Script
        id="blackgenn-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
        }}
      />
      <head>
        <link rel="canonical" href="" key="canonical" />
        <meta property="og:image" content="" />
      </head>

      <body className={'antialiased'}>{children}</body>
    </html>
  )
}
