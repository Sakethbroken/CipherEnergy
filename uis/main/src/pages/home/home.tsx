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
import powericon from "../../assets/images/powericon.png"
import torqueicon from "../../assets/images/peaktorque.png"
import massicon from "../../assets/images/massicon.png"
import continuouspowericon from "../../assets/images/continouspowericon.png"
import continuoustorqueicon from "../../assets/images/conttorque.png"
import energysavingscon from "../../assets/images/energyicon.png"

const cemSeries1Data = [
  { id: 1, active: true, icon: powericon, value: "130 kW", description: "Peak Power" },
  { id: 2, active: false, icon: torqueicon, value: "125 Nm", description: "Peak Torque" },
  { id: 3, active: true, icon: massicon, value: "14.5 kg", description: "Mass" },
  { id: 4, active: false, icon: continuouspowericon, value: "75 kW", description: "Continuous Power" },
  { id: 5, active: true, icon: continuoustorqueicon, value: "185 Nm", description: "Continuous Torque" },
  { id: 6, active: false, icon: energysavingscon, value: "15%", description: "Energy Saving" },
];

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
    className="relative w-full overflow-x-hidden flex flex-col rounded-lg gap-4 min-h-[1024px]"
    style={{
 background: "linear-gradient(to bottom, #FFFFFF 10% , #074FF7 30%, #000000 85% )"

    }}
  >

        <div className="flex flex-col items-center w-full  py-20">
          <Hero />
        </div>

   
          
            <div className="w-[398px] h-[137px] mx-auto items-center justify-center max-w-[768px] gap-[14px]">
              <div className="w-[398px] flex items-center justify-center gap-3 h-[96px]">
                <span className=" title text-center text-6xl text-white font-[700] leading-[100%] tracking-[-0.02em] font-title">
                  Key
                </span>
                <span className="playfair font-black italic text-6xl text-center leading-[100%] tracking-[-0.02em] bg-gradient-to-r from-white to-transparent bg-clip-text text-transparent">
                  benefits
                </span>
              </div>

                <p className="font-body text-white font-normal text-sm leading-[20px] text-center">
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


        <div className="w-[344px] h-[212px] mx-auto max-w-[768px] gap-[14px] text-center font-bold py-8 px-4">
<div className="w-[344px] h-[171px] mx-auto leading-tight flex flex-col items-center gap-2 text-center">
  <span className="w-[344px] text-center text-black font-body font-bold text-7xl leading-[100%] tracking-[0%]">
    Featured
  </span>
  <span className=" playfair w-[344px] text-center font-title font-black italic text-6xl leading-[100%] tracking-[-0.02em] bg-gradient-to-r from-black to-[#074FF7] bg-clip-text text-transparent">
    Products
  </span>
  <p className="text-lg font-medium text-black opacity-80 mt-2">
    Why our motors are revolutionary?
  </p>
</div>



  </div>

       <div className="flex flex-col gap-16"> {/* or gap-[60px] */}
  <Cards 
        title="CEM 1 SERIES" 
        cardData={cemSeries1Data}
      />
  <Cards title="CEM 2 SERIES "  cardData={cemSeries1Data} isImageRight />
  <Cards title="CEM 3 SERIES" cardData={cemSeries1Data}/>
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
