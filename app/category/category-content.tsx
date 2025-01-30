"use client"
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import Container from '@/components/Container';

const categories = [
  {
    id: 'glass-bottles',
    image: '/prodcat1.PNG',
    title: 'Glass',
    description: 'Explore our premium glass bottle collection, featuring elegant designs and superior quality for your beverage packaging needs.'
  },
  {
    id: 'glass-jars',
    image: '/prodcat2.PNG',
    title: 'Jars',
    description: 'Discover our versatile jar collection, perfect for food packaging, preserves, and specialty products, combining style with functionality.'
  },
  {
    id: 'closures',
    image: '/prodcat3.jpg',
    title: 'Closures',
    description: 'Complete your packaging with our premium closure solutions, ensuring perfect sealing and preservation for all your container needs.'
  }
] as const;

function CategoryContent() {
  const [selectedCategory, setSelectedCategory] = useState('glass-bottles');
  const { ref: contentRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '50px 0px'
  });

  return (
    <section className="relative w-full bg-[#EDE5DB] py-6 xs:py-8 sm:py-12 lg:py-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                     w-[120vw] max-w-[1300px] aspect-square rounded-full 
                     bg-gradient-to-tr from-[#E8DED4]/30 via-[#E5EFDC]/20 to-[#E8DED4]/30 
                     blur-3xl animate-slow-pulse" />
        
        <div className="absolute inset-0 opacity-[0.04]"
             style={{
               backgroundImage: `radial-gradient(circle at center, rgba(62, 96, 71, 0.25) 0.5px, transparent 0.5px)`,
               backgroundSize: '20px 20px'
             }} />
      </div>

      {/* Border Decorations */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r 
                   from-transparent via-[#3B7D46]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r 
                   from-transparent via-[#3B7D46]/20 to-transparent" />

      <Container>
        <div ref={contentRef} 
             className={`grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 lg:gap-12
                      transition-all duration-700 ease-out
                      ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          
          {/* Left Side - Large Image */}
          <div className="relative h-[300px] xs:h-[400px] sm:h-[600px] lg:h-[800px]">
            <div className="absolute inset-3 border border-[#9ACD9E]/10 rounded-lg z-10" />
            <div className="absolute inset-1 border border-[#4C724F]/10 rounded-lg z-10" />
            
            <Image 
              src={categories.find(c => c.id === selectedCategory)?.image || ''}
              alt="Selected Category"
              fill
              className="object-cover object-center rounded-lg shadow-xl"
              priority
            />
            
            <div className="absolute inset-0 bg-gradient-to-t 
                         from-black/40 via-black/20 to-transparent rounded-lg" />
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col justify-center">
            <h1 className="relative font-merriweather text-4xl xs:text-5xl sm:text-6xl lg:text-7xl 
                        font-bold mb-6 xs:mb-8 tracking-tight">
              <span className="text-[#336B44]">CH</span>
              <span className="relative inline-block w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-1 group" 
                    onClick={() => setSelectedCategory('glass-bottles')}>
                <Image 
                  src="/prodcat1.png"
                  alt="Glass Category 1"
                  fill
                  className="object-cover rounded-full cursor-pointer 
                           hover:scale-110 transition-transform duration-300
                           ring-2 ring-[#336B44]/30 hover:ring-[#336B44]
                           group-hover:shadow-lg group-hover:shadow-[#336B44]/20"
                />
                <span className="absolute inset-0 rounded-full animate-ping 
                             bg-[#336B44]/10 pointer-events-none"></span>
              </span>
              <span className="relative inline-block w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-1 group"
                    onClick={() => setSelectedCategory('glass-jars')}>
                <Image 
                  src="/prodcat2.png"
                  alt="Glass Category 2"
                  fill
                  className="object-cover rounded-full cursor-pointer 
                           hover:scale-110 transition-transform duration-300
                           ring-2 ring-[#336B44]/30 hover:ring-[#336B44]
                           group-hover:shadow-lg group-hover:shadow-[#336B44]/20"
                />
                <span className="absolute inset-0 rounded-full animate-ping 
                             bg-[#336B44]/10 pointer-events-none"></span>
              </span>
              <span className="text-[#336B44]">SE</span>
              <br />
              <span className="text-[#336B44]">CATEG</span>
              <span className="relative inline-block w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-1 group"
                    onClick={() => setSelectedCategory('closures')}>
                <Image 
                  src="/prodcat3.jpg"
                  alt="Glass Category 3"
                  fill
                  className="object-cover rounded-full cursor-pointer 
                           hover:scale-110 transition-transform duration-300
                           ring-2 ring-[#336B44]/30 hover:ring-[#336B44]
                           group-hover:shadow-lg group-hover:shadow-[#336B44]/20"
                />
                <span className="absolute inset-0 rounded-full animate-ping 
                             bg-[#336B44]/10 pointer-events-none"></span>
              </span>
              <span className="text-[#336B44]">RY</span>
            </h1>

            <p className="font-poppins text-[#2A5A36] text-base xs:text-lg mb-6 xs:mb-8 leading-relaxed w-full">
              Explore our extensive range of premium glass solutions. From elegant bottles 
              to versatile jars and premium closures, our comprehensive collection represents 
              our commitment to excellence and innovation in glass packaging.
            </p>

            <div className="grid grid-cols-3 gap-2 xs:gap-4 mb-6 xs:mb-8">
              {categories.map((category) => (
                <div
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer
                           transition-all duration-300 hover:scale-105
                           ${selectedCategory === category.id ? 'ring-2 ring-[#336B44]' : ''}`}
                >
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Selected Category Info */}
            <div className="bg-[#336B44] rounded-xl p-4 xs:p-6 text-white">
              <h2 className="font-merriweather text-xl xs:text-2xl font-bold mb-2 xs:mb-3">
                {categories.find(c => c.id === selectedCategory)?.title}
              </h2>
              <p className="font-poppins text-white/90 text-sm xs:text-base mb-4">
                {categories.find(c => c.id === selectedCategory)?.description}
              </p>
              <a href={`/category/${selectedCategory}`}>
                <button className="bg-white text-[#336B44] font-poppins font-medium
                               px-4 xs:px-6 py-2 xs:py-3 rounded-lg hover:bg-[#E5EFDC] 
                               transition-colors duration-300 text-sm xs:text-base">
                  Explore Collection
                </button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CategoryContent;