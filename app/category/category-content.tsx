"use client"
import React, { memo } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useRouter } from 'next/navigation'
import Container from '@/components/Container'
// Pre-defined categories data
const categories = [
  {
    image: "/prodcat1.PNG",
    title: "Glass Bottles",
    description: "Premium glass bottles for beverages",
    slug: "glass-bottles"
  },
  {
    image: "/prodcat2.PNG",
    title: "Glass Jars",
    description: "Elegant jars for food packaging",
    slug: "glass-jars"
  },
  {
    image: "/prodcat3.jpg",
    title: "Closures",
    description: "Quality sealing solutions",
    slug: "closures"
  }
] as const;

// Background Effects Component
const BackgroundEffects = memo(() => (
  <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                   w-[120vw] max-w-[1300px] aspect-square rounded-full 
                   bg-gradient-to-tr from-[#2A5A36]/10 via-[#2A5A36]/5 to-[#2A5A36]/10 
                   blur-3xl animate-slow-pulse" />
    
    <div className="absolute top-[10%] right-[5%] w-64 h-64 
                   rounded-full bg-[#2A5A36]/5 blur-2xl animate-float-slow" />
  </div>
));
BackgroundEffects.displayName = 'BackgroundEffects';

// Category Card Component
const CategoryCard = memo(({ image, title, description, slug, index }: {
  image: string;
  title: string;
  description: string;
  slug: string;
  index: number;
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
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative w-full aspect-[4/5] overflow-hidden rounded-2xl"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform 
                    duration-500 group-hover:translate-y-[-10px]">
        <h3 className="text-white font-merriweather text-2xl mb-2">
          {title}
        </h3>
        <p className="text-white/80 font-poppins text-sm mb-4">
          {description}
        </p>
        <button 
          onClick={() => router.push(`/category/${slug}`)}
          className="px-6 py-2 bg-[#E5B700] text-white rounded-full 
                    font-poppins text-sm font-medium transition-all duration-300 
                    hover:shadow-lg hover:shadow-black/20 hover:bg-[#FFD700]"
        >
          View More
        </button>
      </div>
    </motion.div>
  );
});
CategoryCard.displayName = 'CategoryCard';

function CategoryContent() {
  const router = useRouter();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="relative w-full bg-[#E5DCD0] py-14 lg:py-18 overflow-hidden">
      <BackgroundEffects />

      <Container>
        {/* Title Section */}
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm sm:text-base font-poppins tracking-[0.4em] 
                     text-[#2A5A36] mb-5 uppercase relative inline-block
                     before:content-[''] before:absolute before:-bottom-2 before:left-1/2 
                     before:-translate-x-1/2 before:w-12 before:h-0.5 
                     before:bg-gradient-to-r before:from-transparent 
                     before:via-[#2A5A36]/70 before:to-transparent"
          >
            Our Products
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-merriweather 
                    text-center mb-6 text-[#2A5A36]"
          >
            Explore Our Premium Collection
          </motion.h1>

          <div className="relative max-w-4xl mx-auto">
            <span className="absolute -left-8 top-0 text-[80px] text-[#2A5A36]/20 font-serif">"</span>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-poppins text-[#2A5A36]/80 text-base sm:text-lg 
                       leading-relaxed px-10"
            >
              At GlasPak, we offer an extensive range of premium packaging solutions 
              tailored to meet diverse industry needs. Each category represents our 
              commitment to quality and innovation.
            </motion.p>
            <span className="absolute -right-8 bottom-0 text-[80px] text-[#2A5A36]/20 font-serif">"</span>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {categories.map((category, index) => (
            <CategoryCard key={category.slug} {...category} index={index} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            onClick={() => router.push('/category/glass-bottles')}
            className="px-8 py-3 bg-[#2A5A36] text-white rounded-full 
                    font-poppins text-lg font-medium transition-all duration-300 
                    hover:shadow-lg hover:shadow-[#2A5A36]/20 hover:bg-[#2A5A36]/90
                    border-2 border-[#2A5A36] hover:border-[#2A5A36]/90"
          >
            View Full Collection
          </motion.button>
        </div>
      </Container>
    </section>
  )
}

export default CategoryContent