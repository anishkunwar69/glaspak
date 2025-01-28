import Navbar from '@/components/Navbar'
import ContactUs from '@/components/sections/ContactUs'
import Footer from '@/components/sections/Footer'
import React from 'react'

function page() {
  return (
    <div className="min-h-screen bg-[#EDE5DB]">
      <Navbar/>
      <div className="pt-8 sm:pt-12">
        <ContactUs/>
      </div>
      <Footer/>
    </div>
  )
}

export default page