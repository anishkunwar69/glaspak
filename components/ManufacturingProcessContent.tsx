/* eslint-disable @typescript-eslint/no-unused-expressions */
'use client';
import { memo, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaFlask, FaBalanceScale, FaFire, FaIndustry, FaTemperatureLow, FaSearchPlus } from 'react-icons/fa';
import type { IconType } from 'react-icons';

interface Step {
  icon: IconType;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: FaFlask,
    title: "Raw Materials Collection",
    description: "Selection and preparation of raw materials including silica sand, soda ash, and limestone"
  },
  {
    icon: FaBalanceScale,
    title: "Batching",
    description: "Ingredients are measured and mixed for consistency based on the desired glass type"
  },
  {
    icon: FaFire,
    title: "Melting",
    description: "Materials are melted at extremely high temperatures"
  },
  {
    icon: FaIndustry,
    title: "Forming",
    description: "Molten glass is formed into desired shapes"
  },
  {
    icon: FaTemperatureLow,
    title: "Annealing",
    description: "Controlled cooling process to prevent stress and breakage"
  },
  {
    icon: FaSearchPlus,
    title: "Quality Control",
    description: "Rigorous inspection and testing procedures"
  }
];

const ManufacturingProcessContent = memo(() => {
  const [currentStep, setCurrentStep] = useState(1);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div ref={ref} 
         className={`relative transition-all duration-700 delay-300
                    ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="relative z-[1] flex flex-col lg:flex-row gap-8 p-6 lg:p-12 max-w-7xl mx-auto">
        <div className="w-full lg:w-1/3 space-y-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              onClick={() => setCurrentStep(index + 1)}
              className={`group flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300
                         ${currentStep === index + 1 
                           ? 'bg-[#1A2B25] shadow-lg shadow-emerald-900/30' 
                           : 'hover:bg-[#1A2B25]/30 backdrop-blur-sm'}
                         border border-emerald-800/30`}
            >
              <div className={`p-3 rounded-full transition-all duration-300
                             ${currentStep === index + 1
                               ? 'bg-gradient-to-r from-emerald-300 to-amber-300'
                               : 'bg-yellow-500/80 group-hover:bg-yellow-500'}`}>
                <step.icon className={`w-6 h-6 ${
                  currentStep === index + 1 ? 'text-[#1A2B25]' : 'text-[#1A2B25]'
                }`} />
              </div>
              <span className={`ml-4 font-semibold text-lg transition-all duration-300
                              ${currentStep === index + 1
                                ? 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-amber-300'
                                : 'text-emerald-100/60 group-hover:text-emerald-100'}`}>
                {step.title}
              </span>
            </div>
          ))}
        </div>

        {/* Right content area */}
        <div className="w-full lg:w-2/3 lg:pl-8">
          <div className="flex items-center mb-8">
            <div className="p-4 bg-gradient-to-r from-emerald-300 to-amber-300 rounded-full shadow-lg shadow-emerald-900/30">
              {steps[currentStep - 1].icon({ 
                className: "w-8 h-8 text-[#1A2B25]" 
              })}
            </div>
            <h2 className="ml-6 text-4xl font-bold tracking-wide">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-amber-300">
                {steps[currentStep - 1].title}
              </span>
            </h2>
          </div>
          
          <p className="text-emerald-100/60 text-xl leading-relaxed mt-6">
            {steps[currentStep - 1].description}
          </p>

          <div className="mt-8 text-right">
            <span className="text-emerald-100/40 text-lg font-medium">
              Step {currentStep} of {steps.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});

ManufacturingProcessContent.displayName = 'ManufacturingProcessContent';
export default ManufacturingProcessContent;