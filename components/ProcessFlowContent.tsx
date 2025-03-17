"use client"
import React, { memo, useState } from 'react'
import Container from './Container'
import Image from 'next/image'
import { 
  HiLightBulb, 
  HiCube, 
  HiCog, 
  HiTruck, 
  HiPencil, 
  HiTemplate, 
  HiClipboardCheck 
} from 'react-icons/hi';
import { useInView } from 'react-intersection-observer'
import { motion, AnimatePresence } from 'framer-motion'

// Pre-defined process steps data with images
const steps = [
  {
    icon: HiLightBulb,
    title: "Initial Consultation",
    description: "We collaborate with customers to understand their brand, product needs, and packaging goals. This covers details like size, shape, and closure systems, ensuring the final packaging fully meets their expectations and reflects their unique brand identity perfectly.",
    color: "from-emerald-400 via-amber-400 to-emerald-500",
    glow: "hover:shadow-emerald-500/50",
    image: "/cd/cd1.jpeg"
  },
  {
    icon: HiPencil,
    title: "Concept Development",
    description: "We transform customer ideas into detailed drawings with features like embossed logos or unique shapes. Using 2D or 3D visuals, we help customers clearly see and understand their packaging designs before moving forward with the production process.",
    color: "from-amber-400 via-emerald-400 to-amber-500",
    glow: "hover:shadow-amber-500/50",
    image: "/cd/cd2.jpg"
  },
  {
    icon: HiCube,
    title: "Prototyping",
    description: "We create prototypes using 3D-printed plastic to test the design, check label fitting, and ensure proper functionality. This process helps us catch and fix any issues early, ensuring everything works correctly before starting full production with glass materials.",
    color: "from-emerald-400 via-amber-400 to-emerald-500",
    glow: "hover:shadow-emerald-500/50",
    image: "/cd/ser5.jpg"
  },
  {
    icon: HiTemplate,
    title: "Mold Creation",
    description: "We create molds for glass components based on the approved design. These molds are essential for making glass bottles, ensuring the final product matches the customer's vision, meets their requirements, and is produced with high accuracy and quality.",
    color: "from-amber-400 via-emerald-400 to-amber-500",
    glow: "hover:shadow-amber-500/50",
    image: "/cd/cd7.png"
  },
  {
    icon: HiCog,
    title: "Mass Production",
    description: "We begin making custom glass bottles using the final molds, closely watching every step of the process. This ensures each bottle is made with high quality, consistent results, and meets the customer's requirements and expectations throughout production.",
    color: "from-emerald-400 via-amber-400 to-emerald-500",
    glow: "hover:shadow-emerald-500/50",
    image: "/cd/ser4.jpg"
  },
  {
    icon: HiClipboardCheck,
    title: "Quality Inspection",
    description: "We use both automated and manual quality control methods to check every bottle, ensuring they meet all standards. This careful inspection guarantees that all bottles are perfect before they are packed and shipped to customers, ensuring satisfaction.",
    color: "from-amber-400 via-emerald-400 to-amber-500",
    glow: "hover:shadow-amber-500/50",
    image: "/cd/ser5.jpg"
  },
  {
    icon: HiTruck,
    title: "Shipment",
    description: "We package the final products according to the customer's specifications, making sure all custom design details are included. This ensures the products are ready for market launch, meeting all requirements and ensuring the customer's satisfaction with the result.",
    color: "from-emerald-400 via-amber-400 to-emerald-500",
    glow: "hover:shadow-emerald-500/50",
    image: "/cd/cd7.png"
  }
] as const;

