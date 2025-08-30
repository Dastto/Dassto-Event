import React from 'react'
import hesamMousavi from "@/public/images/hesam-mousavi.png";
import arshiyaAminJavahery from "@/public/images/arshiya-amin-javahery.png";
import hesamKeramati from "@/public/images/hesam-keramati.png";
import sabaFeizy from "@/public/images/saba-feizy.png";
import asalBakraei from "@/public/images/asal-bakraei.png";
import arrow from "@/public/images/arrow.svg";
import Image from 'next/image';

function Speakers() {
  return (
    <div className='w-full flex items-start justify-start flex-col gap-[30px] py-10'>
        <p className='font-IRANYekanXNoEn text-[20px] text-black font-[700] px-[33px] sm:px-[67px]'>
            سخرانان برنامه
        </p>
        <div className='w-full flex items-center justify-center flex-col'>
            <div className='w-full flex items-center justify-center flex-col border-t-2 border-b-2 border-border px-[33px] sm:px-[67px]'>
                <div className='px-[21px] ltr flex items-center justify-between relative z-20 w-full py-[18px] border-2 border-dashed border-border'>
                    <div className='flex items-center justify-start gap-2.5'>
                        <Image 
                            className='w-[51px] h-[51px] rounded-full border-2 border-border'
                            width={51}
                            height={51}
                            src={hesamMousavi}
                            alt='hesamMousavi'
                        />
                        <div className='flex items-start justify-center flex-col gap-[5px]'>
                            <p className='text-black font-spaceGrotesk text-[17px] font-medium'>
                                hesam mousavi
                            </p>
                            <span className='text-[#00000080] font-spaceGrotesk text-[14px] font-medium'>
                                Graphic design
                            </span>
                        </div>
                    </div>
                    <div className='flex items-center justify-center py-2.5 px-[15px] rounded-[55px] border-2 border-border'>
                        <Image 
                            className='w-[25px] h-[20px]'
                            width={25}
                            height={20}
                            src={arrow}
                            alt='hesamMousavi'
                        />
                    </div>
                </div>
            </div>
            <div className='w-full flex items-center justify-center flex-col border-t-2 border-b-2 border-border px-[33px] sm:px-[67px]'>
                <div className='px-[21px] ltr flex items-center justify-between relative z-20 w-full py-[18px] border-2 border-t-0 border-dashed border-border'>
                    <div className='flex items-center justify-start gap-2.5'>
                        <Image 
                            className='w-[51px] h-[51px] rounded-full border-2 border-border'
                            width={51}
                            height={51}
                            src={arshiyaAminJavahery}
                            alt='hesamMousavi'
                        />
                        <div className='flex items-start justify-center flex-col gap-[5px]'>
                            <p className='text-black font-spaceGrotesk text-[17px] font-medium'>
                                arshiya amin javahery
                            </p>
                            <span className='text-[#00000080] font-spaceGrotesk text-[14px] font-medium'>
                                product design
                            </span>
                        </div>
                    </div>
                    <div className='flex items-center justify-center py-2.5 px-[15px] rounded-[55px] border-2 border-border'>
                        <Image 
                            className='w-[25px] h-[20px]'
                            width={25}
                            height={20}
                            src={arrow}
                            alt='hesamMousavi'
                        />
                    </div>
                </div>
            </div>
            <div className='w-full flex items-center justify-center flex-col border-t-2 border-b-2 border-border px-[33px] sm:px-[67px]'>
                <div className='px-[21px] ltr flex items-center justify-between relative z-20 w-full py-[18px] border-2 border-t-0 border-dashed border-border'>
                    <div className='flex items-center justify-start gap-2.5'>
                        <Image 
                            className='w-[51px] h-[51px] rounded-full border-2 border-border'
                            width={51}
                            height={51}
                            src={hesamKeramati}
                            alt='hesamMousavi'
                        />
                        <div className='flex items-start justify-center flex-col gap-[5px]'>
                            <p className='text-black font-spaceGrotesk text-[17px] font-medium'>
                                hesam keramati
                            </p>
                            <span className='text-[#00000080] font-spaceGrotesk text-[14px] font-medium'>
                                product design
                            </span>
                        </div>
                    </div>
                    <div className='flex items-center justify-center py-2.5 px-[15px] rounded-[55px] border-2 border-border'>
                        <Image 
                            className='w-[25px] h-[20px]'
                            width={25}
                            height={20}
                            src={arrow}
                            alt='hesamMousavi'
                        />
                    </div>
                </div>
            </div>
            <div className='w-full flex items-center justify-center flex-col border-t-2 border-b-2 border-border px-[33px] sm:px-[67px]'>
                <div className='px-[21px] ltr flex items-center justify-between relative z-20 w-full py-[18px] border-2 border-t-0 border-dashed border-border'>
                    <div className='flex items-center justify-start gap-2.5'>
                        <Image 
                            className='w-[51px] h-[51px] rounded-full border-2 border-border'
                            width={51}
                            height={51}
                            src={sabaFeizy}
                            alt='hesamMousavi'
                        />
                        <div className='flex items-start justify-center flex-col gap-[5px]'>
                            <p className='text-black font-spaceGrotesk text-[17px] font-medium'>
                                saba feizy
                            </p>
                            <span className='text-[#00000080] font-spaceGrotesk text-[14px] font-medium'>
                                product design
                            </span>
                        </div>
                    </div>
                    <div className='flex items-center justify-center py-2.5 px-[15px] rounded-[55px] border-2 border-border'>
                        <Image 
                            className='w-[25px] h-[20px]'
                            width={25}
                            height={20}
                            src={arrow}
                            alt='hesamMousavi'
                        />
                    </div>
                </div>
            </div>
            <div className='w-full flex items-center justify-center flex-col border-t-2 border-b-2 border-border px-[33px] sm:px-[67px]'>
                <div className='px-[21px] ltr flex items-center justify-between relative z-20 w-full py-[18px] border-2 border-t-0 border-dashed border-border'>
                    <div className='flex items-center justify-start gap-2.5'>
                        <Image 
                            className='w-[51px] h-[51px] rounded-full border-2 border-border'
                            width={51}
                            height={51}
                            src={asalBakraei}
                            alt='hesamMousavi'
                        />
                        <div className='flex items-start justify-center flex-col gap-[5px]'>
                            <p className='text-black font-spaceGrotesk text-[17px] font-medium'>
                                asal bakraei
                            </p>
                            <span className='text-[#00000080] font-spaceGrotesk text-[14px] font-medium'>
                                ilustration
                            </span>
                        </div>
                    </div>
                    <div className='flex items-center justify-center py-2.5 px-[15px] rounded-[55px] border-2 border-border'>
                        <Image 
                            className='w-[25px] h-[20px]'
                            width={25}
                            height={20}
                            src={arrow}
                            alt='hesamMousavi'
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Speakers