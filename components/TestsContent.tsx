"use client"
import React, { memo } from 'react'
import Container from './Container'
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
    description: "To ensure glass containers meet impact resistance requirements, we conduct tests following standard manufacturing practices using an industry-standard Pendulum Impact Tester",
    standard: "ASTM Standard",
    theme: "light"
  },
  {
    type: "02",
    title: "Thermal Shock Test",
    description: "Hot-filled or heat-treated glassware is tested for thermal shock resistance following ASTM C149 and BS EN ISO 7459 standards to ensure compliance with industry practices",
    standard: "ISO Certified",
    theme: "dark"
  },
  {
    type: "03",
    title: "Internal Pressure Resistance",
    description: "To ensure carbonated beverage bottles withstand internal pressure, they are designed and tested to endure the stress exerted by their contents over time",
    standard: "Industry Standard",
    theme: "light",
    isWide: true // Now this is properly typed
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
      className={`test-card w-full p-8 rounded-[26px] 
                ${isDark ? 'bg-darkYellow' : 'bg-lightBgColor'}
                border-2 border-transparent 
                ${isDark ? 'hover:border-green-500/30' : 'hover:border-darkYellow/30'}
                relative overflow-hidden transition-all duration-700
                ${card.isWide ? 'md:col-span-2 md:w-1/2' : ''}
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`absolute -top-20 -right-20 w-40 h-40 
                      ${isDark ? 'bg-green-500/5' : 'bg-darkYellow/5'} rounded-full`} />
      
      <span className={`text-xs font-poppins ${isDark ? 'text-lightBgColor/70' : 'text-darkYellow/70'} 
                       uppercase tracking-[0.2em] mb-2 block`}>
        Test Type {card.type}
      </span>
      
      <h3 className={`mb-6 font-merriweather font-semibold text-xl sm:text-2xl xl:text-3xl 
                    ${isDark ? 'text-lightBgColor' : 'text-darkYellow'} 
                    inline-block border-b-2 
                    ${isDark ? 'border-lightBgColor' : 'border-darkYellow'} 
                    pb-2 relative z-10`}>
        {card.title}
      </h3>
      
      <p className='font-poppins text-base sm:text-lg leading-relaxed relative z-10'>
        {card.description}
      </p>
      
      <div className={`mt-6 flex items-center gap-2 
                      ${isDark ? 'text-lightBgColor/70' : 'text-darkYellow/70'} 
                      text-sm relative z-10`}>
        <span className={`w-8 h-[1px] ${isDark ? 'bg-lightBgColor/30' : 'bg-darkYellow/30'}`} />
        <span>{card.standard}</span>
      </div>
    </div>
  );
});
TestCard.displayName = 'TestCard';

const TestsContent = memo(() => {
  return (
    <Container>
      <div className='w-full min-h-screen flex flex-col justify-center items-center text-white relative px-6 py-8 z-[1]'>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 
                       [&>*:last-child]:md:justify-self-center relative z-[3]'>
          {testCards.map((card, index) => (
            <TestCard 
              key={card.title} 
              card={card} 
              delay={index * 200} 
            />
          ))}
        </div>
      </div>
    </Container>
  )
});

TestsContent.displayName = 'TestsContent';
export default TestsContent;
