"use client"
import React, { useEffect, useRef } from 'react'
import { FaFlask, FaShieldAlt, FaHandshake, FaGlobeAsia, FaLightbulb } from 'react-icons/fa'
import { IoSpeedometerOutline } from "react-icons/io5"

const services = [
  {
    icon: <FaLightbulb size={28} />,
    title: "Innovative Design",
    description: "Collaborative development of innovative glass packages and closure systems tailored to your unique needs."
  },
  {
    icon: <FaFlask size={28} />,
    title: "Custom Solutions",
    description: "Specialized design concepts and product specifications that enhance your packaging aesthetics and functionality."
  },
  {
    icon: <FaHandshake size={28} />,
    title: "Manufacturing Excellence",
    description: "State-of-the-art production of glass bottles and closure systems through our network of partner plants."
  },
  {
    icon: <FaShieldAlt size={28} />,
    title: "Quality Assurance",
    description: "Strict process controls and quality standards with agreed AQL specifications for consistent excellence."
  },
  {
    icon: <FaGlobeAsia size={28} />,
    title: "Value Consultation",
    description: "Expert guidance in selecting packaging solutions that maximize your product value and market profitability."
  },
  {
    icon: <IoSpeedometerOutline size={28} />,
    title: "Production Management",
    description: "Comprehensive production oversight with regular updates ensuring timely delivery of quality products."
  }
]

function OurServicesTextContent() {
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = servicesRef.current?.querySelectorAll('.service-card');
    cards?.forEach((card, index) => {
      // Add staggered delay
      card.setAttribute('style', `transition-delay: ${index * 150}ms`);
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={servicesRef} 
         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                   gap-4 xs:gap-6 sm:gap-8 lg:gap-12 
                   mb-6 xs:mb-8 sm:mb-12 lg:mb-16">
      {services.map((service, index) => (
        <div key={index}
             className="service-card opacity-0 translate-y-10 transition-all duration-700">
          <div className="group h-full p-4 xs:p-6 sm:p-8 rounded-xl xs:rounded-2xl 
                         bg-gradient-to-br from-lightBgColor/40 to-lightBgColor/20 
                         backdrop-blur-sm border border-white/5 hover:border-darkYellow/30
                         relative overflow-hidden">
            {/* Icon container */}
            <div className="size-12 xs:size-14 sm:size-16 rounded-lg xs:rounded-xl 
                          bg-darkYellow/10 text-darkYellow
                          flex items-center justify-center mb-4 xs:mb-5 sm:mb-6">
              {service.icon}
            </div>

            {/* Content */}
            <div className="space-y-3 xs:space-y-4">
              <h3 className="text-lg xs:text-xl sm:text-2xl font-merriweather font-bold text-darkYellow">
                {service.title}
              </h3>
              
              <p className="text-sm xs:text-base text-white/70 font-poppins leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Decorative corner elements */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-darkYellow/0" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-darkYellow/0" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default OurServicesTextContent