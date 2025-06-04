import Header from "../header"
import { useState } from "react";
import Mobilesidebar from "../mobilesidebar";
import biggear from "../../assets/images/biggear.png";
import Footer2 from "../footer2";
import Footer1 from "../footer";
import Hero from "./hero";
import Htimeline from "./timeline";

import ParentComponent from "./timeline";

const ViewProduct = () => {
  const [step, setStep] = useState(1);
  const [showSidebar, setShowSidebar] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
    
  // Toggle the visibility of the sidebar
  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <>
      <Header onHamburgerClick={toggleSidebar}/>
      {showSidebar && <Mobilesidebar onClose={toggleSidebar} />}

      <div className="w-screen relative py-6 bg-gradient-to-b from-white to-[#074FF7]">
        <Hero/>
      </div>

      {/* Key Specifications Section - Consistent Container */}
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
                  className="text-white text-[16px] cursor-pointer font-bold w-[313px] h-[51px] px-5 rounded-sm
                    bg-gradient-to-tr from-[#020919] via-[#074FF7] via-40% via-[#6384E9] to-[#020919]
                    hover:opacity-30 transition hidden lg:block"
                >
                  CONFIGURE AND REQUEST QUOTE
                </button>
              </div>
            </div>
          </div>

          {/* Specifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            <div className="flex flex-col bg-[#F2F6FF] p-4 gap-6 border rounded-lg w-full">
              <h3 className="font-normal text-xs">Peak Torque</h3>
              <p className="font-bold text-xl">32.5kw</p>
            </div>
            <div className="flex flex-col bg-[#F2F6FF] p-4 gap-6 border rounded-lg w-full">
              <h3 className="font-normal text-xs">Continuous Torque</h3>
              <p className="font-bold text-xl">27 NM</p>
            </div>
            <div className="flex flex-col bg-[#F2F6FF] p-4 gap-6 border rounded-lg w-full">
              <h3 className="font-normal text-xs">Max Motor Speed</h3>
              <p className="font-bold text-xl">10,000 RPM</p>
            </div>
            <div className="flex flex-col bg-[#F2F6FF] p-4 gap-6 border rounded-lg w-full">
              <h3 className="font-normal text-xs">Energy Efficiency</h3>
              <p className="font-bold text-xl">95%</p>
            </div>
            <div className="flex flex-col bg-[#F2F6FF] p-4 gap-6 border rounded-lg w-full">
              <h3 className="font-normal text-xs">Weight</h3>
              <p className="font-bold text-xl">42 KG</p>
            </div>
            <div className="flex flex-col bg-[#F2F6FF] p-4 gap-6 border rounded-lg w-full">
              <h3 className="font-normal text-xs">Peak Power</h3>
              <p className="font-bold text-xl">130 KW</p>
            </div>
            <div className="flex flex-col bg-[#F2F6FF] p-4 gap-6 border rounded-lg w-full">
              <h3 className="font-normal text-xs">Continuous Power</h3>
              <p className="font-bold text-xl">65 KW</p>
            </div>
            <div className="flex flex-col bg-[#F2F6FF] p-4 gap-6 border rounded-lg w-full">
              <h3 className="font-normal text-xs">Efficiency</h3>
              <p className="font-bold text-xl">95%</p>
            </div>
            <div className="flex flex-col bg-[#F2F6FF] p-4 gap-6 border rounded-lg w-full">
              <h3 className="font-normal text-xs">CO2 Reduction</h3>
              <p className="font-bold text-xl">20%</p>
            </div>
          </div>

          <div className="flex justify-center mt-6 sm:mt-7 lg:mt-8">
            <button
              className="text-white text-[16px] cursor-pointer font-bold w-[313px] h-[51px] px-5 rounded-sm
                bg-gradient-to-tr from-[#020919] via-[#074FF7] via-40% via-[#6384E9] to-[#020919]
                hover:opacity-30 transition block lg:hidden"
            >
              CONFIGURE AND REQUEST QUOTE
            </button>
          </div>
        </div>
      </div>

      {/* Features and Benefits Section - Consistent Container */}
      <div className="w-full flex justify-center pb-6 sm:pb-8 lg:pb-10 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1200px]">
          <div className="mt-12 sm:mt-16 lg:mt-20 mb-8 sm:mb-10 lg:mb-12 flex flex-col items-center justify-center">
            <em className="playfair bg-gradient-to-r from-black to-[#074FF7] bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-transparent font-extrabold italic text-center">
              Features and Benefits
            </em>
            <div className="flex justify-center mt-6 sm:mt-7 lg:mt-8">
              <button
                className="text-white cursor-pointer text-[16px] font-bold w-[313px] h-[51px] px-5 rounded-sm
                  bg-gradient-to-tr from-[#020919] via-[#074FF7] via-40% via-[#6384E9] to-[#020919]
                  hover:opacity-30 transition hidden lg:block"
              >
                CONFIGURE AND REQUEST QUOTE
              </button>
            </div>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            <div className="w-full">
              <img
                src="https://via.placeholder.com/313x210"
                alt="placeholder"
                className="rounded-2xl w-full h-[210px] object-cover"
                style={{
                  background: 'linear-gradient(to bottom right, #FFFFFF, #999999)'
                }}
              />
              <h4 className="font-body text-lg font-bold leading-[140%] mt-2">Unmatched Efficiency</h4>
              <p className="font-body text-base font-normal leading-6">
                Cipher's axial flux motors reduce energy losses by up to 20%, helping industries cut operational costs and achieve sustainability goals.
              </p>
            </div>

            <div className="w-full">
              <img
                src="https://via.placeholder.com/313x210"
                alt="placeholder"
                className="rounded-2xl w-full h-[210px] object-cover"
                style={{
                  background: 'linear-gradient(to bottom right, #FFFFFF, #999999)'
                }}
              />
              <h4 className="font-body text-lg font-bold leading-[140%] mt-2">Compact and Lightweight</h4>
              <p className="font-body text-base font-normal leading-6">
                Our motors deliver maximum torque in a smaller, lighter form factor — ideal for applications where every kilogram matters.
              </p>
            </div>

            <div className="w-full">
              <img
                src="https://via.placeholder.com/313x210"
                alt="placeholder"
                className="rounded-2xl w-full h-[210px] object-cover"
                style={{
                  background: 'linear-gradient(to bottom right, #FFFFFF, #999999)'
                }}
              />
              <h4 className="font-body text-lg font-bold leading-[140%] mt-2">Superior Power Density</h4>
              <p className="font-body text-base font-normal leading-6">
                Designed to provide the highest continuous power-to-weight ratio, enabling better performance across electric vehicles, aerospace, and industrial machinery.
              </p>
            </div>

            <div className="w-full">
              <img
                src="https://via.placeholder.com/313x210"
                alt="placeholder"
                className="rounded-2xl w-full h-[210px] object-cover"
                style={{
                  background: 'linear-gradient(to bottom right, #FFFFFF, #999999)'
                }}
              />
              <h4 className="font-body text-lg font-bold leading-[140%] mt-2">Advanced Cooling Systems</h4>
              <p className="font-body text-base font-normal leading-6">
                Integrated thermal management ensures optimal motor performance even in India's toughest environmental conditions.
              </p>
            </div>

            <div className="w-full">
              <img
                src="https://via.placeholder.com/313x210"
                alt="placeholder"
                className="rounded-2xl w-full h-[210px] object-cover"
                style={{
                  background: 'linear-gradient(to bottom right, #FFFFFF, #999999)'
                }}
              />
              <h4 className="font-body text-lg font-bold leading-[140%] mt-2">Lower Total Cost of Ownership</h4>
              <p className="font-body text-base font-normal leading-6">
                With higher efficiency, minimal maintenance requirements, and longer service life, Cipher motors deliver significant cost savings over time.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-6 sm:mt-7 lg:mt-8">
            <button
              className="text-white text-[16px] font-bold w-[313px] h-[51px] px-5 rounded-sm
                bg-gradient-to-tr from-[#020919] via-[#074FF7] via-40% via-[#6384E9] to-[#020919]
                hover:opacity-30 transition block lg:hidden"
            >
              CONFIGURE AND REQUEST QUOTE
            </button>
          </div>
        </div>
      </div>

      {/* Application Section - Consistent Container */}
      <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1200px]">
          <div className="mt-12 sm:mt-16 lg:mt-20 mb-8 sm:mb-10 lg:mb-12 flex flex-col items-center justify-center">
            <em className="playfair bg-gradient-to-r from-black to-[#074FF7] bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-transparent font-extrabold italic text-center">
              Application Section
            </em>
          </div>

          {/* Application cards */}
          <div className="flex flex-col gap-10 w-full">
            {/* First Block */}
            <div className="flex flex-col lg:flex-row gap-6">
              <img
                src=""
                alt=""
                className="w-full lg:w-1/2 rounded-2xl h-[250px] lg:h-[316px] object-cover"
                style={{
                  background: 'linear-gradient(to bottom right, #FFFFFF, #999999)'
                }}
              />

              <div className="flex flex-col justify-center gap-3 w-full lg:w-1/2">
                <h1 className="font-body text-lg font-bold leading-[140%]">Electric Vehicles (EVs)</h1>
                <p className="font-body text-base font-normal leading-6">
                  Enhancing the driving range, acceleration, and energy savings for two-wheelers, three-wheelers, and four-wheelers.
                </p>
                <button className="text-sm h-[40px] font-semibold px-3 rounded-md border border-transparent hover:opacity-30
                  [border-image:linear-gradient(to_bottom,#020919,#074FF7,#6384E9,#074FF7,#020919)_1]
                  [border-image-slice:1] text-transparent bg-clip-text
                  bg-gradient-to-tr cursor-pointer from-[#020919] via-[#074FF7] via-[#6384E9] via-[#074FF7] to-[#020919]
                  w-fit">
                  Learn more
                </button>
              </div>
            </div>

            {/* Second Block */}
            <div className="flex flex-col lg:flex-row gap-6">
              <img
                src=""
                alt=""
                className="w-full lg:w-1/2 rounded-2xl h-[250px] lg:h-[316px] object-cover"
                style={{
                  background: 'linear-gradient(to bottom right, #FFFFFF, #999999)'
                }}
              />

              <div className="flex flex-col justify-center gap-3 w-full lg:w-1/2">
                <h1 className="font-body text-lg font-bold leading-[140%]">Industrial Machinery</h1>
                <p className="font-body text-base font-normal leading-6">
                  Boosting efficiency in manufacturing equipment, pumps, compressors, and conveyors while reducing energy overheads.
                </p>
                <button className="text-sm h-[40px] font-semibold px-3 rounded-md border border-transparent hover:opacity-30
                  [border-image:linear-gradient(to_bottom,#020919,#074FF7,#6384E9,#074FF7,#020919)_1]
                  [border-image-slice:1] text-transparent bg-clip-text
                  bg-gradient-to-tr from-[#020919] via-[#074FF7] via-[#6384E9] via-[#074FF7] to-[#020919]
                  w-fit">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Configuration Options Section - Consistent Container */}
      <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1200px]">
          <div className="mt-12 sm:mt-16 lg:mt-20 mb-8 sm:mb-10 lg:mb-12 flex flex-col items-center justify-center">
            <em className="playfair bg-gradient-to-r from-black to-[#074FF7] bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-transparent font-extrabold italic text-center">
              Configuration Options
            </em>
          </div>
          
          <div className="w-full p-8">
            <ParentComponent/>
          </div>
        </div>
      </div>

      <div className="mt-15">
        <Footer2/>
      </div>

      <Footer1/>
    </>
  )
}

export default ViewProduct