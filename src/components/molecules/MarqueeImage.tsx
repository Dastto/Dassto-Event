import React from 'react'
import DasttoImg from '@/public/images/MarqueeImage.png'
import MarqueeSvgSpeed from '@/public/images/marquee-svg-speed.png'
import Image from 'next/image'

function MarqueeImage() {
  return (
    <div className='w-full relative h-[237px]'>
        <div className='blure-marquee flex items-center justify-center h-[237px] w-[162px] absolute z-30'>
        </div>
        <div className='flex items-center justify-center h-[237px] w-[162px] absolute z-40'>
            <div className='bg-white cursor-pointer absolute z-50 p-4 rounded-full flex items-center justify-center border-2 border-border'>
                <Image
                    className='w-[22px] h-[22px]'
                    width={22}
                    height={22}
                    alt='MarqueeSvgSpeed'
                    src={MarqueeSvgSpeed}
                />
            </div>
        </div>
    <div className="container !h-[237px] flex items-center justify-center mb-[30px]">
        <Image
            className='!w-[178px] !h-[237px] rounded-[40px] itemLeft item1'
            width={178}
            height={237}
            alt='Dastto Event'
            src={DasttoImg}
        />
        <Image
            className='!w-[178px] !h-[237px] rounded-[40px] itemLeft item2'
            width={178}
            height={237}
            alt='Dastto Event'
            src={DasttoImg}
        />
        <Image
            className='!w-[178px] !h-[237px] rounded-[40px] itemLeft item3'
            width={178}
            height={237}
            alt='Dastto Event'
            src={DasttoImg}
        />
        <Image
            className='!w-[178px] !h-[237px] rounded-[40px] itemLeft item4'
            width={178}
            height={237}
            alt='Dastto Event'
            src={DasttoImg}
        />
        <Image
            className='!w-[178px] !h-[237px] rounded-[40px] itemLeft item5'
            width={178}
            height={237}
            alt='Dastto Event'
            src={DasttoImg}
        />
        <Image
            className='!w-[178px] !h-[237px] rounded-[40px] itemLeft item6'
            width={178}
            height={237}
            alt='Dastto Event'
            src={DasttoImg}
        />
        <Image
            className='!w-[178px] !h-[237px] rounded-[40px] itemLeft item7'
            width={178}
            height={237}
            alt='Dastto Event'
            src={DasttoImg}
        />
        <Image
            className='!w-[178px] !h-[237px] rounded-[40px] itemLeft item8'
            width={178}
            height={237}
            alt='Dastto Event'
            src={DasttoImg}
        />
    </div>
    </div>
  )
}

export default MarqueeImage