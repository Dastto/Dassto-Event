"use client";

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import DasttoTextFooter from '@/public/images/Dastto-Footer-Text.svg'
import { usePathname } from 'next/navigation'

function Footer() {

    const pathname = usePathname()
    
    if (pathname === '/register') {
        return null
    }
  return (
    <div className='w-full ltr max-w-[640px] flex items-start justify-start flex-col gap-17 py-10 px-[33px] sm:px-[67px] border-b-2 border-t-2 sm:border-x-2 border-border'>
        <div className='w-full flex items-start justify-start flex-col gap-[30px]'>
            <Link href={"#"} className='flex items-center justify-start gap-0.5 underline'>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 0.0781252C0.585786 0.078125 0.25 0.413911 0.25 0.828125L0.25 7.57812C0.25 7.99234 0.585786 8.32812 1 8.32812C1.41421 8.32812 1.75 7.99234 1.75 7.57812V1.57813H7.75C8.16421 1.57813 8.5 1.24234 8.5 0.828125C8.5 0.413911 8.16421 0.0781248 7.75 0.0781248L1 0.0781252ZM10 9.82812L10.5303 9.29779L1.53033 0.297795L1 0.828125L0.46967 1.35845L9.46967 10.3585L10 9.82812Z" fill="black"/>
                </svg>
               Dastto team
            </Link>
            <p className='text-black w-56 font-spaceGrotesk'>
                Celebrate the spirit of Dastto Community :)
            </p>
            <Image 
                className='w-[415px] h-auto'
                width={415}
                height={400}
                alt='Dastto Event'
                src={DasttoTextFooter}
            />
            <div className='w-full flex items-center justify-start py-4 border-2 border-t-border border-b-border-2 border-x-border-2'>
                <p className='font-spaceGrotesk underline text-black text-[16px] font-[400]'>
                    © 2025 Dastto Event. All Rights Reserved.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer