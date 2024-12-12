"use client"
import React, { memo, useCallback, useState } from 'react'
import Container from './Container'
import Image from 'next/image'
import { FaStar, FaChevronCircleDown } from "react-icons/fa"
import { useInView } from 'react-intersection-observer'

const supportDetails = [
  {
    title: "Pre-Sales Support",
    subtitle: "We seek information from our customers regarding:",
    items: [
      "Product to package and where to market",
      "Contents, ml/gram",
      "Constraints of plant equipment on design",
      "A desired profile of the product packaging",
      "Closure systems for opening/product stability"
    ]
  },
  {
    title: "After Sales Support",
    subtitle: "We work on these criteria:",
    items: [
      "Performance & yield, product handling",
      "Training on glass packaging",
      "Continuous improvement (Kaizen)"
    ]
  }
] as const;

const SupportAccordion = memo(({ title, subtitle, items, delay }: {
  title: string;
  subtitle: string;
  items: readonly string[];
  delay: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const handleClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const details = e.currentTarget.parentElement as HTMLDetailsElement;
    const content = details?.querySelector('.supportList') as HTMLDivElement;
    
    if (details) {
      content.style.transition = 'height 400ms cubic-bezier(0.4, 0, 0.2, 1)';
      
      if (details.hasAttribute('open')) {
        content.style.height = `${content.scrollHeight}px`;
        requestAnimationFrame(() => {
          content.style.height = '0px';
          setIsOpen(false);
        });
        
        setTimeout(() => {
          details.removeAttribute('open');
          content.style.transition = '';
        }, 400);
      } else {
        details.setAttribute('open', '');
        setIsOpen(true);
        const height = content.scrollHeight;
        content.style.height = '0px';
        requestAnimationFrame(() => {
          content.style.height = `${height}px`;
        });
        
        setTimeout(() => {
          content.style.height = 'auto';
          content.style.transition = '';
        }, 400);
      }
    }
  }, []);

  return (
    <details 
      ref={ref}
      className={`support-detail w-full rounded-[26px] p-4 sm:p-6 lg:p-8 
                bg-gradient-to-br from-lightBgColor via-lightBgColor to-lightBgColor/80
                backdrop-blur-md shadow-lg border-t border-l border-white/5
                transition-all duration-700 group
                relative isolate overflow-hidden animate-float
                before:absolute before:w-[200%] before:h-full
                before:bg-gradient-to-r before:from-transparent 
                before:via-darkYellow/20 before:to-transparent
                before:-left-full before:top-0 before:z-[-1]
                before:animate-shimmer
                hover:scale-[1.01] cursor-pointer
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        transform: 'translateZ(0)',
        animationDelay: `${delay}ms`,
      }}
    >
      <summary 
        onClick={handleClick}
        className={`headingBox w-full flex items-center justify-between relative
                   transition-all duration-300 hover:brightness-110
                   ${isOpen ? 'open' : ''}`}
      >
        <div className='flex gap-x-4 items-center'>
          <FaStar className='text-darkYellow sm:size-[25px] max-sm:size-[20px]'/>
          <h3 className='font-merriweather sm:text-2xl max-sm:text-xl text-darkYellow'>
            {title}
          </h3>
        </div>
        <FaChevronCircleDown className='text-darkYellow sm:size-[25px] max-sm:size-[20px] transition-transform duration-300 group-open:rotate-180'/>
      </summary>

      <div className='supportList mt-[26px] ml-1 mb-2 overflow-hidden will-change-[height]'>
        <h4 className='font-merriweather text-lightYellow sm:text-xl max-sm:text-lg mb-3'>
          {subtitle}
        </h4>
        <ul className='flex flex-col items-start list-disc marker:text-darkYellow pl-4 space-y-2'>
          {items.map((item, index) => (
            <li key={index} className='font-poppins max-sm:text-sm'>{item}</li>
          ))}
        </ul>
      </div>
    </details>
  );
});

SupportAccordion.displayName = 'SupportAccordion';

const OurSupportContent = memo(() => {
  const { ref: imageRef, inView: imageInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <Container>
      <div className='w-full flex justify-center items-center text-white py-4'>
        <div className='w-full grid grid-cols-12 gap-x-4 gap-y-8 relative z-[1]'>
          <div ref={imageRef} 
               className={`imgBox lg:col-span-6 max-lg:col-span-12 my-auto
                          transition-all duration-700
                          ${imageInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative my-auto">
              <Image
                alt='Professional glass packaging support services'
                height={382}
                width={575}
                src='/oursupport.jpg'
                className='relative rounded-[26px] object-cover object-center w-full h-auto 
                         shadow-[0_0_15px_rgba(0,0,0,0.2)]'
                priority
              />
            </div>
          </div>

          <div className='lg:col-span-6 col-span-12 flex flex-col items-start justify-center gap-y-4'>
            <div className="float-up w-full">
              <SupportAccordion
                {...supportDetails[0]}
                delay={0}
              />
            </div>
            
            <div className="float-down w-full">
              <SupportAccordion
                {...supportDetails[1]}
                delay={200}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
});

OurSupportContent.displayName = 'OurSupportContent';
export default OurSupportContent;