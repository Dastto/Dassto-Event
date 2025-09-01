import React from 'react'
import HeroRegister from '@/organisms/HeroRegister'

function RegisterTemolate() {
  return (
    <div className='flex items-center justify-center flex-col'>
        <HeroRegister />
        <svg className='w-full h-0.5' viewBox="0 0 512 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M511 1H1" stroke="black" strokeOpacity="0.15" strokeWidth="2" strokeLinecap="round" stroke-dasharray="10 10"/>
        </svg>
    </div>
  )
}

export default RegisterTemolate