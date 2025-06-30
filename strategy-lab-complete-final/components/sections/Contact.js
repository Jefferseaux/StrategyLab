'use client'
import { useState } from 'react'
import { contactInfo } from '@/lib/constants'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Handle form submission
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    
    if (response.ok) {
      alert('Thank you for your interest! We\'ll get back to you within 24 hours.')
      setFormData({ name: '', email: '', company: '', message: '' })
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="section-padding bg-strategy-navy text-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Let's Discuss Your Marketing Goals
            </h2>
            <p className="text-lg mb-10 opacity-90 leading-relaxed">
              Ready to put science behind your marketing? Schedule a free consultation to discover 
              how data-driven strategies can transform your business results.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-strategy-gold rounded-full flex items-center justify-center text-xl">
                  📞
                </div>
                <span className="text-lg">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-strategy-gold rounded-full flex items-center justify-center text-xl">
                  📍
                </div>
                <span className="text-lg">{contactInfo.location}</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-semibold">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border-2 border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-strategy-gold transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-semibold">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border-2 border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-strategy-gold transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block mb-2 font-semibold">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border-2 border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-strategy-gold transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-semibold">Tell us about your marketing goals</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What marketing challenges are you facing?"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border-2 border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-strategy-gold transition-colors resize-y"
                />
              </div>
              
              <button type="submit" className="w-full btn btn-gradient py-4">
                Schedule Free Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}