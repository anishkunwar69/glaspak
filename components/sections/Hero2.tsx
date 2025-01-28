"use client"
import React, { useEffect, useCallback, memo, useReducer, useState } from 'react'
import Container from '../Container'
import Image from 'next/image'
import { IoArrowForward, IoArrowBack, IoLanguage, IoMenu, IoArrowUp } from "react-icons/io5"
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

const navLinks = [
  { 
    title: 'Our Products', 
    href: '/category/glass-bottles', 
    ariaLabel: 'View our products',
    loading: 'lazy'
  },
  { 
    title: 'Custom Designs', 
    href: '/custom-design', 
    ariaLabel: 'Explore custom designs',
    loading: 'lazy'
  },
  { 
    title: 'Our Story', 
    href: '/our-story', 
    ariaLabel: 'Learn our story',
    loading: 'lazy'
  },
  { 
    title: 'Contact', 
    href: '/contact-us', 
    ariaLabel: 'Contact us',
    loading: 'lazy'
  }
] as const;

// Define a type for the image objects
type HeroImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  loading: number | boolean;
};

// Update the images array with the proper type
const images: HeroImage[] = [
    { 
      src: '/hero/0013.PNG',
      alt: 'Glass packaging solutions showcase - Premium bottle designs',
      width: 1920,
      height: 1080,
      loading: 0
    },
    { 
      src: '/hero/0014.PNG',
      alt: 'Innovative glass container designs - Custom packaging solutions',
      width: 1920,
      height: 1080,
      loading: false
    },
    { 
      src: '/hero/0021.PNG',
      alt: 'Sustainable glass packaging - Eco-friendly bottle designs',
      width: 1920,
      height: 1080,
      loading: false
    },
    { 
      src: '/hero/0027.PNG',
      alt: 'Premium glass bottle collection - Quality packaging solutions',
      width: 1920,
      height: 1080,
      loading: false
    },
    { 
      src: '/hero/0018.PNG',
      alt: 'Luxury glass containers - High-end packaging solutions',
      width: 1920,
      height: 1080,
      loading: false
    },
    { 
      src: '/hero/0019.PNG',
      alt: 'Artisanal glass bottles - Crafted packaging designs',
      width: 1920,
      height: 1080,
      loading: false
    },
] as const;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full 
                 bg-amber-400 hover:bg-amber-500 text-white
                 shadow-lg transform transition-all duration-300
                 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
      aria-label="Scroll to top"
    >
      <IoArrowUp className="w-6 h-6" />
    </button>
  );
};

