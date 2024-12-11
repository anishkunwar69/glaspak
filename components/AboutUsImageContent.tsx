import Image from 'next/image'
import React from 'react'

function AboutUsImageContent() {
    return (
        <>
            <div className='imgBox my-auto border-pink-500 col-span-6 flex justify-center items-center rounded-md relative ml-14'>
                <Image
                    alt="About Us Section Image"
                    height={645}
                    width={430}
                    src={"/aboutus.png"}
                    className="rounded-[26px] z-30 max-secondLG:h-[502px] max-secondLG:w-[351px] max-lg:h-[419px] max-lg:w-[293px] mr-[5px] max-lg:mr-[7px] max-secondMD:mr-[12px] max-secondMD:h-[363px] max-secondMD:w-[254px] object-cover object-center"
                />
                <div className='h-[632px] w-[445px] border-[10px] border-darkYellow absolute rounded-[26px] top-[-17px] mr-[21px] max-secondLG:h-[508px] max-secondLG:w-[407px] max-lg:h-[410px] max-lg:w-[344px] max-secondMD:h-[358px] max-secondMD:w-[295px]'></div>
            </div>
        </>
    )
}

export default AboutUsImageContent