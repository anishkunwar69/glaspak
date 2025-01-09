'use client'
import React, { memo } from 'react'
import dynamic from 'next/dynamic'
import { useInView } from 'react-intersection-observer'
import Container from '../Container'

// Dynamic import with loading state
const TestsContent = dynamic(() => import('../TestsContent'), {
  ssr: true,
  loading: () => <div className="animate-pulse bg-lightBgColor/20 min-h-[600px]" />
})

// Simplified BackgroundEffects component
const BackgroundEffects = memo(() => (
  <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
    {/* Unique layered gradient spheres */}
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
    <div className="absolute top-[40%] right-[20%] w-32 h-32 
                   border-2 border-[#A8D9AC]/20 rotate-45
                   transform animate-float-slowest" />

    {/* Premium light beams */}
    <div className="absolute inset-0 opacity-[0.04]"
         style={{
           backgroundImage: `linear-gradient(60deg, 
             transparent 0%, 
             transparent 49%, 
             #7BAF7B 49%,
             #7BAF7B 51%, 
             transparent 51%, 
             transparent 100%)`,
           backgroundSize: '200px 200px'
         }} />

    {/* Subtle gradient mesh */}
    <div className="absolute inset-0 opacity-[0.1]"
         style={{
           backgroundImage: `radial-gradient(#7BAF7B 1px, transparent 1px), 
                           radial-gradient(#44875A 1px, transparent 1px)`,
           backgroundSize: '50px 50px, 40px 40px',
           backgroundPosition: '0 0, 25px 25px'
         }} />

    {/* Dynamic corner accents */}
    <div className="absolute top-0 left-0 w-64 h-64 
                   bg-gradient-to-br from-[#7BAF7B]/10 to-transparent 
                   transform -rotate-45" />
    <div className="absolute bottom-0 right-0 w-64 h-64 
                   bg-gradient-to-tl from-[#44875A]/10 to-transparent 
                   transform rotate-45" />

    {/* Premium grain overlay */}
    <div className="absolute inset-0 opacity-[0.2] mix-blend-overlay"
         style={{
           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
           backgroundSize: '150px 150px'
         }} />
  </div>
));

const Tests = memo(() => {
  const { ref: titleRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section 
      id="tests"
      className="relative w-full bg-[#EDE5DB] py-8 sm:py-12 lg:py-16 overflow-hidden scroll-mt-20"
      aria-label="Quality Testing Standards"
    >
      <BackgroundEffects />

      <Container>
        <div className="relative z-[1]">
          <div ref={titleRef} 
               className={`text-center mb-6 xs:mb-8 sm:mb-12 lg:mb-16 px-2 xs:px-4 transition-all duration-700 
                        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-xs sm:text-sm md:text-base font-poppins 
                         tracking-[0.4em] text-[#2A5A36] mb-4 sm:mb-5 
                         uppercase relative inline-block
                         before:content-[''] before:absolute before:-bottom-2 
                         before:left-1/2 before:-translate-x-1/2 before:w-12 
                         before:h-0.5 before:bg-gradient-to-r before:from-transparent 
                         before:via-[#2A5A36]/70 before:to-transparent">
              Quality Control Process
            </span>

            <div className="relative">
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-[2px] 
                          bg-gradient-to-r from-[#2A5A36]/40 to-transparent hidden lg:block" />
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-[2px] 
                          bg-gradient-to-l from-[#2A5A36]/40 to-transparent hidden lg:block" />
              
              <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 
                         font-bold font-merriweather text-center mb-2 xs:mb-3 sm:mb-4
                         bg-gradient-to-r from-[#44875A] via-[#2A5A36] to-[#44875A] 
                         bg-clip-text text-transparent relative
                         animate-gradient-x bg-[length:200%_auto]
                         drop-shadow-[0_2px_4px_rgba(42,90,54,0.2)]">
                Our Testing Standards
              </h2>
            </div>

            <p className="font-poppins text-[#2A5A36] max-w-2xl mx-auto 
                       text-[10px] xs:text-xs sm:text-sm md:text-base leading-relaxed
                       drop-shadow-[0_1px_2px_rgba(42,90,54,0.1)]
                       font-medium">
              Ensuring quality through comprehensive testing and validation processes
            </p>
          </div>

          <div className="mb-6 xs:mb-8 sm:mb-12 lg:mb-16">
            <TestsContent />
          </div>
        </div>
      </Container>
    </section>
  )
});

Tests.displayName = 'Tests';
export default Tests;