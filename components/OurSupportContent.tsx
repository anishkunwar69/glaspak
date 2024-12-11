"use client"
import React, { memo, useCallback, useState, useRef } from 'react'
import Container from './Container'
import Image from 'next/image'
import { FaStar, FaChevronCircleDown } from "react-icons/fa"
import { useInView } from 'react-intersection-observer'

// Pre-defined support details for better performance
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

// Memoized accordion component for better performance
const SupportAccordion = memo(({ title, subtitle, items, delay }: {
  title: string;
  subtitle: string;
  items: readonly string[];
  delay: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const handleClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const details = e.currentTarget.parentElement as HTMLDetailsElement;
    const content = contentRef.current;
    
    if (!details || !content) return;

    if (content.style.transition) return;

    const animate = () => {
      content.style.transition = 'height 300ms ease-in-out';
      
      if (details.hasAttribute('open')) {
        const startHeight = content.scrollHeight;
        content.style.height = `${startHeight}px`;
        
        content.offsetHeight;
        
        content.style.height = '0px';
        setIsOpen(false);
        
        const onTransitionEnd = () => {
          details.removeAttribute('open');
          content.style.transition = '';
          content.removeEventListener('transitionend', onTransitionEnd);
        };
        
        content.addEventListener('transitionend', onTransitionEnd, { once: true });
      } else {
        details.setAttribute('open', '');
        setIsOpen(true);
        
        const targetHeight = content.scrollHeight;
        
        content.style.height = '0px';
        
        content.offsetHeight;
        
        content.style.height = `${targetHeight}px`;
        
        const onTransitionEnd = () => {
          content.style.height = 'auto';
          content.style.transition = '';
          content.removeEventListener('transitionend', onTransitionEnd);
        };
        
        content.addEventListener('transitionend', onTransitionEnd, { once: true });
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <details 
      ref={ref}
      className={`support-detail w-full rounded-[26px] p-4 sm:p-6 lg:p-8 
                bg-gradient-to-br from-lightBgColor via-lightBgColor to-lightBgColor/80
                backdrop-blur-md shadow-lg border-t border-l border-white/5
                transition-all duration-700 group
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <summary 
        onClick={handleClick}
        className={`headingBox w-full flex items-center justify-between relative cursor-pointer
                   ${isOpen ? 'open' : ''}`}
      >
        <div className='flex gap-x-4 items-center'>
          <FaStar className='text-darkYellow sm:size-[25px] max-sm:size-[20px]'/>
          <h3 className='font-merriweather sm:text-2xl max-sm:text-xl text-darkYellow'>
            {title}
          </h3>
        </div>
        <FaChevronCircleDown 
          className={`text-darkYellow sm:size-[25px] max-sm:size-[20px] 
                     transition-transform duration-300
                     ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </summary>

      <div 
        ref={contentRef}
        className='supportList mt-[26px] ml-1 mb-2 overflow-hidden'
      >
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
            {supportDetails.map((detail, index) => (
              <SupportAccordion
                key={detail.title}
                {...detail}
                delay={index * 200}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
});

OurSupportContent.displayName = 'OurSupportContent';
export default OurSupportContent;