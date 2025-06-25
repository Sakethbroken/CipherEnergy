import { useState } from "react";
import Header from "../header";
import Mobilesidebar from "../mobilesidebar";
import axialflux from "../../assets/images/axialflux.png";
import fluximg from "../../assets/images/fluximg.png";
import coolsystem from "../../assets/images/coolingsystem.png";
import inductor from "../../assets/images/inductor.png";
import efficiency from "../../assets/images/efficiency.png";
import Footer1 from "../footer";

// CARD COMPONENT

const Card = ({ title, para, img }) => {
  return (
    <div className="w-full max-w-[352px] md:max-w-[552px] h-auto min-h-[320px] bg-[#F9F9F9] relative rounded-[2rem] px-4 pt-20 pb-6 mx-auto">
      {/* Floating image */}
      <img
        src={img}
        alt="Technology"
        className="w-[112px] h-[96px] absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />

      {/* Card content */}
      <div className="flex flex-col gap-4 mt-4 text-start items-start">
        <h1 className="body font-normal text-2xl opacity-85 leading-[140%] tracking-[0%]">
          {title}
        </h1>
        <p className="font-body text-sm opacity-85 leading-[160%] text-gray-700">
          {para}
        </p>
      </div>
    </div>
  );
};



const SmallCard = ({ title, para, img }) => {
  return (
   <div className="w-full max-w-[273px] bg-[#F9F9F9] relative rounded-md shadow-md px-4 pt-20 pb-6">

      {/* Floating image */}
      <img
        src={img}
        alt="Technology"
        className="w-[112px] h-[96px] absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />

      {/* Card content */}
      <div className="flex flex-col w-[209px] gap-4 mt-4 text-center">
        <h1 className="font-body text-start  font-bold text-lg leading-[140%]">
          {title}
        </h1>
        <p className="font-body text-start text-sm leading-[160%] text-gray-700">
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

      <div className=""></div>

      {/* Heading section */}
   <div className="w-full px-4 mx-auto pt-20 pb-20 mt-40">
  <div className="flex flex-col gap-3 text-center">
    <span className="playfair font-title text-[32px] md:text-[64px] w-[768px] mx-auto leading-tight tracking-[-0.02em] font-black italic bg-gradient-to-r from-black to-[#074FF7] bg-clip-text text-transparent">
  Technical Considerations
</span>

 <p className="mt-5 font-body font-normal text-2xl leading-[140%] tracking-normal text-center w-[768px] mx-auto">
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
  <div className="grid grid-cols-1 lg:grid-cols-2   gap-15 justify-center">
    <div className="flex justify-center ">
      <div className="w-full max-w-[580px]  min-w-[320px]">
        <Card
          title="Explanation of the technology"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in elit lacus. Phasellus ullamcorper a magna venenatis consectetur. Nam non ex molestie ante dapibus vehicula."
          img={fluximg}
        />
      </div>
    </div>
    <div className="flex justify-center lg:mt-0 md:mt-16">
      <div className="w-full max-w-[580px] min-w-[320px]">
        <Card
          title="Advantages over traditional radial flux motors commonly used in India"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in elit lacus. Phasellus ullamcorper a magna venenatis consectetur. Nam non ex molestie ante dapibus vehicula."
          img={fluximg}
        />
      </div>
    </div>
    <div className="flex justify-center">
      <div className="w-full max-w-[580px] min-w-[320px]">
        <Card
          title="Performance comparisons and efficiency metrics"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in elit lacus. Phasellus ullamcorper a magna venenatis consectetur. Nam non ex molestie ante dapibus vehicula."
          img={fluximg}
        />
      </div>
    </div>
    <div className="flex justify-center lg:mt-0 md:mt-16">
      <div className="w-full max-w-[580px] min-w-[320px]">
        <Card
          title="How the technology addresses India’s energy loss challenges"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in elit lacus. Phasellus ullamcorper a magna venenatis consectetur. Nam non ex molestie ante dapibus vehicula."
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
            title="Details about Cipher Energy’s advanced cooling system"
            para="This card explains how axial flux motors improve energy efficiency by minimizing waste and maximizing torque output."
            img={inductor}
          />
          <SmallCard
            title="How it enables maximum efficiency in India’s varied climate conditions"
            para="A breakdown of the rotor-stator assembly, showing how the axial alignment leads to compact and powerful design."
            img={inductor}
          />
          <SmallCard
            title="Technical diagrams showing cooling flow"
            para="How our custom cooling system maintains optimal operating temperature to ensure longevity and performance."
            img={inductor}
          />
          <SmallCard
            title="Performance data with and without cooling"
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
            title="Detailed breakdown of energy savings"
            para="This card explains how axial flux motors improve energy efficiency by minimizing waste and maximizing torque output."
            img={inductor}
          />
          <SmallCard
            title="Economic impact for businesses: «Save up to 20% on electricity costs»"
            para="A breakdown of the rotor-stator assembly, showing how the axial "
            img={inductor}
          />
          <SmallCard
            title="Environmental impact: «Reduce your carbon footprint by up to 100 kg per MWh»"
            para="How our custom cooling system maintains optimal ."
            img={inductor}
          />
          <SmallCard
            title="Contribution to India’s net-zero goals"
            para="Discover real-world use cases of our axial flux motors across EVs, drones, and industrial automation."
            img={inductor}
          />
        </div>

        <div className="flex justify-center mb-15">
          <div className="bg-[#F9F9F9] relative mt-10 mb-5 rounded-md shadow-md px-4 pt-20 pb-6 max-w-[506px] h-[320px] sm:w-[352px] sm:h-[320px] md:w-[586px] md:h-[250px]">
            <div className="flex flex-col gap-4 text-center">
              <h1 className="font-body  font-bold text-lg leading-[140%]">
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