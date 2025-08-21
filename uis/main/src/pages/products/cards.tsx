import power from "../../assets/icons/peak1.png";
import continuous from "../../assets/icons/continuous.png";
import energy from "../../assets/icons/energy1.png";
import ctorque from "../../assets/icons/conttorque.png";
import torque from "../../assets/icons/peaktorque.png";
import mass from "../../assets/icons/mass1.png";
import { Link } from "react-router-dom";
import TiltWrapper from "@/components/ui/TiltWrapper";

const stats = [
  { icon: power, alt: "Peak Power", value: "130 kW", label: "Peak Power", shadow: true },
  { icon: continuous, alt: "Continuous Power", value: "75 kW", label: "Continuous Power", shadow: false },
  { icon: torque, alt: "Peak Torque", value: "125 Nm", label: "Peak Torque", shadow: true },
  { icon: ctorque, alt: "Continuous Torque", value: "185 Nm", label: "Continuous Torque", shadow: false },
  { icon: mass, alt: "Mass", value: "14.5 kG", label: "Mass", shadow: true },
  { icon: energy, alt: "Energy Efficiency", value: "15%", label: "Energy Savings", shadow: false },
];

const Cards = ({ title, productId }) => {
  return (
    <div className="flex flex-col overflow-x-hidden gap-[40px] sm:gap-[60px] md:gap-[80px] pt-[60px] sm:pt-[90px] md:pt-[128px] pb-[20px] sm:pb-[24px] md:pb-[32px] max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
      
        {/* Title and CTA Button */}
        <div className="flex flex-col sm:flex-row max-w-[1200px] justify-between items-center gap-4 sm:gap-0">
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl opacity-80 text-center text-white sm:text-left">
            {title.toUpperCase()} SERIES
          </h1>
          <Link
            to={`/${productId}`}
            className="holo-cards flex justify-center items-center text-xs sm:text-sm font-semibold w-full sm:w-auto px-4 sm:px-6 h-[36px] sm:h-[40px] rounded-md border border-white transition overflow-hidden whitespace-nowrap text-transparent bg-clip-text"
          >
            <span className="hidden sm:inline">View more about {title.toUpperCase()}</span>
            <span className="sm:hidden">View more</span>
          </Link>
        </div>

        {/* Responsive Images Section */}
        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] sm:gap-[28px] md:gap-[36px] w-full">
            <div className="w-full h-[200px] sm:h-[240px] md:h-[280px] rounded-[1.5rem] sm:rounded-[2rem] shadow-md bg-gradient-to-br from-[#FFFFFF] to-[#999999]"></div>
            <div className="w-full h-[200px] sm:h-[240px] md:h-[280px] bg-gradient-to-br from-[#ffffff] to-[#999999] rounded-[1.5rem] sm:rounded-[2rem] shadow-md"></div>
          </div>
        

        {/* Stats Grid */}
        <div className="w-full max-w-[1200px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 justify-items-center">
          {stats.map((card, idx) => (
            <TiltWrapper
              key={idx}
              className={`
                w-full max-w-[140px] sm:max-w-[160px] md:max-w-[174px] h-[180px] sm:h-[210px] md:h-[242px] gap-[20px] sm:gap-[26px] md:gap-[32px]
                rounded-[1.5rem] sm:rounded-[2rem] flex flex-col items-start justify-center 
                ${card.shadow ? "bg-[#6384E966]" : "bg-[#6384E933]"}
                p-3 sm:p-4 text-left
              `}
            >
              <div className="">
                <img src={card.icon} alt={card.alt} className="w-[32px] sm:w-[36px] md:w-[40px] h-auto" />
              </div>

              <div className="flex flex-col gap-[6px] sm:gap-[7px] md:gap-[8px] w-[90px] sm:w-[100px] md:w-[110px] h-[60px] sm:h-[67px] md:h-[74px]">
                <span className="worksans text-[18px] sm:text-[21px] md:text-[24px] text-nowrap font-bold leading-tight mb-1 sm:mb-2 text-white">
                  {card.value}
                </span>
                <span className="worksans text-nowrap text-xs sm:text-[13px] md:text-sm worksans text-gray-300">
                  {card.label}
                </span>
              </div>
            </TiltWrapper>
          ))}
        </div>
      
    </div>
  );
};

export default Cards;