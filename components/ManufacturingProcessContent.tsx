'use client';
import React, { memo, useCallback, useState } from 'react';
import Container from './Container';
import { FaFlask, FaBalanceScale, FaFire, FaIndustry, FaTemperatureLow, FaSearchPlus, FaBox } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { useInView } from 'react-intersection-observer';

interface Step {
  icon: IconType;
  title: string;
  description: string;
  color: string;
}

// Pre-defined steps data
const steps: readonly Step[] = [
  {
    icon: FaFlask,
    title: "Raw Materials Collection",
    description: "Silica sand, soda ash, limestone, and recycled glass (cullet) are the primary ingredients.",
    color: "from-emerald-400 to-emerald-600"
  },
  {
    icon: FaBalanceScale,
    title: "Batching",
    description: "Ingredients are measured and mixed for consistency based on the desired glass type.",
    color: "from-amber-400 to-amber-600"
  },
  {
    icon: FaFire,
    title: "Melting",
    description: "The mixture is heated in a furnace to around 1,700°C to form molten glass.",
    color: "from-emerald-400 to-emerald-600"
  },
  {
    icon: FaIndustry,
    title: "Forming",
    description: "The molten glass is shaped into products via methods like floating (flat glass), blowing (bottles), or pressing (plates).",
    color: "from-amber-400 to-amber-600"
  },
  {
    icon: FaTemperatureLow,
    title: "Annealing",
    description: "The glass cools slowly in an oven to eliminate stress and prevent defects.",
    color: "from-emerald-400 to-emerald-600"
  },
  {
    icon: FaSearchPlus,
    title: "Quality Control",
    description: "Products are inspected for flaws; rejected pieces are recycled.",
    color: "from-amber-400 to-amber-600"
  },
  {
    icon: FaBox,
    title: "Packaging and Distribution",
    description: "The approved glass is securely packaged and sent to retailers or manufacturers.",
    color: "from-emerald-400 to-emerald-600"
  }
] as const;

// Memoized step indicator component
const StepIndicator = memo(({ index, activeStep, total }: { 
  index: number; 
  activeStep: number; 
  total: number; 
}) => (
  <div
    className={`w-2 h-2 rounded-full transition-all duration-300 ${
      index === activeStep ? 'bg-emerald-500 scale-125' : 'bg-emerald-500/30'
    }`}
    role="tab"
    aria-selected={index === activeStep}
    aria-label={`Step ${index + 1} of ${total}`}
  />
));
StepIndicator.displayName = 'StepIndicator';

