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
import ExplodedView from "./ExplodeView";

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
        className="relative w-full overflow-x-hidden flex flex-col"
        style={{
          background: "linear-gradient(to bottom, #020919, #074FF7, #020919)",
        }}
      >
       <div className="bg-[url('/assets/images/Noise.png')] bg-cover bg-center">
  {/* Hero Section */}
  <div className="flex flex-col items-center w-full py-12 md:py-20">
    <Hero />
  </div>
  <ExplodedView />
</div>



        {/* Scroll Synced Video Section */}
        {/* <div>
          <ScrollVideo />
        </div> */}

        {/* Key Benefits Heading */}
        <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-4 mb-8 md:mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-3 md:mb-4">
            <span className="text-4xl sm:text-5xl md:text-6xl text-white font-bold leading-tight text-center">
              Key
            </span>
            <span className="playfair font-black italic text-4xl sm:text-5xl md:text-6xl text-center leading-tight bg-gradient-to-r from-white to-transparent bg-clip-text text-transparent">
              Benefits
            </span>
          </div>
          <p className="text-sm md:text-base text-white font-normal text-center opacity-80">
            Why our motors are revolutionary?
          </p>
        </div>

        {/* Timeline Section */}
        <div className="w-full relative">
          <div className="hidden lg:block">
            <BenefitsTimeline />
          </div>
          <div className="block lg:hidden">
            <Mobiletimeline />
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="relative w-full bg-[#020919] flex flex-col items-center">
        {/* Products Heading */}
        <div className="w-full max-w-4xl px-4 mx-auto text-center py-8 md:py-12">
          <div className="flex flex-col items-center gap-3 md:gap-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
              <span className="text-4xl sm:text-5xl md:text-6xl text-white font-bold leading-tight">
                Featured
              </span>
              <span className="playfair font-black italic text-4xl sm:text-5xl md:text-6xl leading-tight bg-gradient-to-r from-white to-[#074FF7] bg-clip-text text-transparent">
                Products
              </span>
            </div>
            <p className="text-sm md:text-base lg:text-lg font-medium text-white opacity-80 mt-2">
              Why our motors are revolutionary?
            </p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col gap-12 md:gap-16 lg:gap-20 w-full px-4 pb-8 md:pb-12">
          <Cards title="CEM 1 SERIES" cardData={cemSeries1Data} />
          <Cards title="CEM 2 SERIES" cardData={cemSeries1Data} isImageRight />
          <Cards title="CEM 3 SERIES" cardData={cemSeries1Data} />
        </div>

        {/* Image Carousel */}
        <div className="w-full">
          <ImageCarousel />
        </div>
      </div>

      {/* Footers */}
      <Footer2 />
      <Footer1 />
    </>
  );
};

export default CHome;