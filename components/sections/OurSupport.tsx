// OurSupport.tsx
'use client'
import React, { memo } from 'react'
import dynamic from 'next/dynamic'
import { useInView } from 'react-intersection-observer'
import Container from '../Container'

const OurSupportContent = dynamic(() => import('../OurSupportContent'), {
  ssr: true,
  loading: () => (
    <div className="animate-pulse bg-[#F5E6D3]/20 min-h-[600px] rounded-[26px]"
         role="progressbar"
         aria-label="Loading support content" />
  )
})

const BackgroundEffects = memo(() => (
  <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
    {/* Main gradient blob - matches OurServices2 positioning */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                   w-[120vw] max-w-[1300px] aspect-square rounded-full 
                   bg-gradient-to-tr from-[#F5E6D3]/30 via-[#E8D5BC]/20 to-[#DBC1A7]/30 
                   blur-3xl animate-slow-pulse" />
    
    {/* Decorative circles - matching OurServices2 positioning */}
    <div className="absolute top-[10%] right-[5%] w-64 h-64 
                   rounded-full bg-[#DBC1A7]/15 blur-2xl animate-float-slow" />
    <div className="absolute bottom-[10%] left-[5%] w-48 h-48 
                   rounded-full bg-[#E8D5BC]/20 blur-2xl animate-float-slow-reverse" />
    
    {/* Border lines - matching OurServices2 */}
    <div className="absolute top-0 left-0 w-full h-[1px]
                   bg-gradient-to-r from-transparent via-[#7BAF7B]/30 to-transparent" />
    <div className="absolute bottom-0 left-0 w-full h-[1px]
                   bg-gradient-to-r from-transparent via-[#7BAF7B]/30 to-transparent" />
    
    {/* Additional background patterns */}
    <div className="absolute inset-0 opacity-[0.03]"
         style={{
           backgroundImage: `linear-gradient(45deg, #7BAF7B 1px, transparent 1px), 
                           linear-gradient(-45deg, #7BAF7B 1px, transparent 1px)`,
           backgroundSize: '40px 40px'
         }} />
    
    <div className="absolute inset-0 opacity-[0.02]"
         style={{
           backgroundImage: `radial-gradient(#7BAF7B 1px, transparent 1px)`,
           backgroundSize: '20px 20px'
         }} />
  </div>
));

BackgroundEffects.displayName = 'BackgroundEffects';

const OurSupport = memo(() => {
  const { ref: titleRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="support"
             className="relative w-full bg-[#EDE5DB] py-8 sm:py-12 lg:py-16 overflow-hidden scroll-mt-20"
             aria-label="Customer Support Services">
      
      <BackgroundEffects />

      <Container>
        <div className="relative z-[1]">
          {/* Title Section - Matching AboutUs2 spacing */}
          <div ref={titleRef} 
               className={`text-center mb-6 xs:mb-8 sm:mb-12 lg:mb-16 px-2 xs:px-4 transition-all duration-700
                        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-xs sm:text-sm md:text-base font-poppins tracking-[0.4em] 
                         text-[#2A5A36] mb-4 sm:mb-5 uppercase relative inline-block
                         before:content-[''] before:absolute before:-bottom-2 before:left-1/2 
                         before:-translate-x-1/2 before:w-12 before:h-0.5 
                         before:bg-gradient-to-r before:from-transparent 
                         before:via-[#2A5A36]/70 before:to-transparent">
              Customer Support
            </span>

            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 
                        font-bold font-merriweather text-center mb-2 xs:mb-3 sm:mb-4
                        bg-gradient-to-r from-[#44875A] via-[#2A5A36] to-[#44875A] 
                        bg-clip-text text-transparent">
              Elevating Your Experience
            </h2>

            <p className="font-poppins text-[#2A5A36]/90 max-w-2xl mx-auto 
                       text-[10px] xs:text-xs sm:text-sm md:text-base leading-relaxed">
              Dedicated support and innovative solutions for your glass packaging needs
            </p>
          </div>

          {/* Content with matched bottom spacing */}
          <div className="mb-6 xs:mb-8 sm:mb-12 lg:mb-16">
            <OurSupportContent />
          </div>
        </div>
      </Container>
    </section>
  )
});

OurSupport.displayName = 'OurSupport';
export default OurSupport;