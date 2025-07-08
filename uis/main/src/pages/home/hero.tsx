import React from 'react';
import { Link } from 'react-router-dom';
import leaficon from '../../assets/images/leaficon.png';
import gearanimation from '/videos/gearanimation.mp4';

const Hero = () => {
  return (
    <>
      <div className="w-full max-w-[1004px] px-4 py-6 md:py-8 mx-auto flex flex-col items-center justify-center gap-4 md:gap-6">
        {/* Banner */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 bg-blue-100 rounded-3xl px-2 md:px-3 text-center">
          <img src={leaficon} alt="icon" className="w-5 h-5 md:w-6 md:h-6" />
          <p className="text-xs text-black font-medium leading-snug max-w-[280px] sm:max-w-none">
            Saving ₹800+ Billion in Energy Losses While Reducing Carbon Emissions.
          </p>
        </div>

        {/* Headline */}
        <div className="w-full max-w-[870px]">
          <h1 className="text-center leading-[110%] font-extrabold">
            <em className="playfair bg-gradient-to-r text-[28px] sm:text-[32px] md:text-[48px] lg:text-[64px] tracking-[-0.02em] from-black to-[#074FF7] bg-clip-text text-transparent italic">
              Revolutionary
            </em>{' '}
            <span className="body font-medium text-[28px] sm:text-[32px] md:text-[48px] lg:text-[64px] leading-[110%] tracking-[-0.02em] text-center">
              Axial Flux
            </span>
            <br className="hidden sm:block" />
            <span className="body font-medium text-[28px] sm:text-[32px] md:text-[48px] lg:text-[64px] leading-[110%] tracking-[-0.02em] text-center">
              Electric Motors for India's
            </span>
            <br className="hidden sm:block" />
            <span className="body font-medium text-[28px] sm:text-[32px] md:text-[48px] lg:text-[64px] leading-[110%] tracking-[-0.02em] text-center">
              Energy
            </span>{' '}
            <em className="playfair bg-gradient-to-r font-['Playfair'] text-[28px] sm:text-[32px] md:text-[48px] lg:text-[64px] tracking-[-0.02em] from-black to-[#074FF7] bg-clip-text text-transparent italic">
              Future.
            </em>
          </h1>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 w-full items-center justify-center">
          <Link
            to="./contactus"
            className="flex justify-center items-center text-xs sm:text-sm font-semibold w-full sm:w-[128px] h-[40px] rounded-sm
              bg-gradient-to-tr from-[#020919] via-[#074FF7] via-40% via-[#6384E9] to-[#020919]
              text-white transition"
          >
            REQUEST DEMO
          </Link>
          <Link
            to="./products"
            className="flex justify-center items-center text-xs sm:text-sm font-semibold w-full sm:w-auto px-6 h-[40px] rounded-md border-2 border-[#074FF7] transition overflow-hidden whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-tr from-[#020919] via-[#074FF7] via-[#6384E9] to-[#020919]"
          >
            EXPLORE PRODUCTS
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
