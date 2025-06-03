import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import tgear from "../../ASSETS/icons/totalgear.png";
import settings from "../../ASSETS/icons/settings.png";
import powerb from "../../ASSETS/icons/powerbutton.png";
import energy from "../../ASSETS/icons/leafw.png"
import power from "../../ASSETS/icons/energyw.png"

const BenefitsTimeline = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const gearY = useTransform(scrollYProgress, [0, 1], [0, 200]);

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

  const positions = [
    { top: "100px", left: "0" },
    { top: "100px", left: "60%" },
    { top: "700px", left: "0" },
    { top: "700px", left: "60%" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: {
      y: 100,
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 80,
      },
    },
  };

  return (
    <div
      ref={containerRef}
      className="relative mx-auto overflow-hidden"
      style={{ width: "1100px", height: "1750px" }}
    >
      <motion.div
        className="relative w-full h-full"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {benefits.map((benefit, index) => {
          const position = positions[index];

          return (
            <motion.div
              key={index}
              className="absolute bg-[#303030CC] text-white p-6 rounded-lg shadow-lg z-10"
              style={{
                top: position.top,
                left: position.left,
                transform: position.left.includes("%") ? "translateX(-50%)" : "none",
                width: "350px",
                height: "350px",
              }}
              variants={cardVariants}
            >
              {/* Corrected icon rendering */}
              <div className="mb-3 flex items-start ">
                <img
                  src={benefit.icon}
                  alt={benefit.title + " icon"}
                  className="w-12 h-12 object-contain mr-6 "
                />
              </div>
              <h3 className="text-3xl mt-5 font-bold mb-2">{benefit.title}</h3>
              <p className="text-lg mt-5 text-gray-300">{benefit.description}</p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Gear Image (background layer) */}
      <motion.div
        style={{ y: gearY }}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0 w-full h-full flex justify-center items-end pointer-events-none"
      >
        <img
          src={tgear}
          alt="Gear"
          className="
            object-contain
            w-[500px] h-[800px]
            sm:w-[700px] sm:h-[1500px]
            md:w-[900px] md:h-[1500px]
            lg:w-[1100px] lg:h-[1750px]
          "
        />
      </motion.div>
    </div>
  );
};

export default BenefitsTimeline;
