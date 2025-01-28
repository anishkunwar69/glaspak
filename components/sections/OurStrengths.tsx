"use client"
import React, { memo } from 'react'
import dynamic from 'next/dynamic'
import { useInView } from 'react-intersection-observer'
import Container from '../Container'
import { motion } from 'framer-motion'
// Dynamic import with loading state
const OurStrengthsContent = dynamic(() => import('../OurStrengthsContent'), {
  ssr: true,
  loading: () => <div className="animate-pulse bg-lightBgColor/20 min-h-[600px]" />
})

// Memoized background component for better performance
const BackgroundEffects = memo(() => (
  <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
    {/* Base gradient sphere */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                   w-[120vw] max-w-[1300px] aspect-square rounded-full 
                   bg-gradient-to-tr from-[#E8DED4]/30 via-[#E5EFDC]/20 to-[#E8DED4]/30 
                   blur-3xl animate-slow-pulse" />

    {/* Subtle decorative elements */}
    <div className="absolute inset-0">
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] 
                     bg-gradient-to-r from-transparent via-[#3B7D46]/20 to-transparent" />
      
      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] 
                     bg-gradient-to-r from-transparent via-[#3B7D46]/20 to-transparent" />
    </div>

    {/* Soft floating accent */}
    <div className="absolute top-[15%] right-[10%] w-[25vw] h-[25vw] max-w-[350px] max-h-[350px]
                   rounded-full bg-[#E5EFDC]/10 blur-2xl animate-float-slow" />
    
    <div className="absolute bottom-[20%] left-[8%] w-[20vw] h-[20vw] max-w-[300px] max-h-[300px]
                   rounded-full bg-[#E5EFDC]/15 blur-2xl animate-float-slower" />

    {/* Subtle dot matrix */}
    <div className="absolute inset-0 opacity-[0.03]"
         style={{
           backgroundImage: `radial-gradient(circle at center, #2A5A36 1px, transparent 1px)`,
           backgroundSize: '48px 48px'
         }} />

    {/* Gentle light beam */}
    <div className="absolute inset-0">
      <div className="absolute top-0 left-1/4 w-1/2 h-full 
                     bg-gradient-to-b from-white/5 via-transparent to-transparent" />
    </div>
  </div>
));
BackgroundEffects.displayName = 'BackgroundEffects';

const OurStrengths = memo(() => {
  const { ref: titleRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '50px 0px'  // Trigger slightly before element comes into view
  });

  return (
    <section 
      id="strengths"
      className='relative w-full bg-[#EDE5DB] py-8 sm:py-12 lg:py-16 overflow-hidden'
      aria-label="Our Core Strengths"
    >
      <BackgroundEffects />
      
      <Container>
        <div
          ref={titleRef}
          className={`text-center mb-6 xs:mb-8 sm:mb-12 lg:mb-16 px-2 xs:px-4
                     transition-transform duration-1000 ease-out will-change-transform
                     ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
        >
          <span className="text-[10px] xs:text-xs sm:text-sm md:text-base font-poppins tracking-[0.3em] xs:tracking-[0.4em] 
                       text-[#2A5A36] mb-3 xs:mb-4 sm:mb-5 uppercase relative inline-block
                       before:content-[''] before:absolute before:-bottom-2 before:left-1/2 
                       before:-translate-x-1/2 before:w-8 xs:before:w-12 before:h-0.5 
                       before:bg-gradient-to-r before:from-transparent 
                       before:via-[#2A5A36]/70 before:to-transparent">
            What Makes Us Different
          </span>
          
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 
                      font-bold font-merriweather text-center mb-2 xs:mb-3 sm:mb-4
                      bg-gradient-to-r from-[#44875A] via-[#2A5A36] to-[#44875A] 
                      bg-clip-text text-transparent relative
                      animate-gradient-x bg-[length:200%_auto]
                      drop-shadow-[0_2px_4px_rgba(42,90,54,0.2)]">
            Our Strengths
          </h2>
          
          <p className="font-poppins text-[#2A5A36] max-w-2xl mx-auto 
                     text-[10px] xs:text-xs sm:text-sm md:text-base leading-relaxed
                     drop-shadow-[0_1px_2px_rgba(42,90,54,0.1)]
                     font-medium">
            Discover what sets us apart in the glass packaging industry
          </p>
        </div>

        <OurStrengthsContent />
      </Container>
    </section>
  )
});

OurStrengths.displayName = 'OurStrengths';
export default OurStrengths;