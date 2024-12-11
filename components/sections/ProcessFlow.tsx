"use client"
import React, { memo } from 'react';
import dynamic from 'next/dynamic'
import { useInView } from 'react-intersection-observer'

// Dynamic import with loading state
const ProcessFlowContent = dynamic(() => import('../ProcessFlowContent'), {
  ssr: true,
  loading: () => <div className="animate-pulse bg-lightBgColor/20 min-h-[600px]" />
})

const ProcessFlow = memo(() => {
  const { ref: titleRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section 
      id="process"
      className='min-h-screen w-full bg-gradient-to-b from-darkBgColor via-[#1A2B25] to-darkBgColor py-20'
      aria-label="Manufacturing Process Flow"
    >
      <div>
        <div 
          ref={titleRef} 
          className={`relative text-center mb-24 transition-all duration-700
                     ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                         w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full 
                         bg-gradient-to-r from-emerald-500/20 to-amber-500/20 blur-3xl" 
               aria-hidden="true"
          />
          <div className="relative">
            <span className="block text-xs sm:text-sm md:text-base font-poppins 
                           tracking-[0.3em] text-transparent bg-clip-text 
                           bg-gradient-to-r from-emerald-300 to-amber-300 
                           mb-3 sm:mb-4 uppercase">
              Excellence in Every Step
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                          font-bold font-merriweather text-center 
                          mb-4 sm:mb-6 relative px-4 sm:px-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r 
                             from-emerald-300 via-amber-300 to-emerald-400
                             whitespace-normal sm:whitespace-pre-wrap">
                Our Process
              </span>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 
                            h-px bg-gradient-to-r from-transparent via-emerald-500 
                            to-transparent w-full max-w-[140px] sm:max-w-[200px] mx-auto" 
                   aria-hidden="true"
              />
            </h2>
            <p className="font-poppins text-emerald-100/60 max-w-2xl mx-auto text-sm md:text-base">
              Discover our meticulous approach to glass manufacturing, where each phase 
              is crafted with precision and expertise to deliver exceptional results.
            </p>
          </div>
        </div>
        <ProcessFlowContent />
      </div>
    </section>
  );
});

ProcessFlow.displayName = 'ProcessFlow';
export default ProcessFlow;