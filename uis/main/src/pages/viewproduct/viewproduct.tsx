// Updated ViewProduct.tsx
import Header from "../header";
import { useRef, useState } from "react";
import Mobilesidebar from "../mobilesidebar";
import Footer2 from "../footer2";
import Footer1 from "../footer";
import Hero from "./hero";
import ParentComponent from "./timeline";
import { useParams } from "react-router-dom";
import expand from "../../assets/icons/expand.png"


  const cscards = [
    {
      title: "Electric Vehicles (EVs)",
      desc: "Enhancing the driving range, acceleration, and energy savings for two-wheelers, three-wheelers, and four-wheelers.",
      img: "https://via.placeholder.com/352x210"
    },
    {
      title: "Industrial Machinery",
      desc: "Boosting efficiency in manufacturing equipment, pumps, compressors, and conveyors while reducing energy overheads.",
      img: "https://via.placeholder.com/352x210"
    }
  ];

const productData = {
  cem1: {
    title: "CEM1",
    tagline: "Compact Powerhouse for India's EV Revolution",
    specs: [
      { title: "Peak Torque", value: "32.5kw" },
      { title: "Continuous Torque", value: "27 NM" },
      { title: "Max Motor Speed", value: "10,000 RPM" },
      { title: "Energy Efficiency", value: "95%" },
      { title: "Weight", value: "42 KG" },
      { title: "Peak Power", value: "130 KW" },
      { title: "Continuous Power", value: "65 KW" },
      { title: "Efficiency", value: "95%" },
      { title: "CO2 Reduction", value: "20%" },
    ]
  },
  cem2: {
    title: "CEM2",
    tagline: "Next-Gen Power for a Greener Future",
    specs: [
      { title: "Peak Torque", value: "35kw" },
      { title: "Continuous Torque", value: "30 NM" },
      { title: "Max Motor Speed", value: "12,000 RPM" },
      { title: "Energy Efficiency", value: "97%" },
      { title: "Weight", value: "40 KG" },
      { title: "Peak Power", value: "140 KW" },
      { title: "Continuous Power", value: "70 KW" },
      { title: "Efficiency", value: "97%" },
      { title: "CO2 Reduction", value: "25%" },
    ]
  },
  cem3: {
    title: "CEM3",
    tagline: "Next-Gen Power for a Greener Future",
    specs: [
      { title: "Peak Torque", value: "35kw" },
      { title: "Continuous Torque", value: "30 NM" },
      { title: "Max Motor Speed", value: "12,000 RPM" },
      { title: "Energy Efficiency", value: "97%" },
      { title: "Weight", value: "40 KG" },
      { title: "Peak Power", value: "140 KW" },
      { title: "Continuous Power", value: "70 KW" },
      { title: "Efficiency", value: "97%" },
      { title: "CO2 Reduction", value: "25%" },
    ]
  },
  cem4: {
    title: "CEM4",
    tagline: "Next-Gen Power for a Greener Future",
    specs: [
      { title: "Peak Torque", value: "35kw" },
      { title: "Continuous Torque", value: "30 NM" },
      { title: "Max Motor Speed", value: "12,000 RPM" },
      { title: "Energy Efficiency", value: "97%" },
      { title: "Weight", value: "40 KG" },
      { title: "Peak Power", value: "140 KW" },
      { title: "Continuous Power", value: "70 KW" },
      { title: "Efficiency", value: "97%" },
      { title: "CO2 Reduction", value: "25%" },
    ]
  },
  cem5: {
    title: "CEM5",
    tagline: "Next-Gen Power for a Greener Future",
    specs: [
      { title: "Peak Torque", value: "35kw" },
      { title: "Continuous Torque", value: "30 NM" },
      { title: "Max Motor Speed", value: "12,000 RPM" },
      { title: "Energy Efficiency", value: "97%" },
      { title: "Weight", value: "40 KG" },
      { title: "Peak Power", value: "140 KW" },
      { title: "Continuous Power", value: "70 KW" },
      { title: "Efficiency", value: "97%" },
      { title: "CO2 Reduction", value: "25%" },
    ]
  },cem6: {
    title: "CEM6",
    tagline: "Next-Gen Power for a Greener Future",
    specs: [
      { title: "Peak Torque", value: "35kw" },
      { title: "Continuous Torque", value: "30 NM" },
      { title: "Max Motor Speed", value: "12,000 RPM" },
      { title: "Energy Efficiency", value: "97%" },
      { title: "Weight", value: "40 KG" },
      { title: "Peak Power", value: "140 KW" },
      { title: "Continuous Power", value: "70 KW" },
      { title: "Efficiency", value: "97%" },
      { title: "CO2 Reduction", value: "25%" },
    ]
  }
};

