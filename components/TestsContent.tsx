"use client"
import React, { memo, useEffect, useState } from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

// Update the type definition to include isWide property
type TestCard = {
  type: string;
  title: string;
  description: string;
  standard: string;
  theme: 'light' | 'dark';
  isWide?: boolean; // Make isWide optional
}

// Pre-defined test cards data
const testCards: TestCard[] = [
  {
    type: "01",
    title: "Impact Test",
    description: "We test glass containers for impact resistance using standard manufacturing practices and an industry-approved Pendulum Impact Tester to ensure they meet required quality and safety standards.",
    standard: "ASTM Standard",
    theme: "light"
  },
  {
    type: "02",
    title: "Thermal Shock Test",
    description: "We test hot-filled or heat-treated glassware for thermal shock resistance using ASTM C149 and BS EN ISO 7459 standards, ensuring they meet industry practices and safety requirements effectively.",
    standard: "ISO Certified",
    theme: "dark"
  },
  {
    type: "03",
    title: "Internal Pressure Resistance",
    description: "Carbonated beverage bottles are specially designed to withstand internal pressure. They undergo thorough testing to ensure they handle stress from the contents, keeping their strength and durability over time.",
    standard: "Industry Standard",
    theme: "light"
  }
];

// Memoized test card component
const TestCard = memo(({ card, delay }: { 
  card: TestCard, 
  delay: number 
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const isDark = card.theme === 'dark';
  
  return (
    <div 
      ref={ref}
      className={`test-card w-full p-4 xs:p-6 sm:p-8 lg:p-10 rounded-[26px] 
                ${isDark ? 'bg-[#336B44]' : 'bg-[#336B44]'} 
                backdrop-blur-md border border-[#7BAF7B]/30
                shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                relative overflow-hidden transition-all duration-700
                hover:shadow-2xl hover:scale-[1.02] hover:border-[#A8D9AC]/40
                group
                ${card.isWide ? 'lg:col-span-2' : ''}
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Enhanced premium glass effect */}
      <div className="absolute top-0 right-0 w-32 h-32 
                    bg-gradient-to-br from-[#A8D9AC]/15 to-transparent 
                    transition-opacity duration-500 group-hover:opacity-50" 
           aria-hidden="true" />
      
      {/* Additional decorative elements */}
      <div className="absolute -top-12 -right-12 w-32 h-32 
                    bg-[#A8D9AC]/10 rounded-full blur-2xl
                    transition-opacity duration-500 group-hover:opacity-70" 
           aria-hidden="true" />

      <div className="relative z-10 space-y-3 xs:space-y-4 sm:space-y-6 lg:space-y-8">
        <span className="text-[10px] xs:text-xs font-poppins text-[#FFD700] 
                       uppercase tracking-[0.2em] mb-2 block">
          Test Type {card.type}
        </span>
        
        <h3 className="mb-3 xs:mb-4 sm:mb-6 font-merriweather font-semibold 
                      text-base xs:text-lg sm:text-xl md:text-2xl xl:text-3xl 
                      bg-gradient-to-r from-[#FFD700] to-[#E5B700]
                      bg-clip-text text-transparent
                      inline-block border-b-2 border-[#A8D9AC]/40
                      pb-2 relative z-10">
          {card.title}
        </h3>
        
        <p className='font-poppins text-xs xs:text-sm sm:text-base md:text-lg 
                     leading-relaxed relative z-10 text-white/90'>
          {card.description}
        </p>
        
        <div className={`mt-6 flex items-center gap-2 text-[#FFD700]/90 text-sm relative z-10`}>
          <span className="w-8 h-[1px] bg-[#A8D9AC]/40" />
          <span>{card.standard}</span>
        </div>
      </div>

      {/* Corner accents */}
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
TestCard.displayName = 'TestCard';

// New Image Slider Component
const ImageSlider = memo(() => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['/test/test1.png', '/test/test2.png', '/test/test3.png'];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div 
      ref={ref}
      className={`relative w-full h-full rounded-[26px] 
                bg-[#336B44] backdrop-blur-md border border-[#7BAF7B]/30
                shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden
                transition-all duration-700 group
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {/* Premium glass effect */}
      <div className="absolute top-0 right-0 w-32 h-32 
                    bg-gradient-to-br from-[#A8D9AC]/15 to-transparent 
                    transition-opacity duration-500 group-hover:opacity-50" 
           aria-hidden="true" />
      
      {/* Decorative blur effect */}
      <div className="absolute -top-12 -right-12 w-32 h-32 
                    bg-[#A8D9AC]/10 rounded-full blur-2xl
                    transition-opacity duration-500 group-hover:opacity-70" 
           aria-hidden="true" />

      {/* Corner accents */}
      <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2
                   border-[#A8D9AC]/40 rounded-tl-md" />
      <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2
                   border-[#A8D9AC]/40 rounded-tr-md" />
      <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2
                   border-[#A8D9AC]/40 rounded-bl-md" />
      <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2
                   border-[#A8D9AC]/40 rounded-br-md" />

      {/* Images */}
      <div className="relative w-full h-full">
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000
                      ${currentImage === index ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image
              src={src}
              alt={`Test image ${index + 1}`}
              fill
              className="object-cover object-center p-6 sm:p-8"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300
                      ${currentImage === index 
                        ? 'bg-[#FFD700] w-4' 
                        : 'bg-[#A8D9AC]/40'}`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
});

ImageSlider.displayName = 'ImageSlider';

const TestsContent = memo(() => {
  return (
    <div className='w-full relative max-w-[1900px] mx-auto'>
      <div className='w-full flex flex-col gap-4 xs:gap-6 sm:gap-8 lg:gap-10'>
        {/* First row - 2 cards with responsive gap and padding */}
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6 sm:gap-8 lg:gap-10'>
          {testCards.slice(0, 2).map((card, index) => (
            <TestCard 
              key={card.title} 
              card={card} 
              delay={index * 150} 
            />
          ))}
        </div>
        
        {/* Second row - 1 card with responsive width */}
        <div className='w-full flex justify-center'>
          <div className='w-full md:w-2/3 lg:w-1/2'>
            <TestCard 
              key={testCards[2].title} 
              card={testCards[2]} 
              delay={300} 
            />
          </div>
        </div>
      </div>
    </div>
  )
});

TestsContent.displayName = 'TestsContent';
export default TestsContent;
