import React from 'react'

function Header() {
  return (
    <div className='w-full max-w-[640px] flex items-center justify-end gap-5 py-8 px-[33px] sm:px-[67px] border-b-2 border-t-2 sm:border-x-2 border-border'>
        <p className='font-spaceGrotesk text-[16px] font-medium text-black'>
            Event 2025
        </p>
        <svg width="4" height="10" viewBox="0 0 4 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 8.5L2 1.5" stroke="black" strokeOpacity="0.2" strokeWidth="3" strokeLinecap="round"/>
        </svg>
        <div className='border-2 border-border rounded-[55px] flex items-center justify-center p-1.5'>
            <p className='bg-bg-button-Gray px-2.5 py-[5px] rounded-[55px] font-spaceGrotesk text-[16px] font-medium text-black'>
                Event 2024
            </p>
        </div>
    </div>
  )
}

export default Header