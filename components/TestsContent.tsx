"use client"
import React, { memo } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiOutlineCheck, HiChevronRight } from 'react-icons/hi'

type TestInfo = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  standard: string;
  features: string[];
  image: string;
  standardIcon: string;
}

const tests: TestInfo[] = [
  {
    id: "01",
    title: "Impact Resistance Testing",
    subtitle: "QUALITY TESTING",
    description: "Our comprehensive Impact testing evaluates glass container durability against external forces, ensuring products remain protected through manufacturing, shipping, and handling processes.",
    standard: "ASTM C1256",
    features: [
      "Precision measurement",
      "Detailed reporting",
      "Certified standards",
      "Quality certification"
    ],
    image: "/test-images/test1.jpg",
    standardIcon: "ASTM"
  },
  {
    id: "02",
    title: "Thermal Shock Assessment",
    subtitle: "QUALITY TESTING",
    description: "We validate glass resilience against sudden temperature changes using advanced thermal shock methodology, crucial for products that undergo significant temperature variations.",
    standard: "ISO 7459",
    features: [
      "Temperature control",
      "Stress analysis",
      "Industry compliance",
      "Durability verification"
    ],
    image: "/test-images/test2.jpg",
    standardIcon: "ISO"
  },
  {
    id: "03",
    title: "Pressure Integrity Analysis",
    subtitle: "QUALITY TESTING",
    description: "Our pressure testing verifies structural integrity of containers designed for pressurized contents, ensuring long-term reliability and consumer safety across all conditions.",
    standard: "BS-EN-ISO-7458",
    features: [
      "Pressure simulation",
      "Containment rating",
      "Safety validation",
      "Performance testing"
    ],
    image: "/test-images/test3.jpg",
    standardIcon: "ISO"
  }
];

const TestCard = memo(({ test, index }: { test: TestInfo; index: number }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: "0px 0px -100px 0px"
  });

  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: 0.2 + (index * 0.1) }}
      className="relative"
    >
      <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} 
                    gap-8 lg:gap-12 items-center`}>
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <div className="relative h-[700px] w-full rounded-2xl overflow-hidden 
                       shadow-2xl group-hover:shadow-3xl transition-shadow duration-500">
            <Image
              src={test.image}
              alt={test.title}
              fill
              className="object-cover object-center transform transition-transform duration-700 
                       group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            
            {/* Premium Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent 
                         opacity-60 transition-opacity duration-500 group-hover:opacity-40" />
            
            {/* Test ID Badge */}
            <div className="absolute top-6 right-6 px-4 py-2 bg-white/10 backdrop-blur-md 
                         rounded-full border border-white/20 flex items-center gap-2">
              <span className="text-[#FFD700] font-medium">Test</span>
              <span className="text-white font-bold">{test.id}</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2">
          <div className="relative">
            {/* Subtitle */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-[#336B44] to-[#7BAF7B]" />
              <span className="text-[#336B44] text-sm font-medium tracking-wider">
                {test.subtitle}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-3xl sm:text-4xl font-bold font-merriweather mb-6 
                       text-[#2A5A36] relative">
              {test.title}
            </h3>

            {/* Description */}
            <p className="text-[#2A5A36]/90 text-base sm:text-lg leading-relaxed mb-8 
                       font-poppins max-w-2xl">
              {test.description}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {test.features.map((feature, idx) => (
                <div key={idx} 
                     className="flex items-center gap-3 p-3 rounded-xl
                              bg-white/50 backdrop-blur-sm border border-[#7BAF7B]/20
                              hover:border-[#7BAF7B]/40 transition-colors duration-300">
                  <div className="w-8 h-8 rounded-full bg-[#336B44] flex items-center justify-center 
                              shadow-lg">
                    <HiOutlineCheck className="w-4 h-4 text-[#FFD700]" />
                  </div>
                  <span className="text-[#2A5A36] font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Standard Display - Replacing Learn More button */}
            <div className="flex items-center gap-4">
              <div className="px-6 py-3 bg-[#336B44] rounded-xl shadow-lg
                           border border-[#7BAF7B]/30 hover:border-[#7BAF7B]/50
                           transition-all duration-300">
                <div className="flex items-center gap-3">
                  <span className="text-[#FFD700] font-medium">{test.standardIcon}</span>
                  <div className="w-px h-4 bg-[#7BAF7B]/30" />
                  <span className="text-white/90">{test.standard}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Separator with Reduced Spacing */}
      {index < tests.length - 1 && (
        <div className="relative my-16">
          {/* Center Decorative Element - Made Larger and More Prominent */}
          <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2
                       w-16 h-16 rounded-full bg-[#336B44]/10 
                       flex items-center justify-center
                       border border-[#336B44]/20">
            <div className="w-8 h-8 rounded-full bg-[#336B44]/20 
                         flex items-center justify-center
                         border border-[#336B44]/30">
              <div className="w-3 h-3 rounded-full bg-[#336B44]" />
            </div>
          </div>

          {/* Gradient Lines - Made More Visible */}
          <div className="flex items-center gap-6 max-w-[900px] mx-auto px-6">
            <div className="h-[2px] flex-1 bg-gradient-to-r 
                         from-transparent via-[#336B44]/40 to-transparent" />
            <div className="h-[2px] flex-1 bg-gradient-to-r 
                         from-transparent via-[#336B44]/40 to-transparent" />
          </div>

          {/* Enhanced Decorative Elements */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2 flex gap-12">
            <div className="w-2 h-2 rounded-full bg-[#336B44]" />
            <div className="w-2 h-2 rounded-full bg-[#336B44]/60" />
          </div>
          <div className="absolute right-8 top-1/2 -translate-y-1/2 flex gap-12">
            <div className="w-2 h-2 rounded-full bg-[#336B44]/60" />
            <div className="w-2 h-2 rounded-full bg-[#336B44]" />
          </div>

          {/* Additional Decorative Lines */}
          <div className="absolute left-24 top-1/2 -translate-y-1/2 w-12 h-[2px]
                       bg-gradient-to-r from-[#336B44]/40 to-transparent 
                       transform -rotate-45" />
          <div className="absolute right-24 top-1/2 -translate-y-1/2 w-12 h-[2px]
                       bg-gradient-to-l from-[#336B44]/40 to-transparent 
                       transform rotate-45" />
        </div>
      )}
    </motion.div>
  );
});

TestCard.displayName = 'TestCard';

const TestsContent = memo(() => {
  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-8 sm:space-y-16 mb-6 xs:mb-8 sm:mb-12 lg:mb-16">
        {tests.map((test, index) => (
          <TestCard key={test.id} test={test} index={index} />
        ))}
      </div>
    </div>
  );
});

TestsContent.displayName = 'TestsContent';
export default TestsContent;