// Modify the Navigation component to be sticky
const Navigation = memo(({ currentLang, setCurrentLang }: { 
  currentLang: string; 
  setCurrentLang: (lang: string) => void 
}) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`hidden lg:block transition-all duration-300
                    ${isSticky 
                      ? 'fixed top-0 left-0 right-0 bg-[#E5DED4]/95 backdrop-blur-md shadow-lg z-50 py-2' 
                      : ''}`}>
      <Container>
        <div className={`flex items-center justify-between py-2 transition-all duration-300
                        ${isSticky ? 'lg:py-2' : ''}`}>
          {/* Logo */}
          <Link href="/" className="relative">
            <Image
              src="/logo.png"
              alt="Glaspak Logo"
              width={250}
              height={60}
              className={`transition-all duration-300 w-auto
                         ${isSticky ? 'h-[75px]' : 'h-0 opacity-0'}`}
              priority
            />
          </Link>

          {/* Navigation Links */}
          <ul className="flex gap-6 xl:gap-10">
            {navLinks.map(({ href, title, ariaLabel }) => (
              <li key={href}>
                <Link href={href}
                   aria-label={ariaLabel}
                   className={`font-poppins text-base xl:text-lg font-semibold 
                              transition-all duration-300 relative group whitespace-nowrap
                              ${isSticky 
                                ? (title === 'Contact' 
                                    ? 'bg-amber-400 text-white px-5 xl:px-6 py-2 rounded hover:bg-amber-500' 
                                    : 'text-[#2A5A36] hover:text-amber-500')
                                : (title === 'Contact'
                                    ? 'bg-amber-400 text-white px-5 xl:px-6 py-2 rounded hover:bg-amber-500'
                                    : 'text-white hover:text-amber-300')
                              }`}>
                  {title}
                  {title !== 'Contact' && (
                    <span className={`absolute -bottom-1 left-0 w-full h-[2px] 
                                    transform origin-left scale-x-0 
                                    group-hover:scale-x-100 transition-transform duration-300
                                    ${isSticky ? 'bg-amber-400' : 'bg-amber-300'}`} />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Language Toggle */}
          <button
            onClick={() => setCurrentLang(currentLang === 'EN' ? 'MY' : 'EN')}
            className={`flex items-center gap-2 text-[#2A5A36] hover:text-amber-500
                       transition-all duration-300 font-poppins
                       px-4 py-2 rounded-full border border-[#2A5A36]/20
                       hover:border-amber-400/50 ${isSticky ? 'opacity-100' : 'opacity-0'}`}
          >
            <IoLanguage size={24} />
            <span className="font-medium">{currentLang}</span>
          </button>
        </div>
      </Container>
    </nav>
  );
}, (prevProps, nextProps) => true);
Navigation.displayName = 'Navigation';

const MobileNav = memo(({ 
  isOpen, 
  onClose, 
  currentLang, 
  setCurrentLang 
}: { 
  isOpen: boolean; 
  onClose: () => void;
  currentLang: string;
  setCurrentLang: (lang: string) => void;
}) => (
  <div className={`fixed inset-y-0 right-0 w-[300px] bg-[#EDE5DB]/95 backdrop-blur-md z-50 
                   shadow-[-10px_0_30px_rgba(59,125,70,0.1)]
                   transform transition-all duration-300 ease-out
                   ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
    <div className="flex flex-col h-full">
      {/* Header with Links text and close button */}
      <div className="flex justify-between items-center p-6 border-b border-[#2A5A36]/10">
        <span className="font-merriweather text-[#2A5A36] text-xl font-bold
                        bg-gradient-to-r from-[#44875A] via-[#2A5A36] to-[#44875A] 
                        bg-clip-text text-transparent
                        animate-gradient-x bg-[length:200%_auto]">
          Links
        </span>
        <button 
          onClick={onClose} 
          className="w-8 h-8 flex items-center justify-center rounded-full 
                     bg-[#2A5A36]/10 hover:bg-[#2A5A36]/20 
                     transition-all duration-300 transform hover:scale-110
                     hover:rotate-180"
        >
          <span className="text-[#2A5A36] text-lg">&times;</span>
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 py-8">
        <ul className="flex flex-col">
          {navLinks.map(({ href, title, ariaLabel }) => (
            <li key={href} className="group">
              <Link href={href}
                 onClick={onClose}
                 aria-label={ariaLabel}
                 className={`flex items-center px-8 py-4 transition-all duration-300
                           relative overflow-hidden text-[#44875A] hover:text-[#2A5A36]`}>
                <span className="relative font-poppins text-lg font-semibold tracking-wide
                               transition-transform duration-300 group-hover:translate-x-2">
                  {title}
                  {title !== 'Contact' && (
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] 
                                   bg-[#2A5A36] group-hover:w-full 
                                   transition-all duration-300"/>
                  )}
                </span>
                {title !== 'Contact' && (
                  <span className="absolute inset-0 bg-[#2A5A36]/5 
                                 transform -translate-x-full group-hover:translate-x-0
                                 transition-transform duration-300"/>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-6 border-t border-[#2A5A36]/10">
        <button
          onClick={() => setCurrentLang(currentLang === 'EN' ? 'MY' : 'EN')}
          className="group flex items-center gap-2 w-full px-4 py-3
                     rounded-lg bg-[#2A5A36]/5 
                     transition-all duration-300 hover:bg-[#2A5A36]/10
                     relative overflow-hidden"
        >
          <IoLanguage size={20} 
                     className="text-[#44875A] transition-transform duration-300
                               group-hover:rotate-180" />
          <span className="font-poppins font-semibold text-[#44875A] 
                          transition-all duration-300 group-hover:text-[#2A5A36]">
            Language: {currentLang}
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-[#2A5A36]/0 via-[#2A5A36]/5 to-[#2A5A36]/0
                          transform translate-x-[-100%] group-hover:translate-x-[100%]
                          transition-transform duration-700"/>
        </button>
      </div>
    </div>
  </div>
));
MobileNav.displayName = 'MobileNav';

const HeroContent = memo(() => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div ref={ref} className="max-w-[1000px] mx-auto text-center px-4">
      <div className="relative mb-8 sm:mb-10 lg:mb-12">
        <div className="absolute -left-16 -top-16 w-32 h-32 bg-amber-300/5 rounded-full blur-2xl" />
        <div className="absolute -right-16 -bottom-16 w-32 h-32 bg-emerald-300/5 rounded-full blur-2xl" />

        <h1 className={`uppercase font-merriweather font-bold relative tracking-wide space-y-4
                       transition-all duration-700 transform
                       ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="block text-3xl sm:text-5xl lg:text-6xl xl:text-7xl
                         bg-gradient-to-r from-lightYellow via-darkYellow to-lightYellow
                         bg-clip-text text-transparent
                         drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]
                         leading-tight">
            We Are Glaspak,
          </span>
          <span className="block text-xl sm:text-3xl lg:text-4xl xl:text-5xl
                         bg-gradient-to-r from-gray-100 via-white to-gray-100
                         bg-clip-text text-transparent
                         drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]
                         leading-tight mt-2 sm:mt-4">
            Your Total Packaging Solution Partner
          </span>
        </h1>
      </div>

      <p className={`font-poppins text-base sm:text-xl lg:text-2xl
                    leading-relaxed mb-8 sm:mb-10 lg:mb-12
                    max-w-[700px] mx-auto
                    text-white font-medium tracking-wide
                    drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]
                    transition-all duration-700 delay-300
                    ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        Elevating brands through exceptional glass packaging solutions, 
        where precision meets artistry in every design.
      </p>

      <div className={`flex flex-wrap gap-4 sm:gap-6 justify-center
                      transition-all duration-700 delay-500
                      ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <Link href="/category/glass-bottles" className='group relative transform hover:scale-105 transition-all duration-300'>
          <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 blur-sm opacity-50 group-hover:opacity-75 transition-opacity" />
          <span className="relative inline-block px-8 sm:px-10 py-4 sm:py-5 
                                 bg-gradient-to-r from-amber-500 to-amber-400
                                 text-white text-sm sm:text-base tracking-wider font-semibold
                                 overflow-hidden">
            <span className="relative z-10">View Products</span>
            <span className="absolute inset-0 bg-gradient-to-r 
                                   from-white/0 via-white/20 to-white/0
                                   translate-x-[-100%] group-hover:translate-x-[100%]
                                   transition-transform duration-700" />
          </span>
        </Link>
        <Link href="/contact-us"
           className="group relative transform hover:scale-105 transition-all duration-300">
          <span className="relative inline-block px-8 sm:px-10 py-3.5 sm:py-[18px]
                                 border-2 border-white/80 text-white
                                 text-sm sm:text-base tracking-wider font-semibold
                                 hover:bg-white/10
                                 transition-all duration-300">
            <span className="relative z-10">Get a Quote</span>
          </span>
        </Link>
      </div>
    </div>
  );
});
HeroContent.displayName = 'HeroContent';

const HeroSlide = memo(({ img, isActive, priority }: { 
  img: HeroImage;
  isActive: boolean;
  priority: boolean;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`absolute inset-0 transition-all duration-1000 ease-out
                    ${isActive ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-full scale-110'}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-emerald-900/50 animate-pulse" />
      )}
      <Image
        src={img.src}
        alt={img.alt}
        fill
        className="object-cover object-center transform scale-105"
        priority={true}
        sizes="100vw"
        quality={75}
        loading="eager"
        unoptimized
        onLoad={() => setIsLoading(false)}
      />
      <div className="absolute inset-0 bg-gradient-to-b 
                  from-amber-900/10 via-emerald-800/20 to-emerald-900/30" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(251,191,36,0.03),transparent,rgba(251,191,36,0.03))]" />
      <div className="absolute inset-0 bg-black/5" />
    </div>
  );
});
HeroSlide.displayName = 'HeroSlide';

type State = {
  currentSlide: number;
  currentLang: string;
  isMobileMenuOpen: boolean;
};

type Action = 
  | { type: 'CHANGE_SLIDE'; payload: 'next' | 'prev' | number }
  | { type: 'SET_LANGUAGE'; payload: string }
  | { type: 'TOGGLE_MOBILE_MENU'; payload: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'CHANGE_SLIDE':
      if (typeof action.payload === 'number') {
        return { ...state, currentSlide: action.payload };
      }
      const newSlide = action.payload === 'next'
        ? (state.currentSlide + 1) % images.length
        : (state.currentSlide - 1 + images.length) % images.length;
      return { ...state, currentSlide: newSlide };
    case 'SET_LANGUAGE':
      return { ...state, currentLang: action.payload };
    case 'TOGGLE_MOBILE_MENU':
      return { ...state, isMobileMenuOpen: action.payload };
    default:
      return state;
  }
};

const Hero2 = () => {
  const [currentLang, setCurrentLang] = useState('EN');

  const [state, dispatch] = useReducer(reducer, {
    currentSlide: 0,
    currentLang: 'EN',
    isMobileMenuOpen: false
  });

  const handleSlideChange = useCallback((direction: 'next' | 'prev' | number) => {
    dispatch({ type: 'CHANGE_SLIDE', payload: direction });
  }, []);

  const setIsMobileMenuOpen = useCallback((isOpen: boolean) => {
    dispatch({ type: 'TOGGLE_MOBILE_MENU', payload: isOpen });
  }, []);

  const handlePrevSlide = useCallback(() => {
    handleSlideChange('prev');
  }, [handleSlideChange]);

  const handleNextSlide = useCallback(() => {
    handleSlideChange('next');
  }, [handleSlideChange]);

  useEffect(() => {
    let rafId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      if (currentTime - lastTime >= 5000) {
        handleSlideChange('next');
        lastTime = currentTime;
      }
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [handleSlideChange]);

  return (
    <>
      <section className="relative" aria-label="Hero Section">
        <div className="w-full bg-transparent absolute top-0 z-50">
          <Container>
            <div className="flex justify-between items-center py-2 lg:py-3">
              <div className="w-[360px] lg:w-[400px] relative">
              <Link href={"/"}>
                <Image
                  src="/logo.png"
                  alt="Glaspak Logo"
                  width={400}
                  height={100}
                  className="w-auto h-[70px] lg:h-[84px] relative brightness-0 invert"
                  priority
                />
                </Link>
              </div>

              <Navigation currentLang={currentLang} setCurrentLang={setCurrentLang} />

              <button
                className="lg:hidden text-white p-2"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <IoMenu size={28} />
              </button>

              <button
                onClick={() => setCurrentLang(currentLang === 'EN' ? 'MY' : 'EN')}
                className="hidden lg:flex items-center gap-2 text-white hover:text-amber-300
                         transition-colors duration-300 font-poppins
                         px-4 py-2 rounded-full border border-white/20
                         hover:border-amber-300/50"
              >
                <IoLanguage size={24} />
                <span className="font-medium">{currentLang}</span>
              </button>
            </div>
          </Container>
        </div>

        <MobileNav 
          isOpen={state.isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          currentLang={currentLang}
          setCurrentLang={setCurrentLang}
        />

        <div className="relative h-[85vh] sm:h-[90vh] lg:h-[96vh] 2xl:h-[98vh] w-full overflow-hidden">
          {images.map((img, index) => (
            <HeroSlide
              key={img.src}
              img={img}
              isActive={state.currentSlide === index}
              priority={index === 0}
            />
          ))}

          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-3 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300
                          ${state.currentSlide === index 
                            ? 'bg-white w-8' 
                            : 'bg-white/50 hover:bg-white/80'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute bottom-4 left-12 z-20 bg-white/10 backdrop-blur-sm 
                         px-4 py-2 rounded-full text-white font-medium
                         hidden md:block">
            <span className="text-amber-300">{state.currentSlide + 1}</span>
            <span className="mx-1">/</span>
            <span>{images.length}</span>
          </div>

          <div className="absolute bottom-4 right-12 hidden md:flex gap-4 z-20">
            {[
              { icon: IoArrowBack, action: handlePrevSlide, label: "Previous" },
              { icon: IoArrowForward, action: handleNextSlide, label: "Next" }
            ].map((control, idx) => (
              <button 
                key={idx}
                onClick={control.action}
                className="p-2 bg-white/80 rounded-full hover:bg-white
                         transition-all duration-300"
                aria-label={`${control.label} slide`}
              >
                <control.icon className="text-emerald-900 text-xl" />
              </button>
            ))}
          </div>

          <div className="absolute inset-0 flex items-center justify-center z-10">
            <Container>
              <HeroContent />
            </Container>
          </div>
        </div>
      </section>
      <ScrollToTop />
    </>
  );
};

Hero2.displayName = 'Hero2';

export const metadata = {
  title: 'Glaspak - Your Total Packaging Solution Partner',
  description: 'Elevating brands through exceptional glass packaging solutions, where precision meets artistry in every design.',
  openGraph: {
    images: ['/hero/0013.PNG'],
  },
};

export default Hero2;