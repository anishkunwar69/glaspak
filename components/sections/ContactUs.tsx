"use client"
import React, { memo } from 'react'
import dynamic from 'next/dynamic'
import { useInView } from 'react-intersection-observer'
import Container from '../Container'

const ContactUsContent = dynamic(() => import('../ContactUsContent'), {
  ssr: true,
  loading: () => <div className="animate-pulse bg-lightBgColor/20 h-[200px]" />
})

const BackgroundEffects = memo(() => (
  <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
    {/* Top separator with gradient and subtle pattern */}
    <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/10 to-transparent" />
    
    {/* Diagonal pattern overlay */}
    <div className="absolute inset-0 opacity-[0.03]"
         style={{
           backgroundImage: `
             repeating-linear-gradient(
               -45deg,
               #336B44,
               #336B44 1px,
               transparent 1px,
               transparent 12px
             )
           `
         }} />

    {/* Subtle geometric pattern */}
    <div className="absolute inset-0 opacity-[0.07]"
         style={{
           backgroundImage: `
             linear-gradient(30deg, #336B44 1px, transparent 1px),
             linear-gradient(150deg, #336B44 1px, transparent 1px)`,
           backgroundSize: '40px 40px'
         }} />

    {/* Rest of the background effects remain the same */}
    <div className="absolute top-0 left-1/4 w-[20vw] h-[20vw] max-w-[300px] max-h-[300px]
                 rounded-full bg-gradient-conic from-[#336B44]/10 via-transparent to-[#336B44]/10
                 blur-[60px] animate-float-slow transform-gpu" />
    <div className="absolute bottom-0 right-1/4 w-[15vw] h-[15vw] max-w-[250px] max-h-[250px]
                 rounded-full bg-gradient-conic from-[#A8D9AC]/10 via-transparent to-[#A8D9AC]/10
                 blur-[80px] animate-float-slower transform-gpu" />

    {/* Subtle noise texture overlay */}
    <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
         style={{
           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
           backgroundSize: '200px 200px'
         }} />

    {/* Top border effect */}
    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#336B44]/30 to-transparent" />
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
      className={`relative w-full bg-gradient-to-b from-[#EDE5DB] to-[#E5DED4] 
                py-8 sm:py-12 lg:py-16 overflow-hidden z-[1] 
                font-poppins transition-opacity duration-700
                scroll-mt-20 shadow-[inset_0_4px_20px_rgba(0,0,0,0.05)]
                ${inView ? 'opacity-100' : 'opacity-0'}`}
      aria-label="Contact Information"
    >
      <BackgroundEffects />
      
      <Container>
        <div className="relative z-[2]">
          <ContactUsContent />
        </div>
      </Container>
    </section>
  )
});

ContactUs.displayName = 'ContactUs';
export default ContactUs;