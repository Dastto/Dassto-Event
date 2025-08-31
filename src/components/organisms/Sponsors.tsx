import React from 'react'
import Zoomit from "@/public/images/Zoomit.png";
import Geektori from "@/public/images/Geektori.png";
import FontIran from "@/public/images/FontIran.png";
import Negarande from "@/public/images/Negarande.png";
import DigiNext from "@/public/images/DigiNext.png";
import Image from 'next/image';

function Sponsors() {
  return (
    <div className='w-full flex items-start justify-start flex-col gap-[30px] py-10'>
        <p className='font-IRANYekanXNoEn text-[20px] text-black font-[700] px-[33px] sm:px-[67px]'>
            حامیان برنامه
        </p>
        <div className='w-full ltr flex flex-wrap border-t-2 border-b-2 border-border px-[33px] sm:px-[67px]'>
            <div className='w-1/2 px-[43px] py-[48px] flex items-center justify-center border-2 border-dashed border-border'>
                <Image 
                    className='w-[124px] h-[18px]'
                    width={124}
                    height={18}
                    src={Zoomit}
                    alt='Zoomit'
                />
            </div>
            <div className='w-1/2 px-[43px] py-[48px] flex items-center justify-center border-2 border-border'>
                <Image 
                    className='w-[111px] h-[36px]'
                    width={111}
                    height={36}
                    src={Geektori}
                    alt='Geektori'
                />
            </div>
            <div className='w-1/2 px-[43px] py-[48px] flex items-center justify-center border-2 border-border'>
                <Image 
                    className='w-[114px] h-[43px]'
                    width={114}
                    height={43}
                    src={FontIran}
                    alt='FontIran'
                />
            </div>
            <div className='w-1/2 px-[43px] py-[48px] flex items-center justify-center border-2 border-dashed border-border'>
                <Image 
                    className='w-[134px] h-[28px]'
                    width={134}
                    height={28}
                    src={Negarande}
                    alt='Negarande'
                />
            </div>
            <div className='flex-[0.7] grid-cols-8 px-[43px] py-[48px] flex items-center justify-center border-2 border-dashed border-border'>
                <Image 
                    className='w-[145px] h-[34px]'
                    width={145}
                    height={34}
                    src={DigiNext}
                    alt='DigiNext'
                />
            </div>
            <div className='flex-[0.3] relative px-[43px] py-[48px] flex items-center justify-center border-2 border-border'>
                <div className='px-2.5 py-[5px] rounded-full border-2 border-border flex items-center justify-center'>
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 9.98291L16 9.98291" stroke="black" strokeWidth="3" strokeLinecap="round"/>
                        <path d="M9 16.9829L9 2.98291" stroke="black" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                </div>
                <svg className='absolute bottom-4 right-3' width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.95557 22.8169C1.67942 22.8169 1.45557 22.593 1.45557 22.3169L1.45557 20.4057C1.45557 20.1296 1.67942 19.9057 1.95557 19.9057L5.32236 19.9057C5.59851 19.9057 5.82236 20.1296 5.82236 20.4057L5.82236 22.3169C5.82236 22.593 5.59851 22.8169 5.32236 22.8169L1.95557 22.8169Z" fill="black"/>
                    <path d="M7.77808 14.0835C7.50193 14.0835 7.27808 13.8596 7.27808 13.5835L7.27808 11.6723C7.27808 11.3962 7.50193 11.1723 7.77808 11.1723L14.0561 11.1723C14.3322 11.1723 14.5561 11.3962 14.5561 11.6723L14.5561 13.5835C14.5561 13.8596 14.3322 14.0835 14.0561 14.0835L7.77808 14.0835Z" fill="black"/>
                    <path d="M7.77808 11.1719C7.50193 11.1719 7.27808 10.948 7.27808 10.6719L7.27808 1.48268C7.27808 1.20654 7.50193 0.982682 7.77808 0.982682L9.68927 0.982682C9.96542 0.982682 10.1893 1.20654 10.1893 1.48268L10.1893 10.6719C10.1893 10.948 9.96542 11.1719 9.68927 11.1719L7.77808 11.1719Z" fill="black"/>
                    <path d="M6.32251 22.8169C6.04637 22.8169 5.82251 22.593 5.82251 22.3169L5.82251 20.4057C5.82251 20.1296 6.04637 19.9057 6.32251 19.9057L14.0561 19.9057C14.3322 19.9057 14.5561 20.1296 14.5561 20.4057L14.5561 22.3169C14.5561 22.593 14.3322 22.8169 14.0561 22.8169L6.32251 22.8169Z" fill="black"/>
                    <path d="M15.0562 3.89404C14.78 3.89404 14.5562 3.67019 14.5562 3.39404L14.5562 1.48285C14.5562 1.2067 14.78 0.982845 15.0562 0.982845L16.9674 0.982845C17.2435 0.982845 17.4674 1.2067 17.4674 1.48284L17.4674 3.39404C17.4674 3.67019 17.2435 3.89404 16.9674 3.89404L15.0562 3.89404Z" fill="black"/>
                    <path d="M15.0562 19.9058C14.78 19.9058 14.5562 19.6819 14.5562 19.4058L14.5562 17.4946C14.5562 17.2184 14.78 16.9946 15.0562 16.9946L16.9674 16.9946C17.2435 16.9946 17.4674 17.2184 17.4674 17.4946L17.4674 19.4058C17.4674 19.6819 17.2435 19.9058 16.9674 19.9058L15.0562 19.9058Z" fill="black"/>
                    <path d="M0.499999 3.89404C0.223857 3.89404 2.66947e-09 3.67019 5.96243e-09 3.39404L2.87532e-08 1.48285C3.20462e-08 1.2067 0.223858 0.982845 0.5 0.982845L2.4112 0.982845C2.68734 0.982845 2.9112 1.2067 2.9112 1.48284L2.9112 3.39404C2.9112 3.67019 2.68734 3.89404 2.4112 3.89404L0.499999 3.89404Z" fill="black"/>
                    <path d="M0.499999 19.9058C0.223857 19.9058 2.66947e-09 19.6819 5.96243e-09 19.4058L2.87532e-08 17.4946C3.20462e-08 17.2184 0.223858 16.9946 0.5 16.9946L2.4112 16.9946C2.68734 16.9946 2.9112 17.2184 2.9112 17.4946L2.9112 19.4058C2.9112 19.6819 2.68734 19.9058 2.4112 19.9058L0.499999 19.9058Z" fill="black"/>
                </svg>
            </div>
        </div>
    </div>
  )
}

export default Sponsors