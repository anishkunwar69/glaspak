"use client"
import React, { memo } from 'react';
import dynamic from 'next/dynamic'
import { useInView } from 'react-intersection-observer'

// Dynamic import with loading state
const OurProductsContent = dynamic(() => import('../OurProductsContent'), {
  ssr: true,
  loading: () => <div className="animate-pulse bg-lightBgColor/20 min-h-[600px]" />
})

// Memoized background effects component
const BackgroundEffects = memo(() => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    {/* Main gradient core */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                   w-[130vw] max-w-[1400px] aspect-square rounded-full 
                   bg-gradient-to-tr from-emerald-950/40 via-amber-950/30 to-emerald-950/40 blur-3xl" />
    
    {/* Floating orbs with gradients */}
    <div className="absolute top-[10%] left-[5%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px]
                   rounded-full bg-gradient-to-br from-emerald-500/10 via-emerald-400/5 to-transparent 
                   blur-2xl animate-float-slow" />
    <div className="absolute bottom-[15%] right-[5%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px]
                   rounded-full bg-gradient-to-bl from-amber-500/10 via-amber-400/5 to-transparent 
                   blur-2xl animate-float-slow-reverse" />
    
    {/* Enhanced mesh pattern */}
    <div className="absolute inset-0 opacity-[0.03]"
         style={{
           backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.15) 0.5px, transparent 0.5px)`,
           backgroundSize: '20px 20px'
         }} />

    {/* Diagonal patterns */}
    <div className="absolute inset-0 opacity-[0.03]"
         style={{
           backgroundImage: `repeating-linear-gradient(
             -45deg,
             transparent,
             transparent 80px,
             rgba(16,185,129,0.15) 80px,
             rgba(16,185,129,0.15) 81px
           )`
         }} />

    {/* Section-specific light beam effect */}
    <div className="absolute inset-0 opacity-[0.04]"
         style={{
           background: `linear-gradient(135deg, transparent 0%, rgba(16,185,129,0.1) 45%, rgba(245,158,11,0.1) 55%, transparent 100%)`
         }} />

    {/* Enhanced vignette */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-b from-darkBgColor/60 via-transparent to-darkBgColor/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-darkBgColor/40 via-transparent to-darkBgColor/40" />
    </div>
  </div>
));
BackgroundEffects.displayName = 'BackgroundEffects';

const OurProducts = memo(() => {
  const { ref: titleRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section 
      id="products"
      className='relative min-h-screen w-full bg-gradient-to-b from-darkBgColor via-[#1A2B25] to-darkBgColor py-20 overflow-hidden'
      aria-label="Our Premium Glass Products"
    >
      {/* Section Separators */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-darkBgColor/80 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-darkBgColor/80 to-transparent pointer-events-none" />
      
      <BackgroundEffects />

      <div className="relative z-[1]">
        <div 
          ref={titleRef} 
          className={`text-center mb-12 sm:mb-16 transition-all duration-700
                     ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="block text-xs sm:text-sm md:text-base font-poppins tracking-[0.3em] 
                         text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 
                         to-amber-300 mb-3 sm:mb-4 uppercase">
            Customer Success Stories
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                        font-bold font-merriweather text-center mb-4 sm:mb-6 
                        relative px-4 sm:px-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r 
                           from-emerald-300 via-amber-300 to-emerald-400
                           whitespace-normal sm:whitespace-pre-wrap">
              Premium Glass Solutions
            </span>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-px 
                        bg-gradient-to-r from-transparent via-emerald-500 to-transparent 
                        w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] mx-auto" />
          </h2>
          <p className="font-poppins text-emerald-100/60 max-w-2xl mx-auto 
                       text-xs sm:text-sm md:text-base leading-relaxed px-4">
            Discover our portfolio of exquisite glass products crafted for industry leaders
          </p>
        </div>

        <OurProductsContent />
      </div>
    </section>
  );
});

OurProducts.displayName = 'OurProducts';
export default OurProducts;