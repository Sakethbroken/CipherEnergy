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
    <div className="w-full overflow-x-hidden">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-0 py-8">
        {/* Title and CTA Button */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-8">
          <h1 className="work-sans font-bold text-3xl lg:text-4xl opacity-80 text-center text-white sm:text-left">
            {title.toUpperCase()} SERIES
          </h1>
          <Link
            to={`/${productId}`}
            className="holo-cards flex justify-center items-center text-sm font-semibold w-full sm:w-auto px-6 h-[40px] rounded-md border border-white transition overflow-hidden whitespace-nowrap text-transparent bg-clip-text"
          >
            View more about {title.toUpperCase()}
          </Link>
        </div>

        {/* Responsive Images Section */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="w-full h-[280px] rounded-[2rem] shadow-md bg-gradient-to-br from-[#FFFFFF] to-[#999999]"></div>
            <div className="w-full h-[280px] bg-gradient-to-br from-[#ffffff] to-[#999999] rounded-[2rem] shadow-md"></div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 justify-items-center">
          {stats.map((card, idx) => (
            <TiltWrapper
              key={idx}
              className={`
                w-full max-w-[180px] h-[180px]
                rounded-[2rem] flex flex-col items-start justify-center 
                ${card.shadow ? "bg-[#6384E966]" : "bg-[#6384E933]"}
                p-4 text-left
              `}
            >
              <div className="mb-3">
                <img src={card.icon} alt={card.alt} className="w-[40px] h-auto" />
              </div>
              <span className="text-lg font-bold mb-2 text-white">
                {card.value}
              </span>
              <span className="text-sm worksans text-gray-300">
                {card.label}
              </span>
            </TiltWrapper>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;