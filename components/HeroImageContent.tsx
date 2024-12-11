"use client"
import Image from 'next/image'
import { memo, useState, useCallback } from 'react'

const HeroImage = memo(({ num, current, priority = false }: { 
  num: number; 
  current: number;
  priority?: boolean;
}) => (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className={`absolute w-[80%] h-[80%] bg-emerald-500/20
                     blur-2xl transition-all duration-500
                     ${current === num ? 'opacity-70 scale-100' : 'opacity-0 scale-95'}`} />
    
    <div className="relative w-[85%] h-[85%] flex items-center justify-center">
      <Image
        alt={`Premium Glass Package Design ${num}`}
        height={500}
        width={500}
        src={`/heropic${num}.png`}
        className={`w-auto h-full max-h-[500px] object-contain z-20
                   transition-all duration-500
                   ${current === num ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        priority={priority}
        quality={90}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  </div>
));
HeroImage.displayName = 'HeroImage';

const Thumbnail = memo(({ num, current, onClick }: { 
  num: number; 
  current: number;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    aria-label={`View glass package design ${num}`}
    className={`rounded-lg w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px]
                transition-all duration-300 transform hover:scale-105
                ${current === num ? 'ring-2 ring-emerald-500' : ''}
                bg-gradient-to-br from-lightBgColor/90 to-headingColor/90`}
  >
    <Image
      alt={`Thumbnail ${num}`}
      height={120}
      width={120}
      src={`/heropic${num}.png`}
      className="w-full h-full object-contain p-2"
      loading="eager"
      sizes="120px"
    />
  </button>
));
Thumbnail.displayName = 'Thumbnail';

function HeroImageContent() {
  const [imageNumber, setImageNumber] = useState(1);
  
  const handleImageChange = useCallback((num: number) => {
    setImageNumber(num);
  }, []);

  return (
    <div className="imgBox md:col-span-6 col-span-12 relative 
                    flex items-center justify-center 
                    rounded-md max-md:mb-16 h-full">
      <div className="relative flex justify-center items-center w-full">
        <div className="relative w-full max-w-[480px] md:max-w-[400px] lg:max-w-[480px] 
                      aspect-[0.87] flex items-center justify-center">
          <Image
            alt="Decorative Background Pattern"
            height={551}
            width={480}
            src="/herobg.png"
            className="absolute inset-0 w-full h-full object-cover 
                     object-center rounded-md z-10"
            priority
            quality={90}
            sizes="(max-width: 768px) 100vw, 480px"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            {[1, 2, 3].map((num) => (
              <HeroImage 
                key={num} 
                num={num} 
                current={imageNumber} 
                priority={num === 1}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-full 
                     max-w-[500px] flex justify-center z-30 px-4">
        <div className="flex justify-center gap-4 md:gap-3 lg:gap-4 w-full max-w-md">
          {[1, 2, 3].map((num) => (
            <Thumbnail
              key={num}
              num={num}
              current={imageNumber}
              onClick={() => handleImageChange(num)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(HeroImageContent);