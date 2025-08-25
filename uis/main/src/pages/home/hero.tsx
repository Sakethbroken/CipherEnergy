import { useEffect, useRef } from "react";
import { animate } from "motion";
import leaficon from "../../assets/images/leaficon.png";
import { Link } from "react-router-dom";

const Hero = () => {
  const linesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    document.fonts.ready.then(() => {
      linesRef.current.forEach((line, index) => {
        if (line) {
          animate(
            line,
            { opacity: [0, 1], y: [20, 0] },
            {
              type: "spring",
              duration: 1.5,
              delay: index * 0.15,
              bounce: 0,
            }
          );
        }
      });
    });
  }, []);

  return (
    <div className="w-full w-[1004px] flex flex-col gap-[32px] items-center justify-center ">
      {/* Banner */}
      <div className="flex w-[524px] h-[44px] items-center gap-[32px] pt-[4px] pb-[4px] pl-[4px] pr-[12px]  bg-blue-100 rounded-[999px] ">
        <img src={leaficon} alt="icon" className="w-[36px] h-[36px] " />
        <p className="text-xs h-[18px] worksans text-black font-medium leading-[140%] tracking-normal text-nowrap">
          Saving ₹800+ Billion in Energy Losses While Reducing Carbon Emissions.
        </p>
      </div>

      {/* Headline (Line by Line Animation) */}
    <div className="w-full max-w-[870px] text-center font-extrabold leading-[120%] space-y-3 sm:space-y-4 md:space-y-5">
 <div
   ref={(el) => {
     if (el) linesRef.current[0] = el;
   }}
   className="opacity-0"
 >
   <em className="playfair bg-gradient-to-r text-[28px] sm:text-[32px] md:text-[48px] lg:text-[64px] tracking-[-2%] from-white to-[#074FF7] bg-clip-text text-transparent italic font-[800]">
     Revolutionary
   </em>
   <span className="inter text-white font-normal text-[28px] sm:text-[32px] md:text-[48px] lg:text-[64px] tracking-[0%] ml-2">
     Axial Flux
   </span>
 </div>
 <div
   ref={(el) => {
     if (el) linesRef.current[1] = el;
   }}
   className="opacity-0"
 >
   <span className="inter text-white font-normal text-[28px] sm:text-[32px] md:text-[48px] lg:text-[64px] tracking-[0%]">
     Electric Motors for India's
   </span>
 </div>
 <div
   ref={(el) => {
     if (el) linesRef.current[2] = el;
   }}
   className="opacity-0"
 >
   <span className="inter text-white font-normal text-[28px] sm:text-[32px] md:text-[48px] lg:text-[64px] tracking-[0%]">
     Energy
   </span>
   <em className="playfair bg-gradient-to-r text-[28px] sm:text-[32px] md:text-[48px] lg:text-[64px] tracking-[-2%] from-white to-[#074FF7] bg-clip-text text-transparent italic font-[800] ml-2">
     Future.
   </em>
 </div>
</div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-[32px] sm:gap-8 w-full items-center justify-center">
        <Link
          to="./products"
         className=" holographic-link flex justify-center items-center text-xs sm:text-sm font-semibold w-full sm:w-auto px-6 h-[40px] 
rounded-tl-[1rem] rounded-br-[1rem] border-2 border-[#074FF7] transition overflow-hidden whitespace-nowrap 
text-white bg-gradient-to-r from-[#074FF7] via-[white opacity-30] to-[#6384E9]"

        >
          EXPLORE PRODUCTS
        </Link>
        <Link
          to="./contactus"
         className="holo-trans flex justify-center items-center text-xs sm:text-sm font-semibold sm:w-auto px-5 w-full  h-[40px]
rounded-tl-[1rem] rounded-br-[1rem] border border-white text-white
bg-transparent hover:bg-white hover:text-[#020919] text-nowrap transition-colors duration-300"

        >
          EXPLORE PRODUCTS
        </Link>
      </div>


    </div>
  );
};

export default Hero;
