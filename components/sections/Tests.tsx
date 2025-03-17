'use client'
import React, { memo, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useScroll, useTransform } from 'framer-motion'
import Container from '../Container'
import dynamic from 'next/dynamic'

// Dynamic import with loading state
const TestsContent = dynamic(() => import('../TestsContent'), {
  ssr: true,
  loading: () => (
    <div className="animate-pulse min-h-[600px] w-full relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-[#336B44] border-t-transparent rounded-full animate-spin" />
      </div>
    </div>
  )
})

// Enhanced premium background effects
const BackgroundEffects = memo(() => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  
  if (!isMounted) return null;
  
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0" aria-hidden="true">
      {/* Premium gradient spheres with parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                 w-[120vw] max-w-[1800px] aspect-square rounded-full 
                 bg-gradient-to-br from-[#7BAF7B]/20 via-[#A8D9AC]/15 to-[#44875A]/20 
                 blur-3xl animate-slow-pulse z-0" 
      />
      
      {/* Light effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5 z-[1]" />
      
      {/* Decorative elements with parallax */}
      <div className="absolute top-0 left-0 w-full h-full z-[2]">
        {/* Floating circles */}
        <motion.div 
          style={{ y: y2 }}
          className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full 
                   bg-gradient-to-tr from-[#44875A]/10 to-transparent 
                   animate-float-slow blur-2xl" 
        />
        <motion.div 
          style={{ y: y3 }}
          className="absolute bottom-[15%] right-[10%] w-48 h-48 rounded-full 
                   bg-gradient-to-bl from-[#2A5A36]/8 to-transparent 
                   animate-float-slower blur-xl" 
        />

        {/* Gold accent elements */}
        <div className="absolute top-[25%] right-[15%] w-24 h-24 rounded-full 
                     bg-[#FFD700]/5 blur-xl animate-float-slow" />
        <div className="absolute bottom-[30%] left-[20%] w-32 h-32 rounded-full 
                     bg-[#FFD700]/5 blur-xl animate-float-slower" />

        {/* Premium patterns */}
        <div className="absolute inset-0 opacity-[0.03]"
             style={{
               backgroundImage: `repeating-linear-gradient(
                 -45deg,
                 #7BAF7B 1px,
                 transparent 1px,
                 transparent 12px
               )`,
               backgroundSize: '30px 30px'
             }} />
             
        <div className="absolute inset-0 opacity-[0.02]"
             style={{
               backgroundImage: `radial-gradient(circle at center, #336B44 0.5px, transparent 0.5px)`,
               backgroundSize: '20px 20px'
             }} />

        {/* Dynamic corner accents */}
        <div className="absolute top-0 left-0 w-64 h-64 
                     bg-gradient-to-br from-[#7BAF7B]/10 to-transparent 
                     transform -rotate-45" />
        <div className="absolute bottom-0 right-0 w-64 h-64 
                     bg-gradient-to-tl from-[#44875A]/10 to-transparent 
                     transform rotate-45" />
      </div>
    </div>
  );
});

BackgroundEffects.displayName = 'BackgroundEffects';

const Tests = memo(() => {
  const { ref: titleRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '50px 0px'
  });

  return (
    <section 
      id="tests"
      className="relative w-full bg-[#EDE5DB] py-8 sm:py-12 lg:py-16 overflow-hidden"
      aria-label="Quality Testing Standards"
    >
      <BackgroundEffects />

      <Container className="relative z-10">
        <div
          ref={titleRef}
          className={`text-center mb-6 xs:mb-8 sm:mb-12 lg:mb-16 px-2 xs:px-4
                     transition-transform duration-1000 ease-out will-change-transform
                     ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
        >
          {/* Subtitle with line decoration */}
          <span className="text-[10px] xs:text-xs sm:text-sm md:text-base font-poppins tracking-[0.3em] xs:tracking-[0.4em] 
                       text-[#2A5A36] mb-3 xs:mb-4 sm:mb-5 uppercase relative inline-block
                       before:content-[''] before:absolute before:-bottom-2 before:left-1/2 
                       before:-translate-x-1/2 before:w-8 xs:before:w-12 before:h-0.5 
                       before:bg-gradient-to-r before:from-transparent 
                       before:via-[#2A5A36]/70 before:to-transparent">
            Quality Control Process
          </span>
          
          {/* Main heading with gradient */}
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 
                      font-bold font-merriweather text-center mb-2 xs:mb-3 sm:mb-4
                      bg-gradient-to-r from-[#44875A] via-[#2A5A36] to-[#44875A] 
                      bg-clip-text text-transparent relative
                      animate-gradient-x bg-[length:200%_auto]
                      drop-shadow-[0_2px_4px_rgba(42,90,54,0.2)]">
            Our Testing Standards
          </h2>
          
          {/* Subtext */}
          <p className="font-poppins text-[#2A5A36] max-w-2xl mx-auto 
                     text-[10px] xs:text-xs sm:text-sm md:text-base leading-relaxed
                     drop-shadow-[0_1px_2px_rgba(42,90,54,0.1)]
                     font-medium">
            Ensuring quality through comprehensive testing and validation processes
          </p>
        </div>

        {/* TestsContent with matched spacing */}
        <div className="space-y-8 sm:space-y-16">
          <TestsContent />
        </div>
      </Container>
    </section>
  );
});

Tests.displayName = 'Tests';
export default Tests;