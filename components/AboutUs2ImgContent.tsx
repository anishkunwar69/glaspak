"use client"
import { memo, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useInView } from 'react-intersection-observer';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

const images = [
    {
        src: "/img2.jpg",
        alt: "Glass Manufacturing Process - Advanced production techniques in action",
        width: 1160,
        height: 790
    },
    {
        src: "/img3.jpg",
        alt: "Quality Control Testing - Ensuring premium glass standards",
        width: 1160,
        height: 790
    },
    {
        src: "/img1.jpg",
        alt: "Premium Glass Products - Showcasing our finest packaging solutions",
        width: 1160,
        height: 790
    },
    {
        src: "/img4.jpg",
        alt: "Packaging Solutions - Innovative glass packaging designs",
        width: 1160,
        height: 790
    }
] as const;

const AboutUs2ImgContent = memo(() => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    const renderImage = useCallback(({ src, alt, width, height }: typeof images[number]) => (
        <Image
            alt={alt}
            width={width}
            height={height}
            src={src}
            className='rounded-md object-cover object-center sm:object-[center_40%] w-full h-full'
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 85vw"
            quality={85}
            loading="lazy"
        />
    ), []);

    return (
        <div ref={ref} 
             className={`relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] 
                        transition-all duration-700 group
                        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
             aria-label="Gallery of our glass packaging solutions border">
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                 style={{
                     backgroundImage: `linear-gradient(45deg, #3B7D46 25%, transparent 25%),
                                     linear-gradient(-45deg, #3B7D46 25%, transparent 25%),
                                     linear-gradient(45deg, transparent 75%, #3B7D46 75%),
                                     linear-gradient(-45deg, transparent 75%, #3B7D46 75%)`,
                     backgroundSize: '20px 20px',
                     backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                 }}
                 aria-hidden="true" />

            <div className="absolute inset-3 border border-[#9ACD9E]/10 rounded-lg z-10 
                          transition-all duration-500 group-hover:inset-2" />
            <div className="absolute inset-1 border border-[#4C724F]/10 rounded-lg z-10
                          transition-all duration-500 group-hover:inset-4" />
            
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 
                          border-[#9ACD9E]/30 rounded-tl-lg z-20
                          transition-all duration-500 group-hover:w-16 group-hover:h-16
                          after:content-[''] after:absolute after:top-2 after:left-2
                          after:w-2 after:h-2 after:bg-[#9ACD9E]/20 after:rounded-full" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 
                          border-[#9ACD9E]/30 rounded-tr-lg z-20
                          transition-all duration-500 group-hover:w-16 group-hover:h-16
                          after:content-[''] after:absolute after:top-2 after:right-2
                          after:w-2 after:h-2 after:bg-[#9ACD9E]/20 after:rounded-full" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 
                          border-[#9ACD9E]/30 rounded-bl-lg z-20
                          transition-all duration-500 group-hover:w-16 group-hover:h-16
                          after:content-[''] after:absolute after:bottom-2 after:left-2
                          after:w-2 after:h-2 after:bg-[#9ACD9E]/20 after:rounded-full" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 
                          border-[#9ACD9E]/30 rounded-br-lg z-20
                          transition-all duration-500 group-hover:w-16 group-hover:h-16
                          after:content-[''] after:absolute after:bottom-2 after:right-2
                          after:w-2 after:h-2 after:bg-[#9ACD9E]/20 after:rounded-full" />

            <Swiper
                grabCursor={true}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper h-full rounded-lg shadow-xl 
                          [&_.swiper-pagination-bullet]:bg-[#76B091]
                          [&_.swiper-pagination-bullet-active]:bg-[#3B7D46]
                          transition-transform duration-500 group-hover:scale-[1.01]"
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index} className="h-full">
                        <div className="relative w-full h-full overflow-hidden">
                            {renderImage(img)}
                            <div className="absolute inset-0 bg-gradient-to-t 
                                          from-black/40 via-black/20 to-transparent
                                          transition-opacity duration-500
                                          group-hover:opacity-70" 
                                 aria-hidden="true" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-px
                          bg-gradient-to-r from-transparent via-[#9ACD9E]/20 to-transparent" 
                 aria-hidden="true" />
        </div>
    );
});

AboutUs2ImgContent.displayName = 'AboutUs2ImgContent';
export default AboutUs2ImgContent;