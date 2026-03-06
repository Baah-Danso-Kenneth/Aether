import Footer from '@/components/layouts/Footer'
import Navbar from '@/components/layouts/Navbar'
import React from 'react'

function page() {
  return (
    <main className='min-h-screen'>
      <Navbar/>
      <h1>homepage</h1>
      <Footer/>
    </main>
  )
}

export default page