/** @format */
import React from 'react';
import leafbg from "../assets/images/leafbg.png";

interface Footer2Props {
  hideMissionSection?: boolean;
}

const Footer2: React.FC<Footer2Props> = ({ hideMissionSection = false }) => {
  return (
    <>
      <div className="relative w-full h-[700px]">
        {/* Background Image */}
        <img
          src={leafbg}
          alt="Footer background"
          className="w-full h-full object-cover bg-gradient-to-tr from-[#00120B] to-[#ffffff]"
        />

        {/* Overlay Content */}
        <div className="
          absolute inset-0 
          flex flex-col justify-between items-center text-center 
          lg:flex-row lg:items-end lg:justify-between lg:text-left
          max-w-[1340px] mx-auto px-6 py-20
        ">
          <h1 className="
            text-white text-xl sm:text-2xl md:text-3xl 
            leading-snug max-w-[300px] 
            lg:mb-0
          ">
            Start Saving Millions <br /> with Cipher Energy
          </h1>

          <button className="text-white text-sm cursor-pointer font-semibold w-[180px] h-[40px] rounded-sm
            bg-gradient-to-tr from-[#020919] via-[#074FF7] via-40% via-[#6384E9] to-[#020919] 
             transition mt-6 lg:mt-0
          ">
            Request Demo
          </button>
        </div>
      </div>

      {!hideMissionSection && (
        <div className="relative w-full flex flex-col h-[750px] items-center justify-center text-center px-4 overflow-hidden">
          {/* Reversed, Zoomed-in Radial Gradient Background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_120%_at_50%_100%,_#074FF7_0%,_#061435_50%,_#061435_100%)]"></div>

          {/* Content */}
          <div className="relative z-10 mt-8 text-white flex flex-col items-center">
            <span className="playfair text-6xl sm:text-7xl lg:text-8xl text-gray-500 leading-none mb-2">"</span>
            <h2 className="playfair text-3xl sm:text-4xl lg:text-5xl text-gray-500 font-bold italic mb-4">Our Mission</h2>
            <p className="w-[300px] sm:w-[450px] lg:w-[600px] text-white/90 text-lg sm:text-xl lg:text-2xl leading-relaxed">
              Cipher Energy is committed to supporting<br />India's net-zero mission by revolutionizing<br />electric motor efficiency.
            </p>
            <p className="w-[300px] sm:w-[450px] lg:w-[600px] text-white/90 text-lg sm:text-xl lg:text-2xl mt-4 leading-relaxed">
              Our axial flux technology aims to save <br />India ₹800+ billion in energy losses while <br />significantly reducing carbon emissions<br />
              across mobility, defence, and industrial<br />sectors Future.
            </p>
            <span className="playfair text-6xl sm:text-7xl lg:text-8xl text-gray-500 leading-none mt-2">"</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer2;
