import HeroSection from '@/components/home/HeroSection'
import PhilosophySection from '@/components/home/PhilosophySection'
import VibeSection from '@/components/home/VibeSection'
import Footer from '@/components/layouts/Footer'
import Navbar from '@/components/layouts/Navbar'
import React from 'react'

function page() {
  return (
    <main className='min-h-screen'>
      <Navbar/>
      <HeroSection/>
      <PhilosophySection/>
      <VibeSection/>
      <Footer/>
    </main>
  )
}

export default page