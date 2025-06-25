import { useState } from "react";
import Header from "../header";
import Mobilesidebar from "../mobilesidebar";
import customization from "../../assets/images/customization.png"
import Footer1 from "../footer";
import ParentComponent1 from "./timeline";

const Customization=()=>{
    const [showSidebar, setShowSidebar] = useState(false);
    const toggleSidebar = () => {
        setShowSidebar((prev) => !prev);
      };
      const customImage = "/images/customization.png";
    
        
    return(
        <>
            <Header onHamburgerClick={toggleSidebar} />
        {showSidebar && <Mobilesidebar onClose={toggleSidebar} />}


        <div className="w-full relative min-h-[359px] bg-gradient-to-b from-[#ffffff] to-[#074FF7]">

             <div className="flex flex-col items-center pt-20">
          <em className="playfair font-title text-[32px] md:text-[64px] leading-tight tracking-[-2%] font-black italic bg-gradient-to-r from-black to-[#074FF7] bg-clip-text text-transparent text-center pt-10">
          Custom Solutions
          </em>
          <p className="text-xl md:text-2xl italic max-w-[578px] text-black mt-5 text-center">
            Why our motors are revolutionary?
          </p>
        </div>



        </div>
        
    <div className="w-full px-4 min-h-[975px] bg-[#000922]">
        
  <div className="flex flex-col max-w-[1200px] items-center justify-center mx-auto">


    <img src={customization} alt="" className="w-[668px] h-[450px]" />
    <ParentComponent1/>



  </div>


</div>
<Footer1/>

            
        
        </>
    )
}

export default Customization