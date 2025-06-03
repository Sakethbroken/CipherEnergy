import power from "../../assets/icons/peak.png";
import continuous from "../../assets/icons/continuous.png";
import energy from "../../assets/icons/Energy.png";
import ctorque from "../../assets/icons/Cont Torque.png";
import torque from "../../assets/icons/Peak Torque.png";
import mass from "../../assets/icons/Mass.png";
import { Link } from "react-router-dom";
const stats = [
  { icon: power, alt: "Peak Power", value: "130KW", label: "peak power", shadow: true },
  { icon: continuous, alt: "Continuous Power", value: "65KW", label: "continuous power", shadow: false },
  { icon: torque, alt: "Peak Torque", value: "240NM", label: "peak torque", shadow: true },
  { icon: ctorque, alt: "Continuous Torque", value: "120NM", label: "continuous torque", shadow: false },
  { icon: mass, alt: "Mass", value: "42KG", label: "mass", shadow: true },
  { icon: energy, alt: "Energy Efficiency", value: "95%", label: "energy efficiency", shadow: false },
];

const Cards = ({ title }) => {
  return (
    <div className="flex flex-col w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
      {/* Title and CTA Button */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <h1 className="font-bold text-2xl sm:text-4xl opacity-80">
          {title.toUpperCase()} SERIES
        </h1>
        <Link
          to="/viewproduct"
          className="text-xs sm:text-sm h-[36px] font-semibold px-3 rounded-md border border-transparent hover:opacity-30
          [border-image:linear-gradient(to_bottom,#020919,#074FF7,#6384E9,#074FF7,#020919)_1]
          [border-image-slice:1] text-transparent bg-clip-text
          bg-gradient-to-tr from-[#020919] via-[#074FF7] via-[#6384E9] via-[#074FF7] to-[#020919]
          whitespace-nowrap"
        >
          View more about CEM1
        </Link>
      </div>

 {/* Responsive Images Section */}
<div className="mt-6 overflow-x-auto lg:overflow-x-visible scrollbar-hide">
  <div className="flex gap-4 w-max lg:w-full">
    <div className="min-w-[280px] lg:w-1/2 h-[280px] bg-gray-300 rounded-lg"></div>
    <div className="min-w-[280px] lg:w-1/2 h-[280px] bg-gray-300 rounded-lg"></div>
  </div>
</div>


      {/* Stats Grid */}
      <div className="w-full mt-6 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {stats.map((card, idx) => (
          <div
            key={idx}
            className={`h-[130px] sm:h-[150px] rounded-lg flex flex-col items-center justify-center 
              ${card.shadow ? "shadow-md bg-white" : "bg-[#F5F5F5]"} 
              p-2 sm:p-4 text-center`}
          >
            <div className="w-8 h-8 sm:w-12 sm:h-12 mb-1 sm:mb-2">
              <img src={card.icon} alt={card.alt} className="w-full h-full object-contain" />
            </div>
            <span className="text-sm sm:text-lg font-bold">{card.value}</span>
            <span className="text-[10px] sm:text-xs text-gray-500">{card.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
