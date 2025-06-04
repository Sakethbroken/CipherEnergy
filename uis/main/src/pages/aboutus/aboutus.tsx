//import AU from "@/assets/images/AU.png";
import Header from "../header";
import Mobilesidebar from "../mobilesidebar";
import { useState, useEffect } from "react";
import Story from "./ourstory";
import Team from "./ourteam";
import VandM from "./Vission";
import Locationpage from "./location";
import Footer2 from "../footer2";
import Footer1 from "../footer";

const Aboutpage = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Toggle the visibility of the sidebar
  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);  
  };

  // Handle screen resize and update isMobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with Background */}
      <div className="relative">
        {/* Fixed position header for better stacking context */}
        <div className="relative z-21">
          <Header 
            onHamburgerClick={toggleSidebar} 
            bgcolor="bg-transparent" 
            highlightOnClick 
          />
          {showSidebar && (
            <div className="fixed inset-0 z-30">
              <Mobilesidebar onClose={toggleSidebar} />
            </div>
          )}
        </div>

        {/* Background image with proper sizing */}
        <div className="absolute inset-0 z-0">
          <img 
            //src={AU} 
            alt="About Us Background" 
            className="w-full h-full object-cover" 
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Hero content with proper z-index and visibility */}
        <div className={`relative z-10 flex flex-col items-center justify-center px-4 py-20 min-h-[450px] sm:min-h-[550px] md:min-h-[650px] lg:min-h-[750px] text-center ${showSidebar ? 'hidden' : ''}`}>
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

      {/* Main content area with proper spacing */}
      <div className="flex-grow bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
          <div className="flex flex-col space-y-16 md:space-y-24 lg:space-y-32">
            <section className="w-full max-w-full overflow-visible">
              <Story />
            </section>
            
            <section className="w-full max-w-full overflow-visible">
              <Team />
            </section>
            
            <section className="w-full max-w-full overflow-visible">
              <VandM />
            </section>
            
            <section className="w-full max-w-full overflow-visible">
              <Locationpage />
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full">
        <Footer2 />
        <Footer1 />
      </div>
    </div>
  );
};

export default Aboutpage;