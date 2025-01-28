"use client"
import React, { memo } from 'react'
import Container from '../Container'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Memoized background component
const BackgroundEffects = memo(() => (
  <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                   w-[120vw] max-w-[1300px] aspect-square rounded-full 
                   bg-gradient-to-tr from-[#E8DED4]/30 via-[#E5EFDC]/20 to-[#E8DED4]/30 
                   blur-3xl animate-slow-pulse" />
    
    <div className="absolute top-[5%] right-[8%] w-[20vw] h-[20vw] max-w-[300px] max-h-[300px]
                   rounded-full bg-[#E5EFDC]/10 blur-2xl animate-float-slow" />
  </div>
));
BackgroundEffects.displayName = 'BackgroundEffects';

// Updated SectionTitle component
const SectionTitle = memo(() => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center mb-8 sm:mb-12 lg:mb-16 px-2 xs:px-4"
    >
      <span className="text-sm sm:text-base font-poppins tracking-[0.4em] 
                     text-[#2A5A36] mb-5 uppercase relative inline-block
                     before:content-[''] before:absolute before:-bottom-2 before:left-1/2 
                     before:-translate-x-1/2 before:w-12 before:h-0.5 
                     before:bg-gradient-to-r before:from-transparent 
                     before:via-[#2A5A36]/70 before:to-transparent">
        Our Products
      </span>

      <div className="relative">
        <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 xs:w-12 h-[2px] 
                       bg-gradient-to-r from-[#2A5A36]/40 to-transparent hidden lg:block" />
        <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 xs:w-12 h-[2px] 
                       bg-gradient-to-l from-[#2A5A36]/40 to-transparent hidden lg:block" />

        <h2 className="text-3xl sm:text-4xl lg:text-5xl 
                      font-bold font-merriweather text-center mb-6
                      bg-gradient-to-r from-[#44875A] via-[#2A5A36] to-[#44875A] 
                      bg-clip-text text-transparent relative
                      animate-gradient-x bg-[length:200%_auto]
                      drop-shadow-[0_2px_4px_rgba(42,90,54,0.2)]">
          Complete Packaging Solutions
        </h2>
      </div>

      <p className="font-poppins text-[#2A5A36] max-w-2xl mx-auto 
                   text-sm sm:text-base leading-relaxed
                   drop-shadow-[0_1px_2px_rgba(42,90,54,0.1)]
                   font-medium">
        Discover Our Extensive Range of Premium Glass Packaging
      </p>

      <p className="font-poppins text-[#2A5A36] max-w-3xl mx-auto mt-4
                   text-sm sm:text-base leading-relaxed
                   drop-shadow-[0_1px_2px_rgba(42,90,54,0.1)]">
        Elevating the food and beverage industry with our comprehensive range of premium glass packaging solutions. 
        Each product is crafted to meet the highest standards of quality and sustainability.
      </p>
    </motion.div>
  );
});
SectionTitle.displayName = 'SectionTitle';

// Updated CategoryCard Component
const CategoryCard = memo(({ image, title, slug, index }: { 
  image: string, 
  title: string, 
  slug: string,
  index: number 
}) => {
  const router = useRouter();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut",
        delay: index * 0.2 // Stagger effect
      }}
      whileHover={{ scale: 1.02 }}
      className="group relative w-full aspect-[4/5] overflow-hidden rounded-lg xs:rounded-xl sm:rounded-2xl"
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 30vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-4 xs:p-5 sm:p-6 md:p-4 lg:p-6 transform transition-transform 
                      duration-500 group-hover:translate-y-[-10px]">
        <h3 className="text-white font-merriweather text-lg xs:text-xl sm:text-2xl md:text-xl lg:text-2xl mb-3 xs:mb-4 md:mb-3 
                       drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
          {title}
        </h3>
        <button 
          onClick={() => router.push(`/category/${slug}`)}
          className="px-4 xs:px-5 sm:px-6 md:px-4 lg:px-6 py-2 md:py-[6px] lg:py-2 
                    bg-[#E5B700] text-white 
                    rounded-full font-poppins text-xs xs:text-sm md:text-xs lg:text-sm font-medium
                    transition-all duration-300 hover:shadow-lg
                    hover:shadow-black/20 hover:bg-[#FFD700]">
          Explore Now
        </button>
      </div>
    </motion.div>
  );
});
CategoryCard.displayName = 'CategoryCard';

function ProductsCategory() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative w-full bg-[#EDE5DB] py-8 sm:py-12 lg:py-16 overflow-hidden"
    >
      <BackgroundEffects />
      
      <Container>
        <div className="relative z-[1]">
          <SectionTitle />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 lg:gap-8 
                         mb-8 sm:mb-12 lg:mb-16">
            {[
              { image: "/prodcat1.PNG", title: "Glass Bottles", slug: "glass-bottles" },
              { image: "/prodcat2.PNG", title: "Glass Jars", slug: "glass-jars" },
              { image: "/prodcat3.jpg", title: "Closures", slug: "closures" }
            ].map((category, index) => (
              <CategoryCard 
                key={category.slug}
                {...category}
                index={index}
              />
            ))}
          </div>
        </div>
      </Container>

      {/* Decorative borders */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r 
                     from-transparent via-[#3B7D46]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r 
                     from-transparent via-[#3B7D46]/20 to-transparent" />
    </motion.section>
  )
}

export default memo(ProductsCategory)