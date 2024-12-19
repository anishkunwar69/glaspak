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
             className={`relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] xl:h-[650px]
                        transition-all duration-700
                        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
             aria-label="Gallery of our glass packaging solutions">
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
                            {renderImage(img)}
                            <div className="absolute inset-0 bg-gradient-to-t 
                                          from-black/40 to-transparent" 
                                 aria-hidden="true" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
});

AboutUs2ImgContent.displayName = 'AboutUs2ImgContent';
export default AboutUs2ImgContent;