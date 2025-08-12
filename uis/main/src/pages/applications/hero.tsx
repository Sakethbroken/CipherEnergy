import industrial from "../../assets/images/industrial.png";
import marine from "../../assets/images/marines.png";
import aerospace from "../../assets/images/aerospace.png";
import defence from "../../assets/images/defence.png";
import drone from "../../assets/images/drones.png";
import renewable from "../../assets/images/renewable.png";

const applicationCards = [
  { title: "Aerospace", img: aerospace },
  { title: "Defence", img: defence },
  { title: "Industrial Machinery", img: industrial },
  { title: "Renewable Energy", img: renewable },
  { title: "Drones", img: drone },
  { title: "Marines", img: marine },
];

const Hero = () => {
  return (
    <div className="w-full flex-col items-center  justify-center max-h-[453px] gap-[80px]  space-y-[80px] max-w-[1600px]  mx-auto">
      
      {/* Heading */}
      <div className="flex flex-col items-center gap-[14px] max-w-[578px] mx-auto">
        <h1 className="text-[64px] leading-[76.8px] font-black italic playfair tracking-[-0.02em] text-center bg-gradient-to-r from-white to-[#074FF7] bg-clip-text text-transparent">
          Applications
        </h1>

        {/* Description */}
        <h4 className="text-white worksans font-normal text-2xl tracking-normal leading-[]] w-[344px] h-[68px] mx-auto text-center">
         Why our motors are revolutionary?
        </h4>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-[8px] w-full max-w-[1160px] mx-auto">
        {applicationCards.map((card, idx) => (
      <div key={idx} className="flex flex-col w-[152px] h-[152px]  items-center">
            <div className="w-full aspect-square rounded-[2rem] flex items-center justify-center hover:bg-opacity-30 transition-all">
              <img src={card.img} alt={card.title} className="w-[152px] h-[152px] rounded-[2rem] object-cover" />
            </div>
            <h1 className="mt-3 text-center font-body text-white text-lg font-medium">
              {card.title}
            </h1>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Hero;
