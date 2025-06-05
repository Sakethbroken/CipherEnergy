import power from "../../assets/icons/peak.png";
import continuous from "../../assets/icons/continuous.png";
import energy from "../../assets/icons/energy.png";
import ctorque from "../../assets/icons/conttorque.png";
import torque from "../../assets/icons/peaktorque.png";
import mass from "../../assets/icons/Mass.png";

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
    <div className="flex flex-col w-full max-w-[1200px] mx-auto px-4 py-4">
      {/* Title and CTA Button */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="font-bold text-2xl sm:text-4xl opacity-80">
          {title.toUpperCase()} SERIES
        </h1>
        <button
          className="text-xs sm:text-sm h-[36px] font-semibold px-4 py-2 rounded-md border border-gray-300 hover:opacity-70 transition-opacity
          bg-gradient-to-tr from-[#020919] via-[#074FF7] via-[#6384E9] via-[#074FF7] to-[#020919]
          bg-clip-text text-transparent whitespace-nowrap flex items-center justify-center"
        >
          View more about {title.toUpperCase()}
        </button>
      </div>

      {/* Responsive Images Section */}
      <div className="mt-6 mb-6">
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          <div className="w-full lg:w-1/2 h-[280px] bg-gradient-to-br from-gray-200 to-gray-400 rounded-lg flex items-center justify-center">
            <span className="text-gray-600 font-medium">Product Image 1</span>
          </div>
          <div className="w-full lg:w-1/2 h-[280px] bg-gradient-to-br from-gray-200 to-gray-400 rounded-lg flex items-center justify-center">
            <span className="text-gray-600 font-medium">Product Image 2</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {stats.map((card, idx) => (
          <div
            key={idx}
            className={`h-[130px] sm:h-[150px] rounded-lg flex flex-col items-center justify-center
              ${card.shadow ? "shadow-md bg-white border border-gray-100" : "bg-[#F5F5F5]"}
              p-3 sm:p-4 text-center hover:shadow-lg transition-shadow duration-200`}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mb-2 flex items-center justify-center">
              <img 
                src={card.icon} 
                alt={card.alt} 
                className="w-full h-full object-contain"
                onError={(e) => {
               //   e.target.style.display = 'none';
                //  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div 
                className="w-6 h-6 bg-gray-400 rounded hidden"
                title={card.alt}
              ></div>
            </div>
            <span className="text-sm sm:text-base lg:text-lg font-bold text-gray-800">
              {card.value}
            </span>
            <span className="text-[10px] sm:text-xs text-gray-500 capitalize leading-tight">
              {card.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;