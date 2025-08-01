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
import ScrollVideo from "@/components/ScrollControlledVideo.tsx";

import powericon from "../../assets/images/powericon.png";
import torqueicon from "../../assets/images/peaktorque.png";
import massicon from "../../assets/images/massicon.png";
import continuouspowericon from "../../assets/images/continouspowericon.png";
import continuoustorqueicon from "../../assets/images/conttorque.png";
import energysavingscon from "../../assets/images/energyicon.png";

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
  const toggleSidebar = () => setShowSidebar((prev) => !prev);

  return (
    <>
      <Header onHamburgerClick={toggleSidebar} />
      {showSidebar && <Mobilesidebar onClose={toggleSidebar} />}

      {/* Gradient Section */}
      <div
        className="relative w-full overflow-x-hidden flex flex-col rounded-lg gap-4"
        style={{
          background: "linear-gradient(to bottom, #020919 , #074FF7, #020919)",
        }}
      >
        {/* Hero Section */}
       
        <div className="flex flex-col items-center w-full py-20">
          <Hero />
        </div>

        {/* Scroll Synced Video Section */}
        {/* <div>
          <ScrollVideo />
        </div> */}
        

        {/* Key Benefits Heading */}
    <div className="hidden sm:flex flex-col w-[398px] h-[137px] mx-auto items-center justify-center max-w-[768px] gap-[14px]">
  <div className="w-[398px] flex items-center justify-center gap-3 h-[96px]">
    <span className="title text-center text-6xl text-white font-[700] leading-[100%] tracking-[-0.02em] font-title">
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


        {/* Timeline Section */}
        <div className="w-screen relative">
          <div className="hidden lg:block">
            <BenefitsTimeline />
          </div>
          <div className="block lg:hidden">
            <Mobiletimeline />
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="relative w-full bg-[#020919] flex flex-col items-center gap-4">
        <div className="w-full max-w-[768px] px-4 mx-auto text-center py-8">
          <div className="flex flex-col items-center gap-2">
            <span className="flex flex-row items-center justify-center gap-3">
              <span className="text-white font-body font-bold text-5xl sm:text-6xl leading-tight">
                Featured
              </span>
              <span className="playfair font-title font-black italic text-4xl sm:text-6xl leading-tight bg-gradient-to-r from-white to-[#074FF7] bg-clip-text text-transparent">
                Products
              </span>
            </span>
            <p className="text-base sm:text-lg font-medium text-white opacity-80 mt-2">
              Why our motors are revolutionary?
            </p>
          </div>
        </div>

        <div className="flex  flex-col gap-12 px-4 w-full  ">
            
          <Cards title="CEM 1 SERIES" cardData={cemSeries1Data} />
           
         
          <Cards title="CEM 2 SERIES" cardData={cemSeries1Data} isImageRight />
          
          <Cards title="CEM 3 SERIES" cardData={cemSeries1Data} />
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
