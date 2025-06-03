import { useState } from "react";
import Header from "../header";
import Mobilesidebar from "../mobilesidebar";
import axialflux from "../../assets/images/axialflux.png";
import fluximg from "../../ASSETS/images/fluximg.png";
import coolsystem from "../../ASSETS/images/coolingsystem.png";
import inductor from "../../ASSETS/images/inductor.png";
import efficiency from "../../ASSETS/images/efficiency.png";
import Footer1 from "../footer";

// CARD COMPONENT

const Card = ({ title, para, img }) => {
  return (
    <div className="w-full max-w-[352px] md:max-w-[552px] h-auto min-h-[320px] bg-[#F9F9F9] relative rounded-md shadow-md px-4 pt-20 pb-6 mx-auto">
      {/* Floating image */}
      <img
        src={img}
        alt="Technology"
        className="w-[112px] h-[96px] absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />

      {/* Card content */}
      <div className="flex flex-col gap-4 mt-4 text-center">
        <h1 className="font-body font-semibold text-lg leading-[140%]">
          {title}
        </h1>
        <p className="font-body text-sm leading-[160%] text-gray-700">
          {para}
        </p>
      </div>
    </div>
  );
};


const SmallCard = ({ title, para, img }) => {
  return (
    <div className="w-full max-w-[320px] bg-[#F9F9F9] relative rounded-md shadow-md px-4 pt-20 pb-6">
      {/* Floating image */}
      <img
        src={img}
        alt="Technology"
        className="w-[112px] h-[96px] absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />

      {/* Card content */}
      <div className="flex flex-col gap-4 mt-4 text-center">
        <h1 className="font-body font-semibold text-lg leading-[140%]">
          {title}
        </h1>
        <p className="font-body text-sm leading-[160%] text-gray-700">
          {para}
        </p>
      </div>
    </div>
  );
};



// MAIN COMPONENT
const Technology1 = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar(prev => !prev);

  return (
    <>
    <div className="w-full">
      <Header onHamburgerClick={toggleSidebar} />
      {showSidebar && <Mobilesidebar onClose={toggleSidebar} />}

      {/* Heading section */}
      <div className="w-full max-w-[1200px] px-4 mx-auto mt-10">
        <div className="flex flex-col gap-3 my-30 text-center">
          <em className="playfair font-title text-[32px] md:text-[64px] leading-tight tracking-[-2%] font-black italic bg-gradient-to-r from-black to-[#074FF7] bg-clip-text text-transparent">
            Technical Considerations
          </em>
          <p className="mt-5 font-body text-sm md:text-lg font-normal leading-6">
            Cipher Energy has developed cutting-edge axial flux motors that significantly reduce the 10–20% energy
            waste in traditional motors.
          </p>
        </div>
      </div>

      {/* Axial Flux Image Section */}
      <div className="relative w-full mx-auto mt-12">
        <img src={axialflux} alt="Axial Flux Motor" className="w-full h-auto" />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-body font-bold text-[32px] md:text-[64px] leading-tight z-10">
          Axial Flux Technology
        </h1>
      </div>

<div className="max-w-[1200px] mx-auto mt-20 px-4">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 justify-center">
    <div className="flex justify-center">
      <div className="w-full max-w-[500px] min-w-[300px]">
        <Card
          title="Explanation of the technology"
          para="This card explains how axial flux motors improve energy efficiency by minimizing waste and maximizing torque output."
          img={fluximg}
        />
      </div>
    </div>
    <div className="flex justify-center lg:mt-0 md:mt-16">
      <div className="w-full max-w-[500px] min-w-[300px]">
        <Card
          title="Core Structure"
          para="A breakdown of the rotor-stator assembly, showing how the axial alignment leads to compact and powerful design."
          img={fluximg}
        />
      </div>
    </div>
    <div className="flex justify-center">
      <div className="w-full max-w-[500px] min-w-[300px]">
        <Card
          title="Thermal Management"
          para="How our custom cooling system maintains optimal operating temperature to ensure longevity and performance."
          img={fluximg}
        />
      </div>
    </div>
    <div className="flex justify-center lg:mt-0 md:mt-16">
      <div className="w-full max-w-[500px] min-w-[300px]">
        <Card
          title="Application Scope"
          para="Discover real-world use cases of our axial flux motors across EVs, drones, and industrial automation."
          img={fluximg}
        />
      </div>
    </div>
  </div>
</div>

      {/* Cooling System Image Section */}
      <div className="relative w-full mx-auto mt-12">
        <img src={coolsystem} alt="Cooling System" className="w-full h-auto" />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-body font-bold text-[32px] md:text-[64px] leading-tight z-10">
          Cooling system
        </h1>
      </div>


       <div className="max-w-[1200px] mx-auto mt-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center">
          <SmallCard
            title="Explanation of the technology"
            para="This card explains how axial flux motors improve energy efficiency by minimizing waste and maximizing torque output."
            img={inductor}
          />
          <SmallCard
            title="Core Structure"
            para="A breakdown of the rotor-stator assembly, showing how the axial alignment leads to compact and powerful design."
            img={inductor}
          />
          <SmallCard
            title="Thermal Management"
            para="How our custom cooling system maintains optimal operating temperature to ensure longevity and performance."
            img={inductor}
          />
          <SmallCard
            title="Application Scope"
            para="Discover real-world use cases of our axial flux motors across EVs, drones, and industrial automation."
            img={inductor}
          />
        </div>
      </div>


       <div className="relative w-full mx-auto mt-12">
        <img src={efficiency} alt="Cooling System" className="w-full h-auto" />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-body font-bold text-[32px] md:text-[64px] leading-tight z-10">
            Efficiency Benefits
        </h1>
      </div>


      <div className="max-w-[1200px] mx-auto mt-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center">
          <SmallCard
            title="Explanation of the technology"
            para="This card explains how axial flux motors improve energy efficiency by minimizing waste and maximizing torque output."
            img={inductor}
          />
          <SmallCard
            title="Core Structure"
            para="A breakdown of the rotor-stator assembly, showing how the axial alignment leads to compact and powerful design."
            img={inductor}
          />
          <SmallCard
            title="Thermal Management"
            para="How our custom cooling system maintains optimal operating temperature to ensure longevity and performance."
            img={inductor}
          />
          <SmallCard
            title="Application Scope"
            para="Discover real-world use cases of our axial flux motors across EVs, drones, and industrial automation."
            img={inductor}
          />
        </div>

        <div className="flex justify-center mb-15">
          <div className="bg-[#F9F9F9] relative mt-10 mb-5 rounded-md shadow-md px-4 pt-20 pb-6 w-[352px] h-[320px] sm:w-[352px] sm:h-[320px] md:w-[586px] md:h-[250px]">
            <div className="flex flex-col gap-4 text-center">
              <h1 className="font-body font-semibold text-lg leading-[140%]">
                ROI calculator tool
              </h1>
              <p className="font-body text-sm leading-[160%] text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
        </div>

      </div>

     

    </div>
      <Footer1/>
      </>
    
   

  );
};

export default Technology1;