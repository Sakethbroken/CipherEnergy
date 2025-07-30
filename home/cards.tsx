import React from "react";
import engine from "../../assets/images/engine.png";
import {Link} from "react-router-dom"

const Cards = ({ title, isImageRight = false, cardData }) => {
  return (
    <div className="flex flex-col items-center gap-4 mt-15 md:gap-6 px-4 md:px-6">
      {/* Title */}
      <h2 className=" w-[254px] text-2xl text-white text-nowrap md:text-3xl lg:text-4xl font-bold opacity-75 text-center mb-6  h-[48px]">
        {title}
      </h2>

      {/* Image and Grid Wrapper */}
      <div
        className={`flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 w-full justify-center ${
          isImageRight ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        {/* Image */}
        <div className="w-full md:w-1/2 md:max-w-[582px] flex-shrink-0 flex justify-center">
          <img
            src={engine}
            alt="Engine"
            className="rounded-sm w-full max-w-[582px] h-auto object-cover"
          />
        </div>

        {/* Grid */}
        <div className="w-full md:w-1/2 md:max-w-[582px] flex-shrink-0 grid grid-cols-3 gap-1 xs:gap-2 sm:gap-3 justify-items-center">
          {cardData.map((item) => (
            <div
              key={item.id}
              className={`w-[100px] h-[150px] xs:w-[112px] xs:h-[167px] sm:aspect-square sm:max-w-[178px] sm:h-[242px] sm:w-full rounded-3xl flex flex-col items-center ${
                item.active ? "bg-[#6384E966] shadow-xl" : "bg-[#6384E933]"

              }`}
            >
              <div className="mt-4 xs:mt-6 sm:mt-8 mb-auto flex justify-center">
                <img
                  src={item.icon}
                  alt={`${item.title} icon`}
                  className="w-6 h-6 xs:w-8 xs:h-8 sm:w-auto sm:h-auto"
                />
              </div>
              <div className="mb-2 xs:mb-3 sm:mb-4 flex flex-col gap-1 xs:gap-2 sm:gap-3 px-2 text-center">
                <div className="font-bold text-white text-sm xs:text-base sm:text-xl">{item.value}</div>
                <div className="text-gray-500 worksans text-sm xs:text-sm sm:text-md">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Explore Button */}
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 w-full sm:w-auto px-6 sm:px-0 justify-center mt-6">


        <Link
          to="./products"
         className="flex justify-center items-center text-xs sm:text-sm font-semibold w-full sm:w-auto px-6 h-[40px] rounded-md border-2 border-[#074FF7]  transition overflow-hidden whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-tr from-[#020919] via-[#074FF7] via-[#6384E9] to-[#020919]"

        >
          DOWNLOAD DATASHEET
        </Link>

        <Link
          to="./contactus"
          className="flex justify-center text-nowrap px-6 py-2 items-center text-xs sm:text-sm font-semibold w-full sm:w-[160px] h-[40px] rounded-sm
            bg-gradient-to-tr from-[#020919] via-[#074FF7] via-40% via-[#6384E9] to-[#020919]
            text-white  transition"
        >
REQUEST QUOTE        </Link>

       

        
      </div>
    </div>
  );
};

export default Cards;