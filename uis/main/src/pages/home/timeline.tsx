import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform, Variants } from "framer-motion";
import tgear from "../../assets/icons/totalgear.png";
import settings from "../../assets/icons/settings.png";
import powerb from "../../assets/icons/powerbutton.png";
import energy from "../../assets/icons/leafw.png";
import power from "../../assets/icons/energyw.png";

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
      description:"Our motors minimise the 10–20% energy waste typical in traditional motors, helping India save billions in energy costs",
      icon: power,
    },
    {
      title: "Unmatched Power Density",
      description:
        "Highest continuous power-to-weight ratio available in the Indian market",
      icon: powerb,
    },
    {
      title: "Streamlined Manufacturing",
      description:
        "Our production process halves manufacturing time without compromising quality",
      icon: settings,
    },
    {
      title: "Environmental Impact",
      description:
        "Reduce CO2 emissions by up to 100 kg per MWh of energy consumed",
      icon: energy,
    },
  ];

  const positions = [
    { top: "100px", left: "0%" },
    { top: "100px", left: "62%" },
    { top: "700px", left: "0%" },
    { top: "700px", left: "62%" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants: Variants = {
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
        type: "spring" as const, // ✅ Fixes type compatibility
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
              className="absolute bg-[#0209194D] flex flex-col gap-[31px] w-[388px] h-[406px] text-white p-[32px] rounded-[32px] shadow-lg z-10"
              style={{
                top: position.top,
                left: position.left,
                transform: position.left.includes("%") ? "translateX(-50%)" : "none",
      
              }}
              variants={cardVariants}
            >
                <img
                  src={benefit.icon}
                  alt={`${benefit.title} icon`}
                  className="w-[86px] h-[86px] object-contain "
                />
             
              <h3 className=" worksans text-3xl  font-bold ">{benefit.title}</h3>
              <p className=" worksans text-2xl  text-gray-300">{benefit.description}</p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Gear Image */}
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
