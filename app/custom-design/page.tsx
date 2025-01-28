import Navbar from '@/components/Navbar'
import Footer from '@/components/sections/Footer'
import ProcessFlow from '@/components/sections/ProcessFlow'
import React from 'react'

function Page() {
  return (
    <>
    <Navbar/>
    <main className="pt-[95px]">
      <ProcessFlow/>
    </main>
    <Footer/>
    </>
  )
}

export default Page