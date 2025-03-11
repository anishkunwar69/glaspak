"use client"
import React, { memo, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

// Enhanced test data with icons
const testData = [
  {
    id: 1,
    title: "Impact Resistance Testing",
    description: "Our comprehensive impact testing evaluates glass container durability against external forces, ensuring products remain protected through manufacturing, shipping, and handling processes.",
    standard: "ASTM C1256",
    image: "/test-images/test1.jpg",
    icon: "⚡" // Using emoji as placeholder, could use a proper icon component
  },
  {
    id: 2,
    title: "Thermal Shock Assessment",
    description: "We validate glass resilience against sudden temperature changes using advanced thermal shock methodology, crucial for products that undergo significant temperature variations.",
    standard: "ISO 7459",
    image: "/test-images/test2.jpg",
    icon: "🔥"
  },
  {
    id: 3,
    title: "Pressure Integrity Analysis",
    description: "Our pressure testing verifies structural integrity of containers designed for pressurized contents, ensuring long-term reliability and consumer safety across all conditions.",
    standard: "ASTM C147",
    image: "/test-images/test3.jpg",
    icon: "⚖️"
  }
];

// Fixed component with proper typing
const PremiumTestGallery = memo(() => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  return (
    <div>
      {/* Quick navigation dots */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center gap-3 p-1.5 bg-white/30 backdrop-blur-sm 
                      rounded-full shadow-sm border border-[#336B44]/10">
          {testData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => document.getElementById(`test-${idx}`)?.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
              })}
              className="w-8 h-8 rounded-full flex items-center justify-center
                       transition-colors duration-300 relative group"
            >
              <span className="absolute inset-0 rounded-full bg-[#336B44]/10
                            group-hover:bg-[#336B44]/20 transition-colors duration-300" />
              <span className="relative z-10 text-[#336B44] font-medium text-sm">
                {idx + 1}
              </span>
            </button>
          ))}
        </div>
      </div>
    
      <div className="space-y-12 md:space-y-16">
        {testData.map((test, index) => (
          <React.Fragment key={test.id}>
            <div id={`test-${index}`}>
              <TestFeature
                test={test}
                index={index}
                isActive={activeIndex === index}
                setActive={() => setActiveIndex(index)}
              />
            </div>
            
            {/* Separator with progress indicator */}
            {index < testData.length - 1 && (
              <div className="relative w-full py-2">
                <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r 
                             from-[#336B44]/10 via-[#336B44]/30 to-[#336B44]/10" />
                
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                             w-12 h-12 rounded-full bg-[#EDE5DB] flex items-center justify-center
                             border border-[#336B44]/20 shadow-sm">
                  <div className="text-xs text-[#336B44]/80 font-medium">
                    {index + 1}/{testData.length}
                  </div>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
});

// TestFeature interface for proper typing
interface TestFeatureProps {
  test: typeof testData[0];
  index: number;
  isActive: boolean;
  setActive: () => void;
}

// TestFeature component with proper typing
const TestFeature = memo(({ test, index, isActive, setActive }: TestFeatureProps) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Subtle parallax effect
  const imageOffset = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const contentOffset = useTransform(scrollYProgress, [0, 1], [20, -20]);
  
  const isInView = useInView(containerRef, { 
    once: true, 
    amount: 0.2,
    margin: "-100px 0px" 
  });
  
  const isEven = index % 2 === 0;
  
  return (
    <div 
      ref={containerRef}
      onClick={setActive}
      className={`relative w-full flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} 
                  items-center gap-4 md:gap-6 lg:gap-8 transition-all duration-500
                  ${isActive ? 'scale-[1.01]' : 'scale-100'} cursor-pointer`}
    >
      {/* Premium image presentation with parallax */}
      <motion.div 
        className="w-full md:w-[45%]"
        style={{ y: imageOffset }}
        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -30 : 30 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        <div className="relative group overflow-hidden">
          {/* Enhanced image container with premium style */}
          <div className="relative w-full aspect-[3/4] rounded-2xl shadow-xl
                        overflow-hidden border-2 border-white
                        transform transition duration-700
                        group-hover:shadow-2xl group-hover:scale-[1.01]">
            {/* Subtle perspective tilt effect */}
            <div className="absolute inset-0 w-full h-full
                          transform perspective-1000 transition duration-700
                          group-hover:rotate-y-1 group-hover:rotate-x-1">
              <Image
                src={test.image}
                alt={test.title}
                fill
                className="object-cover object-center transition-transform duration-2000
                         group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 45vw"
                priority={index === 0}
              />
            </div>
            
            {/* Enhanced gradient overlay with subtle pattern */}
            <div className="absolute inset-0 bg-gradient-to-t 
                          from-black/40 via-black/10 to-transparent
                          opacity-70 group-hover:opacity-50
                          transition-opacity duration-500" 
                 style={{
                   backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.5), transparent), 
                                   url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E")`
                 }}
            />
            
            {/* Premium badge with icon */}
            <div className="absolute top-4 left-4 px-3 py-2 
                          bg-white/90 backdrop-blur-md rounded-lg
                          shadow-lg border border-white/50
                          transform -rotate-1 group-hover:rotate-0
                          transition-all duration-300">
              <div className="flex items-center gap-2">
                <span className="text-lg">{test.icon}</span>
                <span className="text-sm font-medium text-[#336B44]">
                  Test {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </div>
            
            {/* Standard badge with improved style */}
            <div className="absolute bottom-4 right-4 px-3 py-2 
                          bg-[#336B44] text-white rounded-lg
                          shadow-lg border border-[#336B44]/50
                          transform -rotate-1 group-hover:rotate-0
                          transition-all duration-300">
              <span className="text-xs font-medium tracking-wider">{test.standard}</span>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Enhanced content presentation with parallax */}
      <motion.div 
        className={`w-full md:w-[55%] ${isEven ? 'md:pl-4 lg:pl-6' : 'md:pr-4 lg:pr-6'}`}
        style={{ y: contentOffset }}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      >
        {/* Premium content card with depth effect */}
        <div className="bg-gradient-to-br from-white/80 to-[#EDE5DB]/70 
                      backdrop-blur-sm rounded-2xl 
                      border border-white/50 shadow-lg
                      p-6 lg:p-7 relative overflow-hidden
                      group hover:shadow-xl hover:border-[#336B44]/20
                      transition-all duration-500
                      transform perspective-1000">
          
          {/* Enhanced decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 
                        bg-gradient-to-br from-[#336B44]/5 to-transparent 
                        rounded-tl-2xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 
                        bg-gradient-to-tl from-[#336B44]/5 to-transparent 
                        rounded-br-2xl" />
          
          {/* Enhanced accented header */}
          <div className="mb-5 flex items-center">
            <div className="w-12 h-1 bg-[#336B44] rounded-full" />
            <div className="ml-3 text-xs uppercase tracking-wider text-[#336B44]/70 font-medium">
              Quality Testing
            </div>
          </div>
          
          {/* Enhanced title with subtle animation */}
          <motion.h3 
            className="font-merriweather font-bold text-xl sm:text-2xl lg:text-3xl 
                     text-[#336B44] relative z-10 mb-3 inline-block"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            {test.title}
            <div className="w-full h-1 bg-[#336B44]/10 mt-1 rounded-full" />
          </motion.h3>
          
          {/* Enhanced description with refined typography */}
          <p className="text-[#2A5A36]/80 text-sm sm:text-base leading-relaxed mb-5 max-w-xl relative z-10
                      first-letter:text-[#336B44] first-letter:font-semibold first-letter:text-lg">
            {test.description}
          </p>
          
          {/* Enhanced feature highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 mt-4 relative z-10
                        p-4 bg-white/50 rounded-xl border border-white/60">
            {["Precision measurement", "Certified standards", "Detailed reporting", "Quality certification"].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 0.3 + (i * 0.1) }}
                className="flex items-start gap-2 group/item"
                whileHover={{ x: 3 }}
              >
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#336B44]/10 
                             flex items-center justify-center mt-0.5
                             group-hover/item:bg-[#336B44]/20 transition-colors duration-300">
                  <div className="w-2 h-2 rounded-full bg-[#336B44]
                               group-hover/item:scale-125 transition-transform duration-300" />
                </div>
                <span className="text-[#2A5A36] text-sm font-medium">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
          
          {/* Enhanced call to action */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="mt-6 relative z-10 flex justify-between items-center"
            whileHover={{ scale: 1.02 }}
          >
            <button className="px-5 py-2.5 bg-[#336B44] text-white text-sm font-medium
                           rounded-lg shadow-md hover:bg-[#2A5A36] hover:shadow-lg 
                           transition-all duration-300 relative overflow-hidden group/btn">
              <span className="relative z-10 flex items-center gap-2">
                <span>Learn More</span>
                <span className="transform group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
              </span>
              <div className="absolute inset-0 w-full h-full bg-[#244C31] 
                           transform origin-left scale-x-0 group-hover/btn:scale-x-100
                           transition-transform duration-300" />
            </button>
            
            {/* Test number indicator */}
            <div className="text-[#336B44] text-sm">
              <span className="font-medium">{index + 1}</span>
              <span className="text-[#336B44]/50"> / {testData.length}</span>
            </div>
          </motion.div>
          
          {/* Enhanced corner accents */}
          <div className="absolute top-0 left-0 w-20 h-20 
                        border-t-2 border-l-2 border-[#336B44]/10 
                        rounded-tl-2xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-20 h-20 
                        border-b-2 border-r-2 border-[#336B44]/10 
                        rounded-br-2xl pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
});

PremiumTestGallery.displayName = 'PremiumTestGallery';
TestFeature.displayName = 'TestFeature';
export default PremiumTestGallery; 