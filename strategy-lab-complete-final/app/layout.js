import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Strategy Lab - Data-Driven Marketing Agency | Nationwide Business Growth',
  description: 'Premier data-driven marketing agency serving businesses nationwide. Scientific marketing strategies, social media management, SEO, PPC, and digital growth solutions. Based in Baton Rouge, Louisiana. Free consultation.',
  openGraph: {
    title: 'Strategy Lab - Data-Driven Marketing Agency',
    description: 'Putting the Science in Marketing. Data-driven strategies that deliver measurable results.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}