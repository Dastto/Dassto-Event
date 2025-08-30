"use client";

import { Marquee } from "@/components/magicui/marquee";
import cafe from "@/public/images/cafe.png";
import Image from "next/image";
import ImageMarquee from "../atom/ImageMarquee";
import MarqueeSvgSpeed from "@/public/images/marquee-svg-speed.png";
import { useState } from "react";

const items = [
  { img: cafe, rotation: 25 },
  { img: cafe, rotation: -15 },
  { img: cafe, rotation: 8 },
  { img: cafe, rotation: -9 },
  { img: cafe, rotation: 12 },
  { img: cafe, rotation: 18 },
  { img: cafe, rotation: 26 },
  { img: cafe, rotation: -18 },
];

function MarqueeCafe() {

  const [isFast, setIsFast] = useState(false);

  const toggleSpeed = () => {
    setIsFast((prev) => !prev);
  };
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <p className="text-gradient w-full py-[35px] text-black font-spaceGrotesk text-center text-[40px] font-bold">
            Workshops. Talks. Networking. Design. Product. Community.
        </p>
        <div className='blure-marquee flex items-center justify-center h-[341px] w-[162px] absolute z-30 bottom-0 -right-10'>
        </div>
        <div className='flex items-center justify-center h-[341px] w-[162px] absolute z-40 right-0 bottom-0'>
            <div onClick={toggleSpeed} className='bg-white cursor-pointer absolute z-50 p-4 rounded-full flex items-center justify-center border-2 border-border'>
                <Image
                    className='w-[22px] h-[22px]'
                    width={22}
                    height={22}
                    alt='MarqueeSvgSpeed'
                    src={MarqueeSvgSpeed}
                />
            </div>
        </div>
        <Marquee
          key={isFast ? "fast" : "slow"}
          className={`${isFast ? "[--duration:5s]" : "[--duration:20s]"} gap-2.5`}
          pauseOnHover={false}
        >
            {items.map((item, index) => (
                <ImageMarquee 
                    key={index}
                    imgSrc={item.img}
                    rotate={item.rotation}
                    cafe={true}
                />
            ))}
        </Marquee>
    </div>
  );
}

export default MarqueeCafe;