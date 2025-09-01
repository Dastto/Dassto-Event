import React from 'react'
import hesamMousavi from "@/public/images/hesam-mousavi.png";
import arshiyaAminJavahery from "@/public/images/arshiya-amin-javahery.png";
import hesamKeramati from "@/public/images/hesam-keramati.png";
import sabaFeizy from "@/public/images/saba-feizy.png";
import asalBakraei from "@/public/images/asal-bakraei.png";
import Atoosa from "@/public/images/Atoosa.png";
import Arshya from "@/public/images/Arshya.png";
import TimeLineSvg1 from "@/public/images/TimeLineSvg1.svg";
import TimeLineSvg2 from "@/public/images/TimeLineSvg2.svg";
import TimeLineSvg3 from "@/public/images/TimeLineSvg3.svg";
import TimeLineSvg4 from "@/public/images/TimeLineSvg4.svg";
import TimeLineSvg5 from "@/public/images/TimeLineSvg5.svg";

import Image from 'next/image';

function ProgramTimeline() {
  return (
    <div className='w-full flex items-start justify-start flex-col gap-[30px] py-10'>
        <p className='font-IRANYekanXNoEn text-[20px] text-black font-[700] px-[33px] sm:px-[67px]'>
            تایم لاین برنامه
        </p>
        <div className='w-full ltr flex items-start justify-start flex-col gap-[5px] px-[33px] sm:px-[67px]'>
            <div className='w-full flex items-start justify-start gap-4'>
              <div className='h-auto relative flex items-start justify-start flex-col'>
                <div className='flex items-center justify-start'>
                 <Image 
                    className='w-[51px] h-[51px] rounded-full'
                    width={51}
                    height={51}
                    src={TimeLineSvg1}
                    alt='TimeLineSvg1'
                />
                <Image 
                    className='w-[51px] h-[51px] rounded-full'
                    width={51}
                    height={51}
                    src={TimeLineSvg2}
                    alt='TimeLineSvg2'
                />
                </div>
                <div className='w-[3px] ml-[24px] h-6 bg-border rounded-b-full'></div>
              </div>
              <div className='w-fit flex items-start justify-start flex-col gap-[5px]'>
                <p className='text-black font-spaceGrotesk text-[17px] font-medium'>
                  The Prelude
                </p>
                <div className='flex items-center justify-start gap-[5px]'>
                  <span className='text-[#00000080] font-spaceGrotesk text-[14px] font-medium'>
                    Just before it begins
                  </span>
                </div>
              </div>
            </div>
            {/* + */}
            <svg className='ml-[18px]' width="15" height="15" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 9.98291L16 9.98291" stroke="black" strokeWidth="3" strokeLinecap="round"/>
              <path d="M9 16.9829L9 2.98291" stroke="black" strokeWidth="3" strokeLinecap="round"/>
            </svg>
            {/* + */}
            <div className='w-full flex items-start justify-start gap-4'>
              <div className='w-[51px] h-auto relative flex items-center justify-center flex-col'>
                <div className='flex items-center justify-center p-[5px] bg-black rounded-full absolute top-6 right-0'>
                  <svg width="8" height="8" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4.57692L2.25636 5.54335C2.93397 6.06459 3.90952 5.91497 4.39977 5.21461L7 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className='w-[3px] h-6 bg-border rounded-t-full'></div>
                <Image 
                    className='w-[51px] h-[51px] rounded-full border-2 border-border'
                    width={51}
                    height={51}
                    src={hesamMousavi}
                    alt='hesamMousavi'
                />
                <div className='w-[3px] h-6 bg-border rounded-b-full'></div>
              </div>
              <div className='w-fit flex items-start justify-start flex-col gap-[5px] mt-6'>
                <p className='text-black font-spaceGrotesk text-[17px] font-medium'>
                  hesam mousavi
                </p>
                <div className='flex items-center justify-start gap-[5px]'>
                  <span className='text-[#00000080] font-spaceGrotesk text-[14px] font-medium'>
                    #product
                  </span>
                  <span className='text-[#00000080] font-IRANYekanXNoEn text-[14px] font-semibold'>
                    هماهنگی محصول و ترافیک
                  </span>
                </div>
              </div>
            </div>
            {/* + */}
            <svg className='ml-[18px]' width="15" height="15" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 9.98291L16 9.98291" stroke="black" strokeWidth="3" strokeLinecap="round"/>
              <path d="M9 16.9829L9 2.98291" stroke="black" strokeWidth="3" strokeLinecap="round"/>
            </svg>
            {/* + */}
            <div className='w-full flex items-start justify-start gap-4'>
              <div className='w-[51px] h-auto relative flex items-center justify-center flex-col'>
                <div className='flex items-center justify-center p-[5px] bg-black rounded-full absolute top-6 right-0'>
                  <svg width="8" height="8" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4.57692L2.25636 5.54335C2.93397 6.06459 3.90952 5.91497 4.39977 5.21461L7 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className='w-[3px] h-6 bg-border rounded-t-full'></div>
                <Image 
                    className='w-[51px] h-[51px] rounded-full border-2 border-border'
                    width={51}
                    height={51}
                    src={arshiyaAminJavahery}
                    alt='arshiyaAminJavahery'
                />
                <div className='w-[3px] h-6 bg-border rounded-b-full'></div>
              </div>
              <div className='w-fit flex items-start justify-start flex-col gap-[5px] mt-6'>
                <p className='text-black font-spaceGrotesk text-[17px] font-medium'>
                  arshiya amin jovahery
                </p>
                <div className='flex items-center justify-start gap-[5px]'>
                  <span className='text-[#00000080] font-spaceGrotesk text-[14px] font-medium'>
                    #typography
                  </span>
                  <span className='text-[#00000080] whitespace-nowrap font-IRANYekanXNoEn text-[14px] font-semibold'>
                    سینک شدن و سیستم تایپو گرافی
                  </span>
                </div>
              </div>
            </div>
            {/* + */}
            <svg className='ml-[18px]' width="15" height="15" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 9.98291L16 9.98291" stroke="black" strokeWidth="3" strokeLinecap="round"/>
              <path d="M9 16.9829L9 2.98291" stroke="black" strokeWidth="3" strokeLinecap="round"/>
            </svg>
            {/* + */}
            <div className='w-full flex items-start justify-start gap-4'>
              <div className='w-[51px] h-auto relative flex items-center justify-center flex-col'>
                <div className='flex items-center justify-center p-[5px] bg-black rounded-full absolute top-6 right-0'>
                  <svg width="8" height="8" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4.57692L2.25636 5.54335C2.93397 6.06459 3.90952 5.91497 4.39977 5.21461L7 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className='w-[3px] h-6 bg-border rounded-t-full'></div>
                <Image 
                    className='w-[51px] h-[51px] rounded-full border-2 border-border'
                    width={51}
                    height={51}
                    src={Atoosa}
                    alt='Atoosa'
                />
                <div className='w-[3px] h-6 bg-border rounded-b-full'></div>
              </div>
              <div className='w-fit flex items-start justify-start flex-col gap-[5px] mt-6'>
                <p className='text-black font-spaceGrotesk text-[17px] font-medium'>
                  atoosa ahang
                </p>
                <div className='flex items-center justify-start gap-[5px]'>
                  <span className='text-[#00000080] font-spaceGrotesk text-[14px] font-medium'>
                    #socail media
                  </span>
                  <span className='text-[#00000080] font-IRANYekanXNoEn text-[14px] font-semibold'>
                    لینکدین قدرتمند
                  </span>
                </div>
              </div>
            </div>
            {/* + */}
            <svg className='ml-[18px]' width="15" height="15" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 9.98291L16 9.98291" stroke="black" strokeWidth="3" strokeLinecap="round"/>
              <path d="M9 16.9829L9 2.98291" stroke="black" strokeWidth="3" strokeLinecap="round"/>
            </svg>
            {/* + */}
            <div className='w-full flex items-start justify-start gap-4'>
              <div className='w-[51px] h-auto relative flex items-center justify-center flex-col'>
                <div className='flex items-center justify-center p-[5px] bg-black rounded-full absolute top-6 right-0'>
                  <svg width="8" height="8" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4.57692L2.25636 5.54335C2.93397 6.06459 3.90952 5.91497 4.39977 5.21461L7 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className='w-[3px] h-6 bg-border rounded-t-full'></div>
                <Image 
                    className='w-[51px] h-[51px] rounded-full border-2 border-border'
                    width={51}
                    height={51}
                    src={TimeLineSvg3}
                    alt='TimeLineSvg3'
                />
                <div className='w-[3px] h-6 bg-border rounded-b-full'></div>
              </div>
              <div className='w-fit flex items-start justify-start flex-col gap-[5px] mt-6'>
                <p className='text-black font-spaceGrotesk text-[17px] font-medium'>
                  Networking Break
                </p>
                <div className='flex items-center justify-start gap-[5px]'>
                  <span className='text-[#00000080] font-spaceGrotesk text-[14px] font-medium'>
                    share, and recharge
                  </span>
                </div>
              </div>
            </div>
            {/* + */}
            <svg className='ml-[18px]' width="15" height="15" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 9.98291L16 9.98291" stroke="black" strokeWidth="3" strokeLinecap="round"/>
              <path d="M9 16.9829L9 2.98291" stroke="black" strokeWidth="3" strokeLinecap="round"/>
            </svg>
            {/* + */}
            <div className='w-full flex items-start justify-start gap-4'>
              <div className='w-[51px] h-auto relative flex items-center justify-center flex-col'>
                <div className='flex items-center justify-center p-[5px] bg-black rounded-full absolute top-6 right-0'>
                  <svg width="8" height="8" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4.57692L2.25636 5.54335C2.93397 6.06459 3.90952 5.91497 4.39977 5.21461L7 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className='w-[3px] h-6 bg-border rounded-t-full'></div>
                <Image 
                    className='w-[51px] h-[51px] rounded-full border-2 border-border'
                    width={51}
                    height={51}
                    src={Arshya}
                    alt='Arshya'
                />
                <div className='w-[3px] h-6 bg-border rounded-b-full'></div>
              </div>
              <div className='w-fit flex items-start justify-start flex-col gap-[5px] mt-6'>
                <p className='text-black font-spaceGrotesk text-[17px] font-medium'>
                  arshiya mohammadiyeh
                </p>
                <div className='flex items-center justify-start gap-[5px]'>
                  <span className='text-[#00000080] font-spaceGrotesk text-[14px] font-medium'>
                    #stracture
                  </span>
                  <span className='text-[#00000080] font-IRANYekanXNoEn text-[14px] font-semibold'>
                    معرفی مهندسی ساختار
                  </span>
                </div>
              </div>
            </div>
            {/* + */}
            <svg className='ml-[18px]' width="15" height="15" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 9.98291L16 9.98291" stroke="black" strokeWidth="3" strokeLinecap="round"/>
              <path d="M9 16.9829L9 2.98291" stroke="black" strokeWidth="3" strokeLinecap="round"/>
            </svg>
            {/* + */}
            <div className='w-full flex items-start justify-start gap-4'>
              <div className='w-[51px] h-auto relative flex items-center justify-center flex-col'>
                <div className='flex items-center justify-center p-[5px] bg-black rounded-full absolute top-6 right-0'>
                  <svg width="8" height="8" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4.57692L2.25636 5.54335C2.93397 6.06459 3.90952 5.91497 4.39977 5.21461L7 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className='w-[3px] h-6 bg-border rounded-t-full'></div>
                <Image 
                    className='w-[51px] h-[51px] rounded-full border-2 border-border'
                    width={51}
                    height={51}
                    src={TimeLineSvg4}
                    alt='TimeLineSvg4'
                />
                <div className='w-[3px] h-6 bg-border rounded-b-full'></div>
              </div>
              <div className='w-fit flex items-start justify-start flex-col gap-[5px] mt-6'>
                <p className='text-black font-spaceGrotesk text-[17px] font-medium'>
                  Award Ceremony
                </p>
                <div className='flex items-center justify-start gap-[5px]'>
                  <span className='text-[#00000080] font-spaceGrotesk text-[14px] font-medium'>
                    Moments of Recognition
                  </span>
                </div>
              </div>
            </div>
            {/* + */}
            <svg className='ml-[18px]' width="15" height="15" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 9.98291L16 9.98291" stroke="black" strokeWidth="3" strokeLinecap="round"/>
              <path d="M9 16.9829L9 2.98291" stroke="black" strokeWidth="3" strokeLinecap="round"/>
            </svg>
            {/* + */}
            <div className='w-full flex items-start justify-start gap-4'>
              <div className='w-[51px] h-auto relative flex items-center justify-center flex-col'>
                <div className='flex items-center justify-center p-[5px] bg-black rounded-full absolute top-6 right-0'>
                  <svg width="8" height="8" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4.57692L2.25636 5.54335C2.93397 6.06459 3.90952 5.91497 4.39977 5.21461L7 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className='w-[3px] h-6 bg-border rounded-t-full'></div>
                <Image 
                    className='w-[51px] h-[51px] rounded-full border-2 border-border'
                    width={51}
                    height={51}
                    src={hesamKeramati}
                    alt='hesamKeramati'
                />
                <div className='w-[3px] h-6 bg-border rounded-b-full'></div>
              </div>
              <div className='w-fit flex items-start justify-start flex-col gap-[5px] mt-6'>
                <p className='text-black font-spaceGrotesk text-[17px] font-medium'>
                  hesam keramti
                </p>
                <div className='flex items-center justify-start gap-[5px]'>
                  <span className='text-[#00000080] font-spaceGrotesk text-[14px] font-medium'>
                    #Experience
                  </span>
                  <span className='text-[#00000080] font-IRANYekanXNoEn text-[14px] font-semibold'>
                     طراحی یک پارچه محصول 
                  </span>
                </div>
              </div>
            </div>
            {/* + */}
            <svg className='ml-[18px]' width="15" height="15" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 9.98291L16 9.98291" stroke="black" strokeWidth="3" strokeLinecap="round"/>
              <path d="M9 16.9829L9 2.98291" stroke="black" strokeWidth="3" strokeLinecap="round"/>
            </svg>
            {/* + */}
            <div className='w-full flex items-start justify-start gap-4'>
              <div className='w-[51px] h-auto relative flex items-center justify-center flex-col'>
                <div className='flex items-center justify-center p-[5px] bg-black rounded-full absolute top-6 right-0'>
                  <svg width="8" height="8" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4.57692L2.25636 5.54335C2.93397 6.06459 3.90952 5.91497 4.39977 5.21461L7 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className='w-[3px] h-6 bg-border rounded-t-full'></div>
                <Image 
                    className='w-[51px] h-[51px] rounded-full border-2 border-border'
                    width={51}
                    height={51}
                    src={asalBakraei}
                    alt='asalBakraei'
                />
                <div className='w-[3px] h-6 bg-border rounded-b-full'></div>
              </div>
              <div className='w-fit flex items-start justify-start flex-col gap-[5px] mt-6'>
                <p className='text-black font-spaceGrotesk text-[17px] font-medium'>
                  asal bekraei
                </p>
                <div className='flex items-center justify-start gap-[5px]'>
                  <span className='text-[#00000080] font-spaceGrotesk text-[14px] font-medium'>
                    #ilustration
                  </span>
                  <span className='text-[#00000080] font-IRANYekanXNoEn text-[14px] font-semibold'>
                    زبان تصویری محصول
                  </span>
                </div>
              </div>
            </div>
            {/* + */}
            <svg className='ml-[18px]' width="15" height="15" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 9.98291L16 9.98291" stroke="black" strokeWidth="3" strokeLinecap="round"/>
              <path d="M9 16.9829L9 2.98291" stroke="black" strokeWidth="3" strokeLinecap="round"/>
            </svg>
            {/* + */}
            <div className='w-full flex items-start justify-start gap-4'>
              <div className='w-[51px] h-auto relative flex items-center justify-center flex-col'>
                <div className='flex items-center justify-center p-[5px] bg-black rounded-full absolute top-6 right-0'>
                  <svg width="8" height="8" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4.57692L2.25636 5.54335C2.93397 6.06459 3.90952 5.91497 4.39977 5.21461L7 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className='w-[3px] h-6 bg-border rounded-t-full'></div>
                <Image 
                    className='w-[51px] h-[51px] rounded-full border-2 border-border'
                    width={51}
                    height={51}
                    src={TimeLineSvg5}
                    alt='TimeLineSvg5'
                />
              </div>
              <div className='w-fit flex items-start justify-start flex-col gap-[5px] mt-6'>
                <p className='text-black font-spaceGrotesk text-[17px] font-medium'>
                  Evening Feast
                </p>
                <div className='flex items-center justify-start gap-[5px]'>
                  <span className='text-[#00000080] font-spaceGrotesk text-[14px] font-medium'>
                    Time to relax and connect
                  </span>
                </div>
              </div>
            </div>
        </div>
        
    </div>
  )
}

export default ProgramTimeline