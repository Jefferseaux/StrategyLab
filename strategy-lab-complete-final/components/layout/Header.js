'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg' : 'bg-white/90 backdrop-blur-lg'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <Image 
              src="/SVGWebsiteHeader.svg" 
              alt="Strategy Lab" 
              width={200} 
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>
          
          <ul className="hidden md:flex items-center gap-8">
            <li><Link href="#hero" className="text-gray-700 hover:text-strategy-gold font-medium transition-colors">Home</Link></li>
            <li><Link href="#about" className="text-gray-700 hover:text-strategy-gold font-medium transition-colors">About</Link></li>
            <li><Link href="#process" className="text-gray-700 hover:text-strategy-gold font-medium transition-colors">Process</Link></li>
            <li><Link href="#solutions" className="text-gray-700 hover:text-strategy-gold font-medium transition-colors">Solutions</Link></li>
            <li><Link href="#insights" className="text-gray-700 hover:text-strategy-gold font-medium transition-colors">Insights</Link></li>
            <li><Link href="#contact" className="text-gray-700 hover:text-strategy-gold font-medium transition-colors">Contact</Link></li>
            <li><Link href="#contact" className="btn btn-gradient">Get Started</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}