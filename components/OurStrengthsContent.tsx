"use client"
import React, { memo } from 'react'
import Container from './Container'
import { LuPackageCheck } from "react-icons/lu";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { TbBulbFilled } from "react-icons/tb";
import { GiRunningShoe } from "react-icons/gi";
import { FaMoneyCheckAlt, FaShieldAlt } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';

// Pre-defined strength cards data for better performance
const strengthCards = [
  {
    Icon: LuPackageCheck,
    title: "Total Package Solution",
    description: "We offer a complete packaging solution for bottles, closures, and labels. Our team takes full accountability for ensuring the quality and performance of every package"
  },
  {
    Icon: HiMiniWrenchScrewdriver,
    title: "Customizable",
    description: "We provide customized products designed to meet the unique needs of each target market segment, taking full responsibility for their effectiveness and alignment with customer requirements."
  },
  {
    Icon: TbBulbFilled,
    title: "Smart Design",
    description: "We provide smart design solutions for your packaging, ensuring compatibility with your existing filling line tolerances and eliminating the need for additional equipment investments."
  },
  {
    Icon: GiRunningShoe,
    title: "Agile",
    description: "We provide the capability for short production runs, taking full accountability for meeting your specific requirements with precision and quality."
  },
  {
    Icon: FaMoneyCheckAlt,
    title: "Low Investment",
    description: "We offer low investment costs by providing molds directly to glass plants, taking full accountability for ensuring efficiency and quality in the process"
  },
  {
    Icon: FaShieldAlt,
    title: "Security And Network",
    description: "We ensure a secure and reliable supply through multiple plant locations, taking full accountability for meeting your production needs with consistency and efficiency"
  }
] as const;

// Memoized card component for better performance
const StrengthCard = memo(({ Icon, title, description, delay }: {
  Icon: typeof strengthCards[number]['Icon'];
  title: string;
  description: string;
  delay: number;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div 
      ref={ref}
      className={`strength-card group flex flex-col p-6 rounded-xl 
                bg-gradient-to-br from-lightBgColor/90 to-lightBgColor/70
                backdrop-blur-sm border border-white/5 shadow-lg
                relative overflow-hidden transition-all duration-700
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-darkYellow/20 to-transparent -z-[1]" />
      
      <div className='bg-darkGreen/30 self-start p-4 rounded-xl mb-4'>
        <Icon size={30} className="text-darkYellow"/>
      </div>
      <h3 className='font-merriweather font-medium text-darkYellow text-2xl mb-3'>{title}</h3>
      <p className='font-poppins text-white/90 leading-relaxed'>{description}</p>
    </div>
  );
});
StrengthCard.displayName = 'StrengthCard';

const OurStrengthsContent = memo(() => {
  return (
    <Container>
      <div className='w-full min-h-screen relative py-6'>
        <div className='relative z-[2] grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1200px] mx-auto'>
          {strengthCards.map((card, index) => (
            <StrengthCard
              key={card.title}
              Icon={card.Icon}
              title={card.title}
              description={card.description}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </Container>
  )
});

OurStrengthsContent.displayName = 'OurStrengthsContent';
export default OurStrengthsContent;



















{/* <div className=' col-span-4 border border-red-400 flex justify-center items-center'>
                    <div className='size-[250px] rounded-full border-[5px] flex justify-center items-center px-2'>
                        <div className='flex flex-col items-center gap-y-2'>
                            <LuPackageCheck size={26}/>
                            <h3 className='text-lg font-semibold font-merriweather'>Total Package Solution</h3>
                        </div>
                    </div>
                </div>
                <div className=' col-span-4 border border-purple-400'></div>
                <div className=' col-span-4 border border-darkYellow'></div>
            </div>
            <div className='w-full grid grid-cols-12'></div> */}