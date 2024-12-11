"use client"
import React, { memo } from 'react';
import dynamic from 'next/dynamic'
import { useInView } from 'react-intersection-observer'

// Dynamic import with loading state
const ManufacturingProcessContent = dynamic(() => import('../ManufacturingProcessContent'), {
  ssr: true,
  loading: () => <div className="animate-pulse bg-lightBgColor/20 min-h-[600px]" />
})

// Memoized background component for better performance
const BackgroundEffects = memo(() => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                   w-[130vw] max-w-[1400px] aspect-square rounded-full 
                   bg-gradient-to-tr from-emerald-950/40 via-amber-950/30 to-emerald-950/40 blur-3xl" />
    
    <div className="absolute top-[15%] left-[10%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px]
                   rounded-full bg-emerald-500/5 blur-2xl" />
    <div className="absolute bottom-[20%] right-[5%] w-[25vw] h-[25vw] max-w-[350px] max-h-[350px]
                   rounded-full bg-amber-500/5 blur-2xl" />
    
    <div className="absolute inset-0 opacity-[0.03]"
         style={{
           backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.1) 0.5px, transparent 0.5px)`,
           backgroundSize: '24px 24px'
         }} />

    <div className="absolute inset-0 opacity-[0.02]"
         style={{
           backgroundImage: `repeating-linear-gradient(
             -45deg,
             transparent,
             transparent 100px,
             rgba(16,185,129,0.1) 100px,
             rgba(16,185,129,0.1) 101px
           )`
         }} />

    <div className="absolute inset-0 bg-gradient-to-b from-darkBgColor/80 via-transparent to-darkBgColor/80" />
  </div>
));
BackgroundEffects.displayName = 'BackgroundEffects';

const ManufacturingProcess = memo(() => {
  const { ref: titleRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section 
      id="manufacturing"
      className="relative min-h-screen w-full bg-gradient-to-b from-darkBgColor via-[#1A2B25] to-darkBgColor py-20 overflow-hidden z-0"
      aria-label="Manufacturing Process Section"
    >
      <BackgroundEffects />

      <div className="relative z-[1]">
        <div 
          ref={titleRef} 
          className={`text-center mb-16 sm:mb-20 md:mb-24 transition-all duration-700
                     ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="block text-xs sm:text-sm md:text-base font-poppins tracking-[0.3em] 
                         text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 
                         to-amber-300 mb-3 sm:mb-4 uppercase">
            Crafting Excellence
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                        font-bold font-merriweather text-center mb-4 sm:mb-6 
                        relative px-4 sm:px-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r 
                           from-emerald-300 via-amber-300 to-emerald-400 
                           whitespace-normal sm:whitespace-pre-wrap">
              Manufacturing Process
            </span>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-px 
                        bg-gradient-to-r from-transparent via-emerald-500 to-transparent 
                        w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] mx-auto" />
          </h2>
          <p className="font-poppins text-emerald-100/60 max-w-2xl mx-auto 
                       text-xs sm:text-sm md:text-base px-4 sm:px-6">
            Experience our state-of-the-art glass manufacturing process, where precision meets innovation
          </p>
        </div>

        <ManufacturingProcessContent />
      </div>
    </section>
  );
});

ManufacturingProcess.displayName = 'ManufacturingProcess';
export default ManufacturingProcess;