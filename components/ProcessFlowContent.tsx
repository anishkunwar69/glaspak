"use client"
import React, { memo } from 'react'
import Container from './Container'
import { HiLightBulb, HiCube, HiBeaker, HiCog, HiTruck } from 'react-icons/hi'
import { useInView } from 'react-intersection-observer'

// Pre-defined process steps data
const steps = [
  {
    icon: HiLightBulb,
    title: "Idea",
    description: "The customer develops a glass design concept and checks for any functional or practical limitations.",
    color: "from-emerald-400 via-amber-400 to-emerald-500",
    glow: "hover:shadow-emerald-500/50"
  },
  {
    icon: HiCube,
    title: "3D Design/2D Mockup",
    description: "A digital mockup is created to visualize the design in 3D or 2D. If not approved, changes are made until it meets expectations.",
    color: "from-amber-400 via-emerald-400 to-amber-500",
    glow: "hover:shadow-amber-500/50"
  },
  {
    icon: HiBeaker,
    title: "Trial Mould",
    description: "A prototype mould is produced to test the design and functionality. Revisions are made if necessary.",
    color: "from-emerald-400 via-amber-400 to-emerald-500",
    glow: "hover:shadow-emerald-500/50"
  },
  {
    icon: HiCog,
    title: "Production",
    description: "Once the trial mould is finalized and approved, full-scale production of the glass begins.",
    color: "from-amber-400 via-emerald-400 to-amber-500",
    glow: "hover:shadow-amber-500/50"
  },
  {
    icon: HiTruck,
    title: "Shipment",
    description: "The completed glass products are packaged carefully and shipped to the customer.",
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
    <div
      ref={ref}
      className={`process-step flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} 
                 items-center gap-8 transition-all duration-700
                 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-full md:w-1/3">
        <div
          className={`w-24 h-24 rounded-full bg-gradient-to-r ${step.color} 
                     flex items-center justify-center mx-auto 
                     shadow-lg shadow-emerald-500/20
                     transition-all duration-300 ease-in-out
                     hover:shadow-xl ${step.glow}
                     hover:scale-110
                     relative
                     group`}
        >
          <step.icon className="w-12 h-12 text-darkBgColor relative z-10
                              transition-transform duration-300 ease-in-out
                              group-hover:scale-110" />
          <div className="absolute inset-0 rounded-full bg-white/10 
                        opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 ease-in-out" />
        </div>
      </div>
      
      <div className="w-full md:w-2/3">
        <div
          className="bg-gradient-to-br from-emerald-900/10 to-darkBgColor/90 
                     backdrop-blur-lg rounded-xl p-8 
                     hover:from-emerald-900/20 hover:to-darkBgColor 
                     transition-all duration-300 shadow-xl 
                     border border-emerald-500/10"
        >
          <h3 className="text-2xl font-bold font-merriweather text-white mb-4 flex items-center gap-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r 
                           from-emerald-300 via-amber-300 to-emerald-400">
              {index + 1}.
            </span>
            {step.title}
          </h3>
          <p className="font-poppins text-emerald-100/80 leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
      
      {!isLast && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-8 hidden md:block overflow-hidden"
             aria-hidden="true">
          <div className="w-0.5 bg-gradient-to-b from-emerald-500 via-amber-400 
                        to-transparent h-16" />
        </div>
      )}
    </div>
  );
});
ProcessStep.displayName = 'ProcessStep';

const ProcessFlowContent = memo(() => {
  return (
    <Container>
      <div className='w-full min-h-screen px-4'>
        <div className="flex flex-col gap-16 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.title}
              step={step}
              index={index}
              isLast={index === steps.length - 1}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </Container>
  )
});

ProcessFlowContent.displayName = 'ProcessFlowContent';
export default ProcessFlowContent;