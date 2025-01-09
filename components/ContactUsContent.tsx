"use client"
import React, { memo } from 'react'
import Container from './Container'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';
import type { IconType } from 'react-icons';

interface ContactInfo {
  icon: IconType;
  title: string;
  details: string[];
  color: string;
  link?: string;
}

// Pre-defined contact information
const contactInfo: readonly ContactInfo[] = [
  {
    icon: IoLocationOutline,
    title: "Location",
    details: [
      "Glaspak Solutions Sdn Bhd",
      "E-2-32 Taipan 2, Jalan PJU 1A/3A",
      "Ara Damansara, Petaling Jaya",
      "47301 Selangor"
    ],
    color: "from-emerald-400 to-emerald-600",
    link: "https://maps.google.com/?q=Glaspak+Solutions+Sdn+Bhd+E-2-32+Taipan+2+Jalan+PJU+1A/3A+Ara+Damansara"
  },
  {
    icon: MdOutlineEmail,
    title: "Email",
    details: ["enquiry@phoenix-pac.com"],
    color: "from-amber-400 to-amber-600",
    link: "mailto:enquiry@phoenix-pac.com"
  },
  {
    icon: IoCallOutline,
    title: "Call",
    details: ["+603-7842 6269"],
    color: "from-emerald-400 to-emerald-600",
    link: "tel:+60378426269"
  },
  {
    icon: FaRegClock,
    title: "Open Hours",
    details: ["9 AM - 5 PM"],
    color: "from-amber-400 to-amber-600"
  }
] as const;

// Memoized contact card component
const ContactCard = memo(({ info, index }: { info: ContactInfo; index: number }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`group relative w-full bg-gradient-to-br from-white/80 to-white/40
                backdrop-blur-sm rounded-2xl p-6 lg:p-8
                border border-[#2A5A36]/10 hover:border-[#2A5A36]/20
                transition-all duration-700 overflow-hidden h-full
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Hover effect background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2A5A36]/5 to-transparent 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-r ${info.color} 
                    flex items-center justify-center mb-4 mx-auto
                    transition-transform duration-300 group-hover:scale-110
                    shadow-lg shadow-[#2A5A36]/10`}>
        <info.icon size={28} className="text-white" aria-hidden="true" />
      </div>

      <div className='relative text-center'>
        <h3 className='text-xl font-merriweather font-bold text-[#2A5A36] mb-3'>{info.title}</h3>
        {info.details.map((detail, idx) => (
          <p key={idx} className='font-poppins text-[#2A5A36]/80 text-sm leading-relaxed mb-1'>
            {detail}
          </p>
        ))}
      </div>
    </div>
  );
});

ContactCard.displayName = 'ContactCard';

const ContactUsContent = memo(() => {
  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      {/* Title section with matched spacing from AboutUs2 */}
      <div 
        ref={titleRef} 
        className={`w-full text-center mb-6 xs:mb-8 sm:mb-12 lg:mb-16 px-2 xs:px-4 transition-all duration-700
                   ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <span className="text-xs sm:text-sm md:text-base font-poppins 
                     tracking-[0.4em] text-[#2A5A36] mb-4 sm:mb-5 uppercase relative inline-block
                     before:content-[''] before:absolute before:-bottom-2 before:left-1/2 
                     before:-translate-x-1/2 before:w-12 before:h-0.5 
                     before:bg-gradient-to-r before:from-transparent 
                     before:via-[#2A5A36]/70 before:to-transparent">
          Get In Touch
        </span>

        <div className="relative">
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-[2px] 
                       bg-gradient-to-r from-[#2A5A36]/40 to-transparent hidden lg:block" />
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-[2px] 
                       bg-gradient-to-l from-[#2A5A36]/40 to-transparent hidden lg:block" />

          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 
                      font-bold font-merriweather text-center mb-2 xs:mb-3 sm:mb-4
                      bg-gradient-to-r from-[#44875A] via-[#2A5A36] to-[#44875A] 
                      bg-clip-text text-transparent relative
                      animate-gradient-x bg-[length:200%_auto]
                      drop-shadow-[0_2px_4px_rgba(42,90,54,0.2)]">
            Contact Us
          </h1>
        </div>

        <p className="font-poppins text-[#2A5A36] max-w-2xl mx-auto 
                   text-[10px] xs:text-xs sm:text-sm md:text-base leading-relaxed
                   drop-shadow-[0_1px_2px_rgba(42,90,54,0.1)]
                   font-medium">
          Reach out anytime—we're here to provide outstanding assistance
        </p>
      </div>

      {/* Subtitle section with matched spacing */}
      <div className="w-full max-w-4xl mx-auto text-center mb-6 xs:mb-8 sm:mb-12 lg:mb-16">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-merriweather 
                    bg-gradient-to-r from-[#44875A] via-[#2A5A36] to-[#44875A] 
                    bg-clip-text text-transparent
                    drop-shadow-[0_2px_4px_rgba(42,90,54,0.2)] mb-4">
          Let's Create Something Extraordinary Together
        </h3>
        <p className="text-[#2A5A36]/80 text-sm sm:text-base md:text-lg font-poppins leading-relaxed mb-6">
          Whether you're looking for innovative glass packaging solutions or have questions about our services,
          our team is ready to assist you in bringing your vision to life.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <div className="flex items-center text-[#2A5A36]/90 font-poppins">
            <span className="w-2 h-2 rounded-full bg-[#2A5A36]/40 mr-2" />
            Expert Consultation
          </div>
          <div className="flex items-center text-[#2A5A36]/90 font-poppins">
            <span className="w-2 h-2 rounded-full bg-[#2A5A36]/40 mr-2" />
            Quick Response Time
          </div>
          <div className="flex items-center text-[#2A5A36]/90 font-poppins">
            <span className="w-2 h-2 rounded-full bg-[#2A5A36]/40 mr-2" />
            Tailored Solutions
          </div>
        </div>
      </div>

      {/* Contact cards grid with matched spacing */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6 sm:gap-8 w-full 
                   mb-6 xs:mb-8 sm:mb-12 lg:mb-16'>
        {contactInfo.map((info, index) => (
          <ContactCard key={info.title} info={info} index={index} />
        ))}
      </div>

      {/* Email CTA section with matched bottom spacing */}
      <div className="w-full max-w-3xl mx-auto text-center mb-6 xs:mb-8 sm:mb-12 lg:mb-16">
        <a href="mailto:enquiry@phoenix-pac.com"
           className="group relative inline-flex items-center gap-3 px-12 py-5
                    bg-[#2A5A36] hover:bg-[#44875A]
                    text-white rounded-full
                    transition-all duration-300
                    overflow-hidden">
          {/* Shine effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                        translate-x-[-200%] group-hover:translate-x-[200%]
                        transition-transform duration-1000 ease-in-out" 
               aria-hidden="true" />
          
          {/* Button content */}
          <span className="text-xl font-poppins relative z-10">
            Send Us an Email
          </span>
          <MdOutlineEmail size={24} className="relative z-10" />
        </a>

        <p className="mt-6 text-[#2A5A36]/80 text-sm sm:text-base font-poppins">
          Have a specific inquiry? We'd love to hear from you!
          <br />
          Our team typically responds within an hour.
        </p>
      </div>
    </div>
  );
});

ContactUsContent.displayName = 'ContactUsContent';
export default ContactUsContent;