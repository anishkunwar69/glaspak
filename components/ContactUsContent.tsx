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

  const content = (
    <div
      ref={ref}
      className={`contact-card bg-gradient-to-br from-emerald-900/10 to-darkBgColor/90 
                backdrop-blur-lg rounded-xl p-6 border border-emerald-500/10 
                hover:border-emerald-500/30 transition-all duration-700
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${info.color} 
                    flex items-center justify-center mb-4 mx-auto
                    transition-transform duration-300 hover:scale-105`}>
        <info.icon size={28} className="text-darkBgColor" aria-hidden="true" />
      </div>
      <div className='text-center'>
        <h3 className='text-xl font-merriweather font-bold text-white mb-2'>{info.title}</h3>
        {info.details.map((detail, idx) => (
          <p key={idx} className='font-poppins text-emerald-100/80 text-sm leading-relaxed'>
            {detail}
          </p>
        ))}
      </div>
    </div>
  );

  return info.link ? (
    <a 
      href={info.link} 
      className="block hover:scale-[1.02] transition-transform duration-300"
      target={info.title === "Location" ? "_blank" : undefined}
      rel={info.title === "Location" ? "noopener noreferrer" : undefined}
    >
      {content}
    </a>
  ) : content;
});

ContactCard.displayName = 'ContactCard';

const ContactUsContent = memo(() => {
  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: ctaRef, inView: ctaInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Container>
      <div className='w-full min-h-screen flex flex-col justify-center items-center py-16 px-4'>
        <div 
          ref={titleRef} 
          className={`text-center mb-8 sm:mb-12 transition-all duration-700
                     ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h1 className="uppercase font-merriweather text-2xl sm:text-3xl md:text-4xl 
                      lg:text-5xl xl:text-6xl text-transparent bg-clip-text 
                      bg-gradient-to-r from-emerald-300 to-amber-300 
                      font-bold mb-3 sm:mb-4 px-4 sm:px-6">
            Contact Us
          </h1>
          <p className='font-poppins text-emerald-100/80 max-w-2xl mx-auto 
                     text-sm sm:text-base md:text-lg leading-relaxed px-4'>
            Reach out anytime—our trusted support team is available to provide outstanding assistance whenever you need it
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl'>
          {contactInfo.map((info, index) => (
            <ContactCard key={info.title} info={info} index={index} />
          ))}
        </div>

        <div 
          ref={ctaRef} 
          className={`mt-12 text-center max-w-2xl mx-auto px-4 transition-all duration-700
                     ${ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className='font-poppins text-sm sm:text-base text-emerald-100/90 mb-2'>
            Ready to elevate your packaging solutions?
          </p>
          <a 
            href="mailto:enquiry@phoenix-pac.com" 
            className='group inline-block'
            aria-label="Contact us via email"
          >
            <p className='font-merriweather text-base sm:text-lg text-transparent bg-clip-text 
                       bg-gradient-to-r from-emerald-300 to-amber-300 font-semibold
                       transition-colors duration-300 hover:from-amber-300 hover:to-emerald-300'>
              Contact us today — Your success story begins with a conversation
              <span className='block h-0.5 w-0 group-hover:w-full bg-gradient-to-r 
                           from-emerald-300 to-amber-300 transition-all duration-300'></span>
            </p>
          </a>
        </div>
      </div>
    </Container>
  );
});

ContactUsContent.displayName = 'ContactUsContent';
export default ContactUsContent;