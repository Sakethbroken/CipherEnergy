import React from "react";
import leafbg from "../../assets/images/leafbg.png";
import leaficon from "../../assets/icons/leaficon.png";

const Cards: React.FC = () => (
    
        <div className="flex flex-col mx-auto justify-center gap-[32px] max-w-[1000px] ">


            <div className="bg-gradient-to-r flex from-[#014742] to-[#01ADA1] mx-auto gap-[8px] rounded-[99px] w-[405px] h-[109px] p-[20px]">

                <img src={leaficon} alt="leaf" className="w-[50px] sm:w-[69px] " />

                <h2 className="playfair text-white font-black italic w-[288px] h-[58px] text-[43px] leading-tight text-center">
                Energy Saving
                </h2>
           
            </div>
        

        {/* CO₂ Savings Cards */}
        <div className="flex flex-col lg:flex-row justify-center gap-[64px] w-[1000px] mx-auto">
            {[1, 2].map((_, i) => (
                <div key={i} className="w-[468px]  h-[300px] sm:h-[320px] md:h-[350px] lg:h-[368px] relative">
                    <img 
                        src={leafbg} 
                        alt="leaf background" 
                        className="w-full h-full rounded-2xl object-cover" 
                    />
                    <div className="absolute inset-0 flex flex-col rounded-[32px] gap-[32px] p-[64px] items-center justify-center">
                        <h3 className="worksans font-bold text-2xl sm:text-3xl md:text-[40px] leading-none text-center text-white">
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