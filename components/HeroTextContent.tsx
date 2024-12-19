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
                      leading-none tracking-wide text-center md:text-left
                      whitespace-nowrap md:whitespace-normal"
            aria-label="Welcome to Glaspak - Your Total Packaging Solution Partner">
          <span className="text-amber-700 mb-1 block leading-tight 
                         [text-shadow:_0_1px_2px_rgb(0_0_0_/_8%)]
                         bg-gradient-to-r from-amber-700 to-amber-600 bg-clip-text text-transparent">
            WE ARE GLASPAK,
          </span>
          <span className="text-emerald-800 block text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-tight
                         [text-shadow:_0_1px_2px_rgb(0_0_0_/_8%)]
                         bg-gradient-to-r from-emerald-800 to-emerald-700 bg-clip-text text-transparent">
            YOUR TOTAL PACKAGING SOLUTION PARTNER
          </span>
        </h1>

        <p className="font-poppins text-slate-800 my-6 md:my-4 lg:my-6
               text-sm sm:text-base lg:text-lg
               leading-relaxed md:leading-tight lg:leading-relaxed max-w-[556px] text-center md:text-left">
          Established in 2005, <strong className="font-bold bg-gradient-to-r from-amber-700 to-amber-600 bg-clip-text text-transparent">Glaspak</strong> is 
          a trusted glass packaging company with over 100 years of combined expertise. We specialize in
          <em className="italic font-medium bg-gradient-to-r from-amber-700 to-amber-600 bg-clip-text text-transparent"> design, manufacturing, process control, and quality 
          assurance</em>, offering innovative solutions as a reliable packaging partner.
        </p>

        <div className="flex flex-wrap gap-4 mt-4 md:mt-2 lg:mt-4 justify-center md:justify-start w-full max-w-[220px] sm:max-w-none md:w-auto">
          <a href="#about-us"
             className="font-poppins bg-gradient-to-r from-amber-700 to-amber-600 text-white
                       lg:px-8 lg:py-4 px-6 py-3 font-medium rounded-sm
                       transition-all duration-300 hover:scale-105 hover:shadow-lg
                       focus:outline-none focus:ring-2 focus:ring-amber-600/50
                       w-full sm:w-auto text-center"
             aria-label="Learn more about Glaspak">
            <span className="tracking-wide">About Us</span>
          </a>

          <a href="#services"
             className="font-poppins border-2 border-emerald-800 text-emerald-800
                       lg:px-8 lg:py-4 px-6 py-3 font-medium rounded-sm
                       transition-all duration-300 hover:scale-105 hover:shadow-lg
                       hover:bg-emerald-800 hover:text-white
                       focus:outline-none focus:ring-2 focus:ring-emerald-700/50
                       w-full sm:w-auto text-center"
             aria-label="Explore Glaspak's packaging services">
            <span className="tracking-wide">Our Services</span>
          </a>
        </div>
      </div>
    </div>
  );
});

HeroTextContent.displayName = 'HeroTextContent';
export default HeroTextContent;