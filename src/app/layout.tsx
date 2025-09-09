import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700']
})

const poppins = Poppins({ 
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['600', '700']
})

export const metadata: Metadata = {
  title: {
    default: 'PQD Informática - Soluções em TI',
    template: '%s | PQD Informática'
  },
  description: 'PQD Informática oferece soluções completas em tecnologia da informação, cursos especializados e produtos inovadores para empresas e profissionais.',
  keywords: ['PQD Informática', 'TI', 'tecnologia', 'cursos', 'produtos', 'serviços', 'informática'],
  authors: [{ name: 'PQD Informática' }],
  creator: 'PQD Informática',
  publisher: 'PQD Informática',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://pqdinformatica.com.br'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://pqdinformatica.com.br',
    title: 'PQD Informática - Soluções em TI',
    description: 'Soluções completas em tecnologia da informação, cursos especializados e produtos inovadores.',
    siteName: 'PQD Informática',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PQD Informática - Soluções em TI',
    description: 'Soluções completas em tecnologia da informação, cursos especializados e produtos inovadores.',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}