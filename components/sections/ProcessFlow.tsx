"use client"
import React, { memo } from 'react';
import dynamic from 'next/dynamic'
import { useInView } from 'react-intersection-observer'
import Container from '../Container'
import EndContent from '../EndContent'
import { motion } from 'framer-motion'

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
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
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
    <motion.section 
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      id="process"
      className="relative w-full bg-[#EDE5DB] py-8 sm:py-12 lg:py-16 overflow-hidden scroll-mt-20"
      aria-label="Manufacturing Process Flow"
    >
      <BackgroundEffects />

      <Container>
        <div className="relative z-[1]">
          <motion.div 
            variants={titleVariants}
            className="text-center mb-6 xs:mb-8 sm:mb-12 lg:mb-16 px-2 xs:px-4"
          >
            <motion.span 
              variants={titleVariants}
              className="text-xs sm:text-sm md:text-base font-poppins 
                     tracking-[0.4em] text-[#2A5A36] mb-4 sm:mb-5 uppercase relative inline-block
                     before:content-[''] before:absolute before:-bottom-2 
                     before:left-1/2 before:-translate-x-1/2 before:w-12 
                     before:h-0.5 before:bg-gradient-to-r before:from-transparent 
                     before:via-[#2A5A36]/70 before:to-transparent"
            >
              Tailored to Your Vision
            </motion.span>

            <motion.div 
              variants={titleVariants}
              className="relative"
            >
              <motion.h2 
                variants={titleVariants}
                className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 
                       font-bold font-merriweather text-center mb-2 xs:mb-3 sm:mb-4
                       bg-gradient-to-r from-[#44875A] via-[#2A5A36] to-[#44875A] 
                       bg-clip-text text-transparent relative
                       animate-gradient-x bg-[length:200%_auto]
                       drop-shadow-[0_2px_4px_rgba(42,90,54,0.2)]"
              >
                Custom Design Process
              </motion.h2>
            </motion.div>

            <motion.p 
              variants={titleVariants}
              className="font-poppins text-[#2A5A36] max-w-2xl mx-auto 
                     text-[10px] xs:text-xs sm:text-sm md:text-base leading-relaxed
                     drop-shadow-[0_1px_2px_rgba(42,90,54,0.1)]
                     font-medium"
            >
              Experience our collaborative design journey, where your unique vision is transformed 
              into exceptional custom glass packaging solutions with precision and creativity.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={titleVariants}
            className="mb-6 xs:mb-8 sm:mb-12 lg:mb-16"
          >
            <ProcessFlowContent />
          </motion.div>
        </div>

        <motion.div variants={titleVariants}>
          <EndContent showSeparator={true}/>
        </motion.div>
      </Container>
    </motion.section>
  );
});

ProcessFlow.displayName = 'ProcessFlow';
export default ProcessFlow;