"use client"
import React, { memo, useEffect, useState } from 'react';
import dynamic from 'next/dynamic'
import { useInView } from 'react-intersection-observer'
import Container from '../Container'
import EndContent from '../EndContent'
import { motion, useScroll, useTransform } from 'framer-motion'

// Dynamic import with loading state
const ProcessFlowContent = dynamic(() => import('../ProcessFlowContent'), {
  ssr: true,
  loading: () => (
    <div className="animate-pulse min-h-[600px] w-full relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-[#336B44] border-t-transparent rounded-full animate-spin" />
      </div>
    </div>
  )
})

// Enhanced background component with parallax
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
    <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
      {/* Main gradient sphere - simplified from AboutUs2 */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                   w-[120vw] max-w-[1300px] aspect-square rounded-full 
                   bg-gradient-to-tr from-[#E8DED4]/30 via-[#E5EFDC]/20 to-[#E8DED4]/30 
                   blur-3xl animate-slow-pulse" />
      
      {/* Floating elements - matching AboutUs2 style */}
      <div className="absolute top-[10%] left-[8%] w-[25vw] h-[25vw] max-w-[350px] max-h-[350px]
                   rounded-full bg-[#E5EFDC]/10 blur-2xl animate-float-slow" />
      <div className="absolute bottom-[15%] right-[3%] w-[20vw] h-[20vw] max-w-[300px] max-h-[300px]
                   rounded-full bg-[#DFD5CB]/15 blur-2xl animate-float-slower" />
      
      {/* Simple dot pattern - from AboutUs2 */}
      <div className="absolute inset-0 opacity-[0.04]"
           style={{
             backgroundImage: `radial-gradient(circle at center, rgba(62, 96, 71, 0.25) 0.5px, transparent 0.5px)`,
             backgroundSize: '20px 20px'
           }} />
    </div>
  );
});

BackgroundEffects.displayName = 'BackgroundEffects';

const ProcessFlow = memo(() => {
  const { ref: titleRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '50px 0px'
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="process"
      className="relative w-full bg-[#EDE5DB] py-8 sm:py-12 lg:py-20 overflow-hidden scroll-mt-20"
      aria-label="Manufacturing Process Flow"
    >
      {/* Decorative borders - matching AboutUs2 style */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r 
                     from-transparent via-[#3B7D46]/20 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r 
                     from-transparent via-[#3B7D46]/20 to-transparent" aria-hidden="true" />
      
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 
                     border-[#3B7D46]/10 rounded-tl-3xl" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 
                     border-[#3B7D46]/10 rounded-tr-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 
                     border-[#3B7D46]/10 rounded-bl-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 
                     border-[#3B7D46]/10 rounded-br-3xl" aria-hidden="true" />

      <BackgroundEffects />

      <Container className="relative z-[5]">
        <div
          ref={titleRef}
          className={`text-center mb-8 sm:mb-12 lg:mb-16 px-4 
                     transition-transform duration-1000 ease-out will-change-transform
                     ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
        >
          {/* Subtitle with line decoration */}
          <span className="text-xs sm:text-sm md:text-base font-poppins tracking-[0.4em] 
                       text-[#2A5A36] mb-4 sm:mb-5 uppercase relative inline-block
                       before:content-[''] before:absolute before:-bottom-2 before:left-1/2 
                       before:-translate-x-1/2 before:w-12 before:h-0.5 
                       before:bg-gradient-to-r before:from-transparent 
                       before:via-[#2A5A36]/70 before:to-transparent">
            Tailored to Your Vision
          </span>
          
          {/* Main heading with side lines */}
          <div className="relative">
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-[2px] 
                         bg-gradient-to-r from-[#2A5A36]/40 to-transparent hidden lg:block" />
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-[2px] 
                         bg-gradient-to-l from-[#2A5A36]/40 to-transparent hidden lg:block" />

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                        font-bold font-merriweather text-center mb-3 sm:mb-4
                        bg-gradient-to-r from-[#44875A] via-[#2A5A36] to-[#44875A] 
                        bg-clip-text text-transparent relative
                        animate-gradient-x bg-[length:200%_auto]
                        drop-shadow-[0_2px_4px_rgba(42,90,54,0.2)]">
              Custom Design Process
            </h2>
          </div>
          
          {/* Subtext */}
          <p className="font-poppins text-[#2A5A36] max-w-2xl mx-auto 
                     text-xs sm:text-sm md:text-base leading-relaxed
                     drop-shadow-[0_1px_2px_rgba(42,90,54,0.1)]
                     font-medium">
            Experience our collaborative design journey, where your unique vision is transformed 
            into exceptional custom glass packaging solutions.
          </p>

          {/* Decorative dot patterns */}
          <div className="absolute left-0 bottom-0 w-16 h-16 opacity-15 hidden lg:block"
               style={{
                 backgroundImage: `radial-gradient(circle at center, #2A5A36 1px, transparent 1px)`,
                 backgroundSize: '8px 8px'
               }} />
          <div className="absolute right-0 bottom-0 w-16 h-16 opacity-15 hidden lg:block"
               style={{
                 backgroundImage: `radial-gradient(circle at center, #2A5A36 1px, transparent 1px)`,
                 backgroundSize: '8px 8px'
               }} />
        </div>

        <div className="mb-12 xs:mb-16 sm:mb-20 lg:mb-24">
          <ProcessFlowContent />
        </div>

        <motion.div variants={titleVariants}>
          <EndContent showSeparator={true}/>
        </motion.div>
      </Container>
    </section>
  );
});

ProcessFlow.displayName = 'ProcessFlow';
export default ProcessFlow;