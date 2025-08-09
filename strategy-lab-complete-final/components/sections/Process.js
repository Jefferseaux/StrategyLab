export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Research & Discovery",
      description: "We start by studying YOUR specific market conditions, customer behavior patterns, and competitive landscape. No assumptions—just data-driven insights that reveal exactly where your opportunities lie."
    },
    {
      number: "02",
      title: "Strategic Planning",
      description: "Using our research findings, we develop a scientific approach tailored to YOUR business. Every decision is backed by data, every strategy is designed around proven methodologies that work for your industry."
    },
    {
      number: "03",
      title: "Systematic Implementation",
      description: "We execute your personalized plan with scientific precision. Every piece of content, every campaign, every interaction is measured and monitored to ensure we're moving toward your specific goals."
    },
    {
      number: "04",
      title: "Continuous Optimization",
      description: "We analyze performance data to identify what's working and what needs adjustment. This scientific approach to optimization ensures YOUR marketing investment delivers maximum ROI and sustainable growth."
    }
  ]

  return (
    <section id="process" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
            How We Work: Our Scientific Methodology
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Every successful campaign starts with a proven process. Here's exactly how we apply 
            scientific principles to transform your marketing results.
          </p>
        </div>

        <div className="space-y-10">
          {steps.map((step, index) => (
            <div key={index} className="grid md:grid-cols-[100px_1fr] gap-8 items-start">
              <div className="w-20 h-20 bg-strategy-navy rounded-full flex items-center justify-center text-white text-2xl font-extrabold shadow-lg mx-auto md:mx-0">
                {step.number}
              </div>
              <div className="bg-white p-10 rounded-3xl shadow-xl border-2 border-gray-100 hover:border-strategy-navy transition-all hover:-translate-y-1">
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}