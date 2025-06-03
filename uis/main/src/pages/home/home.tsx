import { useState } from "react";
import Header from "../header";
import Mobilesidebar from "../mobilesidebar";
import Hero from "./hero";
import Cards from "./cards";
import Footer1 from "../footer";
import Footer2 from "../footer2";
import ImageCarousel from "./swiper";
import BenefitsTimeline from "./timeline";
import Mobiletimeline from "./smtimeline";


const CHome = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  // Toggle the visibility of the sidebar
  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <>
      {/* Always visible Header */}
      <Header onHamburgerClick={toggleSidebar} />

      {/* Show MobileSidebar below the Header when toggled */}
      {showSidebar && <Mobilesidebar onClose={toggleSidebar} />}

      {/* Gradient Section */}
     <div
  className="relative w-full overflow-x-hidden flex flex-col rounded-lg gap-4"
  style={{
    background: "linear-gradient(to bottom, #FFFFFF, #074FF7, #000000)",
  }}
>

        <div className="flex flex-col items-center w-full  pb-20">
          <Hero />
        </div>

        <div className="hidden lg:block text-center font-bold pb-8 px-4">
          <div className="mx-auto leading-tight">
            <span className="text-white text-5xl">Key </span>
            <span className="playfair text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/10">
              benefits
            </span>
          </div>
          <p className="text-sm font-light text-white opacity-80 mt-2">
            Why our motors are revolutionary?
          </p>
        </div>

<div className="w-screen  relative">
  <div className="hidden lg:block">
        <BenefitsTimeline />
      </div>

      {/* Show this on medium and smaller screens */}
      <div className="block lg:hidden">
        <Mobiletimeline />
      </div>
</div>

      </div>

      {/* White BG Section */}
      <div className="relative w-full flex bg-[#F4F4F4] flex-col gap-4 items-center">
        <div className="text-center font-bold py-8 px-4">
         <div className="mx-auto leading-tight flex flex-nowrap items-center gap-2 text-center">
  <span className="text-black font-bold text-3xl sm:text-4xl md:text-5xl">
    Featured
  </span>
  <em className="bg-gradient-to-r from-black to-[#074FF7] bg-clip-text text-transparent font-black italic playfair text-3xl sm:text-4xl md:text-5xl">
    Products
  </em>
</div>

          <p className="text-sm font-medium text-black opacity-80 mt-2">
            Why our motors are revolutionary?
          </p>
        </div>

        <div className="flex flex-col gap-15">
          <Cards title="CEM SERIES 1" />
          <Cards title="CEM SERIES 2" isImageRight />
          <Cards title="CEM SERIES 3" />
        </div>

        <ImageCarousel />
      </div>

      {/* Footers */}
      <Footer2 />
      <Footer1 />
    </>
  );
};

export default CHome;
