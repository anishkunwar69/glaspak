// OurSupportContent.tsx
"use client"
import React, { memo } from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const supportDetails = [
  {
    title: "Pre-Sales Support",
    subtitle: "Our team offers thorough pre-sales assistance and support:",
    items: [
      <span key="1">
        <strong className="text-emerald-300">Requirements Analysis:</strong>{" "}
        Conducting consultations to understand your product needs and specifications for optimal packaging solutions.
      </span>,
      <span key="2">
        <strong className="text-emerald-300">Custom Solutions:</strong>{" "}
        Creating tailored packaging recommendations that align perfectly with your brand identity and manufacturing requirements.
      </span>,
      <span key="3">
        <strong className="text-emerald-300">Strategic Planning:</strong>{" "}
        Developing implementation strategies and ensuring clear communication throughout the process
      </span>
    ]
  },
  {
    title: "After Sales Support",
    subtitle: "Our commitment continues after the sale, focusing on:",
    items: [
      <span key="1">
        <strong className="text-emerald-300">Performance Optimization:</strong>{" "}
        Implementing advanced tracking systems to monitor product handling and maintain consistent quality metrics.
      </span>,
      <span key="2">
        <strong className="text-emerald-300">Technical Excellence:</strong>{" "}
        Providing comprehensive training programs on glass packaging best practices and advanced handling techniques.
      </span>,
      <span key="3">
        <strong className="text-emerald-300">Continuous Enhancement:</strong>{" "}
        Applying Kaizen principles to consistently improve processes and maximize operational efficiency.
      </span>
    ]
  }
] as const;

const SupportCard = memo(({ title, subtitle, items, delay }: {
  title: string;
  subtitle: string;
  items: readonly React.ReactNode[];
  delay: number;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: delay * 0.2
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{ scale: 1.02 }}
      className="w-full bg-[#336B44] backdrop-blur-md border border-[#7BAF7B]/30
               shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xl relative overflow-hidden
               transition-all duration-700 hover:shadow-2xl hover:border-[#A8D9AC]/40 group"
    >
      {/* Updated decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 
                    bg-gradient-to-br from-[#A8D9AC]/15 to-transparent 
                    transition-opacity duration-500 group-hover:opacity-50" 
           aria-hidden="true" />
      <div className="absolute -top-12 -right-12 w-32 h-32 
                    bg-[#A8D9AC]/10 rounded-full blur-2xl
                    transition-opacity duration-500 group-hover:opacity-70" 
           aria-hidden="true" />

      {/* Added consistent padding wrapper */}
      <div className="p-6 xs:p-8 sm:p-10 lg:p-12">
        <motion.div className="relative">
          {/* Updated divider styling */}
          <div className="absolute left-0 top-[40px] sm:top-[45px] md:top-[50px] w-full h-[1px]
                       bg-gradient-to-r from-[#A8D9AC]/40 via-transparent to-[#A8D9AC]/40" 
               aria-hidden="true" />
          
          {/* Updated title styling to match OurStrengthsContent */}
          <motion.h2 
            className="font-merriweather font-bold text-[24px] sm:text-[28px] md:text-[32px]
                    leading-tight tracking-wide mb-4
                    drop-shadow-[0_2px_15px_rgba(154,205,158,0.2)]
                    transition-all duration-500 group-hover:translate-x-2
                    bg-gradient-to-r from-[#FFD700] to-[#E5B700]
                    bg-clip-text text-transparent"
          >
            {title}
          </motion.h2>
          
          {/* Updated subtitle styling */}
          <motion.h3 
            className="font-poppins text-[#A8D9AC]/90 text-sm sm:text-base
                    transition-all duration-500 group-hover:text-[#A8D9AC]"
          >
            {subtitle}
          </motion.h3>
        </motion.div>

        <motion.ul className="space-y-4 xs:space-y-5 sm:space-y-6 mt-6 xs:mt-7 sm:mt-8">
          {items.map((item, index) => (
            <motion.li
              key={index}
              variants={listItemVariants}
              className="font-poppins text-sm sm:text-base text-pretty 
                       hyphens-auto text-white/90 leading-relaxed
                       transition-all duration-500 group-hover:text-white
                       relative pl-6 xs:pl-7 sm:pl-8 pr-2 xs:pr-3 sm:pr-4 
                       before:content-[''] before:absolute 
                       before:left-0 before:top-[0.6em] before:w-3 before:h-[2px]
                       before:bg-[#A8D9AC]/50 group-hover:before:bg-[#A8D9AC]
                       before:transition-colors before:duration-500"
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Added corner accents */}
      <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2
                   border-[#A8D9AC]/40 rounded-tl-md" />
      <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2
                   border-[#A8D9AC]/40 rounded-tr-md" />
      <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2
                   border-[#A8D9AC]/40 rounded-bl-md" />
      <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2
                   border-[#A8D9AC]/40 rounded-br-md" />
    </motion.div>
  );
});

SupportCard.displayName = 'SupportCard';

const OurSupportContent = memo(() => {
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

  const imageVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="w-full relative"
    >
      <div className="grid lg:grid-cols-12 gap-6 xs:gap-8 sm:gap-10 lg:gap-12 max-w-[1800px] mx-auto">
        <motion.div 
          variants={imageVariants}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-xl xs:rounded-2xl overflow-hidden 
                         aspect-[4/3] lg:aspect-[3/4] group">
            <Image
              alt='Professional glass packaging support services at Glaspak'
              height={600}
              width={800}
              src='/oursupport.jpg'
              className='w-full h-full object-cover object-center 
                       transition-transform duration-700 group-hover:scale-105'
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2A3A2E]/95 
                         via-[#336B44]/40 to-transparent"></div>
          </div>
        </motion.div>

        <div className="lg:col-span-7 flex flex-col gap-6 xs:gap-8 sm:gap-10 lg:gap-12">
          {supportDetails.map((detail, index) => (
            <SupportCard
              key={detail.title}
              {...detail}
              delay={index}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
});

OurSupportContent.displayName = 'OurSupportContent';
export default OurSupportContent;