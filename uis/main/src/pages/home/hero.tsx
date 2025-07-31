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
    <div className="w-full max-w-[1004px] px-4 py-6 md:py-8 mx-auto flex flex-col items-center justify-center gap-4 md:gap-6">
      {/* Banner */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 bg-blue-100 rounded-3xl px-2 md:px-3 text-center">
        <img src={leaficon} alt="icon" className="w-5 h-5 md:w-6 md:h-6" />
        <p className="text-xs text-black font-medium leading-snug max-w-[280px] sm:max-w-none">
          Saving ₹800+ Billion in Energy Losses While Reducing Carbon Emissions.
        </p>
      </div>

      {/* Headline (Line by Line Animation) */}
      <div className="w-full max-w-[870px] text-center font-extrabold leading-[110%] space-y-3 sm:space-y-4 md:space-y-5">
        <div
          ref={(el) => {
            if (el) linesRef.current[0] = el;
          }}
          className="opacity-0"
        >
          <em className="playfair bg-gradient-to-r text-[28px] sm:text-[32px] md:text-[48px] lg:text-[64px] tracking-[-0.02em] from-white to-[#074FF7] bg-clip-text text-transparent italic">
            Revolutionary
          </em>{" "}
          <span className="worksans text-white font-medium text-[28px] sm:text-[32px] md:text-[48px] lg:text-[64px] tracking-[-0.02em]">
            Axial Flux
          </span>
        </div>

        <div
          ref={(el) => {
            if (el) linesRef.current[1] = el;
          }}
          className="opacity-0"
        >
          <span className="worksans text-white font-medium text-[28px] sm:text-[32px] md:text-[48px] lg:text-[64px] tracking-[-0.02em]">
            Electric Motors for India’s
          </span>
        </div>

        <div
          ref={(el) => {
            if (el) linesRef.current[2] = el;
          }}
          className="opacity-0"
        >
          <span className="worksans text-white font-medium text-[28px] sm:text-[32px] md:text-[48px] lg:text-[64px] tracking-[-0.02em]">
            Energy
          </span>{" "}
          <em className="playfair bg-gradient-to-r font-['Playfair'] text-[28px] sm:text-[32px] md:text-[48px] lg:text-[64px] tracking-[-0.02em] from-white to-[#074FF7] bg-clip-text text-transparent italic">
            Future.
          </em>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 w-full items-center justify-center">
        <Link
          to="./products"
          className="flex justify-center items-center text-xs sm:text-sm font-semibold w-full sm:w-auto px-6 h-[40px] rounded-md border-2 border-[#074FF7] transition overflow-hidden whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-tr from-[#020919] via-[#074FF7] via-[#6384E9] to-[#020919]"
        >
          EXPLORE PRODUCTS
        </Link>
        <Link
          to="./contactus"
          className="flex justify-center items-center text-xs sm:text-sm font-semibold w-full sm:w-[128px] h-[40px] rounded-sm
            bg-gradient-to-tr from-[#020919] via-[#074FF7] via-40% via-[#6384E9] to-[#020919]
            text-white transition"
        >
          REQUEST DEMO
        </Link>
      </div>
    </div>
  );
};

export default Hero;
