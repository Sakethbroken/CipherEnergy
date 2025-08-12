import AU from "../../assets/images/au1.png";
import Header from "../header";
import Mobilesidebar from "../mobilesidebar";
import { useState, useEffect } from "react";
import Story from "./ourstory";
import Team from "./ourteam";
import VandM from "./Vission";
import Locationpage from "./location";
import Footer2 from "../footer2";
import Footer1 from "../footer";
import Cards from "./cards";
import abindia from "../../assets/images/abindia.png";

const Aboutpage = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden flex flex-col ">
      {/* Header */}
      <div className="relative w-full">
        <Header onHamburgerClick={toggleSidebar} highlightOnClick />
        {showSidebar && (
          <div className="fixed inset-0 z-30">
            <Mobilesidebar onClose={toggleSidebar} />
          </div>
        )}
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={abindia}
            alt="About Us Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Hero Content */}
        <div
          className={`relative z-10 flex flex-col gap-6 items-center justify-center text-center ${
            showSidebar ? "hidden" : ""
          }`}
        >
          <h3 className="worksans text-[40px] md:text-3xl lg:text-4xl text-white font-bold">
            About Us
          </h3>
          <h1 className="max-w-4xl mx-auto">
            <em className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold italic playfair leading-tight">
              Reimagining Energy for India's Future
            </em>
          </h1>
        </div>
      </div>

      {/* Content with Gradient Background */}
      <div
        style={{
          background: `linear-gradient(
            to bottom,
            #00051E,
            #062774,
            #0944CF,
            #062774,
            #001C37,
            #002B40,
            #005B62,
            #002B40,
            #001C37,
            #00203A
          )`,
        }}
        className="flex flex-col gap-[200px] pt-[200px] py-16"
      >
        {/* Story */}
        
          <div className="">
            <Story />
          </div>
        

        {/* Team */}
    
          <div className="">
            <Team />
          </div>
       

        {/* Vision & Mission */}
      
          <div className="">
            <VandM />
          </div>
       

        {/* Cards */}
        
          <div className="">
            <Cards />
          </div>
      

        {/* Location */}
        <div className="">
            <Locationpage />
         
        </div>

        {/* Footer */}
        <div className="w-full">
          <Footer2 hideMissionSection />
          <Footer1 />
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
