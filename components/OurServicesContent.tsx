"use client"
import React, { memo } from 'react';
import { useInView } from 'react-intersection-observer';
import Container from './Container';
import OurServicesTextContent from './OurServicesTextContent';

const OurServicesContent = memo(() => {
    const { ref: contentRef, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    return (
        <Container>
            <div 
                ref={contentRef} 
                className={`transition-all duration-700
                           ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <div className="relative">
                    {/* Top gradient line */}
                    <div 
                        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r 
                                 from-transparent via-emerald-500/10 to-transparent" 
                        aria-hidden="true"
                    />
                    
                    <OurServicesTextContent />
                    
                    {/* Bottom gradient line */}
                    <div 
                        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r 
                                 from-transparent via-emerald-500/10 to-transparent"
                        aria-hidden="true"
                    />
                </div>
            </div>
        </Container>
    )
});

OurServicesContent.displayName = 'OurServicesContent';
export default OurServicesContent;