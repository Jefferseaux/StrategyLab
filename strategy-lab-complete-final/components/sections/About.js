export default function About() {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-strategy-light-gray to-strategy-gray">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-gray-900">Our Scientific Approach</h2>
            <p className="text-xl text-strategy-gold font-semibold mb-8">Where Experience Meets Innovation</p>
            
            <p className="text-xl leading-relaxed text-gray-700 font-medium mb-12">
              Strategy Lab was founded on a simple principle: marketing should be treated as applied science, 
              not guesswork. Our team brings over 17 years of experience from the high-stakes world of sports 
              media, where data-driven strategies and measurable results determine success.
            </p>
          </div>
          
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">From Sports Media to Strategic Marketing</h3>
            <p className="text-gray-600 leading-relaxed text-center max-w-4xl mx-auto mb-10">
              Our expertise was forged in the competitive arena of sports marketing, where our team built 
              multiple digital communities and scaled brands covering major universities across the college 
              sports landscape. This experience taught us that successful marketing isn't about creative 
              hunches—it's about systematic analysis and data-driven execution.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
              <div className="bg-white p-6 rounded-2xl text-center shadow-lg hover:-translate-y-1 transition-all border-2 border-gray-200 hover:border-strategy-navy">
                <div className="text-3xl font-extrabold text-strategy-navy mb-2">+75%</div>
                <div className="font-semibold text-gray-700 text-sm">Multi-brand social growth</div>
              </div>
              <div className="bg-white p-6 rounded-2xl text-center shadow-lg hover:-translate-y-1 transition-all border-2 border-gray-200 hover:border-strategy-navy">
                <div className="text-3xl font-extrabold text-strategy-navy mb-2">1,050+</div>
                <div className="font-semibold text-gray-700 text-sm">Average community size achieved</div>
              </div>
              <div className="bg-white p-6 rounded-2xl text-center shadow-lg hover:-translate-y-1 transition-all border-2 border-gray-200 hover:border-strategy-navy">
                <div className="text-3xl font-extrabold text-strategy-navy mb-2">+500%</div>
                <div className="font-semibold text-gray-700 text-sm">Video channel growth</div>
              </div>
            </div>
            
            <div className="bg-strategy-navy text-white p-10 rounded-3xl max-w-4xl mx-auto text-center mb-12">
              <blockquote className="text-2xl italic leading-relaxed">
                "Whether we realize it or not, marketing is all about science. The numbers and data 
                show us what works and where to focus our efforts."
              </blockquote>
            </div>
          </div>
          
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold mb-6">Why Small Businesses Matter</h3>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-600 leading-relaxed mb-5">
                Small and midsize companies are the heart of this country. They're not just numbers in 
                a portfolio—they're dreams, families, and communities. While big agencies treat clients 
                like account numbers, Strategy Lab treats every business like family.
              </p>
              <p className="text-gray-700 leading-relaxed font-semibold">
                You deserve more than being lost in the shuffle. You deserve a partner who genuinely 
                cares about your success, responds to your calls, and applies championship-level 
                strategy to your unique challenges.
              </p>
            </div>
          </div>

          <div className="bg-strategy-navy text-white rounded-3xl p-12 text-center">
            <h4 className="text-3xl font-bold mb-6 text-strategy-gold">Our Philosophy</h4>
            <p className="text-xl italic leading-relaxed mb-10">
              "Every small business has championship potential. Our job is to provide the scientific 
              strategy and personal attention needed to unlock it."
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-5xl mb-4">🔬</div>
                <div className="font-semibold text-strategy-gold mb-2 text-lg">Science-Based</div>
                <div className="text-sm text-white/80">Data drives every decision</div>
              </div>
              <div>
                <div className="text-5xl mb-4">🚀</div>
                <div className="font-semibold text-strategy-gold mb-2 text-lg">Modern Strategies</div>
                <div className="text-sm text-white/80">Current tactics, not outdated methods</div>
              </div>
              <div>
                <div className="text-5xl mb-4">👥</div>
                <div className="font-semibold text-strategy-gold mb-2 text-lg">Family First</div>
                <div className="text-sm text-white/80">Personal relationships matter</div>
              </div>
              <div>
                <div className="text-5xl mb-4">📈</div>
                <div className="font-semibold text-strategy-gold mb-2 text-lg">Results Focused</div>
                <div className="text-sm text-white/80">Measurable growth guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}