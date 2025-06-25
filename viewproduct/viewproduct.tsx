// Updated ViewProduct.tsx
import Header from "../header";
import { useRef, useState } from "react";
import Mobilesidebar from "../mobilesidebar";
import Footer2 from "../footer2";
import Footer1 from "../footer";
import Hero from "./hero";
import ParentComponent from "./timeline";
import { useParams } from "react-router-dom";

const productData = {
  cem1: {
    title: "CEM1",
    tagline: "Compact Powerhouse for India’s EV Revolution",
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

  return (
    <>
      <Header onHamburgerClick={toggleSidebar} />
      {showSidebar && <Mobilesidebar onClose={toggleSidebar} />}

      <div className="w-screen relative py-6 bg-gradient-to-b from-white to-[#074FF7]">
        <Hero title={product.title} tagline={product.tagline} />
      </div>

      <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1200px]">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mt-12 sm:mt-16 lg:mt-20 mb-8 sm:mb-10 lg:mb-12">
              <em className="playfair bg-gradient-to-r from-black to-[#074FF7] bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-transparent font-extrabold italic playfair">
                Key Specifications
              </em>
              <p className="text-lg text-black mt-5 text-center">
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

      {/* Add Features and Benefits and Application section here if needed (reuse previous logic) */}

      <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1200px]">
          <div className="mt-12 sm:mt-16 lg:mt-20 mb-8 sm:mb-10 lg:mb-12 flex flex-col items-center justify-center">
            <em className="playfair Display bg-gradient-to-r from-black to-[#074FF7] bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-transparent font-extrabold italic text-center">
              Application Section
            </em>
          </div>

          <div ref={configRef} className="w-full p-8">
            <ParentComponent />
          </div>
        </div>
      </div>

      <div className="mt-15">
        <Footer2 />
      </div>
      <Footer1 />
    </>
  );
};

export default ViewProduct;
