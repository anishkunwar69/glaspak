"use client"
import { memo } from "react";
import AboutUs2ImgContent from './AboutUs2ImgContent';
import Container from './Container';
import { useInView } from 'react-intersection-observer';

const contentSections = [
  {
    title: "ur Aspirations",
    content: "Our goal is to be the trusted partner for innovative and comprehensive packaging solutions, renowned for offering eco-friendly options that add value to brands in the food and beverage industry. We are committed to delivering sustainable and creative solutions that align with our clients' needs, ensuring their products stand out while contributing to a greener future through responsible and innovative packaging practices.",
    titleLetter: "O"
  },
  {
    title: "ur Purpose",
    content: "Our purpose is to deliver comprehensive packaging solutions in partnership with our customers, emphasizing quality and customization to meet their unique needs in the food and beverage industry. We are dedicated to excellence through the collaboration of our integrated in-house design, technical, and quality assurance teams with plant personnel, ensuring that we consistently uphold the highest quality standards in production.",
    titleLetter: "O"
  }
] as const;

const ContentSection = memo(({ title, content, titleLetter, delay }: {
  title: string;
  content: string;
  titleLetter: string;
  delay: number;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div ref={ref} 
         className={`h-full w-full
                    bg-[#336B44]
                    backdrop-blur-md border border-[#7BAF7B]/30
                    shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                    rounded-xl p-4 xs:p-6 sm:p-8 lg:p-10 relative overflow-hidden
                    transition-all duration-700 hover:shadow-2xl
                    hover:scale-[1.02] hover:border-[#A8D9AC]/40 group
                    ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
         style={{ transitionDelay: `${delay}ms` }}>
      
      <div className="absolute top-0 right-0 w-32 h-32 
                    bg-gradient-to-br from-[#A8D9AC]/15 to-transparent 
                    transition-opacity duration-500 group-hover:opacity-50" 
           aria-hidden="true" />
      <div className="absolute -top-12 -right-12 w-32 h-32 
                    bg-[#A8D9AC]/10 rounded-full blur-2xl
                    transition-opacity duration-500 group-hover:opacity-70" 
           aria-hidden="true" />

      <div className="relative z-10">
        <div className="flex items-center">
          <span className='relative text-white font-merriweather 
                         text-[40px] xs:text-[50px] sm:text-[60px] md:text-[70px] lg:text-[80px] 
                         leading-none tracking-tighter mr-2 sm:mr-3
                         drop-shadow-[0_2px_20px_rgba(154,205,158,0.2)]
                         transition-all duration-500
                         group-hover:scale-110
                         bg-clip-text bg-gradient-to-b from-white to-white/80'>
            {titleLetter}
          </span>

          <h3 className='font-merriweather font-bold 
                      text-[20px] xs:text-[22px] sm:text-[26px] md:text-[30px] lg:text-[32px]
                      leading-tight tracking-wide mt-4 xs:mt-6 mb-4 xs:mb-6 whitespace-normal
                      drop-shadow-[0_2px_15px_rgba(154,205,158,0.2)]
                      transition-all duration-500
                      group-hover:translate-x-2
                      bg-gradient-to-r from-[#FFD700] to-[#E5B700]
                      bg-clip-text text-transparent'>
            {title}
          </h3>
        </div>

        <p className='font-poppins text-xs xs:text-sm sm:text-base lg:text-lg text-pretty hyphens-auto 
                     text-white/90 leading-relaxed
                     transition-all duration-500 group-hover:text-white'>
          {content}
        </p>
      </div>
    </div>
  );
});
ContentSection.displayName = 'ContentSection';

function AboutUs2Content() {
  return (
    <div className='w-full relative'>
      {/* Text Content Section */}
      <div className='relative z-[2] grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8'>
        {contentSections.map((section, index) => (
          <ContentSection
            key={section.title}
            {...section}
            delay={index * 150}
          />
        ))}
      </div>

      {/* Image Section */}
      <div className='relative z-[1] mb-8 sm:mb-12 lg:mb-16'>
        <AboutUs2ImgContent />
      </div>
    </div>
  )
}

export default memo(AboutUs2Content);