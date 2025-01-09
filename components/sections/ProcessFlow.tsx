"use client"
import React, { memo } from 'react';
import dynamic from 'next/dynamic'
import { useInView } from 'react-intersection-observer'
import Container from '../Container'

// Dynamic import with loading state
const ProcessFlowContent = dynamic(() => import('../ProcessFlowContent'), {
  ssr: true,
  loading: () => <div className="animate-pulse bg-lightBgColor/20 min-h-[600px]" />
})

// Enhanced background component
const BackgroundEffects = memo(() => (
  <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
    {/* Main gradient sphere */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                   w-[120vw] max-w-[1800px] aspect-square rounded-full 
                   bg-gradient-to-br from-[#7BAF7B]/20 via-[#A8D9AC]/15 to-[#44875A]/20 
                   blur-3xl animate-slow-pulse" />
    
    {/* Decorative elements */}
    <div className="absolute top-0 left-0 w-full h-full">
      {/* Floating circles */}
      <div className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full 
                     bg-gradient-to-tr from-[#44875A]/10 to-transparent 
                     animate-float-slow blur-2xl" />
      <div className="absolute bottom-[15%] right-[10%] w-48 h-48 rounded-full 
                     bg-gradient-to-bl from-[#2A5A36]/8 to-transparent 
                     animate-float-slower blur-xl" />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] 
                     [background-image:url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTAgMjVsNi42NCA2LjY0TDUwIDM4LjI4bC02LjY0LTYuNjR6IiBmaWxsPSIjMkE1QTM2IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')]" />

      {/* Light beam effects */}
      <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] animate-slow-spin">
        <div className="absolute top-1/2 left-1/2 w-32 h-[500px] 
                       bg-gradient-to-b from-[#44875A]/5 to-transparent 
                       blur-3xl -translate-x-1/2 -translate-y-1/2 rotate-45" />
        <div className="absolute top-1/2 left-1/2 w-32 h-[500px] 
                       bg-gradient-to-b from-[#7BAF7B]/5 to-transparent 
                       blur-3xl -translate-x-1/2 -translate-y-1/2 -rotate-45" />
      </div>
    </div>
  </div>
));

BackgroundEffects.displayName = 'BackgroundEffects';

const ProcessFlow = memo(() => {
  const { ref: titleRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section 
      id="process"
      className="relative w-full bg-[#EDE5DB] py-8 sm:py-12 lg:py-16 overflow-hidden scroll-mt-20"
      aria-label="Manufacturing Process Flow"
    >
      <BackgroundEffects />

      <Container>
        <div className="relative z-[1]">
          <div ref={titleRef} 
               className={`text-center mb-6 xs:mb-8 sm:mb-12 lg:mb-16 px-2 xs:px-4 transition-all duration-700
                        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-xs sm:text-sm md:text-base font-poppins 
                         tracking-[0.4em] text-[#2A5A36] mb-4 sm:mb-5 uppercase relative inline-block
                         before:content-[''] before:absolute before:-bottom-2 
                         before:left-1/2 before:-translate-x-1/2 before:w-12 
                         before:h-0.5 before:bg-gradient-to-r before:from-transparent 
                         before:via-[#2A5A36]/70 before:to-transparent">
              Excellence in Every Step
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
                Our Process
              </h2>
            </div>

            <p className="font-poppins text-[#2A5A36] max-w-2xl mx-auto 
                       text-[10px] xs:text-xs sm:text-sm md:text-base leading-relaxed
                       drop-shadow-[0_1px_2px_rgba(42,90,54,0.1)]
                       font-medium">
              Discover our meticulous approach to glass manufacturing, where each phase 
              is crafted with precision and expertise to deliver exceptional results.
            </p>
          </div>

          <div className="mb-6 xs:mb-8 sm:mb-12 lg:mb-16">
            <ProcessFlowContent />
          </div>
        </div>
      </Container>
    </section>
  );
});

ProcessFlow.displayName = 'ProcessFlow';
export default ProcessFlow;