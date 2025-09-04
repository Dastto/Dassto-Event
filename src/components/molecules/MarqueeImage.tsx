"use client";

import { useState } from "react";

import { Marquee } from "@/components/magicui/marquee";
import ImageMarquee from "../atom/ImageMarquee";

import DasttoImg from "@/public/images/MarqueeImage.png";

const items = [
  { img: DasttoImg, rotation: 25 },
  { img: DasttoImg, rotation: -15 },
  { img: DasttoImg, rotation: 8 },
  { img: DasttoImg, rotation: -9 },
  { img: DasttoImg, rotation: 12 },
  { img: DasttoImg, rotation: 18 },
  { img: DasttoImg, rotation: 26 },
  { img: DasttoImg, rotation: -18 },
];

function MarqueeImage() {

  const [isFast, ] = useState(false);

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
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
                    cafe={false}
                />
            ))}
        </Marquee>
    </div>
  );
}

export default MarqueeImage;