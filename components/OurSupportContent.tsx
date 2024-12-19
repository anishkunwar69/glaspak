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
    <div 
      ref={ref}
      className={`w-full rounded-2xl p-6 sm:p-8 lg:p-10
                bg-gradient-to-br from-emerald-900/20 to-darkBgColor/90 
                backdrop-blur-sm border border-emerald-500/10
                hover:border-emerald-500/20 transition-all duration-500
                group hover:-translate-y-1 shadow-lg hover:shadow-emerald-500/10
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative mb-6 pb-4 border-b border-emerald-500/10">
        <h2 className='font-merriweather text-2xl sm:text-3xl text-transparent 
                      bg-clip-text bg-gradient-to-r from-emerald-300 to-amber-300 
                      font-bold'>
          {title}
        </h2>
        <h3 className='font-poppins text-white/80 text-base sm:text-lg mt-2'>
          {subtitle}
        </h3>
      </div>

      <ul className='space-y-6'>
        {items.map((item, index) => (
          <li key={index} 
              className='font-poppins text-emerald-100/80 flex items-start gap-4
                       group-hover:text-emerald-100 transition-colors duration-300 
                       leading-relaxed text-[15px] sm:text-base'>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 
                         flex-shrink-0"></span>
            {item}
          </li>
        ))}
      </ul>
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
    <div className='grid lg:grid-cols-12 gap-8 lg:gap-12'>
      <div 
        ref={imageRef} 
        className={`lg:col-span-5 relative transition-all duration-700
                   ${imageInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
      >
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          <Image
            alt='Professional glass packaging support services at Glaspak'
            height={600}
            width={800}
            src='/oursupport.jpg'
            className='w-full h-[400px] sm:h-[500px] object-cover object-center 
                     transition-transform duration-700 group-hover:scale-105'
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-darkBgColor/90 
                       via-darkBgColor/20 to-transparent"></div>
        </div>
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 
                     to-amber-500/20 blur-2xl opacity-30 -z-10"></div>
      </div>

      <div className='lg:col-span-7 flex flex-col gap-6'>
        {supportDetails.map((detail, index) => (
          <SupportCard
            key={detail.title}
            {...detail}
            delay={index * 100}
          />
        ))}
      </div>
    </div>
  );
});

OurSupportContent.displayName = 'OurSupportContent';
export default OurSupportContent;