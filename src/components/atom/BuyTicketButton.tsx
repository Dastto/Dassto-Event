import Link from 'next/link'
import React from 'react'

function BuyTicketButton() {
  return (
    <Link href={"/register"}>
      <button className='BuyTicketButton'>
          <p className='text-white font-IRANYekanXNoEn text[20px] font-semibold z-30 relative'>
              بلیط میخوام
          </p>
          <svg className='z-30 relative' width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5 5V6.78641C1.5 7.54137 1.88892 8.24308 2.52913 8.6432C3.90129 9.50081 3.90129 11.4992 2.52913 12.3568C1.88892 12.7569 1.5 13.4586 1.5 14.2136V16.5C1.5 18.1569 2.84315 19.5 4.5 19.5H18C19.6569 19.5 21 18.1569 21 16.5V14.1561C21 13.4306 20.6496 12.7497 20.0593 12.328C18.8049 11.4321 18.8049 9.5679 20.0593 8.67196C20.6496 8.25027 21 7.56942 21 6.84392V5C21 3.34315 19.6569 2 18 2H4.5C2.84315 2 1.5 3.34315 1.5 5Z" stroke="white" strokeWidth="3"/>
              <path d="M9.5 7L9.5 14" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
      </button>
    </Link>
  )
}

export default BuyTicketButton