import React from "react";
import leafbg from "../../assets/images/leafbg.png";
import leaficon from "../../assets/icons/leaficon.png";

const Cards: React.FC = () => (
    <div className="py-20 ">
        <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-r from-[#014742] to-[#01ADA1] rounded-3xl py-10 w-full max-w-md px-4 sm:py-4">
            <div className="flex items-center justify-center gap-3">
                <img src={leaficon} alt="leaf" className="w-[50px] sm:w-[69px] h-auto" />
                <h2 className="playfair text-white font-black italic text-3xl sm:text-4xl md:text-[43.42px] leading-tight text-center">
                Energy Saving
                </h2>
            </div>
            </div>
        </div>

        {/* CO₂ Savings Cards */}
        <div className="flex flex-col lg:flex-row justify-center gap-8 w-full">
            {[1, 2].map((_, i) => (
                <div key={i} className="w-full lg:w-[468px] h-[300px] sm:h-[320px] md:h-[350px] lg:h-[368px] relative">
                    <img 
                        src={leafbg} 
                        alt="leaf background" 
                        className="w-full h-full rounded-2xl object-cover" 
                    />
                    <div className="absolute inset-0 flex flex-col gap-4 sm:gap-5 items-center justify-center p-4 sm:p-6">
                        <h3 className="font-body font-bold text-2xl sm:text-3xl md:text-[40px] leading-none text-center text-white">
                            100KG per MWh
                        </h3>
                        <p className="font-body text-base text-center font-normal leading-6 text-white">
                            Our motors reduce CO₂ emissions by up to 100 kg per MWh of energy
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Cards;