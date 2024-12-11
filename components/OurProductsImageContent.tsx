import Image from 'next/image'
import React from 'react'

function OurProductsImageContent() {
    return (
        <>
            <div className='imgBox my-auto col-span-6 border-white flex justify-center items-center rounded-[26px] relative'>
                <Image
                    height={645}
                    // 512
                    width={430}
                    // 425
                    alt='Our Products Image'
                    src={'/ourprod2.jpg'}
                    className='rounded-[26px] z-30 max-secondLG:h-[473px] max-secondLG:w-[387px] max-lg:h-[394px] max-lg:w-[323px] max-secondMD:h-[341px] max-secondMD:w-[280px] object-center object-cover max-secondMD:mr-1'
                />
                <div className='h-[680px] w-[452px] border-[10px] border-darkYellow absolute rounded-[26px] top-[-17px] mr-[22px] max-secondLG:h-[508px] max-secondLG:w-[407px] max-lg:h-[410px] max-lg:w-[344px] max-secondMD:h-[358px] max-secondMD:w-[295px]'></div>
            </div>
        </>
    )
}

export default OurProductsImageContent