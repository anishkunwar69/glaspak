"use client"
import React, { memo } from 'react'
import Container from '../Container'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Pre-defined services data
const services = [
  {
    image: "/services-images/ser1.png",
    title: "Creative Design Solutions Service"
  },
  {
    image: "/services-images/ser2.jpg",
    title: "Glass Filling Process Support"
  },
  {
    image: "/services-images/ser3.jpg",
    title: "Filling Line Equipment Support"
  },
  {
    image: "/services-images/ser4.png",
    title: "Glass Handling Technical Support"
  },
  {
    image: "/services-images/ser5.jpeg",
    title: "Customer-Driven Packaging Services"
  },
  {
    image: "/services-images/ser5.jpg",
    title: "Quality Excellence and Control"
  }
] as const;

// Updated service card component with Framer Motion
const ServiceCard = memo(({ image, title, index }: {
  image: string;
  title: string;
  index: number;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut"
      }}
      className="flex flex-col items-center gap-6 xs:gap-8"
    >
      {/* Image container with responsive sizing */}
      <motion.div 
        className="relative group/image"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {/* Decorative corner elements */}
        <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 
                     border-[#A8D9AC]/40 rounded-tl-xl" />
        <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 
                     border-[#A8D9AC]/40 rounded-tr-xl" />
        <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 
                     border-[#A8D9AC]/40 rounded-bl-xl" />
        <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 
                     border-[#A8D9AC]/40 rounded-br-xl" />

        {/* Outer rotating ring with glow */}
        <motion.div 
          className="absolute inset-[-8px] rounded-full border-2 border-[#A8D9AC]/20
                   shadow-[0_0_15px_rgba(168,217,172,0.2)]"
          animate={{ rotate: inView ? 360 : 0 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner rotating ring with enhanced glow */}
        <motion.div 
          className="absolute inset-[-4px] rounded-full border-2 border-[#A8D9AC]/30
                   shadow-[0_0_10px_rgba(168,217,172,0.3)]"
          animate={{ rotate: inView ? -360 : 0 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Enhanced image wrapper */}
        <motion.div 
          className="relative w-[160px] xs:w-[180px] sm:w-[200px] h-[160px] xs:h-[180px] sm:h-[200px] 
                   rounded-full overflow-hidden border-4 border-[#336B44]
                   shadow-[0_0_20px_rgba(51,107,68,0.3)]"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 160px, (max-width: 768px) 180px, 200px"
            quality={75}
            loading="eager"
            unoptimized
          />
          
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-[#336B44]/60 to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>

      <motion.h3 
        className="font-merriweather font-bold 
                text-xl xs:text-2xl sm:text-[26px] text-center
                bg-gradient-to-r from-[#FFD700] via-[#FFC000] to-[#E5B700]
                bg-clip-text text-transparent
                drop-shadow-[0_2px_15px_rgba(154,205,158,0.3)]
                max-w-[240px] xs:max-w-[280px] leading-tight"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.h3>
    </motion.div>
  );
});
ServiceCard.displayName = 'ServiceCard';

function OurServices2() {
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
      className="relative w-full bg-[#336B44] py-8 sm:py-12 lg:py-16 overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        {/* Main gradient blob */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                     w-[120vw] max-w-[1300px] aspect-square rounded-full 
                     bg-gradient-to-tr from-[#A8D9AC]/15 via-[#7BAF7B]/10 to-[#A8D9AC]/15 
                     blur-3xl animate-slow-pulse" />
        
        {/* Additional decorative elements */}
        <div className="absolute top-0 left-0 w-full h-[1px]
                     bg-gradient-to-r from-transparent via-[#A8D9AC]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px]
                     bg-gradient-to-r from-transparent via-[#A8D9AC]/30 to-transparent" />
        
        {/* Decorative circles */}
        <div className="absolute top-[10%] right-[5%] w-64 h-64 
                     rounded-full bg-[#A8D9AC]/5 blur-2xl animate-float-slow" />
        <div className="absolute bottom-[10%] left-[5%] w-48 h-48 
                     rounded-full bg-[#A8D9AC]/5 blur-2xl animate-float-slow-reverse" />
      </div>

      <Container>
        <div className="relative z-[1]">
          {/* Title Section */}
          <motion.div 
            variants={titleVariants}
            className="text-center mb-8 xs:mb-12 sm:mb-16 lg:mb-20 px-2 xs:px-4"
          >
            <motion.span 
              variants={titleVariants}
              className="text-sm sm:text-base font-poppins tracking-[0.4em] 
                       text-[#A8D9AC] mb-5 uppercase relative inline-block
                       before:content-[''] before:absolute before:-bottom-2 before:left-1/2 
                       before:-translate-x-1/2 before:w-12 before:h-0.5 
                       before:bg-gradient-to-r before:from-transparent 
                       before:via-[#A8D9AC]/70 before:to-transparent"
            >
              Our Services
            </motion.span>

            <motion.h2 
              variants={titleVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-merriweather 
                      text-center mb-6 text-white"
            >
              Comprehensive Support Solutions
            </motion.h2>

            <motion.p 
              variants={titleVariants}
              className="font-poppins text-white/90 max-w-3xl mx-auto 
                     text-sm sm:text-base leading-relaxed"
            >
              Elevating your brand with end-to-end packaging expertise. From design to implementation, 
              we deliver solutions that transform your vision into reality.
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                       gap-x-6 xs:gap-x-8 sm:gap-x-10 lg:gap-x-12
                       gap-y-16 xs:gap-y-20 sm:gap-y-24 lg:gap-y-20
                       mb-6 xs:mb-8 sm:mb-12 lg:mb-16">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                index={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </motion.section>
  )
}

export default memo(OurServices2)