import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-strategy-navy text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">Strategy Lab</h3>
            <p className="text-white/80 leading-relaxed">
              Putting the science in marketing through data-driven strategies that deliver 
              measurable results for businesses nationwide. Headquartered in Baton Rouge, Louisiana.
            </p>
          </div>
          
          <div>
            <h3 className="text-strategy-gold text-xl font-semibold mb-5">Pages</h3>
            <ul className="space-y-3">
              <li><Link href="#about" className="text-white/80 hover:text-strategy-gold transition-colors">About</Link></li>
              <li><Link href="#process" className="text-white/80 hover:text-strategy-gold transition-colors">Process</Link></li>
              <li><Link href="#solutions" className="text-white/80 hover:text-strategy-gold transition-colors">Solutions</Link></li>
              <li><Link href="#insights" className="text-white/80 hover:text-strategy-gold transition-colors">Insights</Link></li>
              <li><Link href="#contact" className="text-white/80 hover:text-strategy-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-strategy-gold text-xl font-semibold mb-5">Connect</h3>
            <ul className="space-y-3">
              <li><a href="https://www.linkedin.com/company/strategylabmarketing/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-strategy-gold transition-colors">LinkedIn</a></li>
              <li><a href="https://www.x.com/StrategyLabCo" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-strategy-gold transition-colors">X</a></li>
              <li><a href="https://www.instagram.com/strategylabmarketing" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-strategy-gold transition-colors">Instagram</a></li>
              <li><a href="https://www.facebook.com/strategylabmarketinggroup" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-strategy-gold transition-colors">Facebook</a></li>
              <li><a href="https://www.youtube.com/@strategylabmarketinggroup" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-strategy-gold transition-colors">YouTube</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/70">&copy; 2025 Strategy Lab Marketing Group LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}