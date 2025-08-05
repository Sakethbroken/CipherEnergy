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
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative">
        <div className="relative z-20">
          <Header onHamburgerClick={toggleSidebar} highlightOnClick />
          {showSidebar && (
            <div className="fixed inset-0 z-30">
              <Mobilesidebar onClose={toggleSidebar} />
            </div>
          )}
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={AU}
            alt="About Us Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Hero Content */}
        <div
          className={`relative z-10 flex flex-col items-center justify-center px-4 py-20 min-h-[450px] sm:min-h-[550px] md:min-h-[650px] lg:min-h-[750px] text-center ${
            showSidebar ? "hidden" : ""
          }`}
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-4">
            About Us
          </h3>
          <h1 className="max-w-4xl mx-auto">
            <em className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold italic playfair leading-tight">
              Reimagining Energy for India's Future
            </em>
          </h1>
        </div>
      </div>

      {/* Main content */}
      
     <div className="flex flex-col space-y-24 md:space-y-32">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">

        <div className="w-full bg-gradient-to-b from-[#00051E] to-[#062774]">
  <Story />
  </div>
  
  <div className="bg-gradient-to-b from-[#062774] via-[#0944CF] to-[#062774] ">
    <Team />
    </div>

<div className="bg-gradient-to-b from-[#062774] to-[#002B40]">
  <VandM />
</div>

<div className="bg-gradient-to-b from-[#002B40] via-[#005B62] to-[#002B40]">
  <Cards />
</div>


    <div className="bg-gradient-to-b from-[#002B40] via-[#001C37] to-[#00203A] pb-10">
    <Locationpage />
    </div>
  </div>
</div>

    

      {/* Footer */}
      <Footer2 hideMissionSection />
      <Footer1 />
    </div>
  );
};

export default Aboutpage;
