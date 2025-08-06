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
  ];

  return (
    <div className="w-full overflow-x-hidden relative min-h-[613px] bg-[linear-gradient(to_bottom,_#020919,_#074FF7_100%)]">
      {/* Content Container */}
      <div className="w-full max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-0">
        
        {/* Header Section */}
        <div className="flex flex-col justify-center items-center py-20">
          <div className="flex justify-center">
            <span className="playfair font-title text-4xl lg:text-[64px] leading-tight tracking-[-2%] font-bold italic bg-gradient-to-r from-[#ffffff] to-[#074FF7] bg-clip-text text-transparent text-center pt-10">
              Products
            </span>
          </div>

          <p className="font-body font-normal text-base leading-[27px] text-white mt-6 text-center max-w-[578px] px-4">
            Explore Cipher Energy's range of high-performance axial flux electric motors,
            built to revolutionize energy efficiency across India's core industries and
            mobility systems.
          </p>
        </div>

        {/* Products Grid Section */}
        <div className="pb-10">
          <div className="w-full flex justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 w-full max-w-[800px]">
              {applicationCards.map((card, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center w-full"
                >
                  <div className="w-full aspect-square rounded-md bg-white/20 flex items-center justify-center hover:bg-opacity-30 transition-all">
                    {/* Placeholder for icon/image */}
                  </div>
                  <h1 className="mt-3 text-center font-body text-white text-lg font-medium">
                    {card}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;