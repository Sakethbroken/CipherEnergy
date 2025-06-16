import React from "react";
import { motion, Variants } from "framer-motion";
import tgear from "../../assets/icons/totalgear.png";
import settings from "../../assets/icons/settings.png";
import powerb from "../../assets/icons/powerbutton.png";
import energy from "../../assets/icons/leafw.png";
import power from "../../assets/icons/energyw.png";

const benefits = [
  {
    title: "Superior Efficiency",
    description:
      "Our module optimizes the DC discharge cycle, saving customers money by reducing heat loss effects or energy costs",
    icon: power,
  },
  {
    title: "Unmatched Power Density",
    description:
      "Features continuous power-to-weight ratio available in the Indian market",
    icon: powerb,
  },
  {
    title: "Streamlined Manufacturing",
    description:
      "Our production process offers manufacturing time without compromising quality",
    icon: settings,
  },
  {
    title: "Environmental Impact",
    description:
      "Reduces CO2 emissions by up to 150 kg per MWh of energy consumed",
    icon: energy,
  },
];

// Dummy positioning array
const positions = [
  { top: "0px", left: "0%" },
  { top: "0px", left: "0%" },
  { top: "0px", left: "0%" },
  { top: "0px", left: "0%" },
];

// ✅ Type-safe card animation
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring" as const, // ✅ Fix type error here
    },
  }),
};

const Mobiletimeline = () => {
  return (
    <div className="relative w-full h-[2245px]">
      {/* Gear image in background */}
      <img
        src={tgear}
        alt="Gear"
        className="absolute bottom-0 w-full h-[1500px] object-contain z-0"
      />

      <div className="text-center font-bold px-4">
        <div className="mx-auto leading-tight">
          <span className="text-white text-5xl">Key </span>
          <span className="playfair text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/10">
            benefits
          </span>
        </div>
        <p className="text-sm font-light text-white opacity-80 mt-2">
          Why our motors are revolutionary?
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-10 flex flex-col items-center gap-10 px-4 pt-[350px]">
        {benefits.map((benefit, index) => {
          const position = positions[index];
          return (
            <motion.div
              key={index}
              className="bg-gray-800 text-white p-6 rounded-lg shadow-lg"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              style={{
                top: position.top,
                left: position.left,
                transform: position.left.includes("%")
                  ? "translateX(-50%)"
                  : "none",
                width: "350px",
                height: "300px",
              }}
            >
              <div className="mb-3 flex items-start">
                <img
                  src={benefit.icon}
                  alt={`${benefit.title} icon`}
                  className="w-12 h-12 object-contain mr-6"
                />
              </div>
              <h3 className="text-3xl mt-5 font-bold mb-2">{benefit.title}</h3>
              <p className="text-lg mt-5 text-gray-300">
                {benefit.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Mobiletimeline;
