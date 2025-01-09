"use client"
import React, { memo } from 'react'
import Container from './Container'
import { 
  HiLightBulb, 
  HiCube, 
  HiCog, 
  HiTruck, 
  HiPencil, 
  HiTemplate, 
  HiClipboardCheck 
} from 'react-icons/hi';import { useInView } from 'react-intersection-observer'

// Pre-defined process steps data
const steps = [
  {
    icon: HiLightBulb,
    title: "Initial Consultation",
    description: "We collaborate with customers to understand their brand, product needs, and packaging goals. This covers details like size, shape, and closure systems, ensuring the final packaging fully meets their expectations and reflects their unique brand identity perfectly.",
    color: "from-emerald-400 via-amber-400 to-emerald-500",
    glow: "hover:shadow-emerald-500/50"
  },
  {
    icon: HiPencil, // You'll need to import this
    title: "Concept Development",
    description: "We transform customer ideas into detailed drawings with features like embossed logos or unique shapes. Using 2D or 3D visuals, we help customers clearly see and understand their packaging designs before moving forward with the production process.",
    color: "from-amber-400 via-emerald-400 to-amber-500",
    glow: "hover:shadow-amber-500/50"
  },
  {
    icon: HiCube,
    title: "Prototyping",
    description: "We create prototypes using 3D-printed plastic to test the design, check label fitting, and ensure proper functionality. This process helps us catch and fix any issues early, ensuring everything works correctly before starting full production with glass materials.",
    color: "from-emerald-400 via-amber-400 to-emerald-500",
    glow: "hover:shadow-emerald-500/50"
  },
  {
    icon: HiTemplate, // You'll need to import this
    title: "Mold Creation",
    description: "We create molds for glass components based on the approved design. These molds are essential for making glass bottles, ensuring the final product matches the customer's vision, meets their requirements, and is produced with high accuracy and quality.",
    color: "from-amber-400 via-emerald-400 to-amber-500",
    glow: "hover:shadow-amber-500/50"
  },
  {
    icon: HiCog,
    title: "Mass Production",
    description: "We begin making custom glass bottles using the final molds, closely watching every step of the process. This ensures each bottle is made with high quality, consistent results, and meets the customer’s requirements and expectations throughout production.",
    color: "from-emerald-400 via-amber-400 to-emerald-500",
    glow: "hover:shadow-emerald-500/50"
  },
  {
    icon: HiClipboardCheck, // You'll need to import this
    title: "Quality Inspection",
    description: "We use both automated and manual quality control methods to check every bottle, ensuring they meet all standards. This careful inspection guarantees that all bottles are perfect before they are packed and shipped to customers, ensuring satisfaction.",
    color: "from-amber-400 via-emerald-400 to-amber-500",
    glow: "hover:shadow-amber-500/50"
  },
  {
    icon: HiTruck,
    title: "Shipment",
    description: "We package the final products according to the customer’s specifications, making sure all custom design details are included. This ensures the products are ready for market launch, meeting all requirements and ensuring the customer’s satisfaction with the result.",
    color: "from-emerald-400 via-amber-400 to-emerald-500",
    glow: "hover:shadow-emerald-500/50"
  }
] as const;

