"use client"
import React, { useState, useEffect, useCallback, memo } from 'react'
import Container from './Container'
import Image from 'next/image'
import { IoMenu, IoClose } from "react-icons/io5"

// Memoized navigation links to prevent unnecessary re-renders
const navLinks = [
  { title: 'Home', href: '#hero', ariaLabel: 'Navigate to home section' },
  { title: 'About', href: '#about-us', ariaLabel: 'Learn more about us' },
  { title: 'Services', href: '#services', ariaLabel: 'View our services' },
  { title: 'Products', href: '#products', ariaLabel: 'Explore our products' },
  { title: 'Contact', href: '#contact', ariaLabel: 'Get in touch with us' }
] as const;

// Optimized Logo component for HD display
const Logo = memo(() => (
  <Image
    src="/mainlogo.png"
    alt='Glaspak - Premium Glass Packaging Solutions'
    width={400}
    height={178}
    className='w-auto h-[46px] sm:h-[52px] md:h-[60px] lg:h-[66px]'
    priority
    quality={100}
    sizes="(max-width: 640px) 180px, 
           (max-width: 768px) 200px, 
           (max-width: 1024px) 300px, 
           400px"
    style={{
      objectFit: 'contain',
      objectPosition: 'left center',
    }}
  />
));
Logo.displayName = 'Logo';

// Memoized NavLink component
const NavLink = memo(({ href, title, ariaLabel, onClick }: { 
  href: string; 
  title: string; 
  ariaLabel: string;
  onClick?: () => void;
}) => (
  <a href={href}
     onClick={onClick}
     aria-label={ariaLabel}
     className='font-poppins font-medium text-white 
                text-[16px] xl:text-[17px]
                transition-all duration-300 hover:text-darkYellow
                relative py-2 px-1'>
    {title}
    <span className='absolute -bottom-1 left-0 w-full h-0.5 bg-darkYellow 
                     transform origin-left scale-x-0 group-hover:scale-x-100 
                     transition-transform duration-300'/>
  </a>
));
NavLink.displayName = 'NavLink';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Optimized scroll handler with debounce
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 20;
    if (isScrolled !== scrolled) {
      setIsScrolled(scrolled);
    }
  }, [isScrolled]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const debouncedScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 10);
    };

    window.addEventListener('scroll', debouncedScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', debouncedScroll);
      clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <div className="relative">
      <nav className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500
                    ${isScrolled 
                      ? 'bg-bgColor/90 backdrop-blur-md shadow-lg py-2' 
                      : 'bg-transparent py-4'}`}
           role="navigation"
           aria-label="Main navigation">
        {/* Premium border effect - only visible when not scrolled */}
        {!isScrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r 
                         from-transparent via-white/10 to-transparent
                         after:absolute after:bottom-0 after:left-[5%] after:right-[5%] after:h-[1px]
                         after:bg-gradient-to-r after:from-transparent after:via-darkYellow/20 after:to-transparent" />
        )}
        
        <Container>
          <div className='flex justify-between items-center relative'>
            {/* Logo with link */}
            <a href="#hero" aria-label="Return to homepage" className='relative'>
              <Logo />
            </a>

            {/* Desktop Navigation */}
            <div className='hidden lg:block' role="menubar">
              <ul className='flex justify-end items-center gap-x-8 xl:gap-x-12'>
                {navLinks.map(({ href, title, ariaLabel }) => (
                  <li key={href} className='relative group' role="none">
                    <NavLink href={href} title={title} ariaLabel={ariaLabel} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              className='lg:hidden flex items-center justify-center w-12 h-12 
                       text-white hover:bg-white/5 rounded-full
                       transition-colors duration-300'
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <IoClose size={28}/> : <IoMenu size={28}/>}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div 
            id="mobile-menu"
            className={`lg:hidden fixed top-[${isScrolled ? '66px' : '82px'}] left-0 right-0 
                      bg-bgColor/95 backdrop-blur-md border-t border-white/10
                      transition-all duration-300 max-h-[calc(100vh-82px)] overflow-y-auto
                      ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            role="menu"
            aria-hidden={!isMobileMenuOpen}
          >
            <Container>
              <ul className='py-4 space-y-2'>
                {navLinks.map(({ href, title, ariaLabel }, index) => (
                  <li key={href} 
                      style={{ transitionDelay: `${index * 50}ms` }}
                      className={`transform transition-all duration-300 
                                 ${isMobileMenuOpen 
                                   ? 'translate-x-0 opacity-100' 
                                   : 'translate-x-4 opacity-0'}`}
                      role="none">
                    <NavLink 
                      href={href} 
                      title={title} 
                      ariaLabel={ariaLabel}
                      onClick={closeMobileMenu}
                    />
                  </li>
                ))}
              </ul>
            </Container>
          </div>
        </Container>
      </nav>
    </div>
  )
}

export default memo(Navbar);