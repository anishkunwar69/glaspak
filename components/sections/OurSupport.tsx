// OurSupport.tsx
'use client'
import React, { memo } from 'react'
import dynamic from 'next/dynamic'
import { useInView } from 'react-intersection-observer'

const OurSupportContent = dynamic(() => import('../OurSupportContent'), {
  ssr: true,
  loading: () => (
    <div 
      className="animate-pulse bg-lightBgColor/20 min-h-[600px] rounded-[26px]"
      role="progressbar"
      aria-label="Loading support content"
    />
  )
})

const BackgroundEffects = memo(() => (
  <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
    <div className="absolute inset-0 bg-gradient-to-b from-darkBgColor/50 via-transparent to-darkBgColor/50" />
    <div className="absolute inset-0"
         style={{
           backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.1) 0.5px, transparent 0.5px)`,
           backgroundSize: '24px 24px'
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
    <section 
  id="support"
  className='relative min-h-screen w-full bg-gradient-to-b from-darkBgColor via-[#1A2B25] via-50% to-[#1A2429]/90 py-24 sm:py-28 lg:py-32 overflow-hidden'
  aria-label="Customer Support Services"
>
      <BackgroundEffects />

      <div className="relative z-[1] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef} 
          className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-500
                     ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="inline-block text-sm md:text-base font-poppins tracking-[0.3em] 
                         text-transparent bg-clip-text bg-gradient-to-r 
                         from-emerald-300 to-amber-300 mb-4 uppercase">
            Customer Support
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 
                        font-bold font-merriweather text-center mb-6 
                        relative px-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r 
                           from-emerald-300 via-amber-300 to-emerald-400">
              Elevating Your Experience
            </span>
          </h1>
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent 
                       via-emerald-500 to-transparent mb-6" />
          <p className="font-poppins text-emerald-100/70 max-w-2xl mx-auto 
                     text-sm sm:text-base lg:text-lg">
            Dedicated support and innovative solutions for your glass packaging needs
          </p>
        </div>

        <OurSupportContent />
      </div>
    </section>
  )
});

OurSupport.displayName = 'OurSupport';
export default OurSupport;