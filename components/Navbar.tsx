"use client"
import React, { useState } from 'react'
import Container from './Container'
import Image from 'next/image'
import Link from 'next/link'
import { IoLanguage } from "react-icons/io5"

const navLinks = [
  { 
    title: 'Our Products', 
    href: '/category/glass-bottles', 
    ariaLabel: 'View our products',
  },
  { 
    title: 'Custom Designs', 
    href: '/custom-design', 
    ariaLabel: 'Explore custom designs',
  },
  { 
    title: 'Our Story', 
    href: '/our-story', 
    ariaLabel: 'Learn our story',
  },
  { 
    title: 'Contact', 
    href: '/contact-us', 
    ariaLabel: 'Contact us',
  }
] as const;

function Navbar() {
  const [currentLang, setCurrentLang] = useState('EN');

  return (
    <nav className="hidden lg:block fixed top-0 left-0 right-0 bg-[#E5DCD0]/95 backdrop-blur-md z-50 py-2 shadow-xl">
      <Container>
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <Link href="/" className="relative">
            <Image
              src="/logo.png"
              alt="Glaspak Logo"
              width={250}
              height={60}
              className="w-auto h-[75px]"
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
                              ${title === 'Contact' 
                                ? 'bg-amber-400 text-white px-5 xl:px-6 py-2 rounded hover:bg-amber-500' 
                                : 'text-[#2A5A36] hover:text-amber-500'}`}>
                  {title}
                  {title !== 'Contact' && (
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] 
                                    transform origin-left scale-x-0 
                                    group-hover:scale-x-100 transition-transform duration-300
                                    bg-amber-400" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Language Toggle */}
          <button
            onClick={() => setCurrentLang(currentLang === 'EN' ? 'MY' : 'EN')}
            className="flex items-center gap-2 text-[#2A5A36] hover:text-amber-500
                       transition-all duration-300 font-poppins
                       px-4 py-2 rounded-full border border-[#2A5A36]/20
                       hover:border-amber-400/50"
          >
            <IoLanguage size={24} />
            <span className="font-medium">{currentLang}</span>
          </button>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar