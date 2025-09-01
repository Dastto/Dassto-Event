import React from 'react'
import hesamMousavi from "@/public/images/hesam-mousavi.png";
import arshiyaAminJavahery from "@/public/images/arshiya-amin-javahery.png";
import hesamKeramati from "@/public/images/hesam-keramati.png";
import sabaFeizy from "@/public/images/saba-feizy.png";
import asalBakraei from "@/public/images/asal-bakraei.png";
import arrow from "@/public/images/arrow.svg";
import Towman from "@/public/images/Towman.svg";
import Pizza from "@/public/images/Pizza.svg";
import Food from "@/public/images/Food.svg";
import Mug from "@/public/images/Mug.svg";
import Cookie from "@/public/images/Cookie.svg";
import Image from 'next/image';
import BuyTicketButton from '../atom/BuyTicketButton';

function TicketSection() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <p className="text-gradient w-full py-10 text-black font-spaceGrotesk text-center text-[40px] font-bold px-[33px] sm:px-[67px]">
            It’s the key that unlocks a night full of ideas, connections, 
        </p>
        <div className='w-full ltr my-10 border-t-2 border-b-2 border-border px-[33px] sm:px-[67px]'>
            <div className='w-full border-2 border-border'>
                <div className='w-full border-2 border-dashed border-border rounded-[40px] flex-col'>
                    <div className='w-full p-[30px] flex items-center justify-center flex-col gap-5'>
                        <div className='w-full flex items-center justify-between'>
                            <div className='w-fit flex items-center justify-center flex-col gap-[5px]'>
                                <span className='text-[#00000066] font-spaceGrotesk text-[17px] font-medium'>
                                    18:30 - 21:30
                                </span>
                                <p className='text-black font-spaceGrotesk text-[20px] font-medium'>
                                    What’s Next
                                </p>
                            </div>
                            <svg width="2" height="55" viewBox="0 0 2 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 53.8276L1 27.8276L1 1.82764" stroke="black" strokeOpacity="0.1" strokeWidth="2" strokeLinecap="round" strokeDasharray="10 10"/>
                            </svg>
                            <div className='w-fit flex items-center justify-center gap-[7px]'>
                                <Image 
                                    className='w-[40px] h-[27px]'
                                    width={40}
                                    height={27}
                                    src={Pizza}
                                    alt='Pizza'
                                />
                                {/* + */}
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 9.82764L6 1.82764" stroke="black" strokeOpacity="0.2" strokeWidth="3" strokeLinecap="round"/>
                                    <path d="M10 5.83252L2 5.83252" stroke="black" strokeOpacity="0.2" strokeWidth="3" strokeLinecap="round"/>
                                </svg>
                                {/* + */}
                                <Image 
                                    className='w-[28px] h-[28px]'
                                    width={28}
                                    height={28}
                                    src={Food}
                                    alt='Food'
                                />
                                {/* + */}
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 9.82764L6 1.82764" stroke="black" strokeOpacity="0.2" strokeWidth="3" strokeLinecap="round"/>
                                    <path d="M10 5.83252L2 5.83252" stroke="black" strokeOpacity="0.2" strokeWidth="3" strokeLinecap="round"/>
                                </svg>
                                {/* + */}
                                <Image 
                                    className='w-[33px] h-[27px]'
                                    width={33}
                                    height={27}
                                    src={Mug}
                                    alt='Mug'
                                />
                                {/* + */}
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 9.82764L6 1.82764" stroke="black" strokeOpacity="0.2" strokeWidth="3" strokeLinecap="round"/>
                                    <path d="M10 5.83252L2 5.83252" stroke="black" strokeOpacity="0.2" strokeWidth="3" strokeLinecap="round"/>
                                </svg>
                                {/* + */}
                                <Image 
                                    className='w-[32px] h-[22px]'
                                    width={31}
                                    height={22}
                                    src={Cookie}
                                    alt='Cookie'
                                />
                            </div>
                        </div>
                        <div className='w-full flex items-center justify-start'>
                            <Image 
                                className='w-[51px] h-[51px] rounded-full border-2 border-border'
                                width={51}
                                height={51}
                                src={hesamMousavi}
                                alt='hesamMousavi'
                            />
                            <Image 
                                className='w-[51px] h-[51px] rounded-full border-2 border-border'
                                width={51}
                                height={51}
                                src={arshiyaAminJavahery}
                                alt='arshiyaAminJavahery'
                            />
                            <Image 
                                className='w-[51px] h-[51px] rounded-full border-2 border-border'
                                width={51}
                                height={51}
                                src={hesamKeramati}
                                alt='hesamKeramati'
                            />
                            <Image 
                                className='w-[51px] h-[51px] rounded-full border-2 border-border'
                                width={51}
                                height={51}
                                src={sabaFeizy}
                                alt='sabaFeizy'
                            />
                            <Image 
                                className='w-[51px] h-[51px] rounded-full border-2 border-border'
                                width={51}
                                height={51}
                                src={asalBakraei}
                                alt='asalBakraei'
                            />
                            <div className='flex items-center justify-center py-2.5 px-[25px] rounded-[55px] border-2 border-border'>
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
                    <div className='w-full border-b-2 border-dashed border-border'></div>
                    <div className='w-full p-[30px] flex items-center justify-between'>
                        <div className='flex flex-row-reverse items-center justify-center gap-0.5'>
                            <p className='text-[40px] text-black font-IRANYekanXNoEn font-[700]'>۷۲۰</p>
                            <Image 
                                className='w-[32px] h-[36px]'
                                width={32}
                                height={36}
                                src={Towman}
                                alt='Towman'
                            />
                        </div>
                        <div className='w-fit flex items-center justify-center gap-3'>
                            <div className='flex items-center justify-center flex-col gap-[5px]'>
                                <span className='text-[#00000080] text-[16px] font-IRANYekanXNoEn font-[700]'>
                                    ظرفیت
                                </span>
                                <span className='text-[#00000080] text-[16px] font-IRANYekanXNoEn font-[700]'>
                                    ۵۰ نـفر
                                </span>
                            </div>
                            <svg width="4" height="11" viewBox="0 0 4 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 9.48291L2 2.48291" stroke="black" strokeOpacity="0.2" strokeWidth="3" strokeLinecap="round"/>
                            </svg>
                            <BuyTicketButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TicketSection