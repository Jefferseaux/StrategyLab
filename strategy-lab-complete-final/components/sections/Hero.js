import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-strategy-navy text-white pt-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Putting the Science in Marketing
            </h1>
            <p className="text-xl font-semibold mb-4 opacity-90">
              Marketing Built on Science, Not Guesswork
            </p>
            <p className="text-lg mb-8 opacity-90 leading-relaxed">
              Strategy Lab helps businesses grow through data-driven marketing strategies and 
              social media management. In today's rapidly evolving digital landscape, the marketing 
              strategies that worked a decade ago are obsolete. We specialize in modern, 
              scientifically-backed approaches that adapt to current consumer behavior, platform 
              algorithms, and market dynamics. We don't guess—we research your market, implement 
              cutting-edge strategies, and optimize for measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#process" className="btn btn-secondary">See Our Process</Link>
              <Link href="#contact" className="btn btn-primary">Free Consultation</Link>
            </div>
          </div>
          
          <div>
            <div className="relative mb-8">
              <Image 
                src="/HeroImage.png" 
                alt="Strategy Lab team of scientists analyzing marketing data and performance metrics in a modern laboratory setting"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl w-full"
                priority
              />
            </div>
            
            <div className="grid grid-cols-2 gap-5">
              <div className="bg-white/15 backdrop-blur-md p-6 rounded-2xl text-center hover:-translate-y-1 transition-transform">
                <span className="block text-4xl font-extrabold mb-2">17+</span>
                <span className="text-sm opacity-80">Years Experience</span>
              </div>
              <div className="bg-white/15 backdrop-blur-md p-6 rounded-2xl text-center hover:-translate-y-1 transition-transform">
                <span className="block text-4xl font-extrabold mb-2">25+</span>
                <span className="text-sm opacity-80">Data Points Tracked</span>
              </div>
              <div className="bg-white/15 backdrop-blur-md p-6 rounded-2xl text-center hover:-translate-y-1 transition-transform">
                <span className="block text-4xl font-extrabold mb-2">100%</span>
                <span className="text-sm opacity-80">Transparent Reporting</span>
              </div>
              <div className="bg-white/15 backdrop-blur-md p-6 rounded-2xl text-center hover:-translate-y-1 transition-transform">
                <span className="block text-4xl font-extrabold mb-2">12+</span>
                <span className="text-sm opacity-80">Marketing Channels</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}