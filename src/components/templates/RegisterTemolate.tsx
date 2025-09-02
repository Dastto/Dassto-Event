import React from 'react'
import HeroRegister from '@/organisms/HeroRegister'
import FormRegister from '@/molecules/FormRegister'

function RegisterTemolate() {
  return (
    <div className='flex items-center justify-center flex-col'>
        <HeroRegister />
        <svg width="640" height="2" viewBox="0 0 682 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M681 1H1" stroke="black" strokeOpacity="0.15" strokeWidth="2" strokeLinecap="round" strokeDasharray="10 10"/>
        </svg>
        <FormRegister />
    </div>
  )
}

export default RegisterTemolate