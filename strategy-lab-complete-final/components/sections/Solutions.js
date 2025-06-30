export default function Solutions() {
  const services = [
    { icon: "🌐", title: "Website Development & Design", description: "Custom websites built for conversion and performance" },
    { icon: "📱", title: "Social Media Management", description: "Strategic social presence that builds your brand" },
    { icon: "✍️", title: "Content Creation", description: "Engaging content that connects with your audience" },
    { icon: "🎯", title: "Paid Advertising Campaigns", description: "Targeted ads that deliver measurable results" },
    { icon: "📧", title: "Email Marketing", description: "Automated email campaigns that nurture leads" },
    { icon: "🔍", title: "Search Engine Optimization", description: "Higher rankings that drive organic traffic" },
    { icon: "🚀", title: "Search Engine Marketing", description: "Paid search campaigns that capture intent" },
    { icon: "🎨", title: "Branding", description: "Brand identity that sets you apart" }
  ]

  return (
    <section id="solutions" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
            Comprehensive Marketing Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            From strategy to execution, we provide end-to-end marketing solutions tailored to your 
            business goals. Our scientific approach ensures every tactic works together for maximum impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="text-center p-8 rounded-3xl border-2 border-gray-200 hover:border-strategy-navy transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="w-20 h-20 bg-strategy-navy rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-strategy-navy mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <p className="text-lg text-gray-600 italic">
            <strong>And so much more...</strong> Every solution is tailored to your unique business 
            goals and market opportunities.
          </p>
        </div>

        <div className="bg-strategy-navy text-white rounded-3xl p-12 text-center max-w-5xl mx-auto">
          <h3 className="text-3xl font-extrabold mb-6">Not Sure What Your Business Needs?</h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Our scientific approach starts with understanding YOUR unique challenges and opportunities. 
            We'll analyze your current situation and recommend the exact strategies that will drive growth.
          </p>
          <a href="#contact" className="btn btn-primary text-lg px-8 py-4">
            Schedule Your Custom Strategy Session
          </a>
        </div>
      </div>
    </section>
  )
}