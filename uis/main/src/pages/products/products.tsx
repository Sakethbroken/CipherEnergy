import Header from "../header";
import { useState } from "react";
import Hero from "./hero";
import Cards from "./cards";
import Footer2 from "../footer2";
import Footer1 from "../footer";
import Mobilesidebar from "../mobilesidebar";

const Prod = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <div>
      <Header onHamburgerClick={toggleSidebar} />
      {showSidebar && <Mobilesidebar onClose={toggleSidebar} />}
      <div className="">
        <Hero />
      </div>

      <div className="flex flex-col items-center w-full">

        {/* GHOST SPIN series heading */}
        

        <div className="w-full bg-gradient-to-b from-[#074FF7] to-[#052C88] pb-20">
                   <h2 className="playfair font-title text-[32px] md:text-[64px] leading-tight tracking-[-2%] font-bold italic bg-gradient-to-r from-[#ffffff] to-[#074FF7] bg-clip-text text-transparent text-center pt-10 pb-10 mt-12 mb-6">
GHOST SPIN series</h2>
          <Cards title="cem 1" productId="cem1" />
        </div>
        <div className="w-full bg-gradient-to-b from-[#052C88] to-[#04236C] pb-20">
          <Cards title="cem 2" productId="cem2" />
        </div>

        {/* Vibe of torque series heading */}
     

        <div className="w-full bg-gradient-to-b from-[#04236C] to-[#031B51] pb-20">
            <h2 className="playfair font-title text-[32px] md:text-[64px] leading-tight tracking-[-2%] font-bold italic bg-gradient-to-r from-[#ffffff] to-[#074FF7] bg-clip-text text-transparent text-center pt-10 pb-10 mt-12 mb-6">
              Vibe of torque series
            </h2>
          <Cards title="cem 3" productId="cem3" />
        </div>
        <div className="w-full bg-gradient-to-b from-[#031B51] to-[#031235] pb-20">
          <Cards title="cem 4" productId="cem4" />
        </div>
        <div className="w-full bg-gradient-to-b from-[#031235] to-[#020919] pb-20">
          <Cards title="cem 5" productId="cem5" />
        </div>

      
      </div>

      <Footer2 />
      <Footer1 />
    </div>
  );
}
export default Prod;