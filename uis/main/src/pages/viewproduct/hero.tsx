import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel";
  import { useState } from "react";
  import dummy from "../../assets/images/dummy.png"
  const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(2);
    const images = [1, 2, 3, 4, 5];
  
    return (
      <div className="text-center pt-4 sm:pt-6 md:pt-8 lg:pt-10">
        <div className="flex flex-col items-center  px-4 sm:px-6">
          <em className="bg-gradient-to-r from-black to-[#074FF7] bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-transparent font-extrabold italic playfair">
          CEM1
          </em>
          <p className="text-sm sm:text-md w-full sm:w-[400px] md:w-[500px] lg:w-[578px] mt-2 sm:mt-3 md:mt-4 text-gray-800 text-center">
          Compact Powerhouse for India’s EV Revolution
          </p>
        </div>
  
        <div className="w-screen overflow-hidden mt-4 sm:mt-6 md:mt-8 lg:mt-10 px-0">
          <Carousel className="w-full">
            <CarouselContent className="flex justify-center items-center transition-transform duration-500 ease-in-out">
              {images.map((index, i) => {
                const isActive = i === activeIndex;
  
                return (
                  <CarouselItem
                    key={index}
                    onClick={() => setActiveIndex(i)}
                    className={`cursor-pointer transition-all duration-500 ease-in-out flex justify-center items-center ${
                    isActive
                    ? "basis-[70%] sm:basis-[50%] md:basis-[60%] lg:basis-[50%] lg:w-[921px] lg:h-[521px] scale-100 z-30"
                    : "basis-[30%] sm:basis-[25%] md:basis-[30%] lg:basis-[25%] scale-90 opacity-60 z-10"
                    }`}
                  >
                    <div className="rounded-2xl overflow-hidden shadow-lg w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]">
                    <img
                    src={dummy}
                    alt={`Product ${index}`}
                    className="w-full h-full object-cover"
                    />
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    );
  };
  
  export default Hero;
  