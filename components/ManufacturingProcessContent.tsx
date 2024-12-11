'use client';
import { memo, useState, useCallback, useRef } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const ManufacturingProcessContent = memo(() => {
  const [activeStep, setActiveStep] = useState(1);
  const timelineRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { ref: timelineInView, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const { ref: contentInView, inView: contentIsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const handleStepChange = useCallback((step: number) => {
    setActiveStep(step);
  }, []);

  const handlePrevStep = useCallback(() => {
    setActiveStep(prev => Math.max(1, prev - 1));
  }, []);

  const handleNextStep = useCallback(() => {
    setActiveStep(prev => Math.min(4, prev + 1));
  }, []);

  const StepIcon = ({ step }: { step: number }) => (
    <div className={`w-8 h-8 rounded-full flex items-center justify-center
                    transition-all duration-300 border-2
                    ${activeStep === step 
                      ? 'bg-darkYellow border-darkYellow text-white' 
                      : 'border-gray-300 text-gray-500'}`}>
      {step}
    </div>
  );

  return (
    <div className="relative">
      {/* Timeline */}
      <div ref={timelineRef} 
           className={`relative transition-all duration-700 delay-300
                      ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Timeline content */}
      </div>

      {/* Content */}
      <div ref={contentRef}
           className={`relative transition-all duration-700 delay-300
                      ${contentIsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Step content */}
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between mt-8">
        <button onClick={handlePrevStep}
                disabled={activeStep === 1}
                className="disabled:opacity-50">
          Previous
        </button>
        <button onClick={handleNextStep}
                disabled={activeStep === 4}
                className="disabled:opacity-50">
          Next
        </button>
      </div>
    </div>
  );
});

ManufacturingProcessContent.displayName = 'ManufacturingProcessContent';
export default ManufacturingProcessContent;