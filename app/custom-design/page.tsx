import Navbar from '@/components/Navbar'
import Footer from '@/components/sections/Footer'
import ProcessFlow from '@/components/sections/ProcessFlow'
import React from 'react'

function Page() {
  return (
    <>
    <main className="pt-[95px]">
      <Navbar/>
      <ProcessFlow/>
      <Footer/>
    </main>
    </>
  )
}

export default Page