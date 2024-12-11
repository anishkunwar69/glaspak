'use client'
import React, { memo } from 'react'
import dynamic from 'next/dynamic'
import { useInView } from 'react-intersection-observer'

// Dynamic import with loading state
const TestsContent = dynamic(() => import('../TestsContent'), {
  ssr: true,
  loading: () => <div className="animate-pulse bg-lightBgColor/20 min-h-[600px]" />
})

// Memoized background component
const BackgroundEffects = memo(() => (
  <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                   w-[120vw] max-w-[1200px] aspect-square rounded-full 
                   bg-gradient-to-tr from-emerald-950/30 via-amber-950/20 to-emerald-950/30 blur-3xl" />
    
    <div className="absolute inset-0 opacity-[0.02]"
         style={{
           backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.1) 0.5px, transparent 0.5px)`,
           backgroundSize: '24px 24px'
         }} />

    <div className="absolute inset-0 opacity-[0.03]"
         style={{
           backgroundImage: `linear-gradient(45deg, 
                            transparent 45%, 
                            rgba(16,185,129,0.2) 45.5%,
                            rgba(16,185,129,0.2) 46%, 
                            transparent 46.5%)`
         }} />

    <div className="absolute inset-0 bg-gradient-to-b from-darkBgColor/50 via-transparent to-darkBgColor/50" />
  </div>
));
BackgroundEffects.displayName = 'BackgroundEffects';

const Tests = memo(() => {
  const { ref: titleRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section 
      id="tests"
      className='relative min-h-screen w-full bg-gradient-to-b from-darkBgColor via-[#1A2B25] to-darkBgColor py-20 overflow-hidden'
      aria-label="Quality Testing Standards"
    >
      <BackgroundEffects />

      <div className="relative z-[1]">
        <div 
          ref={titleRef} 
          className={`text-center mb-8 transition-all duration-700
                     ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="block text-xs sm:text-sm md:text-base font-poppins 
                         tracking-[0.3em] text-transparent bg-clip-text 
                         bg-gradient-to-r from-emerald-300 to-amber-300 
                         mb-3 sm:mb-4 uppercase px-4">
            Quality Control Process
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                        font-bold font-merriweather text-center 
                        mb-4 sm:mb-6 relative px-4 sm:px-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r 
                           from-emerald-300 via-amber-300 to-emerald-400
                           whitespace-normal sm:whitespace-pre-wrap">
              Our Testing Standards
            </span>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 
                          h-px bg-gradient-to-r from-transparent via-emerald-500 
                          to-transparent w-full max-w-[280px] sm:max-w-[300px] mx-auto" />
          </h2>
          <p className="font-poppins text-emerald-100/60 max-w-2xl mx-auto text-sm md:text-base">
            Ensuring quality through comprehensive testing and validation processes
          </p>
        </div>

        <TestsContent />
      </div>
    </section>
  )
});

Tests.displayName = 'Tests';
export default Tests;