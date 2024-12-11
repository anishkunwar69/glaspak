import React from 'react'

interface LinkType {
    label: string,
    link: string
}

function OurProductsTextContent() {
    const links: LinkType[] = [
        {
            label: "Glass Bottles + meet",
            link: "https://www.glaspak.com.my/downloads/Glass%20Bottles%20-%20Catalogue(11)revd.pdf"
        },
        {
            label: "Glass Jars + Closures",
            link: "https://www.glaspak.com.my/downloads/Glass%20Jars%20-%20Catalogue(11)revd.pdf"
        }, {
            label: "A GP Liquor Catalogue 2012, V1",
            link: "https://www.glaspak.com.my/downloads/Glass%20Liquor%20Bottles%20-%202012,%20v1.pdf"
        }, {
            label: "Glass Pharms - Catalogue (PA)",
            link: "https://www.glaspak.com.my/downloads/Glass%20Pharms%20-%20Catalogue(PA).pdf"
        }
    ]
    return (
        <>
        {/* secondMD:gap-y-9 secondLG:p-12 bg-lightBgColor justify-center lg:p-8 secondMD:p-6 md:p-4 md:gap-y-5 */}
            <div className='textBox col-span-6 border-black rounded-[26px] flex flex-col items-start bg-lightBgColor my-auto secondLG:gap-y-8 secondLG:p-12 lg:gap-y-6 lg:p-10 md:gap-y-5 md:p-8'>
                <h1 className="uppercase font-merriweather secondLG:text-[50px] lg:text-[40px] secondMD:text-[34px] secondMD:leading-[36px] text-lightYellow font-bold secondLG:leading-[53px] lg:leading-[43px] md:text-[30px]
                md:leading-[32px]">
                    OUR PRODUCTS
                </h1>
                <p className='secondLG:text-[20px] lg:text-[17px] text-white secondLG:leading-[21px] lg:leading-[18px] secondMD:text-[16px] secondMD:leading-[17px] md:text-[15px]
                md:leading-[16px]'>Glass is more than a container—it’s a pure, elegant, and eco-friendly material made from natural minerals. Its stability withstands extreme temperatures and resists chemical agents, making it ideal for food and beverage packaging</p>
                <h1 className="capitalize font-merriweather secondLG:text-[30px] lg:text-[24px] secondMD:text-[21px] secondMD:leading-[22px] text-darkYellow font-medium secondLG:leading-[32px] lg:leading-[25px] md:text-[17px]
                md:leading-[18px]">
                    Explore a showcase of our exquisite glass creations below
                </h1>
                <ul className='w-full'>
                    {
                        links.map((item, index) => (
                            <li key={index}><a href={item.link} target='_blank' className='secondLG:text-lg md:text-[14px] md:leading-[15px] text-white font-medium italic secondMD:text-sm'>{item.label}</a></li>
                        ))
                    }
                </ul>
                <p className='secondLG:text-sm text-[10px] leading-[11px] secondMD:text-[10px] secondMD:leading-[11px] font-light text-white capitalize'>*If you do experience any problems when downloading, please Contact support at <span className='font-semibold text-darkYellow'>+603-78473276</span> or email <span className='font-semibold text-darkYellow'>enquiry@glaspak.com.my</span>*</p>
            </div>
        </>
    )
}

export default OurProductsTextContent