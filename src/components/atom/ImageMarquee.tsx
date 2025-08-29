import Image from 'next/image';
import { StaticImageData } from "next/image";

interface ImageMarqueeProps{
    imgSrc: StaticImageData;
    rotate: number;
}

function ImageMarquee({ imgSrc, rotate }: ImageMarqueeProps) {
  return (
    <div className={`w-[178px] h-[237px] rotate-[${rotate}deg]`}>
        <Image
            className='w-[178px] h-[237px]'
            width={178}
            height={237}
            alt='MarqueeSvgSpeed'
            src={imgSrc}
        />
    </div>
  )
}

export default ImageMarquee