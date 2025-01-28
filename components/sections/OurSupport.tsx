// OurSupport.tsx
'use client'
import React, { memo } from 'react'
import dynamic from 'next/dynamic'
import { useInView } from 'react-intersection-observer'
import Container from '../Container'
import { motion } from 'framer-motion'

const OurSupportContent = dynamic(() => import('../OurSupportContent'), {
  ssr: true,
  loading: () => (
    <div className="animate-pulse bg-[#F5E6D3]/20 min-h-[600px] rounded-[26px]"
         role="progressbar"
         aria-label="Loading support content" />
  )
})

const BackgroundEffects = memo(() => (
  <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
    {/* Main gradient blob - matches OurServices2 positioning */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                   w-[120vw] max-w-[1300px] aspect-square rounded-full 
                   bg-gradient-to-tr from-[#F5E6D3]/30 via-[#E8D5BC]/20 to-[#DBC1A7]/30 
                   blur-3xl animate-slow-pulse" />
    
    {/* Decorative circles - matching OurServices2 positioning */}
    <div className="absolute top-[10%] right-[5%] w-64 h-64 
                   rounded-full bg-[#DBC1A7]/15 blur-2xl animate-float-slow" />
    <div className="absolute bottom-[10%] left-[5%] w-48 h-48 
                   rounded-full bg-[#E8D5BC]/20 blur-2xl animate-float-slow-reverse" />
    
    {/* Border lines - matching OurServices2 */}
    <div className="absolute top-0 left-0 w-full h-[1px]
                   bg-gradient-to-r from-transparent via-[#7BAF7B]/30 to-transparent" />
    <div className="absolute bottom-0 left-0 w-full h-[1px]
                   bg-gradient-to-r from-transparent via-[#7BAF7B]/30 to-transparent" />
    
    {/* Additional background patterns */}
    <div className="absolute inset-0 opacity-[0.03]"
         style={{
           backgroundImage: `linear-gradient(45deg, #7BAF7B 1px, transparent 1px), 
                           linear-gradient(-45deg, #7BAF7B 1px, transparent 1px)`,
           backgroundSize: '40px 40px'
         }} />
    
    <div className="absolute inset-0 opacity-[0.02]"
         style={{
           backgroundImage: `radial-gradient(#7BAF7B 1px, transparent 1px)`,
           backgroundSize: '20px 20px'
         }} />
  </div>
));

BackgroundEffects.displayName = 'BackgroundEffects';

const OurSupport = memo(() => {
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
      id="support"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative w-full bg-[#EDE5DB] py-8 sm:py-12 lg:py-16 overflow-hidden scroll-mt-20"
      aria-label="Customer Support Services"
    >
      <BackgroundEffects />

      <Container>
        <div className="relative z-[1]">
          <motion.div 
            variants={titleVariants}
            className="text-center mb-8 sm:mb-12 lg:mb-16 px-2 xs:px-4"
          >
            <motion.span 
              variants={titleVariants}
              className="text-sm sm:text-base font-poppins tracking-[0.4em] 
                     text-[#2A5A36] mb-5 uppercase relative inline-block
                     before:content-[''] before:absolute before:-bottom-2 before:left-1/2 
                     before:-translate-x-1/2 before:w-12 before:h-0.5 
                     before:bg-gradient-to-r before:from-transparent 
                     before:via-[#2A5A36]/70 before:to-transparent"
            >
              Customer Support
            </motion.span>

            <motion.h2 
              variants={titleVariants}
              className="text-3xl sm:text-4xl lg:text-5xl 
                      font-bold font-merriweather text-center mb-6
                      bg-gradient-to-r from-[#44875A] via-[#2A5A36] to-[#44875A] 
                      bg-clip-text text-transparent"
            >
              Elevating Your Experience
            </motion.h2>

            <motion.p 
              variants={titleVariants}
              className="font-poppins text-[#2A5A36]/90 max-w-2xl mx-auto 
                     text-sm sm:text-base leading-relaxed"
            >
              Dedicated support and innovative solutions for your glass packaging needs
            </motion.p>
          </motion.div>

          <motion.div 
            variants={titleVariants}
            className="mb-6 xs:mb-8 sm:mb-12 lg:mb-16"
          >
            <OurSupportContent />
          </motion.div>
        </div>
      </Container>
    </motion.section>
  )
});

OurSupport.displayName = 'OurSupport';
export default OurSupport;