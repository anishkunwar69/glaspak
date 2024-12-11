"use client"
import React, { memo } from 'react'
import dynamic from 'next/dynamic'
import { useInView } from 'react-intersection-observer'

// Dynamic import with loading state
const ContactUsContent = dynamic(() => import('../ContactUsContent'), {
  ssr: true,
  loading: () => <div className="animate-pulse bg-lightBgColor/20 min-h-[600px]" />
})

// Memoized background component
const BackgroundEffects = memo(() => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full 
                   filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full 
                   filter blur-3xl translate-x-1/2 translate-y-1/2" />
  </div>
));

BackgroundEffects.displayName = 'BackgroundEffects';

const ContactUs = memo(() => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section 
      ref={sectionRef}
      id="contact"
      className={`relative min-h-screen w-full bg-darkBgColor overflow-hidden z-[1] 
                font-poppins transition-opacity duration-700
                ${inView ? 'opacity-100' : 'opacity-0'}`}
      aria-label="Contact Information"
    >
      <BackgroundEffects />
      
      <div className="relative z-[2]">
        <ContactUsContent />
      </div>
    </section>
  )
});

ContactUs.displayName = 'ContactUs';
export default ContactUs;