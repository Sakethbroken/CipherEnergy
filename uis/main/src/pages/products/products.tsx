import Header from "../header";
import { useState } from "react";
import Hero from "./hero";
import Cards from "./cards";
import Footer2 from "../footer2";
import Footer1 from "../footer";
import Mobilesidebar from "../mobilesidebar";

const Prod=()=>{
    const [showSidebar, setShowSidebar] = useState(false);
    const toggleSidebar = () => {
        setShowSidebar((prev) => !prev);
      };
    
    return (
    <div>
        <Header onHamburgerClick={toggleSidebar} />
        {showSidebar && <Mobilesidebar onClose={toggleSidebar} />}
        <div className="mb-10">
            <Hero/>
        </div>


        <div className="flex flex-col pb-20 mt-15 gap-10 items-center w-full">
          
          <Cards title="cem 1" productId="cem1" />


          
          <Cards title="cem 2" productId="cem2" />
          <Cards title="cem 3" productId="cem3" />
          <Cards title="cem 4" productId="cem4" />
          <Cards title="cem 5" productId="cem5" />
          <Cards title="cem 6" productId="cem6" />
        </div>

        <Footer2/>
        <Footer1/>


        </div>
    );
}
export default Prod; 