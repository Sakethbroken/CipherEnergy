import { useState } from "react";
import dummy from "../../assets/images/dummy.png";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const applicationCards = [
    "CEM1",
    "CEM2",
    "CEM3",
    "CEM4",
    "CEM5",
    "CEM6",
    "CEM7",
  ];

  return (
    <div className="w-full relative min-h-[613px] bg-[linear-gradient(to_bottom,_#ffffff_40%,_#074FF7_100%)]">
      <div className="flex flex-col justify-center items-center py-20">
        <div className=" flex justify-center">
          <span className="playfair font-title text-[32px] md:text-[64px] leading-tight tracking-[-2%] font-bold italic bg-gradient-to-r from-[#031a4f] to-[#074FF7] bg-clip-text text-transparent text-center pt-10">
            Products
          </span>
        </div>

      <p className="font-body font-normal text-base leading-[27px] text-black mt-5 text-center max-w-[578px]">
  Explore Cipher Energy’s range of high-performance axial flux electric motors,
  built to revolutionize energy efficiency across India’s core industries and
  mobility systems.
</p>

      </div>

  <div className=" px-4 sm:px-6 lg:px-8 flex justify-center">
  <div className="w-[1160px] h-[187px] flex overflow-x-auto whitespace-nowrap gap-4 hide-scrollbar">
    {applicationCards.map((card, idx) => (
      <div
        key={idx}
        className="flex-shrink-0 flex flex-col items-center w-[100px] sm:w-[120px] md:w-[140px] lg:w-[152px]"
      >
        <div className="w-full aspect-square rounded-md bg-white/20 flex items-center justify-center hover:bg-opacity-30 transition-all">
          {/* Placeholder for icon/image */}
        </div>
        <h1 className="mt-2 text-center font-body text-white text-lg font-medium">
          {card}
        </h1>
      </div>
    ))}
  </div>
</div>


    </div>
  );
};

export default Hero;
