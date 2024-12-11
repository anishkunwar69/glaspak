import React, { memo } from 'react'

const AboutUsTextContent = memo(() => {
    return (
        <div className='textBox rounded-[26px] border-orange-500 col-span-6 
                        bg-lightBgColor h-[90%] my-auto
                        flex flex-col justify-center
                        p-5 sm:p-6 md:p-8 lg:p-10 secondLG:p-12'>
            <h1 className="uppercase font-merriweather text-lightYellow font-bold
                          text-[28px] leading-[30px]
                          sm:text-[32px] sm:leading-[34px]
                          md:text-[34px] md:leading-[36px]
                          lg:text-[40px] lg:leading-[43px]
                          secondLG:text-[50px] secondLG:leading-[53px]
                          mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                OUR PRODUCTS
            </h1>
            <p className="capitalize font-poppins text-white
                         text-[14px] leading-[20px]
                         sm:text-[15px] sm:leading-[22px]
                         md:text-[16px] md:leading-[24px]
                         lg:text-[19px] lg:leading-[28px]
                         secondLG:text-[23px] secondLG:leading-[32px]
                         max-w-[556px]">
                Founded in 1999, <strong className="font-bold">Glaspak Sdn Bhd</strong> is a leading 
                glass supplier in Malaysia, offering end-to-end solutions from design to doorstep 
                delivery. Our team of packaging specialists brings over 100 years of experience to 
                deliver high-quality glass packaging, closures, and labels. With a business model 
                inspired by giants like DELL and NIKE, we leverage outsourced production and a robust 
                quality team to meet international standards. Specializing in Food & Beverage packaging, 
                Glaspak combines innovation with rigorous quality, offering a wide range of designs 
                that cater to diverse client needs.
            </p>
        </div>
    )
});

AboutUsTextContent.displayName = 'AboutUsTextContent';
export default AboutUsTextContent;