// Memoized timeline step component
const TimelineStep = memo(({ step, index, activeStep, onClick }: {
  step: typeof steps[number];
  index: number;
  activeStep: number;
  onClick: () => void;
}) => {
  const StepIconComponent = step.icon;
  
  return (
    <div
      className={`timeline-step cursor-pointer group opacity-0 translate-x-10 transition-all duration-700`}
      onClick={onClick}
      role="tab"
      aria-selected={activeStep === index}
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      <div className={`p-3 md:p-4 rounded-lg transition-all duration-300 ${
        activeStep === index 
          ? 'bg-gradient-to-r from-emerald-900/40 to-amber-900/40 border border-emerald-500/20' 
          : 'hover:bg-white/5'
      }`}>
        <div className="flex items-center gap-3 md:gap-4">
          <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r ${step.color} 
                        flex items-center justify-center shrink-0 
                        transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30
                        hover:scale-110`}>
            <StepIconComponent className="w-4 h-4 md:w-5 md:h-5 text-darkBgColor" />
          </div>
          <span className={`font-merriweather font-bold text-sm md:text-base lg:text-lg ${
            activeStep === index 
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-amber-300' 
              : 'text-white/70'
          }`}>
            {step.title}
          </span>
        </div>
      </div>
    </div>
  );
});
TimelineStep.displayName = 'TimelineStep';

const ManufacturingProcessContent = memo(() => {
  const [activeStep, setActiveStep] = React.useState(0);
  const StepIcon = steps[activeStep].icon;
  
  const { ref: timelineRef, inView: timelineInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const { ref: contentRef, inView: contentInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const handleStepChange = useCallback((index: number) => {
    setActiveStep(index);
  }, []);

  const handlePrevStep = useCallback(() => {
    setActiveStep((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const handleNextStep = useCallback(() => {
    setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  }, []);

  return (
    <Container>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-[1]">
        {/* Mobile Step Indicator */}
        <div className="md:hidden mb-6 flex justify-center items-center gap-2" role="tablist">
          {steps.map((_, index) => (
            <StepIndicator 
              key={index} 
              index={index} 
              activeStep={activeStep} 
              total={steps.length} 
            />
          ))}
        </div>

        <div className="grid md:grid-cols-12 gap-4 lg:gap-8">
          {/* Timeline Navigation */}
          <div 
            ref={timelineRef} 
            className="md:col-span-5 lg:col-span-4 relative"
            role="tablist"
          >
            {/* Main vertical line */}
            <div className="absolute left-5 top-0 w-0.5 h-full">
              <div className="h-full w-full bg-gradient-to-b from-emerald-500/20 via-amber-500/20 to-emerald-500/20" />
            </div>

            {/* Steps with icons */}
            {steps.map((step, index) => (
              <div 
                key={step.title}
                className={`relative flex items-start gap-4 p-4 cursor-pointer group
                           ${index !== steps.length - 1 ? 'mb-8' : ''}
                           ${timelineInView ? 'show' : ''}`}
                onClick={() => handleStepChange(index)}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon container */}
                <div 
                  className={`relative z-10 w-10 h-10 rounded-full 
                             bg-gradient-to-r ${step.color}
                             flex items-center justify-center shrink-0
                             transition-all duration-300 group-hover:scale-110`}
                >
                  <step.icon className="w-5 h-5 text-darkBgColor" />
                </div>

                {/* Step title */}
                <div className={`flex-1 pt-1.5 ${
                  activeStep === index 
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-amber-300' 
                    : 'text-white/70'
                }`}>
                  <h3 className="font-merriweather font-bold text-lg">
                    {step.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Content Display */}
          <div 
            ref={contentRef}
            className={`md:col-span-7 lg:col-span-8 transition-all duration-700
                      ${contentInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <div className="bg-gradient-to-br from-emerald-900/10 to-darkBgColor/90 backdrop-blur-lg 
                          rounded-xl p-4 sm:p-6 md:p-8 border border-emerald-500/10
                          transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${steps[activeStep].color} 
                              flex items-center justify-center shrink-0
                              transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30
                              hover:scale-110`}>
                  <StepIcon className="w-6 h-6 sm:w-8 sm:h-8 text-darkBgColor" />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-merriweather 
                             text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 
                             to-amber-300 text-center sm:text-left">
                  {steps[activeStep].title}
                </h3>
              </div>
              <p className="font-poppins text-emerald-100/80 leading-relaxed text-base sm:text-lg md:text-xl">
                {steps[activeStep].description}
              </p>
              
              {/* Step Counter */}
              <div className="mt-6 flex justify-end items-center gap-2 text-emerald-100/60 font-poppins">
                <span className="text-sm">
                  Step {activeStep + 1} of {steps.length}
                </span>
                {/* Navigation Arrows for Mobile */}
                <div className="flex gap-2 md:hidden">
                  <button 
                    onClick={handlePrevStep}
                    disabled={activeStep === 0}
                    className="p-2 rounded-full hover:bg-white/5 disabled:opacity-50
                             transition-colors duration-300"
                  >
                    ←
                  </button>
                  <button 
                    onClick={handleNextStep}
                    disabled={activeStep === steps.length - 1}
                    className="p-2 rounded-full hover:bg-white/5 disabled:opacity-50
                             transition-colors duration-300"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
});

ManufacturingProcessContent.displayName = 'ManufacturingProcessContent';
export default ManufacturingProcessContent;