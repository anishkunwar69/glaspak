/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client"
import React from 'react';
import dynamic from 'next/dynamic'
import { useInView } from 'react-intersection-observer'

const ManufacturingProcessContent = dynamic(() => import('../ManufacturingProcessContent'), {
  loading: () => <div className="animate-pulse bg-lightBgColor/20 min-h-[600px]" />
})

const BackgroundEffects = React.memo(() => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                   w-[150vw] max-w-[1600px] aspect-square rounded-full 
                   bg-gradient-to-tr from-emerald-950/50 via-amber-950/40 to-emerald-950/50 
                   blur-3xl animate-slow-spin" />
    <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px]
                   rounded-full bg-emerald-500/10 blur-3xl animate-pulse-slow" />
    <div className="absolute bottom-[15%] right-[5%] w-[35vw] h-[35vw] max-w-[450px] max-h-[450px]
                   rounded-full bg-amber-500/10 blur-3xl animate-pulse-slow delay-1000" />
    <div className="absolute inset-0 bg-gradient-to-b from-darkBgColor/90 via-transparent to-darkBgColor/90" />
    <div className="absolute inset-0 bg-gradient-to-r from-darkBgColor/50 via-transparent to-darkBgColor/50" />
  </div>
));

BackgroundEffects.displayName = 'BackgroundEffects';

function ManufacturingProcess() {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section 
      ref={sectionRef}
      id="manufacturing"
      className={`relative min-h-screen w-full 
                  bg-gradient-to-b from-darkBgColor via-[#1A2B25] to-darkBgColor 
                  py-20 overflow-hidden z-0
                  transition-all duration-1000
                  ${sectionInView ? 'opacity-100' : 'opacity-0'}`}
    >
      <BackgroundEffects />
      <div className="relative z-[1]">
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <span className="block text-xs sm:text-sm md:text-base font-poppins tracking-[0.3em] 
                         text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 
                         to-amber-300 mb-3 sm:mb-4 uppercase">
            Crafting Excellence
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                        font-bold font-merriweather text-center mb-4 sm:mb-6 
                        relative px-4 sm:px-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r 
                           from-emerald-300 via-amber-300 to-emerald-400">
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
}

export default ManufacturingProcess;