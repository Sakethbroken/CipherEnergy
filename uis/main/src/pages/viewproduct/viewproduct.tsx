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
import { Link } from "react-router-dom";
import TestimonialCarousel from "../CipherEnergy/uis/main/src/pages/viewproduct/TestimonialCarousel";
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
  },
  cem6: {
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
    <div className="w-full overflow-x-hidden">
      <Header onHamburgerClick={toggleSidebar} />
      {showSidebar && <Mobilesidebar onClose={toggleSidebar} />}

      {/* Hero Section */}
      {/*<div className="w-full relative py-6 bg-gradient-to-b from-[#020919] to-[#074FF7]">
        <Hero title={product.title} tagline={product.tagline} />
      </div>*/}
      <div className="w-full relative py-6 bg-gradient-to-b from-[#020919] to-[#074FF7]">
        <Hero title={product.title} tagline={product.tagline} />
        <TestimonialCarousel/>
      </div>
      

      {/* Key Specifications Section */}
      <div className="w-full bg-gradient-to-b from-[#074FF7] to-[#052C88]">
        <div className="w-full max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-0 py-16">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <em className="playfair bg-gradient-to-r from-white to-[#074FF7] bg-clip-text text-4xl lg:text-[64px] text-transparent font-extrabold italic">
              Key Specifications
            </em>
            <p className="text-lg text-white mt-6 text-center">
              Why our motors are revolutionary?
            </p>
            <div className="hidden lg:flex justify-center mt-8">
                <Link
            to={'/'}
            className="holo-cards flex justify-center items-center text-sm font-semibold w-full sm:w-auto px-6 h-[40px] rounded-md border border-white transition overflow-hidden whitespace-nowrap text-transparent bg-clip-text"
          >
              Configure and Request Quote 
          </Link>
            </div>
          </div>

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
  {product.specs.map((item, index) => (
    <div
      key={index}
      className={`flex flex-col p-6 gap-4  rounded-lg w-full ${
        index % 2 === 0 ? 'bg-[#02091959]' : 'bg-[#02091980]'
      }`}
    >
      <h3 className="font-normal text-sm text-gray-300">{item.title}</h3>
      <p className="font-bold text-2xl text-white">{item.value}</p>
    </div>
  ))}
</div>


          <div className="w-full flex justify-center mt-8 lg:hidden">
            <button
              onClick={() => configRef.current?.scrollIntoView({ behavior: "smooth" })}
              className="holo-cards text-white text-base font-bold w-[313px] h-[51px] px-5 rounded-sm bg-gradient-to-tr   hover:opacity-30 transition"
            >
              CONFIGURE AND REQUEST QUOTE
            </button>
          </div>
        </div>
      </div>

      {/* Features and Benefits Section */}
      <div className="w-full bg-gradient-to-b from-[#052C88] to-[#031B51]">
        <div className="w-full max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-0 py-16">
          <div className="flex flex-col items-center justify-center mb-12">
            <em className="playfair bg-gradient-to-r from-white to-[#074FF7] bg-clip-text text-4xl lg:text-[64px] text-transparent font-extrabold italic text-center">
              Features and Benefits
            </em>
          </div>
          
          {/* First row - 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mb-8">
            {fiveCards.slice(0, 3).map((card, idx) => (
              <div key={idx} className="flex flex-col gap-4 w-full max-w-[300px] cursor-pointer hover:opacity-90 transition">
                <img
                  src={card.img}
                  alt={card.title}
                  className="rounded-2xl w-full h-[200px] bg-gradient-to-br from-white to-gray-400 object-cover"
                />
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-body text-lg font-bold leading-[140%] text-white">
                    {card.title}
                  </h4>
                  <div className="cursor-pointer transform transition-transform duration-200 hover:scale-125">
                    <img src={expand} alt="" className="w-6 h-6" />
                  </div>
                </div>
                <p className="font-body text-white text-base font-normal leading-6">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Second row - 2 cards centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center max-w-[620px]">
              {fiveCards.slice(3, 5).map((card, idx) => (
                <div key={idx + 3} className="flex flex-col gap-4 w-full max-w-[300px] cursor-pointer hover:opacity-90 transition">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="rounded-2xl w-full h-[200px] bg-gradient-to-br from-white to-gray-400 object-cover"
                  />
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-body text-lg font-bold leading-[140%] text-white">
                      {card.title}
                    </h4>
                    <div className="cursor-pointer transform transition-transform duration-200 hover:scale-125">
                      <img src={expand} alt="" className="w-6 h-6" />
                    </div>
                  </div>
                  <p className="font-body text-white text-base font-normal leading-6">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Applications Section */}
      <div className="w-full bg-gradient-to-b from-[#031B51] to-[#020919]">
        <div className="w-full max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-0 py-16">
          <div className="flex flex-col items-center justify-center mb-12">
            <em className="playfair bg-gradient-to-r from-white to-[#074FF7] bg-clip-text text-4xl lg:text-[64px] text-transparent font-extrabold italic text-center">
              Applications Section
            </em>
          </div>

          <div className="space-y-12">
            {cscards.map((card, idx) => (
              <div key={idx} className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="w-full lg:w-1/2 h-[250px] lg:h-[300px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#FFFFFF] to-[#999999]">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                  <h1 className="font-bold text-xl text-white">
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
        </div>
      </div>

      {/* Configuration Options Section */}
      <div className="w-full bg-gradient-to-b from-[#020919] to-[#001833]">
        <div className="w-full max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-0 py-16">
          <div className="flex flex-col items-center justify-center mb-12">
            <em className=" playfair bg-gradient-to-r from-white to-[#074FF7] bg-clip-text text-4xl lg:text-[64px] text-transparent font-extrabold italic text-center">
              Configuration Options
            </em>
          </div>

          <div ref={configRef} className="w-full">
            <ParentComponent />
          </div>
        </div>
      </div>

      <Footer2 />
      <Footer1 />
    </div>
  );
};

export default ViewProduct;