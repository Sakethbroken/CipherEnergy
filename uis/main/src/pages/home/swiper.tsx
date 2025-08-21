import { useState, useEffect } from 'react';

// Import images
import ev from "../../assets/images/ev.png";
import machine from "../../assets/images/machine.png";
import plane from "../../assets/images/plane.png";

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
      background: "linear-gradient(to bottom, #020919, #003546, #008A84, #002B40, #001833)",
    }}>
      {/* Title Section */}
      <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-4 mb-8 md:mb-12">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-3 md:mb-4">
          <span className="playfair font-black italic text-4xl sm:text-5xl md:text-6xl text-center leading-tight bg-gradient-to-r from-white to-[#074FF7] bg-clip-text text-transparent">
            Industries
          </span>
        </div>
        <p className="text-sm md:text-base text-white font-medium opacity-80 text-center">
          Why our motors are revolutionary?
        </p>
      </div>

      {/* Main carousel */}
      <div className="relative w-full max-w-6xl mx-auto px-4 overflow-hidden">
        {/* Gradient container */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-7/8 h-[990px] rounded-3xl bg-[#6384E933] z-0" />

        {/* Image container */}
        <div className="relative w-full flex items-center justify-center h-[600px]">
          {carouselItems.map((item, index) => {
            const position = (index - activeIndex + carouselItems.length) % carouselItems.length;
            let positionClass = "";
            let width = "18%";
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
                  top: "55%",
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

        {/* Text container aligned with active image */}
        <div className="relative w-full flex justify-center pt-14">
          <div 
            className="text-left"
            style={{
              width: windowWidth < 768 ? "80%" : "60%",
              minWidth: windowWidth < 768 ? "250px" : "300px",
              maxWidth: windowWidth < 768 ? "80%" : "60%"
            }}
          >
            <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
              {carouselItems[activeIndex].title}
            </h3>
            <p className="text-white text-sm md:text-base">
              {carouselItems[activeIndex].description}
            </p>
          </div>
        </div>

        {/* Dots - Centered below text */}
        <div className="flex flex-col items-center mt-6">
          <div className="flex space-x-2">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-blue-500 w-3 h-3" : "bg-gray-300"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

          <div className="text-xs text-gray-500 mt-2">
            ({activeIndex + 1}/{carouselItems.length})
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;