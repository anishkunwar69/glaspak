import Container from './Container'
import SwiperComponent from './SwiperComponent'

function ImageGalleryContent() {
    return (
        <>
            <Container>
                <div className='w-full min-h-screen border-red-800 flex flex-col gap-y-4 justify-center items-center'>
                <h1 className='uppercase font-merriweather secondLG:text-[65px] lg:text-[70px] md:text-[47px] md:leading-[51px] text-lightYellow font-bold secondLG:leading-[69px] lg:leading-[75px] text-center'>IMAGE GALLERY</h1>
                    <div className='w-[885px] h-[620px] max-secondLG:h-[558px] max-secondLG:w-[797px] max-lg:h-[465px] max-lg:w-[664px] mr-[5px] max-lg:mr-[7px] max-secondMD:mr-[12px] max-secondMD:h-[434px] max-secondMD:w-[620px]'>
                        <SwiperComponent/>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ImageGalleryContent