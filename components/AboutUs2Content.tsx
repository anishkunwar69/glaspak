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
    <div className='lg:col-span-6 col-span-12'>
      <div ref={ref} 
           className={`textContent w-full
                    bg-gradient-to-br from-lightBgColor/90 to-lightBgColor/70
                    backdrop-blur-md border border-white/5
                    shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                    rounded-xl py-8 px-6 relative overflow-hidden
                    transition-all duration-700
                    ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
           style={{ transitionDelay: `${delay}ms` }}>
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-darkYellow/20 to-transparent" 
             aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-darkYellow/20 to-transparent" 
             aria-hidden="true" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" 
             aria-hidden="true" />

        <h2 className='flex items-baseline gap-2'>
          <span className='text-white font-merriweather md:text-[80px] text-[60px] leading-none'>
            {titleLetter}
          </span>
          <span className='text-darkYellow font-merriweather font-bold md:text-[40px] text-[32px] leading-none'>
            {title}
          </span>
        </h2>
        <p className='font-poppins text-base text-pretty hyphens-auto max-md:text-sm text-slate-200 mt-8'>
          {content}
        </p>
      </div>
    </div>
  );
});
ContentSection.displayName = 'ContentSection';

function AboutUs2Content() {
  return (
    <Container>
      <div className='w-full flex justify-center items-center text-white py-4'>
        <div className='parentBox w-full'>
          <div className='w-full grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8 mb-8'>
            {contentSections.map((section, index) => (
              <ContentSection
                key={section.title}
                {...section}
                delay={index * 150}
              />
            ))}
          </div>
          <div className='w-full'>
            <AboutUs2ImgContent/>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default memo(AboutUs2Content);