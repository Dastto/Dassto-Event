import { Marquee } from "@/components/magicui/marquee";

const items = [
  "Graphic Designer",
  "UI UX Designer",
  "UX Writer",
  "Networking",
  "Product Designer",
  "Digital Marketing",
  "Programmer",
  "Product Manager",
];

function MarqueeText() {
  return (
    <div className="relative mt-[30px] flex w-full flex-col items-center justify-center overflow-hidden py-[30px] border-t-2 border-b-2 border-border">
      <Marquee className="[--duration:20s] gap-2.5" pauseOnHover={false} reverse>
        {items.map((item, index) => (
          <p
            key={index}
            className="text-black font-spaceGrotesk text-[16px] font-medium"
          >
            {item}
          </p>
        ))}
      </Marquee>
    </div>
  );
}

export default MarqueeText;