// New component for step with integrated image
const PremiumProcessStep = memo(({ step, index, isLast }: {
  step: typeof steps[number];
  index: number;
  isLast: boolean;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: "0px 0px -100px 0px"
  });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative mb-12 sm:mb-16 lg:mb-20 last:mb-0"
    >
      {/* Main Content Container */}
      <div className={`relative grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10
                    ${isEven ? '' : 'lg:flex-row-reverse'}
                    transform transition-all duration-700
                    hover:scale-[1.02] hover:translate-y-[-4px]`}>
        {/* Image Section */}
        <div className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
          <div className="relative h-[300px] xs:h-[350px] md:h-[400px] lg:h-full w-full overflow-hidden 
                        rounded-2xl shadow-2xl group">
            <Image
              src={step.image}
              alt={step.title}
              fill
              className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
            />
            
            {/* Gold overlay on hover - kept */}
            <div className="absolute inset-0 bg-[#FFD700]/10 z-[5] mix-blend-overlay opacity-0 
                          group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Dark overlay at bottom for text readability - kept */}
            <div className="absolute bottom-0 left-0 w-full h-1/3 
                          bg-gradient-to-t from-black/60 to-transparent z-[8]" />
            
            {/* Title on hover - kept */}
            <div className="absolute bottom-4 left-4 z-[15] opacity-0 group-hover:opacity-100 
                          transition-opacity duration-500">
              <div className="flex items-center gap-2">
                <step.icon className="text-[#FFD700] h-6 w-6" />
                <h4 className="text-white text-lg md:text-xl font-medium font-merriweather">{step.title}</h4>
              </div>
            </div>
            
            {/* Decorative elements - kept */}
            <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 
                          border-white/20 rounded-tr-lg z-[12] opacity-0 group-hover:opacity-100 
                          transition-opacity duration-700 delay-100" />
            <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 
                          border-white/20 rounded-bl-lg z-[12] opacity-0 group-hover:opacity-100 
                          transition-opacity duration-700 delay-100" />
          </div>
        </div>

        {/* Content Section */}
        <div className={`relative ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className="bg-[#336B44] backdrop-blur-md border border-[#7BAF7B]/30
                        shadow-xl hover:shadow-2xl transition-all duration-500
                        rounded-2xl p-6 md:p-8 lg:p-10 relative overflow-hidden
                        hover:border-[#A8D9AC]/40 group">
            
            {/* Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-6 relative group/icon"
            >
              <div className="absolute -inset-4 rounded-full 
                            bg-gradient-to-r from-[#A8D9AC]/20 to-transparent 
                            animate-pulse-slow opacity-0 group-hover/icon:opacity-100 
                            transition-opacity duration-700" />
              
              <div className={`w-16 h-16 rounded-full 
                            bg-gradient-to-br from-[#2A5A36] to-[#336B44]
                            flex items-center justify-center
                            shadow-lg shadow-[#2A5A36]/30
                            transition-all duration-700
                            group-hover/icon:shadow-xl group-hover/icon:shadow-[#2A5A36]/40
                            relative z-10 overflow-hidden`}>
                <step.icon className="w-8 h-8 text-[#FFD700] relative z-10
                                  transition-all duration-700
                                  group-hover/icon:text-[#FFE55C] group-hover/icon:scale-110
                                  drop-shadow-[0_0_10px_rgba(255,215,0,0.3)]" />
              </div>
            </motion.div>
            
            {/* Title */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-2xl md:text-3xl font-bold font-merriweather mb-4
                       bg-gradient-to-r from-[#FFD700] to-[#E5B700]
                       bg-clip-text text-transparent"
            >
              {step.title}
            </motion.h3>
            
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="relative pl-4 border-l-2 border-[#A8D9AC]/40"
            >
              <p className="font-poppins text-white/90 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
            
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2
                          border-[#7BAF7B]/30 rounded-tl-xl" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2
                          border-[#7BAF7B]/30 rounded-tr-xl" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2
                          border-[#7BAF7B]/30 rounded-bl-xl" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2
                          border-[#7BAF7B]/30 rounded-br-xl" />
                          
            {/* Glow effects */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2
                          w-32 h-32 rounded-full bg-[#A8D9AC]/15 blur-3xl
                          opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
        </div>
      </div>
      
      {/* Connector Line */}
      {!isLast && (
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={inView ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute left-1/2 transform -translate-x-1/2 
                   h-8 sm:h-10 lg:h-12 w-0.5 z-[5]
                   bottom-0 translate-y-1/2"
        >
          <div className="h-full w-full bg-gradient-to-b from-[#336B44] to-[#336B44]/20 
                       relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#FFD700]/30 to-transparent
                         animate-pulse-slow" />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
});

PremiumProcessStep.displayName = 'PremiumProcessStep';

const ProcessFlowContent = memo(() => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div ref={ref} className='w-full relative max-w-[1900px] mx-auto px-4 sm:px-6 lg:px-8'>
      <div className="relative">
        {/* Decorative Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 
                      bg-gradient-to-b from-[#336B44]/70 via-[#336B44]/30 to-transparent
                      hidden lg:block" />
                      
        {/* Process Steps */}
        <div className="flex flex-col relative z-10">
          {steps.map((step, index) => (
            <PremiumProcessStep
              key={step.title}
              step={step}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

ProcessFlowContent.displayName = 'ProcessFlowContent';
export default ProcessFlowContent;