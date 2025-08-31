import HeroSection from '@/organisms/HeroSection'
import MarqueeText from '@/components/molecules/MarqueeText'
import MarqueeImage from '@/molecules/MarqueeImage'
import Speakers from '@/organisms/Speakers'
import MarqueeCafe from '@/molecules/MarqueeCafe'
import ProgramTimeline from '@/organisms/ProgramTimeline'
import Loaction from '@/molecules/Loaction'
import Team from '@/molecules/Team'
import Sponsors from '@/organisms/Sponsors'

function HomeTemplate() {
  return (
    <div className='flex items-center justify-center flex-col gap-[30px]'>
        <HeroSection />
        <MarqueeImage />
        <MarqueeText />
        <Speakers />
        <MarqueeCafe />
        <ProgramTimeline />
        <Sponsors />
        <Loaction />
        <Team />
    </div>
  )
}

export default HomeTemplate