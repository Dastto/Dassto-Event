"use client";

import { useState } from "react";

import { Marquee } from "@/components/magicui/marquee";
import ImageMarquee from "../atom/ImageMarquee";

import cafe from "@/public/images/cafe.png";
import cafe2 from "@/public/images/cafe2.jpg";
import cafe3 from "@/public/images/cafe3.jpg";
import cafe4 from "@/public/images/cafe4.jpg";

const items = [
  { img: cafe, rotation: 0 },
  { img: cafe2, rotation: 0 },
  { img: cafe3, rotation: 0 },
  { img: cafe4, rotation: 0 },
];

function MarqueeCafe() {

  const [isFast, ] = useState(false);

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <p className="text-gradient w-full py-[35px] text-black font-spaceGrotesk text-center text-[40px] font-bold">
            Workshops. Talks. Networking. Design. Product. Community.
        </p>
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