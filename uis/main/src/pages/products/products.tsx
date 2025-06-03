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
        <div className="">
            <Hero/>
        </div>


        <div className="flex flex-col pb-20 mt-15 gap-10 items-center w-full">
            <Cards title={"CEM 1"}/>
            <Cards title={"CEM 2"}/>
            <Cards title={"CEM 3"}/>
            <Cards title={"CEM 4"}/>
            <Cards title={"CEM 5"}/>
            <Cards title={"CEM 6"}/>
        </div>

        <Footer2/>
        <Footer1/>


        </div>
    );
}
export default Prod; 