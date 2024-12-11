"use client"
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'

function SwiperComponent() {
  return (
    <>
    <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper rounded-[26px] h-full w-full text-darkYellow"
                        >
                             <SwiperSlide>
                                    <div>
                                        <Image
                                            src={'/aboutus.png'}
                                            alt={'image gallery section'}
                                            height={664}
                                            width={885}
                                            className='h-full w-full object-center object-cover rounded-[26px]'
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div>
                                        <Image
                                            src={'/img2.jpg'}
                                            alt={'image gallery section'}
                                            height={664}
                                            width={885}
                                            className='h-full w-full object-center object-cover rounded-[26px]'
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div>
                                        <Image
                                            src={'/img1.jpg'}
                                            alt={'image gallery section'}
                                            height={664}
                                            width={885}
                                            className='h-full w-full object-center object-cover rounded-[26px]'
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div>
                                        <Image
                                            src={'/img4.jpg'}
                                            alt={'image gallery section'}
                                            height={664}
                                            width={885}
                                            className='h-full w-full object-center object-cover rounded-[26px]'
                                        />
                                    </div>
                                </SwiperSlide>
                        </Swiper>
    </>
  )
}

export default SwiperComponent