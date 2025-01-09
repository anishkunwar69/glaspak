"use client"
import React, { memo } from 'react'
import { useInView } from 'react-intersection-observer'
import Container from '../Container'
import Image from 'next/image'
import { MdRecycling } from "react-icons/md"
import { GiWineGlass } from "react-icons/gi"
import { IoLeafSharp } from "react-icons/io5"
import { FaShieldHeart } from "react-icons/fa6"
import { motion, useSpring } from "framer-motion"

// Update the background effects for a more subtle and modern look
const BackgroundEffects = memo(() => (
  <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
    {/* Modernized gradient sphere */}
    <motion.div 
      animate={{ 
        scale: [1, 1.02, 1],
        rotate: [0, 2, 0] 
      }}
      transition={{ 
        duration: 15, 
        repeat: Infinity,
        ease: "linear" 
      }}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                 w-[150vw] max-w-[1500px] aspect-square rounded-full 
                 bg-gradient-to-tr from-[#2A5A36]/10 via-white/30 to-[#E6B800]/10 
                 blur-[100px]" />
    
    {/* Subtle glass-like pattern */}
    <div className="absolute inset-0 opacity-[0.05] mix-blend-soft-light"
         style={{
           backgroundImage: `linear-gradient(45deg, #2A5A36 1px, transparent 1px),
                           linear-gradient(-45deg, #2A5A36 1px, transparent 1px)`,
           backgroundSize: '60px 60px'
         }} />
  </div>
));
BackgroundEffects.displayName = 'BackgroundEffects';

// Add this new component for the animated bar chart
const AnimatedBar = ({ value, delay }: { value: number, delay: number }) => {
  const scaleX = useSpring(0, {
    duration: 1.5,
    bounce: 0.3
  });

  React.useEffect(() => {
    scaleX.set(value);
  }, [scaleX, value]);

  return (
    <motion.div 
      style={{ scaleX, originX: 0 }}
      className="h-2 bg-[#E6B800] rounded-full"
    />
  );
};

const WhyGlass = memo(() => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const benefits = [
    {
      icon: GiWineGlass,
      title: "Superior Taste",
      description: "Everything tastes better in glass, preserving the authentic flavor of contents"
    },
    {
      icon: IoLeafSharp,
      title: "All Natural",
      description: "Made from natural raw materials, glass is pure and environmentally friendly"
    },
    {
      icon: FaShieldHeart,
      title: "Safe & Clean",
      description: "Glass will not leach harmful chemicals, ensuring product safety"
    },
    {
      icon: MdRecycling,
      title: "100% Recyclable",
      description: "Endlessly recyclable with no loss to purity, creating a sustainable cycle"
    }
  ];

  return (
    <motion.section 
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative w-full bg-[#EDE5DB] 
                 py-8 sm:py-12 lg:py-16 overflow-hidden scroll-mt-20"
    >
      <BackgroundEffects />
      
      <Container>
        <div className="relative z-[1]">
          {/* Header with matched spacing from AboutUs2 */}
          <div className={`text-center mb-6 xs:mb-8 sm:mb-12 lg:mb-16 px-2 xs:px-4 
                        transition-all duration-700
                        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-[10px] xs:text-xs sm:text-sm md:text-base font-poppins tracking-[0.3em] xs:tracking-[0.4em] 
                         text-[#2A5A36] mb-3 xs:mb-4 sm:mb-5 uppercase relative inline-block
                         before:content-[''] before:absolute before:-bottom-2 before:left-1/2 
                         before:-translate-x-1/2 before:w-8 xs:before:w-12 before:h-0.5 
                         before:bg-gradient-to-r before:from-transparent 
                         before:via-[#2A5A36]/70 before:to-transparent">
              The Future of Packaging
            </span>

            <div className="relative">
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 xs:w-12 h-[2px] 
                           bg-gradient-to-r from-[#2A5A36]/40 to-transparent hidden lg:block" />
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 xs:w-12 h-[2px] 
                           bg-gradient-to-l from-[#2A5A36]/40 to-transparent hidden lg:block" />

              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                          font-bold font-merriweather text-center mb-2 xs:mb-3 sm:mb-4
                          bg-gradient-to-r from-[#44875A] via-[#2A5A36] to-[#44875A] 
                          bg-clip-text text-transparent relative
                          animate-gradient-x bg-[length:200%_auto]
                          drop-shadow-[0_2px_4px_rgba(42,90,54,0.2)]">
                Why Choose Glass
              </h2>
            </div>

            <p className="font-poppins text-[#2A5A36] max-w-2xl mx-auto 
                       text-[10px] xs:text-xs sm:text-sm md:text-base leading-relaxed
                       drop-shadow-[0_1px_2px_rgba(42,90,54,0.1)]
                       font-medium px-2">
              Premium, sustainable, and timeless packaging solutions
            </p>
          </div>

          {/* Benefits and Stats grid with matched spacing */}
          <div className="grid lg:grid-cols-12 gap-4 xs:gap-6 sm:gap-8 lg:gap-12 mb-6 xs:mb-8 sm:mb-12 lg:mb-16 px-2 xs:px-4">
            {/* Benefits column */}
            <div className="lg:col-span-7 space-y-4 xs:space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  whileHover={{ scale: 1.01 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/40 backdrop-blur-sm rounded-xl xs:rounded-2xl p-4 xs:p-6
                           hover:bg-white/60 transition-all duration-300
                           border border-white/50 shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-center gap-3 xs:gap-6">
                    <div className="flex-shrink-0 w-10 h-10 xs:w-14 xs:h-14 rounded-lg xs:rounded-xl
                                bg-gradient-to-br from-[#2A5A36] to-[#44875A]
                                flex items-center justify-center
                                shadow-lg shadow-[#2A5A36]/20">
                      <benefit.icon className="text-xl xs:text-2xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg xs:text-xl sm:text-2xl font-merriweather font-bold mb-1 xs:mb-2 
                                 text-[#2A5A36]">
                        {benefit.title}
                      </h3>
                      <p className="text-[#2A5A36]/70 text-sm xs:text-base sm:text-lg">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="lg:col-span-5 bg-gradient-to-br from-[#2A5A36] to-[#44875A] 
                        backdrop-blur-sm rounded-xl xs:rounded-2xl p-4 xs:p-6 sm:p-8 lg:p-10
                        border border-white/20 shadow-xl"
            >
              <h3 className="text-xl xs:text-2xl font-merriweather font-bold mb-6 xs:mb-8 text-white">
                Glass Recycling Impact
              </h3>
              <div className="space-y-6 xs:space-y-8">
                {[
                  { 
                    value: 0.8, 
                    percentage: "80%", 
                    text: "Recovered Glass Made into New Bottles",
                    description: "Most recovered glass is recycled into new containers"
                  },
                  { 
                    value: 0.65, 
                    percentage: "65%", 
                    text: "Collection Rate in EU",
                    description: "European glass collection for recycling"
                  },
                  { 
                    value: 0.33, 
                    percentage: "33%", 
                    text: "CO₂ Reduction",
                    description: "Lower carbon footprint compared to virgin materials"
                  }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-baseline mb-2">
                      <p className="text-white font-medium text-sm xs:text-base">{stat.text}</p>
                      <span className="text-[#E6B800] text-xl xs:text-2xl font-bold">
                        {stat.percentage}
                      </span>
                    </div>
                    
                    <div className="bg-white/10 rounded-full w-full">
                      <AnimatedBar value={stat.value} delay={index * 0.2} />
                    </div>
                    
                    <p className="text-white/70 text-xs xs:text-sm">
                      {stat.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Additional sustainability highlight */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="mt-6 xs:mt-8 p-3 xs:p-4 bg-white/10 rounded-lg xs:rounded-xl border border-white/20"
              >
                <div className="flex items-center gap-2 xs:gap-3">
                  <div className="p-1.5 xs:p-2 bg-[#E6B800] rounded-md xs:rounded-lg">
                    <MdRecycling className="text-xl xs:text-2xl text-[#2A5A36]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm xs:text-base">Infinite Recyclability</h4>
                    <p className="text-white/70 text-xs xs:text-sm">
                      Glass can be recycled endlessly without loss in quality
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </motion.section>
  )
});

WhyGlass.displayName = 'WhyGlass';
export default WhyGlass;
