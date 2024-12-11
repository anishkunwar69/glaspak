"use client"
import React, { memo } from 'react'
import dynamic from 'next/dynamic'
import { useInView } from 'react-intersection-observer'

// Dynamic import with loading state
const OurServicesContent = dynamic(() => import('../OurServicesContent'), {
  ssr: true,
  loading: () => <div className="animate-pulse bg-lightBgColor/20 min-h-[400px]" />
})

// Memoized background component for better performance
const BackgroundEffects = memo(() => (
  <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
    {/* Main gradient sphere */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                   w-[130vw] max-w-[1400px] aspect-square rounded-full 
                   bg-gradient-to-tr from-emerald-950/40 via-amber-950/30 to-emerald-950/40 blur-3xl" />
    
    {/* Floating orbs */}
    <div className="absolute top-[15%] left-[10%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px]
                   rounded-full bg-emerald-500/5 blur-2xl" />
    <div className="absolute bottom-[20%] right-[5%] w-[25vw] h-[25vw] max-w-[350px] max-h-[350px]
                   rounded-full bg-amber-500/5 blur-2xl" />
    <div className="absolute top-[40%] right-[15%] w-[20vw] h-[20vw] max-w-[250px] max-h-[250px]
                   rounded-full bg-emerald-600/5 blur-2xl" />
    <div className="absolute bottom-[35%] left-[20%] w-[22vw] h-[22vw] max-w-[300px] max-h-[300px]
                   rounded-full bg-amber-600/5 blur-2xl" />
    
    {/* Subtle dot pattern */}
    <div className="absolute inset-0 opacity-[0.05]"
         style={{
           backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.1) 0.5px, transparent 0.5px)`,
           backgroundSize: '16px 16px'
         }} />
  </div>
));
BackgroundEffects.displayName = 'BackgroundEffects';

const OurServices = memo(() => {
  const { ref: titleRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section 
      id="services"
      className='min-h-screen w-full bg-darkBgColor relative py-12 sm:py-16 overflow-hidden'
      aria-label="GVH Glass Packaging Services"
    >
      <BackgroundEffects />

      <div className="relative z-[1]">
        <div 
          ref={titleRef} 
          className={`text-center px-4 mb-12 transition-all duration-700
                     ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span 
            className="block text-xs sm:text-sm md:text-base font-poppins tracking-[0.3em] 
                     text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 
                     to-amber-300 mb-4 uppercase"
            aria-label="Section Category"
          >
            What We Offer
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                        font-bold font-merriweather text-center mb-4 sm:mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r 
                           from-emerald-300 via-amber-300 to-emerald-400">
              Our Services
            </span>
          </h2>

          <p className="font-poppins text-emerald-100/60 max-w-2xl mx-auto 
                       text-xs sm:text-sm md:text-base leading-relaxed">
            Comprehensive glass packaging solutions tailored to your needs
          </p>
        </div>

        <OurServicesContent/>
      </div>
    </section>
  )
});

OurServices.displayName = 'OurServices';
export default OurServices;