import quote from "../../ASSETS/icons/quot.png";
import leafbg from "../../ASSETS/images/leafbg.png";
import leaficon from "../../ASSETS/icons/leaficon.png";

const VandM = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col items-center gap-12 sm:gap-16 lg:gap-20 w-full max-w-7xl">
        {/* Mission & Vision Section */}
        <div className="flex flex-col lg:flex-row justify-center gap-8 w-full">
          {[
            {
              title: 'Our Mission',
              description:
                "To revolutionize India's electric motor industry by providing high-efficiency axial flux motors that reduce energy waste, cut costs, and significantly lower carbon emissions.",
            },
            {
              title: 'Our Vision',
              description:
                "To contribute meaningfully to India's net-zero mission by saving ₹800+ billion in energy losses and becoming the leading provider of efficient motor solutions across mobility, defence, and industrial applications.",
            },
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-[#D9F1F2] rounded-xl p-6 sm:p-8 md:p-10 w-full lg:w-[484px] text-center shadow-sm flex flex-col items-center justify-between h-auto min-h-[400px] sm:min-h-[450px]"
            >
              <div className="flex flex-col items-center">
                <img src={quote} alt="quote" className="w-[40px] sm:w-[52px] h-auto mb-4" />
                <em className="playfair bg-gradient-to-r from-black to-[#074FF7] bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl font-extrabold italic text-center">
                  {item.title}
                </em>
              </div>
              <p className="text-base sm:text-lg text-black mt-6 sm:mt-8 md:mt-10">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Energy Saving Card */}
        <div className="bg-gradient-to-r from-[#014742] to-[#01ADA1] rounded-3xl w-full max-w-md px-4 py-3 sm:py-4">
          <div className="flex items-center justify-center gap-3">
            <img src={leaficon} alt="leaf" className="w-[50px] sm:w-[69px] h-auto" />
            <h2 className="playfair text-white font-black italic text-3xl sm:text-4xl md:text-[43.42px] leading-tight text-center">
              Energy Saving
            </h2>
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
    </section>
  );
};

export default VandM;