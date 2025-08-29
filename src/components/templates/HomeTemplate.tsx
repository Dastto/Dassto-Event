import HeroSection from '@/organisms/HeroSection'
import MarqueeText from '@/components/molecules/MarqueeText'
import MarqueeImage from '@/molecules/MarqueeImage'
import Speakers from '@/organisms/Speakers'

function HomeTemplate() {
  return (
    <div className='flex items-center justify-center flex-col gap-[30px]'>
        <HeroSection />
        <MarqueeImage />
        <MarqueeText />
        <Speakers />
    </div>
  )
}

export default HomeTemplate