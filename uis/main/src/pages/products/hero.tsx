import { useState } from "react";

const Hero = () => {
  const applicationCards = ["CEM1", "CEM2", "CEM3", "CEM4", "CEM5","CEM1","CEM1",];

  return (
    <div className="w-full flex-col item-center justify-center min-h-[400px] sm:min-h-[500px] md:min-h-[631px] gap-[40px] sm:gap-[60px] md:gap-[80px] px-[20px] sm:px-[60px] md:px-[120px] pt-[60px] sm:pt-[90px] md:pt-[128px] pb-[32px] sm:pb-[48px] md:pb-[64px] space-y-[40px] sm:space-y-[60px] md:space-y-[80px] max-w-[1600px] mx-auto">
      
      {/* Heading */}
      <div className="flex flex-col items-center gap-[8px] sm:gap-[10px] md:gap-[14px] max-w-[400px] sm:max-w-[500px] md:max-w-[578px] mx-auto">

        <h1 className="text-[32px] sm:text-[48px] md:text-[64px] leading-[38px] sm:leading-[58px] md:leading-[76.8px] font-black italic playfair tracking-[-0.02em] text-center bg-gradient-to-r from-white to-[#074FF7] bg-clip-text text-transparent">
          Products
        </h1>

        {/* Description */}
        <p className="text-white worksans font-normal tracking-normal text-sm sm:text-[15px] md:text-base leading-[22px] sm:leading-[24px] md:leading-[27px] w-full mx-auto text-center px-2 sm:px-0">
          Explore Cipher Energy's range of high-performance axial flux electric motors,
          built to revolutionize energy efficiency across India's core industries and
          mobility systems.
        </p>

      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-[12px] sm:gap-[14px] md:gap-[16px] w-full max-w-[320px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1160px] mx-auto">
        {applicationCards.map((card, idx) => (
          <div key={idx} className="flex flex-col w-[120px] sm:w-[140px] md:w-[152px] h-[120px] sm:h-[140px] md:h-[152px] items-center mx-auto">
            <div className="w-full aspect-square rounded-md bg-white/20 flex items-center justify-center hover:bg-opacity-30 transition-all" />
            <h1 className="mt-2 sm:mt-2.5 md:mt-3 text-center font-body text-white text-sm sm:text-base md:text-lg font-medium">
              {card}
            </h1>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Hero;