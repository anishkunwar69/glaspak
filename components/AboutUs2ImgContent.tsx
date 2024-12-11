"use client"
import React, { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useInView } from 'react-intersection-observer';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

const images = [
    {
        src: "/img2.jpg",
        alt: "Glass Manufacturing Process",
        width: 1160,
        height: 790
    },
    {
        src: "/img3.jpg",
        alt: "Quality Control Testing",
        width: 1160,
        height: 790
    },
    {
        src: "/img1.jpg",
        alt: "Premium Glass Products",
        width: 1160,
        height: 790
    },
    {
        src: "/img4.jpg",
        alt: "Packaging Solutions",
        width: 1160,
        height: 790
    }
] as const;

const AboutUs2ImgContent = memo(() => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    return (
        <div ref={ref} 
             className={`relative h-[300px] sm:h-[350px] md:h-[400px] transition-all duration-700
                        ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
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
                          [&_.swiper-pagination-bullet]:bg-darkYellow
                          [&_.swiper-pagination-bullet-active]:bg-darkYellow"
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index} className="h-full">
                        <div className="relative w-full h-full overflow-hidden">
                            <Image
                                alt={img.alt}
                                width={img.width}
                                height={img.height}
                                src={img.src}
                                className='rounded-md object-cover object-center sm:object-[center_40%] w-full h-full'
                                priority={index === 0}
                                sizes="(max-width: 640px) 100vw,
                                       (max-width: 768px) 80vw,
                                       (max-width: 1024px) 50vw,
                                       40vw"
                                quality={90}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t 
                                          from-black/40 to-transparent" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
});

AboutUs2ImgContent.displayName = 'AboutUs2ImgContent';
export default AboutUs2ImgContent;
