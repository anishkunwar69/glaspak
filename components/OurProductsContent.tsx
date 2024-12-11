'use client'
import React, { memo } from 'react';
import Container from './Container';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

// Pre-defined products data with metadata
const products = [
  {
    src: 'prod1.png',
    alt: 'Premium Glass Bottle Design',
    title: 'Premium Glass Bottle',
    category: 'Beverage Container'
  },
  {
    src: 'prod2.png',
    alt: 'Luxury Glass Container Design',
    title: 'Luxury Container',
    category: 'Cosmetic Packaging'
  },
  {
    src: 'prod3.png',
    alt: 'Custom Glass Jar Design',
    title: 'Custom Glass Jar',
    category: 'Food Storage'
  },
  {
    src: 'prod10.png',
    alt: 'Specialty Glass Packaging',
    title: 'Specialty Packaging',
    category: 'Premium Container'
  },
  {
    src: 'prod5.png',
    alt: 'Elegant Glass Bottle Design',
    title: 'Elegant Bottle',
    category: 'Wine & Spirits'
  },
  {
    src: 'prod6.png',
    alt: 'Modern Glass Container Design',
    title: 'Modern Container',
    category: 'Personal Care'
  },
  {
    src: 'prod7.png',
    alt: 'Innovative Glass Packaging',
    title: 'Innovative Package',
    category: 'Specialty Design'
  },
  {
    src: 'prod9.png',
    alt: 'Premium Glass Design Solution',
    title: 'Premium Solution',
    category: 'Custom Design'
  }
] as const;

// Memoized product card component
const ProductCard = memo(({ product, index }: { 
  product: typeof products[number];
  index: number;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`group w-full max-w-[300px] aspect-square hover:-translate-y-2
                transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative w-full h-full rounded-xl overflow-hidden bg-emerald-900/10">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent 
                      via-transparent to-emerald-900/50 
                      group-hover:to-amber-900/50 
                      transition-all duration-300 z-10" />
        
        {/* Glowing Border Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 
                      to-amber-500/20 opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300 rounded-xl z-0" />
        
        {/* Image Container */}
        <div className="absolute inset-0 z-[1] p-4">
          <div className="relative w-full h-full transform group-hover:scale-105 
                        transition-transform duration-500">
            <Image
              src={`/${product.src}`}
              alt={product.alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
              loading="lazy"
              quality={85}
            />
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-darkBgColor/80 
                      via-transparent to-transparent opacity-0 
                      group-hover:opacity-100 transition-opacity duration-300 
                      z-20 flex items-end justify-center pb-6">
          <div className="translate-y-4 group-hover:translate-y-0 
                        transition-transform duration-300">
            <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 
                          to-amber-400 mx-auto rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
});
ProductCard.displayName = 'ProductCard';

const OurProductsContent = memo(() => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 place-items-center">
        {products.map((product, index) => (
          <ProductCard 
            key={product.src} 
            product={product} 
            index={index} 
          />
        ))}
      </div>
    </Container>
  );
});

OurProductsContent.displayName = 'OurProductsContent';
export default OurProductsContent;