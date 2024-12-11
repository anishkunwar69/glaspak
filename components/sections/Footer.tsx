import React, { memo } from 'react'
import Container from '../Container'
import Image from 'next/image'
import Link from 'next/link'

const footerLinks = {
  useful: [
    { name: 'Home', href: '#hero', ariaLabel: 'Navigate to GVH Glass Packaging home section' },
    { name: 'About', href: '#about', ariaLabel: 'Learn about GVH Glass Packaging history and values' },
    { name: 'Services', href: '#services', ariaLabel: 'Explore GVH premium glass packaging services' },
    { name: 'Products', href: '#products', ariaLabel: 'View GVH glass packaging product catalog' },
    { name: 'Contact', href: '#contact', ariaLabel: 'Contact GVH Glass Packaging Solutions' }
  ],
  services: [
    { name: 'Innovative Design', href: '#services', ariaLabel: 'Premium glass packaging design solutions by GVH' },
    { name: 'Custom Solutions', href: '#services', ariaLabel: 'Tailored glass packaging solutions for your brand' },
    { name: 'Manufacturing', href: '#services', ariaLabel: 'State-of-the-art glass packaging manufacturing' },
    { name: 'Quality Assurance', href: '#services', ariaLabel: 'Industry-leading quality control standards' },
    { name: 'Consultation', href: '#services', ariaLabel: 'Expert glass packaging consultation services' },
    { name: 'Production', href: '#services', ariaLabel: 'Efficient glass packaging production management' }
  ]
} as const;

const BackgroundEffects = memo(() => (
  <div className="absolute inset-0 pointer-events-none opacity-50 md:opacity-70" aria-hidden="true">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_2px,_rgba(255,255,255,0.03)_2px)] 
                   bg-[length:24px_24px] opacity-30" />
    <div className="absolute inset-0 opacity-20"
         style={{
           backgroundImage: `repeating-linear-gradient(
             -45deg,
             transparent,
             transparent 100px,
             rgba(255,255,255,0.1) 100px,
             rgba(255,255,255,0.1) 101px
           )`
         }} />
    <div className="absolute inset-0 backdrop-blur-[100px] bg-gradient-to-b from-white/5 to-transparent" />
  </div>
));
BackgroundEffects.displayName = 'BackgroundEffects';

const LinkList = memo(({ title, links, className = '' }: { 
  title: string; 
  links: typeof footerLinks.useful | typeof footerLinks.services;
  className?: string;
}) => (
  <div className={`p-2.5 sm:p-3 lg:p-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 
                  backdrop-blur-sm border border-white/10 
                  hover:bg-white/15 transition-colors duration-300 ${className}`}>
    <h2 className='font-merriweather font-bold text-base sm:text-lg lg:text-xl mb-2 relative'>
      {title}
      <span className='absolute -bottom-2 left-0 w-1/2 h-0.5 
                     bg-gradient-to-r from-white/30 to-transparent'></span>
    </h2>
    <nav aria-label={`${title} navigation`}>
      <ul className='space-y-1 sm:space-y-1.5 lg:space-y-2'>
        {links.map((link) => (
          <li key={link.name}>
            <Link 
              href={link.href}
              aria-label={link.ariaLabel}
              className='font-poppins text-sm sm:text-base text-white/80 hover:text-white 
                       transition-colors duration-300 relative group inline-block'
            >
              <span className='absolute left-0 -bottom-px w-0 h-px bg-white/30 
                           transition-all duration-300 group-hover:w-full'></span>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </div>
));
LinkList.displayName = 'LinkList';

const Footer = memo(() => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className='w-full bg-[#C5A054] text-white relative overflow-hidden'
      role="contentinfo"
      aria-label="GVH Glass Packaging Solutions footer"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-darkYellow/95 to-darkYellow opacity-80" />
      <BackgroundEffects />

      <Container>
        <div className='py-4 sm:py-6 lg:py-8 px-2.5 relative'>
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-6'>
            {/* Company Info */}
            <div className='col-span-1 md:col-span-2 lg:col-span-5 space-y-3'>
              <div className='relative group'>
                <Image
                  src="/mainlogo.png"
                  alt='GVH Glass Packaging Solutions Logo'
                  width={400}
                  height={178}
                  className='w-auto h-[46px] sm:h-[52px] md:h-[60px] lg:h-[66px] object-contain relative z-10'
                  priority
                  quality={100}
                  sizes="(max-width: 640px) 180px, (max-width: 768px) 200px, (max-width: 1024px) 300px, 400px"
                />
                <div className='absolute inset-0 bg-white/5 blur-xl rounded-full'></div>
              </div>
              <p className="font-poppins text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed 
                           max-w-xl backdrop-blur-sm relative border-l-2 border-white/20 pl-4">
                Since 2000, GVH has been Southeast Asia&apos;s premier glass packaging group, comprising Phoenix Packaging, 
                Glaspak Solutions, TCL, and Glass Solution. We specialize in innovative glass product design, 
                manufacturing, and delivery solutions tailored to our customers&apos; needs.
              </p>
            </div>

            {/* Navigation Links */}
            <div className='col-span-1 sm:col-span-1 lg:col-span-2'>
              <LinkList title="Quick Links" links={footerLinks.useful} />
            </div>

            <div className='col-span-1 sm:col-span-1 lg:col-span-2'>
              <LinkList title="Services" links={footerLinks.services} />
            </div>

            {/* Contact Information */}
            <div className='col-span-1 md:col-span-2 lg:col-span-3'>
              <div className='p-2.5 sm:p-3 lg:p-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 
                            backdrop-blur-sm border border-white/10 
                            hover:bg-white/15 transition-colors duration-300'>
                <h2 className='font-merriweather font-bold text-base sm:text-lg lg:text-xl mb-2 relative'>
                  Contact Information
                  <span className='absolute -bottom-2 left-0 w-1/2 h-0.5 
                                 bg-gradient-to-r from-white/30 to-transparent'></span>
                </h2>
                <address className='not-italic space-y-2'>
                  <div className='font-poppins text-sm sm:text-base text-white/80 space-y-1'>
                    <p><strong className="text-white">GVH Glass Packaging Solutions</strong></p>
                    <p>Phoenix Packaging Sdn Bhd E-2-32</p>
                    <p>Taipan 2 Jalan PJU 1A/3A Ara</p>
                    <p>Damansara 47301 Petaling Jaya</p>
                    <p>Selangor, Malaysia</p>
                  </div>
                  <div className='space-y-2'>
                    <p>
                      <a href="tel:+60378426269"
                         className='font-poppins text-sm sm:text-base text-white/80 
                                  hover:text-white transition-colors duration-300 inline-block'
                         aria-label="Call GVH Glass Packaging office">
                        Phone: +603-7842 6269
                      </a>
                    </p>
                    <p>
                      <a href="mailto:enquiry@phoenix-pac.com"
                         className='font-poppins text-sm sm:text-base text-white/80 
                                  hover:text-white transition-colors duration-300 inline-block'
                         aria-label="Email GVH Glass Packaging">
                        Email: enquiry@phoenix-pac.com
                      </a>
                    </p>
                  </div>
                </address>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className='mt-4 sm:mt-6 lg:mt-8 pt-2.5 border-t border-white/10 relative'>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r 
                          from-transparent via-white/30 to-transparent" />
            
            <p className='text-center text-sm sm:text-base text-white/60 backdrop-blur-sm 
                         hover:text-white/80 transition-colors duration-300'>
              © {currentYear} GVH Glass Packaging Solutions. All rights reserved. Premium glass packaging solutions in Southeast Asia.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;