// Memoized process step component
const ProcessStep = memo(({ step, index, isLast, delay }: {
  step: typeof steps[number];
  index: number;
  isLast: boolean;
  delay: number;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div ref={ref}
         className={`process-step relative flex flex-col 
                    ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} 
                    items-center gap-4 xs:gap-6 sm:gap-8 lg:gap-10 transition-all duration-700
                    ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
         style={{ transitionDelay: `${delay}ms` }}>
      
      {/* Icon Section */}
      <div className="w-full md:w-1/5 relative">
        <div className="absolute inset-[-50%] opacity-75">
          <div className="absolute inset-0 bg-gradient-radial from-[#336B44]/10 via-transparent to-transparent 
                         animate-pulse-slow" />
          <div className="absolute inset-[25%] bg-gradient-radial from-[#FFD700]/5 via-transparent to-transparent 
                         animate-pulse-slower" />
        </div>
        
        <div className="relative group">
          <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute inset-x-0 h-[1px] top-0 bg-gradient-to-r from-transparent via-[#FFD700]/20 to-transparent" />
            <div className="absolute inset-x-0 h-[1px] bottom-0 bg-gradient-to-r from-transparent via-[#FFD700]/20 to-transparent" />
            <div className="absolute inset-y-0 w-[1px] left-0 bg-gradient-to-b from-transparent via-[#FFD700]/20 to-transparent" />
            <div className="absolute inset-y-0 w-[1px] right-0 bg-gradient-to-b from-transparent via-[#FFD700]/20 to-transparent" />
          </div>
          
          <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full 
                         bg-gradient-to-br from-[#336B44] via-[#44875A] to-[#336B44]
                         flex items-center justify-center mx-auto 
                         shadow-lg shadow-[#336B44]/20
                         transition-all duration-700
                         group-hover:shadow-xl group-hover:shadow-[#336B44]/30
                         relative z-10 overflow-hidden
                         before:absolute before:inset-0
                         before:bg-gradient-to-br before:from-[#FFD700]/20 before:to-transparent
                         before:opacity-0 before:transition-opacity before:duration-700
                         group-hover:before:opacity-100`}>
            <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#FFD700] relative z-10
                                transition-all duration-700
                                group-hover:text-[#FFE55C] group-hover:scale-110
                                drop-shadow-[0_0_10px_rgba(255,215,0,0.3)]
                                animate-gentle-bounce" />
          </div>
          
          <div className="absolute inset-0 -z-10">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-[#FFD700]/30
                         animate-gentle-pulse"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(${Math.cos(i * Math.PI / 2) * 150}%, ${Math.sin(i * Math.PI / 2) * 150}%)`,
                  animationDelay: `${i * 0.5}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="w-full md:w-4/5">
        <div className="bg-[#336B44] backdrop-blur-md border border-[#7BAF7B]/30
                     shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                     rounded-xl p-4 xs:p-6 sm:p-8 lg:p-10 relative overflow-hidden
                     transition-all duration-700 hover:shadow-2xl
                     hover:scale-[1.02] hover:border-[#A8D9AC]/40
                     group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 
                         transition-opacity duration-500 group-hover:opacity-100" />
          <div className="absolute top-0 right-0 w-32 h-32 
                         bg-gradient-to-br from-[#A8D9AC]/15 to-transparent 
                         transition-opacity duration-500 group-hover:opacity-50" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 
                         bg-[#A8D9AC]/10 rounded-full blur-2xl
                         transition-opacity duration-500 group-hover:opacity-70" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-[#FFD700]/20 blur-md rounded-full" />
                <span className="text-[#FFD700] text-2xl sm:text-3xl font-bold relative">
                  {index + 1}.
                </span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold font-merriweather
                           bg-gradient-to-r from-[#FFD700] via-[#FFE55C] to-[#E5B700] 
                           bg-clip-text text-transparent
                           animate-gradient-x bg-[length:200%_auto]">
                {step.title}
              </h3>
            </div>
            
            <div className="relative pl-10">
              <div className="absolute left-0 top-0 bottom-0 w-0.5
                           bg-gradient-to-b from-[#FFD700]/30 to-transparent" />
              <p className="font-poppins text-base sm:text-lg text-white/90 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
          
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2
                         border-[#A8D9AC]/20 rounded-tl-xl" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2
                         border-[#A8D9AC]/20 rounded-tr-xl" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2
                         border-[#A8D9AC]/20 rounded-bl-xl" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2
                         border-[#A8D9AC]/20 rounded-br-xl" />
        </div>
      </div>
      
      {/* Connector Line */}
      {!isLast && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-4 xs:mt-6 sm:mt-8 hidden md:block">
          <div className="w-0.5 h-12 xs:h-14 sm:h-16 lg:h-20 bg-gradient-to-b from-[#336B44]/40 to-transparent
                       after:content-[''] after:absolute after:inset-0
                       after:bg-gradient-to-b after:from-[#336B44]/40 after:to-transparent
                       after:animate-pulse-slow" />
        </div>
      )}
    </div>
  );
});
ProcessStep.displayName = 'ProcessStep';

const ProcessFlowContent = memo(() => {
  return (
    <div className='w-full relative max-w-[1900px] mx-auto'>
      <div className="flex flex-col gap-8 xs:gap-12 sm:gap-16 lg:gap-20">
        {steps.map((step, index) => (
          <ProcessStep
            key={step.title}
            step={step}
            index={index}
            isLast={index === steps.length - 1}
            delay={index * 150}
          />
        ))}
      </div>
    </div>
  );
});

ProcessFlowContent.displayName = 'ProcessFlowContent';
export default ProcessFlowContent;