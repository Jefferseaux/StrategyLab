import dynamic from 'next/dynamic'

// Server-safe components
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Process from '@/components/sections/Process'
import Solutions from '@/components/sections/Solutions'
import Insights from '@/components/sections/Insights'

// Dynamically load Client Components to avoid SSR issues
const Contact = dynamic(() => import('@/components/sections/Contact'), { ssr: false })

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Process />
      <Solutions />
      <Insights />
      <Contact />
    </>
  )
}
