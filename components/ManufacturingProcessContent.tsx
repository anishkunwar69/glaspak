'use client';
import { memo, useState, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

const ManufacturingProcessContent = memo(() => {
  const [activeStep, setActiveStep] = useState(1);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const handlePrevStep = useCallback(() => {
    setActiveStep(prev => Math.max(1, prev - 1));
  }, []);

  const handleNextStep = useCallback(() => {
    setActiveStep(prev => Math.min(4, prev + 1));
  }, []);

  return (
    <div className="relative">
      <div ref={ref} 
           className={`relative transition-all duration-700 delay-300
                      ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Timeline content */}
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
    </div>
  );
});

ManufacturingProcessContent.displayName = 'ManufacturingProcessContent';
export default ManufacturingProcessContent;