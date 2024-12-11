"use client"
import { memo } from "react";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import AboutUs2ImgContent from './AboutUs2ImgContent';
import Container from './Container';
import { useInView } from 'react-intersection-observer';

// Pre-defined card data for better performance
const cards = [
  {
    icon: BsFillQuestionCircleFill,
    title: "Who Are We?",
    content: "Grand Versatile Holdings Limited, led by Gerry Liew, specializes in glass packaging with a strong team. CFO Christine Wells manages Finance and Admin, while Samantha Liew, with a Master's in Management, oversees HR and Operations",
    className: "lg:col-span-4 col-span-6 max-secondSM:col-span-12"
  },
  {
    icon: FaUsers,
    title: "What We Do?",
    content: "We design, manufacture, and supply custom glass products with closure systems, enhancing brand value. Committed to quality, we meet strict standards using global best practices and offer full pre-sales and after-sales support",
    className: "lg:col-span-4 col-span-6 max-secondSM:col-span-12"
  },
  {
    icon: FaHeart,
    title: "What We Focus On?",
    content: "We prioritize quality, ensuring all standards are met. Our ISO-accredited partners and suppliers will achieve FSSC22000 certification by year-end. Our Technical Service & Quality Control team works with plant personnel to uphold excellence in production.",
    className: "lg:col-span-4 col-span-12"
  }
] as const;

const Card = memo(({ icon: Icon, title, content, className, delay }: {
  icon: typeof cards[number]['icon'];
  title: string;
  content: string;
  className: string;
  delay: number;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div ref={ref}
         className={`card-item ${className} flex flex-col items-center 
                    gap-y-2 py-8 px-6 rounded-xl
                    bg-gradient-to-b from-lightBgColor/80 to-lightBgColor/40
                    backdrop-blur-sm border border-white/5
                    shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                    relative overflow-hidden transition-all duration-700
                    ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
         style={{ transitionDelay: `${delay}ms` }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="bg-darkYellow/10 p-3 rounded-full">
        <Icon className='text-darkYellow md:size-[24px] size-[20px]'/>
      </div>
      <h3 className='font-merriweather text-xl text-darkYellow max-md:text-lg'>{title}</h3>
      <p className='text-center font-poppins text-base text-pretty hyphens-auto max-md:text-sm text-slate-200'>
        {content}
      </p>
    </div>
  );
});
Card.displayName = 'Card';

function AboutUs2Content() {
  const { ref: profileRef, inView: profileInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Container>
      <div className='w-full min-h-screen flex justify-center items-center text-white landscape:pb-20'>
        <div className='parentBox w-full'>
          <div className='w-full grid grid-cols-12 gap-6'>
            {cards.map((card, index) => (
              <Card key={card.title} {...card} delay={index * 150} />
            ))}
          </div>

          <div className='w-full grid grid-cols-12 mt-9 gap-4 max-secondMD:gap-y-8'>
            {/* Image section - Left side */}
            <div className='secondMD:col-span-6 col-span-12'>
              <AboutUs2ImgContent/>
            </div>

            {/* Company Profile section - Right side */}
            <div className='secondMD:col-span-6 col-span-12 flex items-center'>
              <div ref={profileRef} 
                   className={`textContent w-full
                            bg-gradient-to-br from-lightBgColor/90 to-lightBgColor/70
                            backdrop-blur-md border border-white/5
                            shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                            rounded-xl py-8 px-6 relative overflow-hidden
                            transition-all duration-700
                            ${profileInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                {/* Corner accents */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-darkYellow/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-darkYellow/20 to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Content */}
                <h2 className='font-merriweather text-darkYellow font-bold md:text-3xl text-2xl 
                             relative after:content-[""] after:absolute after:-bottom-2 after:left-0 
                             after:w-16 after:h-px after:bg-darkYellow/30'>
                  <span className='md:text-6xl text-5xl text-white mr-2'>C</span>ompany Profile
                </h2>
                <p className='font-poppins text-base text-pretty hyphens-auto max-md:text-sm text-slate-200 mt-6'>
                  Founded in 2000 by experienced glass personnel GVH comprises of a few companies focused on different market segments - Phoenix Packaging, Glaspak Solutions, TCL and Glass Solution. The Company is regarded as one of the major players in supplying glass packaging products across South East Asia. We offer an extensive range of glass products & end-to-end solutions via innovative designs, manufacturing and delivery of total solutions on glass filling for our customers with closure and labelling systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default memo(AboutUs2Content);