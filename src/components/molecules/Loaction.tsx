import React from 'react'
import Location from "@/public/images/Location.png";
import Image from 'next/image';

function Loaction() {
  return (
    <div className='w-full ltr flex items-start justify-start flex-col px-[33px] sm:px-[67px] border-b-2 border-border'>
        <p className="text-gradient w-full py-[35px] text-black font-spaceGrotesk text-center text-[40px] font-bold">
            A cozy spot you can find on the map with one click
        </p>
        <div className='w-full flex items-center justify-center py-10 relative'>
            <Image 
                className='w-full h-auto border-2 border-border rounded-[40px] overflow-hidden'
                width={411}
                height={291}
                src={Location}
                alt='Location'
            />
            <div className='bg-white px-[15px] py-2.5 rounded-full flex items-center justify-center absolute right-[21px] bottom-[65px] shadow-[0_16px_24.7px_0_rgba(0,0,0,0.10)]'>
                <p className='text-black font-spaceGrotesk text-[16px] font-medium'>
                    teh, cafe carbon
                </p>
            </div>
        </div>
    </div>
  )
}

export default Loaction