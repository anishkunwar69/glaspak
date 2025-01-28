"use client"
import React from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Container from '../Container';
import { motion } from 'framer-motion';
import { IoLeafOutline, IoInfiniteOutline, IoEarthOutline, IoShieldCheckmarkOutline, IoRefreshCircleOutline } from 'react-icons/io5';
import { FaRecycle } from "react-icons/fa";

const WhyGlass = () => {
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

  const itemVariants = {
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

  const benefits = [
    { 
      icon: IoLeafOutline,
      text: "Glass enhances the taste of everything you drink", 
      highlight: "enhances",
      color: "from-[#44875A]/20 to-[#2A5A36]/20"
    },
    { 
      icon: IoInfiniteOutline,
      text: "Reusable products support a sustainable way of living", 
      highlight: "sustainable way",
      color: "from-[#E8DED4]/30 to-[#DFD5CB]/30"
    },
    { 
      icon: IoEarthOutline,
      text: "Glass is made from all natural raw materials", 
      highlight: "natural",
      color: "from-[#E5EFDC]/30 to-[#E5EFDC]/20"
    },
    { 
      icon: IoShieldCheckmarkOutline,
      text: "Glass won't release harmful chemicals into anything", 
      highlight: "harmful chemicals",
      color: "from-[#44875A]/20 to-[#2A5A36]/20"
    },
  ];

  return (
    <motion.section
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative w-full bg-[#EDE5DB] py-8 sm:py-12 lg:py-16 overflow-hidden scroll-mt-20"
      ref={ref}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                     w-[120vw] max-w-[1300px] aspect-square rounded-full 
                     bg-gradient-to-tr from-[#E8DED4]/30 via-[#E5EFDC]/20 to-[#E8DED4]/30 
                     blur-3xl animate-slow-pulse" />
        
        <div className="absolute top-[10%] left-[8%] w-[25vw] h-[25vw] max-w-[350px] max-h-[350px]
                     rounded-full bg-[#E5EFDC]/10 blur-2xl animate-float-slow" />
        <div className="absolute bottom-[15%] right-[3%] w-[20vw] h-[20vw] max-w-[300px] max-h-[300px]
                     rounded-full bg-[#DFD5CB]/15 blur-2xl animate-float-slower" />
      </div>

      {/* Border Decorations */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r 
                   from-transparent via-[#3B7D46]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r 
                   from-transparent via-[#3B7D46]/20 to-transparent" />
      
      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            {/* Main Heading */}
            <motion.div 
              variants={itemVariants}
              className="mb-4 sm:mb-6 lg:mb-8"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-merriweather font-bold 
                         bg-gradient-to-r from-[#44875A] via-[#2A5A36] to-[#44875A] 
                         bg-clip-text text-transparent mb-4 sm:mb-6">
                Why Glass Packaging
              </h2>
              <div className="w-20 h-2 bg-gradient-to-r from-[#E8DED4] to-[#DFD5CB] rounded-full" />
            </motion.div>

            {/* Main Feature */}
            <motion.div
              variants={itemVariants}
              className="relative mb-8 sm:mb-10 lg:mb-12"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#E5EFDC]/50 to-[#E8DED4]/30 
                           rounded-3xl blur-xl transform -rotate-3" />
              <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl p-6 sm:p-8 lg:p-10 
                           border border-[#3B7D46]/10 shadow-xl shadow-[#2A5A36]/5">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full 
                               bg-gradient-to-br from-[#44875A] to-[#2A5A36] 
                               flex items-center justify-center mb-4 sm:mb-6 
                               shadow-lg shadow-[#2A5A36]/20">
                    <IoRefreshCircleOutline className="text-white w-8 h-8 sm:w-12 sm:h-12" />
                  </div>
                  <h3 className="text-center space-y-1 sm:space-y-2">
                    <span className="block text-xl sm:text-2xl text-[#2A5A36] font-medium">
                      Glass Packaging is
                    </span>
                    <span className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold 
                                 bg-gradient-to-r from-[#44875A] to-[#2A5A36] 
                                 bg-clip-text text-transparent flex items-center justify-center">
                      1
                      <div className="flex items-center justify-center gap-x-2">
                        <FaRecycle className="text-[#E5B700] animate-spin-slow" />
                        <FaRecycle className="text-[#E5B700] animate-spin-slow" />
                      </div>
                      %
                    </span>
                    <span className="block text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A5A36]">
                      Recyclable
                    </span>
                  </h3>
                  <p className="text-center text-[#3B7D46] font-medium mt-3 sm:mt-4 
                             text-base sm:text-lg">
                    Endlessly with no Loss to Purity Glass
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Benefits Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} 
                                rounded-2xl blur-sm transform transition-transform duration-300 
                                group-hover:scale-105`} />
                  <div className="relative bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-2xl 
                               border border-[#3B7D46]/10 h-full
                               transition-transform duration-300 group-hover:-translate-y-1">
                    <benefit.icon className="text-2xl sm:text-4xl text-[#E5B700] mb-3 sm:mb-4" />
                    <p className="text-[#2A5A36] text-base sm:text-lg">
                      {benefit.text.split(benefit.highlight).map((part, i, arr) => (
                        <React.Fragment key={i}>
                          {part}
                          {i < arr.length - 1 && (
                            <span className="font-semibold text-[#44875A]">
                              {benefit.highlight}
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Images */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {[1, 2].map((_, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="space-y-4 sm:space-y-6"
                  style={{ marginTop: index === 1 ? 'var(--mt, 0)' : 0 }}
                >
                  <div className="relative h-[400px] sm:h-[450px] lg:h-[450px] xl:h-[500px] rounded-2xl overflow-hidden 
                               transform hover:scale-105 transition-all duration-500
                               shadow-xl shadow-[#2A5A36]/10">
                    <Image
                      src={`/whyglass/${index === 1 ? '0013' : '0010'}.png`}
                      alt={`Sustainable glass packaging ${index === 1 ? 'with 80% recycled glass' : 'with 2-3% energy cost drop'}`}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t 
                                 from-[#2A5A36]/30 to-transparent" />
                  </div>
                  <div className="relative p-4 sm:p-6 bg-white/50 backdrop-blur-sm rounded-xl 
                               border border-[#3B7D46]/10">
                    <h4 className="text-lg sm:text-xl font-bold text-[#E5B700] mb-2">
                      {index === 1 ? '80% of Recovered Glass' : '2-3% Energy Cost Drop'}
                    </h4>
                    <p className="text-[#3B7D46] text-sm sm:text-base">
                      {index === 1 ? 'Containers are made into New Glass Bottles' : 'For Every 10% cullet used in manufacturing'}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
};

export default WhyGlass;