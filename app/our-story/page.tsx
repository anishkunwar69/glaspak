import EndContent from '@/components/EndContent'
import Navbar from '@/components/Navbar'
import AboutUs2 from '@/components/sections/AboutUs2'
import Footer from '@/components/sections/Footer'
import OurStrengths from '@/components/sections/OurStrengths'
import Tests from '@/components/sections/Tests'
import React from 'react'

function page() {
  return (
    <>
    <Navbar />
    <main className="pt-[95px]">
      <AboutUs2/>
      <OurStrengths/>
      <Tests/>
      <div className="relative bg-[#EDE5DB] pb-[73px]">
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          {/* Layered gradient sphere */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                       w-[120vw] max-w-[1800px] aspect-square rounded-full 
                       bg-gradient-to-br from-[#7BAF7B]/20 via-[#A8D9AC]/15 to-[#44875A]/20 
                       blur-3xl animate-slow-pulse" />
          
          {/* Intersecting circles pattern */}
          <div className="absolute inset-0 opacity-[0.07]"
               style={{
                 backgroundImage: `radial-gradient(circle at center, #7BAF7B 0.5px, transparent 0.5px), 
                                 radial-gradient(circle at center, #44875A 0.5px, transparent 0.5px)`,
                 backgroundSize: '38px 38px, 34px 34px',
                 backgroundPosition: '0 0, 17px 17px'
               }} />

          {/* Elegant wave pattern */}
          <div className="absolute inset-0 opacity-[0.04]"
               style={{
                 backgroundImage: `repeating-linear-gradient(
                   -45deg,
                   #7BAF7B 1px,
                   transparent 1px,
                   transparent 12px
                 )`,
                 backgroundSize: '30px 30px'
               }} />

          {/* Floating geometric shapes */}
          <div className="absolute top-[10%] left-[15%] w-48 h-48 
                         border-2 border-[#7BAF7B]/20 rounded-3xl
                         transform rotate-12 animate-float-slow" />
          <div className="absolute bottom-[15%] right-[10%] w-40 h-40 
                         border-2 border-[#44875A]/15 rounded-full
                         transform -rotate-12 animate-float-slower" />

          {/* Subtle gradient mesh */}
          <div className="absolute inset-0 opacity-[0.1]"
               style={{
                 backgroundImage: `radial-gradient(#7BAF7B 1px, transparent 1px), 
                                 radial-gradient(#44875A 1px, transparent 1px)`,
                 backgroundSize: '50px 50px, 40px 40px',
                 backgroundPosition: '0 0, 25px 25px'
               }} />

          {/* Premium grain overlay */}
          <div className="absolute inset-0 opacity-[0.2] mix-blend-overlay"
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                 backgroundSize: '150px 150px'
               }} />
        </div>
        <EndContent showSeparator={false} bgColor="#E5DED4"/>
      </div>
    </main>
    <Footer/>
    </>
  )
}

export default page