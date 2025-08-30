import React, { useState } from "react";
import { motion } from "framer-motion";
import herol from "@/assets/images/herol.png"; // ✅ adjust path if alias "@" not configured

const ExplodedView: React.FC = () => {
  const [exploded, setExploded] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center  bg-gray-900">
      {/* Animated image */}
      <motion.img
        src={herol} // ✅ imported image
        alt="Exploded Motor View"
        className="w-[800px] object-contain"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: exploded ? 1.1 : 1,
          opacity: 1,
          rotate: exploded ? 2 : 0,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      />

      {/* Toggle button */}
      <button
        onClick={() => setExploded(!exploded)}
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition"
      >
        {exploded ? "Assemble" : "Explode"}
      </button>
    </div>
  );
};

export default ExplodedView;
