import HeroSection from '@/organisms/HeroSection'
import MarqueeText from '@/components/molecules/MarqueeText'
import MarqueeImage from '@/molecules/MarqueeImage'
import speaker from '@/public/images/speaker.png'
import timeLine from '@/public/images/timeLine.png'
import BuyTicket from '@/public/images/BuyTicket.png'
import Sponser from '@/public/images/Sponser.png'
import Image from 'next/image'

function HomeTemplate() {
  return (
    <div className='flex items-center justify-center flex-col gap-[30px]'>
        <HeroSection />
        <MarqueeImage />
        <MarqueeText />
        <Image
            className='w-full h-auto'
            width={500}
            height={700}
            alt='speaker'
            src={speaker}
        />
        <Image
            className='w-full h-auto'
            width={500}
            height={900}
            alt='timeLine'
            src={timeLine}
        />
        <Image
            className='w-full h-auto'
            width={500}
            height={600}
            alt='Sponser'
            src={Sponser}
        />
        <Image
            className='w-full h-auto'
            width={500}
            height={500}
            alt='BuyTicket'
            src={BuyTicket}
        />
    </div>
  )
}

export default HomeTemplate