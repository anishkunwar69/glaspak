// OurSupportContent.tsx
"use client"
import React, { memo } from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

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

  return (
    <div ref={ref} 
         className={`h-full w-full
                    bg-[#336B44] 
                    backdrop-blur-md border border-[#7BAF7B]/30
                    shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                    rounded-xl p-4 xs:p-6 sm:p-8 lg:p-10 relative overflow-hidden
                    transition-all duration-700 hover:shadow-2xl
                    hover:scale-[1.02] hover:border-[#A8D9AC]/40 group
                    ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
         style={{ transitionDelay: `${delay}ms` }}>
      
      {/* Updated decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 
                    bg-gradient-to-br from-[#A8D9AC]/15 to-transparent 
                    transition-opacity duration-500 group-hover:opacity-50" 
           aria-hidden="true" />
      <div className="absolute -top-12 -right-12 w-32 h-32 
                    bg-[#A8D9AC]/10 rounded-full blur-2xl
                    transition-opacity duration-500 group-hover:opacity-70" 
           aria-hidden="true" />

      <div className="relative">
        {/* Updated divider styling */}
        <div className="absolute left-0 top-[45px] sm:top-[55px] md:top-[65px] w-full h-[1px]
                     bg-gradient-to-r from-[#A8D9AC]/40 via-transparent to-[#A8D9AC]/40" 
             aria-hidden="true" />
        
        {/* Updated title styling with increased boldness */}
        <h2 className='font-merriweather font-extrabold text-[28px] sm:text-[32px] md:text-[36px]
                    leading-none tracking-wide mb-4
                    drop-shadow-[0_2px_15px_rgba(154,205,158,0.2)]
                    transition-all duration-500
                    group-hover:translate-x-2
                    bg-gradient-to-r from-[#FFD700] to-[#E5B700]
                    bg-clip-text text-transparent'>
          {title}
        </h2>
        
        {/* Updated subtitle styling */}
        <h3 className='font-poppins text-[#A8D9AC]/90 text-base sm:text-lg
                    transition-all duration-500 group-hover:text-[#A8D9AC]'>
          {subtitle}
        </h3>
      </div>

      {/* Updated list styling with consistent padding */}
      <ul className='space-y-6 xl:space-y-8 mt-8 xl:mt-10'>
        {items.map((item, index) => (
          <li key={index} 
              className='font-poppins text-sm sm:text-base lg:text-lg text-pretty 
                       hyphens-auto text-white/90 leading-relaxed
                       transition-all duration-500 group-hover:text-white
                       relative pl-6 pr-4 before:content-[""] before:absolute 
                       before:left-0 before:top-[0.6em] before:w-3 before:h-[2px]
                       before:bg-[#A8D9AC]/50 group-hover:before:bg-[#A8D9AC]
                       before:transition-colors before:duration-500'>
            {item}
          </li>
        ))}
      </ul>

      {/* Added corner accents */}
      <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2
                   border-[#A8D9AC]/40 rounded-tl-md" />
      <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2
                   border-[#A8D9AC]/40 rounded-tr-md" />
      <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2
                   border-[#A8D9AC]/40 rounded-bl-md" />
      <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2
                   border-[#A8D9AC]/40 rounded-br-md" />
    </div>
  );
});

SupportCard.displayName = 'SupportCard';

const OurSupportContent = memo(() => {
  const { ref: imageRef, inView: imageInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div className='w-full relative'>
      <div className='grid lg:grid-cols-12 gap-6 xs:gap-8 sm:gap-10 lg:gap-12 max-w-[1800px] mx-auto'>
        <div ref={imageRef} 
             className={`lg:col-span-5 relative transition-all duration-700
                        ${imageInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
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
        </div>

        <div className='lg:col-span-7 flex flex-col gap-4 xs:gap-6 sm:gap-8 lg:gap-10'>
          {supportDetails.map((detail, index) => (
            <SupportCard
              key={detail.title}
              {...detail}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

OurSupportContent.displayName = 'OurSupportContent';
export default OurSupportContent;