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
    description: "We offer complete packaging services for bottles, closures, and labels. We guarantee the quality and performance of each package, taking full responsibility to ensure it meets your needs."
  },
  {
    Icon: HiMiniWrenchScrewdriver,
    title: "Customizable",
    description: "We create custom products tailored to meet each market's needs. We ensure they perform well and fully match customer expectations, taking complete responsibility for their success."
  },
  {
    Icon: TbBulbFilled,
    title: "Smart Design",
    description: "We design smart packaging that fits your existing filling lines, helping you save money by avoiding extra equipment and ensuring everything works together without issues or delays."
  },
  {
    Icon: GiRunningShoe,
    title: "Agile",
    description: "We offer short production runs, taking full responsibility for meeting your exact needs with precision and ensuring high quality in every product we deliver to you."
  },
  {
    Icon: FaMoneyCheckAlt,
    title: "Low Investment",
    description: "We provide molds directly to glass plants, reducing investment costs. We take full responsibility for ensuring the process is efficient and the quality meets your expectations."
  },
  {
    Icon: FaShieldAlt,
    title: "Security And Network",
    description: "We guarantee a reliable supply from multiple plant locations, taking full responsibility for meeting your production needs with consistent quality and efficiency, ensuring your satisfaction every time."
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
    rootMargin: '50px 0px'  // Trigger slightly before element comes into view
  });

  return (
    <div ref={ref} 
         className={`h-full w-full
                    bg-[#336B44]
                    backdrop-blur-md border border-[#7BAF7B]/30
                    shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                    rounded-xl p-4 xs:p-6 sm:p-8 lg:p-10 relative overflow-hidden
                    hover:shadow-2xl
                    hover:scale-[1.02] hover:border-[#A8D9AC]/40 group
                    transition-transform duration-1000 ease-out will-change-transform
                    ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
         style={{ transitionDelay: `${delay}ms` }}>
      
      {/* Decorative elements remain same */}
      <div className="absolute top-0 right-0 w-32 h-32 
                    bg-gradient-to-br from-[#A8D9AC]/15 to-transparent 
                    transition-opacity duration-500 group-hover:opacity-50" 
           aria-hidden="true" />
      <div className="absolute -top-12 -right-12 w-32 h-32 
                    bg-[#A8D9AC]/10 rounded-full blur-2xl
                    transition-opacity duration-500 group-hover:opacity-70" 
           aria-hidden="true" />

      <div className="relative z-10">
        {/* New Premium Icon Styling */}
        <div className="relative w-16 h-16 group/icon">
          {/* Outer rotating ring */}
          <div className="absolute inset-[-4px] rounded-xl border border-[#A8D9AC]/20
                       transition-transform duration-700 ease-out
                       group-hover/icon:rotate-45" />
          
          {/* Inner rotating ring */}
          <div className="absolute inset-[-2px] rounded-xl border border-[#A8D9AC]/30
                       transition-transform duration-500 ease-out
                       group-hover/icon:rotate-90" />
          
          {/* Main icon background with glass effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#A8D9AC]/10 to-transparent
                       backdrop-blur-md rounded-xl
                       transition-all duration-500
                       group-hover/icon:from-[#A8D9AC]/20" />
          
          {/* Icon container */}
          <div className="relative h-full w-full flex items-center justify-center
                       bg-gradient-to-br from-[#2A5A36]/90 to-[#336B44]/90
                       rounded-xl border border-[#A8D9AC]/20
                       transition-all duration-500
                       group-hover/icon:border-[#A8D9AC]/40
                       group-hover/icon:shadow-[0_0_20px_rgba(168,217,172,0.2)]">
            
            {/* Animated background effect */}
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#A8D9AC]/10 to-transparent
                           translate-x-[-100%] group-hover/icon:translate-x-[100%]
                           transition-transform duration-1000 ease-in-out" />
            </div>
            
            {/* Icon with glow effect */}
            <Icon size={28} className="relative z-10 text-[#FFD700]
                                   transition-all duration-500
                                   group-hover/icon:scale-110
                                   drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]" />
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

        {/* Updated title styling to prevent breaking */}
        <h3 className='font-merriweather font-bold text-[24px] sm:text-[28px] md:text-[32px]
                    leading-tight tracking-wide mt-6 mb-6 whitespace-normal
                    drop-shadow-[0_2px_15px_rgba(154,205,158,0.2)]
                    transition-all duration-500
                    group-hover:translate-x-2
                    bg-gradient-to-r from-[#FFD700] to-[#E5B700]
                    bg-clip-text text-transparent'>
          {title}
        </h3>

        <p className='font-poppins text-sm sm:text-base lg:text-lg text-pretty hyphens-auto 
                   text-white/90 leading-relaxed
                   transition-all duration-500 group-hover:text-white'>
          {description}
        </p>
      </div>
    </div>
  );
});
StrengthCard.displayName = 'StrengthCard';

const OurStrengthsContent = memo(() => {
  return (
    <div className='w-full relative'>
      {/* Grid with matched bottom spacing from AboutUs2 */}
      <div className='relative z-[2] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                    gap-4 xs:gap-6 sm:gap-8 lg:gap-10
                    mb-6 xs:mb-8 sm:mb-12 lg:mb-16'>
        {strengthCards.map((card, index) => (
          <StrengthCard
            key={card.title}
            Icon={card.Icon}
            title={card.title}
            description={card.description}
            delay={index * 100} // Reduced delay between cards for smoother sequence
          />
        ))}
      </div>
    </div>
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