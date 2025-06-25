import React from "react";
import { Link } from "react-router-dom";
import Header from "./header";

const Mobilesidebar = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col">
      {/* Header (remains fixed at top) */}
      <div className="w-full shrink-0">
        <Header onHamburgerClick={onClose} />
      </div>

      {/* Scrollable and centered nav */}
      <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center px-6">
        <nav className="flex flex-col items-center gap-15  space-y-5 text-gray-500 w-full max-w-xs text-sm font-normal">

          <Link
            to="/products"
            className="text-xl sm:text-xl md:text-2xl font-medium hover:opacity-70 transition"
            onClick={onClose}
          >
            Products
          </Link>
          <Link
            to="/technology"
            className="text-xl sm:text-xl md:text-2xl font-medium hover:opacity-70 transition"
            onClick={onClose}
          >
            Technology
          </Link>
          <Link
            to="/applications"
            className="text-xl sm:text-xl md:text-2xl font-medium hover:opacity-70 transition"
            onClick={onClose}
          >
            Applications
          </Link>
          <Link
            to="/aboutus"
            className="text-xl sm:text-xl md:text-2xl font-medium hover:opacity-70 transition"
            onClick={onClose}
          >
            About Us
          </Link>
          <Link
            to="/resources"
            className="text-xl sm:text-xl md:text-2xl font-medium hover:opacity-70 transition"
            onClick={onClose}
          >
            Resources
          </Link>
        </nav>
      </div>

      <div className="mt-15 flex  py-10 justify-center items-center">
         <button
        className="text-white text-sm font-semibold px-3 w-full sm:w-[254px] h-[40px] rounded-sm
        bg-gradient-to-tr from-[#020919] via-[#074FF7] via-40% via-[#6384E9] to-[#020919] 
        hover:opacity-30 transition"
      >
        Primary Button
      </button>
      </div>
    </div>
  );
};

export default Mobilesidebar;
