import Image from 'next/image';
import { StaticImageData } from "next/image";

interface ImageMarqueeProps{
    imgSrc: StaticImageData;
    rotate: number;
    cafe: boolean ;
}

function ImageMarquee({ imgSrc, rotate, cafe }: ImageMarqueeProps) {
  return (
    <div className={`${cafe ? "w-[320px] h-[280px]" : "w-[178px] h-[237px]"} rotate-[${rotate}deg]`}>
        <Image
            className={`${cafe ? "w-[320px] h-[280px]" : "w-[178px] h-[237px]"} rounded-[40px] overflow-hidden`}
            width={178}
            height={237}
            alt='MarqueeSvgSpeed'
            src={imgSrc}
        />
    </div>
  )
}

export default ImageMarquee