import { useState, useEffect } from 'react';

// Import images
import ev from "../../ASSETS/images/ev.png";
import machine from "../../ASSETS/images/machine.png";
import plane from "../../ASSETS/images/plane.png";

const carouselItems = [
  {
    image: ev,
    title: "Electric Vehicle",
    description: "High-density, lightweight motors accelerating India's EV transition."
  },
  {
    image: machine,
    title: "Machine Learning",
    description: "AI-driven solutions for optimized performance and efficiency."
  },
  {
    image: plane,
    title: "Aerospace",
    description: "Innovative propulsion systems for next-gen aerospace applications."
  }
];

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  // Handle window resize
  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    
    // Initial width
    updateWindowWidth();
    
    // Add event listener
    window.addEventListener('resize', updateWindowWidth);
    
    // Cleanup
    return () => window.removeEventListener('resize', updateWindowWidth);
  }, []);

  return (
    <div className="w-full relative py-8 md:py-16" style={{
      background: "linear-gradient(to bottom, #F4F4F4, #F1F8FF, #88A3A1, #DEE1F0, #7D7C8C, #FFFFFF)",
    }}>
      {/* Title Section */}
      <div className="text-center flex flex-col mb-6 md:mb-12 px-4">
        <div className="flex justify-center">
        <em className="playfair font-title text-[32px] md:text-[64px] leading-tight tracking-[-2%] font-black italic bg-gradient-to-r from-black to-[#074FF7] bg-clip-text text-transparent text-center mt-10">
          Industries
        </em>
      </div>
        <p className="font-medium text-black opacity-80 mt-2">
          Why our motors are revolutionary?
        </p>
      </div>

      {/* Main carousel */}
      <div className="relative w-full max-w-6xl mx-auto h-[100vh] px-4 overflow-hidden">
        {/* Gradient container */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-7/8 h-full rounded-3xl bg-white/30 z-0" />

        {/* Carousel */}
        <div className="relative w-full h-full flex flex-col">
          {/* Image container */}
          <div className="relative w-full flex items-center justify-center h-4/5">
            {carouselItems.map((item, index) => {
              const position = (index - activeIndex + carouselItems.length) % carouselItems.length;
              let positionClass = "";
              let width = "16%";
              let height = "450px";
              let zIndex = 0;
              let transform = "translateX(0)";
              let left = "auto";
              let minWidth = "0";

              if ((activeIndex === 0 && index === carouselItems.length - 1) || 
                  (index === activeIndex - 1)) {
                // Left image
                positionClass = "left-image";
                width = windowWidth < 768 ? "10%" : "18%";
                height = windowWidth < 768 ? "350px" : "450px";
                left = windowWidth < 768 ? "-5%" : "0";
                zIndex = 1;
                minWidth = windowWidth < 768 ? "70px" : "120px";
              } else if (index === activeIndex) {
                // Center image
                positionClass = "center-image";
                width = windowWidth < 768 ? "80%" : "60%";
                height = windowWidth < 768 ? "450px" : "600px";
                zIndex = 10;
                left = "50%";
                transform = "translateX(-50%)";
                minWidth = windowWidth < 768 ? "250px" : "300px";
              } else if ((activeIndex === carouselItems.length - 1 && index === 0) || 
                         (index === activeIndex + 1)) {
                // Right image
                positionClass = "right-image";
                width = windowWidth < 768 ? "10%" : "18%";
                height = windowWidth < 768 ? "350px" : "450px";
                left = "auto";
                zIndex = 1;
                minWidth = windowWidth < 768 ? "70px" : "120px";
              } else {
                // Hide other images
                width = "0";
                height = "0";
                zIndex = -1;
              }

              return (
                <div
                  key={index}
                  className={`absolute transition-all duration-500 cursor-pointer ${positionClass}`}
                  style={{
                    width,
                    height,
                    zIndex,
                    left,
                    top: "50%",
                    transform: `${transform} translateY(-50%)`,
                    right: positionClass === "right-image" ? (windowWidth < 768 ? "-5%" : "0") : "auto",
                    minWidth
                  }}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="w-full h-full rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Text & dots */}
          <div className="flex flex-col items-center mt-6">
            <div className="text-center mb-4">
              <h3 className="text-black text-xl md:text-2xl font-bold mb-1">
                {carouselItems[activeIndex].title}
              </h3>
              <p className="text-gray-700 text-sm max-w-md px-4">
                {carouselItems[activeIndex].description}
              </p>
            </div>

            {/* Dots */}
            <div className="flex space-x-2 mt-2">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex ? "bg-blue-500 w-3 h-3" : "bg-gray-300"
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>

            <div className="text-xs text-gray-500 mt-1">
              ({activeIndex + 1}/{carouselItems.length})
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;