const ViewProduct = () => {
  const { productId } = useParams();
  const [showSidebar, setShowSidebar] = useState(false);
  const configRef = useRef(null);

  const toggleSidebar = () => setShowSidebar((prev) => !prev);

  const product = productData[productId];

  if (!product) {
    return <div className="text-center text-red-500 py-20 text-2xl">Product not found.</div>;
  }

  const fiveCards = [
    {
      id: "sustainable",
      title: "Sustainable Technology",
      desc: "Built with recyclable materials, our motors support green manufacturing practices and long-term ecological goals.",
      img: "https://via.placeholder.com/352x210",
    },
    {
      id: "integration",
      title: "Seamless Integration",
      desc: "Easily integrate Cipher motors with existing systems using standard mounting and control interfaces.",
      img: "https://via.placeholder.com/352x210",
    },
    {
      id: "proven",
      title: "Industry Proven",
      desc: "Trusted by top-tier industrial partners across automotive, aerospace, and energy sectors worldwide.",
      img: "https://via.placeholder.com/352x210",
    },
    {
      id: "advanced",
      title: "Advanced Cooling System",
      desc: "Revolutionary thermal management technology ensures optimal performance even under extreme operating conditions.",
      img: "https://via.placeholder.com/352x210",
    },
    {
      id: "smart",
      title: "Smart Connectivity",
      desc: "IoT-enabled monitoring and predictive maintenance capabilities for maximum uptime and operational efficiency.",
      img: "https://via.placeholder.com/352x210",
    },
  ];

  return (
    <>
      <Header onHamburgerClick={toggleSidebar} />
      {showSidebar && <Mobilesidebar onClose={toggleSidebar} />}

      <div className="w-screen relative py-6 bg-gradient-to-b from-[#020919] to-[#074FF7]">
        <Hero title={product.title} tagline={product.tagline} />
      </div>

      <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#074FF7] to-[#052C88]">
        <div className=" w-[1000px]">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mt-12 sm:mt-16 lg:mt-20 mb-8 sm:mb-10 lg:mb-12">
              <em className="playfair bg-gradient-to-r from-white to-[#074FF7] bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-transparent font-extrabold italic playfair">
                Key Specifications
              </em>
              <p className="text-lg text-white mt-5 text-center">
                Why our motors are revolutionary?
              </p>
              <div className="flex justify-center mt-6 sm:mt-7 lg:mt-8">
                <button
                  onClick={() => configRef.current?.scrollIntoView({ behavior: "smooth" })}
                  className="text-white text-[16px] cursor-pointer font-bold w-[313px] h-[51px] px-5 rounded-sm bg-gradient-to-tr from-[#020919] via-[#074FF7] via-40% via-[#6384E9] to-[#020919] hover:opacity-30 transition hidden lg:block"
                >
                  CONFIGURE AND REQUEST QUOTE
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {product.specs.map((item, index) => (
              <div key={index} className="flex flex-col bg-[#F2F6FF] p-4 gap-6 border rounded-lg w-full">
                <h3 className="font-normal text-xs">{item.title}</h3>
                <p className="font-bold text-xl">{item.value}</p>
              </div>
            ))}
          </div>

          <div ref={configRef} className="w-full flex justify-center px-4 sm:px-6 lg:px-8 mt-6">
            <button
              onClick={() => configRef.current?.scrollIntoView({ behavior: "smooth" })}
              className="text-white text-[16px] cursor-pointer font-bold w-[313px] h-[51px] px-5 rounded-sm bg-gradient-to-tr from-[#020919] via-[#074FF7] via-40% via-[#6384E9] to-[#020919] hover:opacity-30 transition block lg:hidden"
            >
              CONFIGURE AND REQUEST QUOTE
            </button>
          </div>
        </div>
      </div>



         <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#052C88] to-[#031B51]">
        <div className="w-full max-w-[1200px]">
          <div className="mt-12 sm:mt-16 lg:mt-20 mb-8 sm:mb-10 lg:mb-12 flex flex-col items-center justify-center">
            <em className="playfair Display bg-gradient-to-r from-white to-[#074FF7] bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-transparent font-extrabold italic text-center">
Features and Benefits            </em>
          </div>
          
          {/* First row - 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 justify-items-center">
            {fiveCards.slice(0, 3).map((card, idx) => (
              <div key={idx} className="flex flex-col gap-2 w-full max-w-[312px] cursor-pointer hover:opacity-90 transition">
                <img
                  src={card.img}
                  alt={card.title}
                  className="rounded-2xl w-full h-[210px] bg-gradient-to-br from-white to-gray-400"
                />
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-body text-lg font-bold leading-[140%] text-white  bg-clip-text bg-gradient-to-r from-white to-[#074FF7]">
                    {card.title}
                  </h4>
                  <div className="cursor-pointer transform transition-transform duration-200 hover:scale-125">
                    <img src={expand} alt="" className="src" />
                  </div>
                </div>
                <p className="font-body text-white text-base font-normal leading-6">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Second row - 2 cards centered */}
          <div className="flex justify-center mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
              {fiveCards.slice(3, 5).map((card, idx) => (
                <div key={idx + 3} className="flex flex-col gap-2 w-full max-w-[312px] cursor-pointer hover:opacity-90 transition">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="rounded-2xl w-full h-[210px] bg-gradient-to-br from-white to-gray-400"
                  />
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-body text-lg font-bold leading-[140%] text-white text-transparent bg-clip-text bg-gradient-to-r from-white to-[#074FF7]">
                      {card.title}
                    </h4>
                    <div className="cursor-pointer transform transition-transform duration-200 hover:scale-125">
                      <img src={expand} alt="" className="src" />
                    </div>
                  </div>
                  <p className="font-body text-white text-base font-normal leading-6">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


       <div className="flex flex-col items-center px-4 mx-auto py-20 bg-gradient-to-b from-[#031B51] to-[#020919]">
         <em className="playfair Display bg-gradient-to-r from-white to-[#074FF7] bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-transparent font-extrabold italic text-center">
Applications section            </em>

        {cscards.map((card, idx) => (
          <div key={idx} className="flex flex-col lg:flex-row gap-5 mt-10">
            <div className="w-full lg:w-[482px] h-[210px] lg:h-[316px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#FFFFFF] to-[#999999]">
              <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
            </div>
            <div className="w-full lg:w-[482px] flex flex-col gap-3">
              <h1 className="font-bold text-lg bg-gradient-to-tr from-[white] text-transparent bg-clip-text">
                {card.title}
              </h1>
              <p className="font-body text-base font-normal text-white leading-6">{card.desc}</p>
              <button className="hidden lg:flex text-sm h-[36px] w-[100px] font-semibold items-center justify-center rounded-[8px] text-transparent bg-clip-text bg-gradient-to-tr from-[#020919] via-[#074FF7] to-[#020919] relative before:absolute before:inset-0 before:rounded-[8px] before:p-[2px] before:bg-gradient-to-b before:from-[#020919] before:via-[#074FF7] before:to-[#020919] before:-z-10 after:absolute after:inset-[2px] after:rounded-[6px] after:bg-white after:-z-10">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Features and Benefits and Application section here if needed (reuse previous logic) */}

   

      <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#020919] to-[#001833]">
        <div className="w-full max-w-[1200px]">
          <div className="mt-12 sm:mt-16 lg:mt-20 mb-8 sm:mb-10 lg:mb-12 flex flex-col items-center justify-center">
            <em className="playfair Display bg-gradient-to-r from-white to-[#074FF7] bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-transparent font-extrabold italic text-center">
               Configuration Options
            </em>
          </div>

          <div ref={configRef} className="w-full p-8">
            <ParentComponent />
          </div>
        </div>
      </div>

      <div className="">
        <Footer2 />
      </div>
      <Footer1 />
    </>
  );
};

export default ViewProduct;