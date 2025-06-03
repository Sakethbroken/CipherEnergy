import React from "react";
import engine from "../../ASSETS/images/engine.png";
import power from "../../ASSETS/icons/power.png";
import {Link} from "react-router-dom"
const griditems = [
  { id: 1, active: true },
  { id: 2, active: false },
  { id: 3, active: true },
  { id: 4, active: false },
  { id: 5, active: true },
  { id: 6, active: false },
];

const Cards = ({ title, isImageRight = false }) => {
  return (
    <div className="flex flex-col items-center gap-4 md:gap-6 px-4 md:px-6">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold opacity-75 w-full md:w-[260px] text-center md:text-left">
        {title}
      </h2>

      {/* Request Quote Button */}
   

      {/* Image and Grid Wrapper */}
      <div
        className={`flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 w-full ${
          isImageRight ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={engine}
            alt="Engine"
            className="rounded-sm w-full max-w-[582px] h-auto object-cover"
          />
        </div>

        {/* Grid */}
        <div className="w-full md:w-1/2 grid grid-cols-3 gap-2 sm:gap-3">
          {griditems.map((item) => (
            <div
              key={item.id}
              className={`w-full aspect-square h-[242px] rounded-lg flex flex-col items-center justify-center ${
                item.active ? "bg-white shadow-xl" : "bg-gray-200"
              }`}
            >
              <div className="mb-2 md:mb-3">
                <img
                  src={power}
                  alt="Power icon"
                  className="w-8 h-8 md:w-10 md:h-10"
                />
              </div>
              <div className="font-bold text-lg md:text-xl">130 kW</div>
              <div className="text-gray-500 text-sm md:text-base">
                Peak Power
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Explore Button */}

      <div className="flex gap-13 ">

        
       <Link
  to="./products"
  className="text-xs sm:text-sm text-nowrap px-3 font-semibold sm:w-[254px] h-[40px] 
    flex items-center justify-center 
    rounded-sm border border-transparent bg-[length:200%] hover:opacity-30 transition 
    [border-image:linear-gradient(to_bottom,#020919,#074FF7,#6384E9,#074FF7,#020919)_1] 
    [border-image-slice:1] 
    text-transparent bg-clip-text 
    bg-gradient-to-tr from-[#020919] via-[#074FF7] via-[#6384E9] to-[#020919]"
>
 Download Datasheet
</Link>

    <button
        className="text-white text-sm cursor-pointer font-semibold px-3 w-full sm:w-[254px] h-[40px] rounded-sm
        bg-gradient-to-tr from-[#020919] via-[#074FF7] via-40% via-[#6384E9] to-[#020919] 
        hover:opacity-30 transition"
      >
        REQUEST QUOTE
      </button>


      </div>


    </div>
  );
};

export default Cards;
