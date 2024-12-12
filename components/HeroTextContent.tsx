import { memo } from 'react';

const HeroTextContent = memo(() => {
  return (
    <div className="textContent md:col-span-6 col-span-12 
                    flex items-center justify-center 
                    max-lg:pl-2 md:order-last order-first max-md:mt-8
                    h-full md:translate-y-6">
      <div className="flex flex-col items-center md:items-start">
        <h1 className="uppercase font-merriweather font-bold
                      text-2xl sm:text-3xl lg:text-4xl xl:text-5xl
                      leading-tight md:leading-none lg:leading-tight tracking-wide text-center md:text-left
                      whitespace-nowrap md:whitespace-normal"
            aria-label="Welcome to GVH">
          <span className="text-darkYellow mb-2 block">WE ARE GVH,</span>
          <span className="text-white block">WE ARE THE ONE</span>
        </h1>

        <p className="font-poppins text-slate-50/90 my-6 md:my-4 lg:my-6
                     text-sm sm:text-base lg:text-lg
                     leading-relaxed md:leading-tight lg:leading-relaxed max-w-[556px] text-center md:text-left">
          Founded in 2000, <strong className="font-bold text-darkYellow">GVH</strong> is 
          a top glass packaging group in Southeast Asia, including Phoenix Packaging, 
          Glaspak Solutions, TCL, and Glass Solution. We focus on
          <em className="italic text-darkYellow"> designing, making, and delivering 
          innovative glass products, closures, and labels</em> to meet customer needs.
        </p>

        <div className="flex flex-wrap gap-4 mt-4 md:mt-2 lg:mt-4 justify-center md:justify-start w-full max-w-[220px] sm:max-w-none md:w-auto">
          <a href="#about"
             className="font-poppins bg-darkYellow text-white
                       lg:px-8 lg:py-4 px-6 py-3 font-medium rounded-sm
                       transition-transform duration-300 hover:scale-105
                       focus:outline-none focus:ring-2 focus:ring-darkYellow/50
                       w-full sm:w-auto text-center"
             aria-label="Learn more about us">
            <span className="tracking-wide">About Us</span>
          </a>

          <a href="#services"
             className="font-poppins border-2 border-headingColor text-white
                       lg:px-8 lg:py-4 px-6 py-3 font-medium rounded-sm
                       transition-transform duration-300 hover:scale-105
                       focus:outline-none focus:ring-2 focus:ring-headingColor/50
                       w-full sm:w-auto text-center"
             aria-label="Explore our services">
            <span className="tracking-wide">Our Services</span>
          </a>
        </div>
      </div>
    </div>
  );
});

HeroTextContent.displayName = 'HeroTextContent';
export default HeroTextContent;