"use client"
import React, { useEffect, useRef, memo } from 'react'
import AboutUs2Content from '../AboutUs2Content'
import Container from '../Container'

// Memoized background component
const BackgroundEffects = memo(() => (
  <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                   w-[120vw] max-w-[1300px] aspect-square rounded-full 
                   bg-gradient-to-tr from-[#E8DED4]/30 via-[#E5EFDC]/20 to-[#E8DED4]/30 
                   blur-3xl animate-slow-pulse" />
    
    <div className="absolute top-[10%] left-[8%] w-[25vw] h-[25vw] max-w-[350px] max-h-[350px]
                   rounded-full bg-[#E5EFDC]/10 blur-2xl animate-float-slow" />
    <div className="absolute bottom-[15%] right-[3%] w-[20vw] h-[20vw] max-w-[300px] max-h-[300px]
                   rounded-full bg-[#DFD5CB]/15 blur-2xl animate-float-slower" />
    
    <div className="absolute inset-0 opacity-[0.04]"
         style={{
           backgroundImage: `radial-gradient(circle at center, rgba(62, 96, 71, 0.25) 0.5px, transparent 0.5px)`,
           backgroundSize: '20px 20px'
         }} />
  </div>
));
BackgroundEffects.displayName = 'BackgroundEffects';

// Memoized title component
const SectionTitle = memo(({ titleRef }: { titleRef: React.RefObject<HTMLDivElement> }) => (
  <div ref={titleRef} 
       className="text-center mb-8 sm:mb-12 lg:mb-16 px-4 opacity-0 translate-y-10 transition-all duration-700 
                show:opacity-100 show:translate-y-0">
    <span className="text-xs sm:text-sm md:text-base font-poppins tracking-[0.4em] 
                   text-[#2A5A36] mb-4 sm:mb-5 uppercase relative inline-block
                   before:content-[''] before:absolute before:-bottom-2 before:left-1/2 
                   before:-translate-x-1/2 before:w-12 before:h-0.5 
                   before:bg-gradient-to-r before:from-transparent 
                   before:via-[#2A5A36]/70 before:to-transparent">
      Our Essence
    </span>

    <div className="relative">
      <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-[2px] 
                     bg-gradient-to-r from-[#2A5A36]/40 to-transparent hidden lg:block" />
      <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-[2px] 
                     bg-gradient-to-l from-[#2A5A36]/40 to-transparent hidden lg:block" />

      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                    font-bold font-merriweather text-center mb-3 sm:mb-4
                    bg-gradient-to-r from-[#44875A] via-[#2A5A36] to-[#44875A] 
                    bg-clip-text text-transparent relative
                    animate-gradient-x bg-[length:200%_auto]
                    drop-shadow-[0_2px_4px_rgba(42,90,54,0.2)]">
        The Essence Of Glaspak
      </h1>
    </div>

    <p className="font-poppins text-[#2A5A36] max-w-2xl mx-auto 
                 text-xs sm:text-sm md:text-base leading-relaxed
                 drop-shadow-[0_1px_2px_rgba(42,90,54,0.1)]
                 font-medium">
      Our Aspirations and Purpose in Glass Excellence
    </p>

    <div className="absolute left-0 bottom-0 w-16 h-16 opacity-15 hidden lg:block"
         style={{
           backgroundImage: `radial-gradient(circle at center, #2A5A36 1px, transparent 1px)`,
           backgroundSize: '8px 8px'
         }} />
    <div className="absolute right-0 bottom-0 w-16 h-16 opacity-15 hidden lg:block"
         style={{
           backgroundImage: `radial-gradient(circle at center, #2A5A36 1px, transparent 1px)`,
           backgroundSize: '8px 8px'
         }} />
  </div>
));
SectionTitle.displayName = 'SectionTitle';

function AboutUs2() {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about-us"
      className="relative w-full bg-[#EDE5DB] py-8 sm:py-12 lg:py-16 overflow-hidden scroll-mt-20"
      aria-label="About GVH Glass Packaging Solutions"
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r 
                     from-transparent via-[#3B7D46]/20 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r 
                     from-transparent via-[#3B7D46]/20 to-transparent" aria-hidden="true" />
      
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 
                     border-[#3B7D46]/10 rounded-tl-3xl" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 
                     border-[#3B7D46]/10 rounded-tr-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 
                     border-[#3B7D46]/10 rounded-bl-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 
                     border-[#3B7D46]/10 rounded-br-3xl" aria-hidden="true" />
      
      <Container>
        <div className="relative z-[1]">
          <SectionTitle titleRef={titleRef} />
          <AboutUs2Content />
        </div>
      </Container>
    </section>
  )
}

export default memo(AboutUs2);