"use client";

import React, { useState } from 'react'

function Team() {
    const [copied, setCopied] = useState(false);
    const textToCopy = "#Event.Dastto";

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText("");
            await navigator.clipboard.writeText(textToCopy);

            setCopied(true);
            setTimeout(() => setCopied(false), 1000);
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    };

  return (
    <div className='w-full ltr flex items-start justify-start flex-col px-[33px] sm:px-[67px]'>
        <ul className='w-full pt-10 flex items-center justify-center flex-col gap-3'>
            <li className='w-full flex items-center justify-between border-b-2 border-border border-dashed pb-3'>
                <p className='text-black font-spaceGrotesk text-[16px] sm:text-[20px] font-medium'>
                    Arshiya Mohammadiyeh
                </p>
                <span className='text-[#00000080] font-spaceGrotesk text-[13px] sm:text-[17px] font-medium'>
                    Product Design
                </span>
            </li>
            <li className='w-full flex items-center justify-between border-b-2 border-border border-dashed pb-3'>
                <p className='text-black font-spaceGrotesk text-[16px] sm:text-[20px] font-medium'>
                    Mohamadreza NasrollahZade
                </p>
                <span className='text-[#00000080] font-spaceGrotesk text-[13px] sm:text-[17px] font-medium'>
                    Programmer
                </span>
            </li>
            <li className='w-full flex items-center justify-between border-b-2 border-border border-dashed pb-3'>
                <p className='text-black font-spaceGrotesk text-[16px] sm:text-[20px] font-medium'>
                    Mehdi Khodadad
                </p>
                <span className='text-[#00000080] font-spaceGrotesk text-[13px] sm:text-[17px] font-medium'>
                    ui/ux Design
                </span>
            </li>
            <li className='w-full flex items-center justify-between border-b-2 border-border border-dashed pb-3'>
                <p className='text-black font-spaceGrotesk text-[16px] sm:text-[20px] font-medium'>
                    Masiha Taqdiri
                </p>
                <span className='text-[#00000080] font-spaceGrotesk text-[13px] sm:text-[17px] font-medium'>
                    Interaction Design
                </span>
            </li>
            <li className='w-full flex items-center justify-between border-b-2 border-border border-dashed pb-3'>
                <p className='text-black font-spaceGrotesk text-[16px] sm:text-[20px] font-medium'>
                    Behrad Ostadian
                </p>
                <span className='text-[#00000080] font-spaceGrotesk text-[13px] sm:text-[17px] font-medium'>
                    Graphic Design
                </span>
            </li>
            <li className='w-full flex items-center justify-between border-b-2 border-border border-dashed pb-3'>
                <p className='text-black font-spaceGrotesk text-[16px] sm:text-[20px] font-medium'>
                    Mohammad Daroqe
                </p>
                <span className='text-[#00000080] font-spaceGrotesk text-[13px] sm:text-[17px] font-medium'>
                    3d Artiist
                </span>
            </li>
            <li className='w-full flex items-center justify-between border-b-2 border-border border-dashed pb-3'>
                <p className='text-black font-spaceGrotesk text-[16px] sm:text-[20px] font-medium'>
                    Faryad Dastan
                </p>
                <span className='text-[#00000080] font-spaceGrotesk text-[13px] sm:text-[17px] font-medium'>
                    Front End Developer
                </span>
            </li>
            <li className='w-full flex items-center justify-between border-b-2 border-border border-dashed pb-3'>
                <p className='text-black font-spaceGrotesk text-[16px] sm:text-[20px] font-medium'>
                    Erfan Mohammadiyeh
                </p>
                <span className='text-[#00000080] font-spaceGrotesk text-[13px] sm:text-[17px] font-medium'>
                    Programmer
                </span>
            </li>
            <li className='w-full flex items-center justify-between border-b-2 border-border border-dashed pb-3'>
                <p className='text-black font-spaceGrotesk text-[16px] sm:text-[20px] font-medium'>
                    Entesar Mohammadiyeh
                </p>
                <span className='text-[#00000080] font-spaceGrotesk text-[13px] sm:text-[17px] font-medium'>
                    Financial Analysis
                </span>
            </li>
            <li className='w-full flex items-center justify-between border-b-2 border-border border-dashed pb-3'>
                <p className='text-black font-spaceGrotesk text-[16px] sm:text-[20px] font-medium'>
                    Mehdi Nazari
                </p>
                <span className='text-[#00000080] font-spaceGrotesk text-[13px] sm:text-[17px] font-medium'>
                    Communications
                </span>
            </li>
            <li className='w-full flex items-center justify-between border-b-2 border-border border-dashed pb-3'>
                <p className='text-black font-spaceGrotesk text-[16px] sm:text-[20px] font-medium'>
                    Iliya Haji Mohammadi
                </p>
                <span className='text-[#00000080] font-spaceGrotesk text-[13px] sm:text-[17px] font-medium'>
                    Financial Analysis
                </span>
            </li>
        </ul>
        <div className='w-full relative my-10 border-2 border-border rounded-full flex items-center justify-center p-2.5'>
            <div className='w-full flex items-center justify-between bg-bg-button-Gray rounded-[55px] p-[22px]'>
                <p className='text-black font-spaceGrotesk text-[30px] sm:text-[40px] font-normal'>
                    {textToCopy}
                </p>
                <span onClick={handleCopy} className='bg-black p-[18px] cursor-pointer rounded-full flex items-center justify-center'>
                    <svg width="22" height="22" viewBox="0 0 22 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="8.25" y="8.98242" width="12" height="18" rx="3.5" stroke="white" strokeWidth="3"/>
                        <path d="M7.25 19.9824H6.25C4.04086 19.9824 2.25 18.1916 2.25 15.9824V6.48242C2.25 4.27328 4.04086 2.48242 6.25 2.48242H9.75C11.9591 2.48242 13.75 4.27328 13.75 6.48242V7.98242" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                </span>
            </div>
            {copied && (
                <div
                    className={`absolute bottom-[-30px] bg-[#52D95F] text-white font-IRANYekanXNoEn font-medium text-[16px] px-4 py-2 rounded-full
                    transition-all duration-300 ease-in-out
                    opacity-100 translate-y-0
                    `}
                >
                    متن کپی شد
                </div>
            )}
        </div>
    </div>
  )
}

export default Team
