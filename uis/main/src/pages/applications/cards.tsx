import power from "../../assets/icons/peak1.png";
import continuous from "../../assets/icons/continuous.png";
import energy from "../../assets/icons/energy1.png";
import ctorque from "../../assets/icons/conttorque.png";
import torque from "../../assets/icons/peaktorque.png";
import mass from "../../assets/icons/mass1.png";
import { Link } from "react-router-dom";

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
    <div className="flex flex-col w-full max-w-[1200px] mx-auto px-2 sm:px-6 lg:px-8 py-4">
      {/* Title and CTA Button */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <h1 className="font-bold text-2xl sm:text-4xl opacity-80 text-center sm:text-left">
          {title.toUpperCase()} SERIES
        </h1>
        <Link
          to={`/${productId}`}
          className="flex justify-center items-center text-xs sm:text-sm font-semibold w-full sm:w-auto px-6 h-[40px] rounded-md border-2 border-[#074FF7] transition overflow-hidden whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-tr from-[#020919] via-[#074FF7] via-[#6384E9] to-[#020919]"
        >
          View more about {title.toUpperCase()}
        </Link>
      </div>

      {/* Responsive Images Section */}
      <div className="mt-6 overflow-x-auto md:overflow-x-hidden lg:overflow-x-visible scrollbar-hide">
        <div className="flex gap-4 w-max md:w-full">
          <div className="min-w-[280px] md:flex-1 h-[280px] bg-gradient-to-br from-[#ffffff] to-[#999999] rounded-[2rem] shadow-md"></div>
          <div className="min-w-[280px] md:flex-1 h-[280px] bg-gradient-to-br from-[#ffffff] to-[#999999] rounded-[2rem] shadow-md"></div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="w-full mt-6 grid grid-cols-3 lg:grid-cols-6 gap-4 justify-items-center">
        {stats.map((card, idx) => (
          <div
            key={idx}
            className={`
              w-[109px] h-[142px]
              sm:w-[109px] sm:h-[142px]
              md:w-[180px] md:h-[170px]
              lg:w-[180px] lg:h-[220px]
              rounded-[2rem] pl-2 sm:pl-4 flex flex-col items-start justify-center 
              ${card.shadow ? "bg-white" : "bg-[#F5F5F5]"} 
              p-2 sm:p-4 text-left`}
          >
            <div className="pl-1 sm:pl-2 mb-2 sm:mb-3">
              <img src={card.icon} alt={card.alt} className="w-[32px] sm:w-[40px] lg:w-[48px] h-auto" />
            </div>
            <span className="text-base sm:text-lg md:text-xl pl-1 sm:pl-2 font-bold mb-1">
              {card.value}
            </span>
            <span className="text-[10px] sm:text-sm md:text-md pl-1 sm:pl-2 text-gray-500">
              {card.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
