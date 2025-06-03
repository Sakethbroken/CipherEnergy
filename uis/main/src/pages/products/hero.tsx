import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useState } from "react";
import dummy from "../../ASSETS/images/dummy.png"
const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const images = [1, 2, 3, 4, 5];

   const applicationCards = [
    "CEM1",
    "CEM2",
    "CEM3",
    "CEM4",
    "CEM5 ",
    "CEM6",
    "CEM7",
  ];

  return (
    
   <div className="w-full relative min-h-[613px] bg-gradient-to-b from-[#ffffff] to-[#074FF7]">
        <div className="flex flex-col items-center py-20">
          <em className="playfair font-title text-[32px] md:text-[64px] leading-tight tracking-[-2%] font-black italic bg-gradient-to-r from-black to-[#074FF7] bg-clip-text text-transparent text-center pt-10">
            Products
          </em>
          <p className="text-xl md:text-2xl italic max-w-[578px] text-black mt-5 text-center">
         Explore Cipher Energys range of high-performance axial flux electric motors, built to revolutionize energy efficiency across India's core industries and mobility systems.
          </p>
        </div>

        {/* Application Cards */}
<div className="mt-20 px-4">
  <div className="flex overflow-x-auto whitespace-nowrap gap-5 max-w-[1200px] mx-auto hide-scrollbar">
    {applicationCards.map((card, idx) => (
      <div
        key={idx}
        className="flex-shrink-0 flex flex-col items-center mb-5 w-[100px] sm:w-[120px] md:w-[140px] lg:w-[152px]"
      >
        <div className="w-full aspect-square rounded-md bg-white/20 flex items-center justify-center hover:bg-opacity-30 transition-all">
          {/* Placeholder for icon/image */}
        </div>
        <h1 className="mt-2 text-center font-body text-white text-lg font-medium">{card}</h1>
      </div>
    ))}
  </div>
</div>


      </div>


    
  );
};

export default Hero;
