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
    <div className="w-full max-w-[582px] h-[300px] bg-[#F9F9F933] relative rounded-[32px] pt-[88px] px-[32px] pb-[32px] mx-auto flex flex-col gap-[3px]">
      {/* Image floats above but is contained within extended card */}
      <img
        src={img}
        alt="Technology"
        className="w-[128px]  h-[112px] absolute top-[-40px]  left-1/2 transform -translate-x-1/2"
        style={{
          filter: 'drop-shadow(0px 26px 36px rgba(0, 0, 0, 0.25))'
        }}
      />

      {/* Card content */}
      <div className="flex flex-col gap-4 w-[518px] h-[132px] text-start items-start">
        <h1 className="worksans font-normal text-white text-2xl opacity-85 leading-[140%] tracking-[0%]">
          {title}
        </h1>
        <p className="worksans text-sm opacity-85 leading-[160%] text-white">
          {para}
        </p>
      </div>
    </div>
  );
};



const SmallCard = ({ title, para, img }) => {
  return (
  <div className="w-full flex flex-col gap-[3px] max-w-[273px] h-[300px] bg-[#F9F9F933] relative rounded-[1rem] shadow-md  pt-[88px] px-[32px] pb-[32px]">
 
    {/* Floating image */}
    <img
      src={img}
      alt="Technology"
      className="w-[128px] h-[112px] absolute top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    />

    {/* Card content */}
    <div className="flex flex-col w-[209px] h-[156px] text-white gap-4 mt-4 text-center">
      <h1 className="worksans text-start font-bold text-lg leading-[140%]">
       {title}
      </h1>
      <p className="worksans text-start text-white text-sm leading-[160%] ">
       {para}
      </p>
    </div>

   </div>
  );
};

const scardmap = [
  {
    title: "Details about Cipher Energy's advanced cooling system",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    title: "How it enables maximum efficiency in India's varied climate conditions",
    para:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    title: "Technical diagrams showing cooling flow",
    para:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    title: "Performance data with and without cooling",
    para:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

const mcardmap = [
  {
    title: "Detailed breakdown of energy savings",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    title: "Economic impact for businesses: «Save up to 20% on electricity costs»",
    para:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    title: " Environmental impact: «Reduce your carbon footprint by up to 100 kg per MWh»",
    para:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    title: "Contribution to India’s net-zero goals",
    para:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];




const cardData = [
  {
    title: "Explanation of the technology",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in elit lacus. Phasellus ullamcorper a magna venenatis consectetur. Nam non ex molestie ante dapibus vehicula.",
  },
  {
    title: "Advantages over traditional radial flux motors commonly used in India",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in elit lacus. Phasellus ullamcorper a magna venenatis consectetur. Nam non ex molestie ante dapibus vehicula.",
  },
  {
    title: "Performance comparisons and efficiency metrics",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in elit lacus. Phasellus ullamcorper a magna venenatis consectetur. Nam non ex molestie ante dapibus vehicula.",
  },
  {
    title: "How the technology addresses India's energy loss challenges",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in elit lacus. Phasellus ullamcorper a magna venenatis consectetur. Nam non ex molestie ante dapibus vehicula."
  }]



// MAIN COMPONENT
const Technology1 = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar(prev => !prev);

  return (
  <div className="w-full overflow-x-hidden">
    <Header onHamburgerClick={toggleSidebar} />
    <div className="w-full bg-[linear-gradient(to_bottom,_#020919,_#000C28,_#000416,_#000820,_#00092E,_#000523,_#0944CF)] flex flex-col p-[120px] gap-[120px]">
      
      {showSidebar && <Mobilesidebar onClose={toggleSidebar} />}

      {/* Heading section */}
      <div className="w-[768px] mx-auto px-4 sm:px-6 lg:px-0  pb-20 flex flex-col gap-[14px] text-center">
        
          <span className="playfair font-title text-4xl lg:text-[64px] leading-tight tracking-[-0.02em] font-black italic bg-gradient-to-r from-white to-[#074FF7] bg-clip-text text-transparent">
            Technical Considerations
          </span>

   <h4 className="worksans text-white  font-light text-2xl leading-[1.4] tracking-normal text-center w-[768px] ">
  Cipher Energy has developed cutting-edge axial flux motors that significantly reduce the 10–20% energy waste in traditional motors.
</h4>
      
      </div>

      {/* Axial Flux Image Section */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] flex flex-col gap-[36px]">


   <div className="relative w-full ">
  <img
    src={axialflux}
    alt="Axial Flux Motor"
    className="w-full h-full object-cover"
  />
  <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-sans font-bold text-2xl lg:text-[64px] leading-tight z-10 px-4">
    Axial Flux Technology
  </h1>
</div>





<div className="w-full flex flex-col max-w-[1200px] h-[746px] pt-10 mx-auto sm:px-6 lg:px-0 gap-[76px] ">
  {/* First Row: First 2 cards */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-[36px]">
    {cardData.slice(0, 2).map((card, index) => (
      <div key={index} className="w-full">
        <Card title={card.title} para={card.para} img={fluximg} />
      </div>
    ))}
  </div>

  {/* Second Row: Next 2 cards */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-[36px]">
    {cardData.slice(2, 4).map((card, index) => (
      <div key={index + 2} className="w-full">
        <Card title={card.title} para={card.para} img={fluximg} />
      </div>
    ))}
  </div>
</div>


</div>

      {/* First Cards Grid Section */}
      

      {/* Cooling System Image Section */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] flex flex-col gap-[36px]">

       <div className="relative w-full ">
  <img
    src={coolsystem}
    alt="Axial Flux Motor"
    className="w-full h-full object-cover"
  />
  <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-sans font-bold text-2xl lg:text-[64px] leading-tight z-10 px-4">
    Cooling System
  </h1>
</div>

           <div className="w-full pt-10  max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-0 gap-[36px]">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[36px] place-items-center">
    {scardmap.map((card, index) => (
      <SmallCard key={index} title={card.title} para={card.para} img={inductor} />
    ))}
  </div>
  
</div>
      </div>

      {/* Small Cards Grid Section - Cooling */}
   


      {/* Efficiency Benefits Image Section */}
     

      {/* Small Cards Grid Section - Efficiency */}
      <div className="w-full  max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-0 mb-20">
           <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] flex flex-col gap-[36px]">

       <div className="relative w-full ">
  <img
    src={efficiency}
    alt="Axial Flux Motor"
    className="w-full h-full object-cover"
  />
  <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-sans font-bold text-2xl lg:text-[64px] leading-tight z-10 px-4">
    Efficient Benefits
  </h1>
</div>

           <div className="w-full pt-10 max-w-[1200px]  mx-auto px-4 sm:px-6 lg:px-0 gap-[36px]">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[36px] place-items-center">
    {mcardmap.map((card, index) => (
      <SmallCard key={index} title={card.title} para={card.para} img={inductor} />
    ))}
  </div>
  
</div>

 <div className="bg-[#F9F9F933] flex flex-col gap-[3px] mx-auto relative rounded-[2rem] shadow-md p-[32px]  w-full max-w-[586px] h-[280px] ">
            
            <div className="flex flex-col gap-[32px]">
              <h1 className="worksans text-white font-bold text-xl leading-[140%]">
                ROI calculator tool
              </h1>
              <p className="worksans text-white text-base leading-[160%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              </div>

            </div>
          

      </div>

        {/* ROI Calculator Tool */}
        
         
        



      </div>
    </div>
    
    <Footer1 />
  </div>
);
};

export default Technology1;