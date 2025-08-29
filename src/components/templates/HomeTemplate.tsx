import HeroSection from '@/organisms/HeroSection'
import MarqueeText from '@/components/molecules/MarqueeText'

function HomeTemplate() {
  return (
    <div className='flex items-center justify-center flex-col gap-[30px]'>
        <HeroSection />
        <MarqueeText />
    </div>
  )
}

export default HomeTemplate