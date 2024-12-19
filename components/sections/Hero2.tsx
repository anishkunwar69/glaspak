"use client"
import React, { useState, useEffect } from 'react'
import Container from '../Container'
import Image from 'next/image'
import { IoArrowForward, IoArrowBack, IoLanguage } from "react-icons/io5"

const navLinks = [
  { title: 'Home', href: '#hero', ariaLabel: 'Navigate to home section' },
  { title: 'About', href: '#about-us', ariaLabel: 'Learn more about us' },
  { title: 'Services', href: '#services', ariaLabel: 'View our services' },
  { title: 'Products', href: '#products', ariaLabel: 'Explore our products' },
  { title: 'Contact', href: '#contact', ariaLabel: 'Get in touch with us' }
] as const;

const images = [
    '/hero/0013.png',
    '/hero/0014.png',
    '/hero/0021.png',
    '/hero/0027.png',

] as const;

function Hero2() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentLang, setCurrentLang] = useState('EN');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative">
      {/* Premium Info Bar with Enhanced Shimmer */}
      <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 
                    text-white py-2.5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] 
                       animate-[shimmer_2s_infinite]" />
        <Container>
          <div className="flex justify-center items-center text-sm font-poppins">
            <span className="flex items-center gap-3">
              <span className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping" />
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping [animation-delay:0.4s]" />
              </span>
              Enjoy FREE SHIPPING from 16th to 20th December!
            </span>
          </div>
        </Container>
      </div>

      {/* Enhanced Navigation Bar */}
      <div className="bg-white/95 backdrop-blur-md py-4 
                    shadow-[0_4px_30px_rgba(0,0,0,0.1)]
                    border-b border-white/20">
        <Container>
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="w-[280px] lg:w-[320px]">
              <Image
                src="/logo.png"
                alt="Glaspak Logo"
                width={320}
                height={80}
                className="w-auto h-[50px] lg:h-[64px]"
                priority
              />
            </div>

            {/* Center Navigation */}
            <nav className="hidden lg:flex justify-center flex-1 px-12">
              <ul className="flex gap-10">
                {navLinks.map(({ href, title, ariaLabel }) => (
                  <li key={href}>
                    <a href={href}
                       aria-label={ariaLabel}
                       className="font-poppins font-medium text-[16px] xl:text-[17px]
                                bg-gradient-to-r from-emerald-800 to-emerald-700
                                hover:from-amber-700 hover:to-amber-600
                                bg-clip-text text-transparent
                                transition-all duration-300 relative group">
                      {title}
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 
                                     bg-gradient-to-r from-amber-700 to-amber-600
                                     transform origin-left scale-x-0 
                                     group-hover:scale-x-100 transition-transform duration-300"/>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Language Toggle */}
            <button
              onClick={() => setCurrentLang(prev => prev === 'EN' ? 'MY' : 'EN')}
              className="flex items-center gap-2 text-emerald-800 hover:text-amber-600 
                       transition-colors duration-300 font-poppins"
            >
              <IoLanguage size={24} />
              <span className="font-medium">{currentLang}</span>
            </button>
          </div>
        </Container>
      </div>

      {/* Premium Full Screen Image Slider */}
      <div className="relative h-[85vh] object-center object-cover w-full overflow-hidden bg-center">
        {images.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-all duration-1000 ease-out
                       ${currentSlide === index 
                         ? 'opacity-100 scale-100' 
                         : 'opacity-0 scale-110'}`}
          >
            <Image
              src={img}
              alt="Hero Image"
              fill
              className="object-cover object-center"
              priority={index === 0}
              sizes="100vw"
            />
            {/* Premium Multi-Layer Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b 
                          from-emerald-950/50 via-emerald-900/60 to-emerald-950/70" />
            <div className="absolute inset-0 bg-gradient-to-r 
                          from-black/30 via-transparent to-black/30" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
          </div>
        ))}
        
        {/* Enhanced Slider Controls with Glass Effect */}
        <div className="absolute bottom-12 right-12 flex gap-4 z-20">
          {[
            { icon: IoArrowBack, action: handlePrevSlide, label: "Previous" },
            { icon: IoArrowForward, action: handleNextSlide, label: "Next" }
          ].map((control, idx) => (
            <button 
              key={idx}
              onClick={control.action}
              className="relative group"
              aria-label={`${control.label} slide`}
            >
              <span className="absolute inset-0 bg-white/40 rounded-full blur-md 
                             transform group-hover:scale-110 transition-transform duration-300" />
              <div className="relative p-4 bg-white/20 rounded-full backdrop-blur-md
                            border border-white/30 overflow-hidden
                            transition-all duration-300 group-hover:bg-white/30">
                <control.icon className="text-white text-xl 
                                      transition-transform duration-300
                                      group-hover:scale-110" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100
                              transition-opacity duration-300
                              bg-gradient-to-r from-transparent via-white/20 to-transparent
                              animate-[shimmer_2s_infinite]" />
              </div>
            </button>
          ))}
        </div>

        {/* Premium Content Container */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <Container>
            <div className="max-w-[800px] mx-auto text-center">
              {/* Glowing Heading Container */}
              <div className="relative inline-block mb-10">
                <span className="absolute -inset-2 bg-gradient-to-r 
                               from-amber-300/20 via-amber-400/40 to-amber-300/20 
                               opacity-75 blur-2xl transform rotate-1"></span>
                <h1 className="uppercase font-merriweather font-bold relative
                             tracking-wide space-y-4">
                  <span className="block text-3xl sm:text-4xl lg:text-5xl
                                 bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-200
                                 bg-clip-text text-transparent
                                 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]
                                 leading-tight">
                    WE ARE GLASPAK,
                  </span>
                  <span className="block text-xl sm:text-2xl lg:text-3xl
                                 bg-gradient-to-r from-white via-gray-100 to-white
                                 bg-clip-text text-transparent
                                 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]
                                 leading-tight">
                    YOUR TOTAL PACKAGING SOLUTION PARTNER
                  </span>
                </h1>
              </div>

              {/* Enhanced Description */}
              <p className="font-poppins text-base sm:text-lg lg:text-xl
                          leading-relaxed mb-12 max-w-[600px] mx-auto
                          text-white/90 font-light tracking-wide
                          drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                Elevating brands through exceptional glass packaging solutions, 
                where precision meets artistry in every design.
              </p>

              {/* Premium Buttons */}
              <div className="flex flex-wrap gap-6 justify-center">
                <a href="#about-us"
                   className="group relative">
                  <span className="absolute inset-0 bg-gradient-to-r 
                                 from-amber-400 to-amber-500 blur-md 
                                 opacity-75 group-hover:opacity-100
                                 transition-opacity duration-300" />
                  <span className="relative inline-block px-8 py-3.5 
                                 bg-gradient-to-r from-amber-500 to-amber-400
                                 text-white text-base tracking-wider font-medium
                                 overflow-hidden">
                    <span className="relative z-10">About Us</span>
                    <span className="absolute inset-0 bg-gradient-to-r 
                                   from-white/0 via-white/20 to-white/0
                                   translate-x-[-100%] group-hover:translate-x-[100%]
                                   transition-transform duration-1000" />
                  </span>
                </a>
                <a href="#services"
                   className="group relative">
                  <span className="absolute inset-0 bg-white/20 blur-md 
                                 opacity-0 group-hover:opacity-100
                                 transition-opacity duration-300" />
                  <span className="relative inline-block px-8 py-3.5
                                 border-2 border-white/80 text-white
                                 text-base tracking-wider font-medium
                                 overflow-hidden
                                 transition-colors duration-300
                                 group-hover:text-emerald-900">
                    <span className="relative z-10">Our Services</span>
                    <span className="absolute inset-0 bg-white
                                   scale-x-0 group-hover:scale-x-100
                                   transition-transform duration-300
                                   origin-left" />
                  </span>
                </a>
              </div>
            </div>
          </Container>
        </div>

        {/* Enhanced Slide Indicators */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`group relative h-1.5 rounded-full transition-all duration-500
                        overflow-hidden
                        ${currentSlide === index ? 'w-12' : 'w-6'}`}
            >
              <span className="absolute inset-0 bg-white/50 group-hover:bg-white/70 
                             transition-colors duration-300" />
              <span className={`absolute inset-0 bg-gradient-to-r from-amber-300 to-amber-400
                              transition-transform duration-500 ease-out
                              ${currentSlide === index ? 'translate-x-0' : '-translate-x-full'}`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero2