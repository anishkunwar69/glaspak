"use client"
import React, { useEffect, useRef, memo } from 'react'
import AboutUs2Content from '../AboutUs2Content'

// Memoized background component
const BackgroundEffects = memo(() => (
  <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                   w-[130vw] max-w-[1400px] aspect-square rounded-full 
                   bg-gradient-to-tr from-emerald-950/40 via-amber-950/30 to-emerald-950/40 blur-3xl" />
    
    <div className="absolute top-[15%] left-[10%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px]
                   rounded-full bg-emerald-500/5 blur-2xl" />
    <div className="absolute bottom-[20%] right-[5%] w-[25vw] h-[25vw] max-w-[350px] max-h-[350px]
                   rounded-full bg-amber-500/5 blur-2xl" />
    <div className="absolute top-[40%] right-[15%] w-[20vw] h-[20vw] max-w-[250px] max-h-[250px]
                   rounded-full bg-emerald-600/5 blur-2xl" />
    <div className="absolute bottom-[35%] left-[20%] w-[22vw] h-[22vw] max-w-[300px] max-h-[300px]
                   rounded-full bg-amber-600/5 blur-2xl" />
    
    <div className="absolute inset-0 opacity-[0.05]"
         style={{
           backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.1) 0.5px, transparent 0.5px)`,
           backgroundSize: '16px 16px'
         }} />
  </div>
));
BackgroundEffects.displayName = 'BackgroundEffects';

// Memoized title component
const SectionTitle = memo(({ titleRef }: { titleRef: React.RefObject<HTMLDivElement> }) => (
  <div ref={titleRef} 
       className="text-center mb-6 sm:mb-8 px-4 opacity-0 translate-y-10 transition-all duration-700 show:opacity-100 show:translate-y-0">
    <span className="block text-xs sm:text-sm md:text-base font-poppins tracking-[0.3em] 
                   text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 
                   to-amber-300 mb-4 uppercase">
      Our Essence
    </span>

    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                  font-bold font-merriweather text-center mb-4 sm:mb-6">
      <span className="text-transparent bg-clip-text bg-gradient-to-r 
                     from-emerald-300 via-amber-300 to-emerald-400">
        The Essence Of Glaspak
      </span>
    </h1>

    <p className="font-poppins text-emerald-100/60 max-w-2xl mx-auto 
                 text-xs sm:text-sm md:text-base leading-relaxed">
      Our Aspirations and Purpose in Glass Excellence
    </p>
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
      className="relative min-h-screen w-full bg-gradient-to-b from-bgColor/80 via-[#1A2B25] to-bgColor/80 py-12 sm:py-16 overflow-hidden scroll-mt-20"
      aria-label="About GVH Glass Packaging Solutions"
    >
      <BackgroundEffects />
      <div className="relative z-[1]">
        <SectionTitle titleRef={titleRef} />
        <AboutUs2Content />
      </div>
    </section>
  )
}

export default memo(AboutUs2);