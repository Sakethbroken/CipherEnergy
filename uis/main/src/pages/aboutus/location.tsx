import map from "../../ASSETS/images/map.png";
import india from "../../ASSETS/icons/india.png";
import location from "../../ASSETS/icons/location.png";
import Maps from "./gmaps";

function Cards({ title }: { title: string }) {
  return (
    <div className="flex flex-col gap-6 bg-[#FAF9F9] p-4 sm:p-6 w-full max-w-[380px] min-w-[270px] rounded-md shadow-md">
      
      {/* Top Icons */}
      <div className="flex justify-between items-center">
        <img
          src={location}
          alt="location icon"
          className="w-[32px] h-[32px] rounded-full"
        />
        <img
          src={india}
          alt="india icon"
          className="w-[28px] h-[28px] rounded-full"
        />
      </div>

      {/* Title */}
      <h1 className="font-body text-black font-bold text-base sm:text-lg leading-none uppercase">
        {title}
      </h1>

      {/* Address Placeholder */}
      <p className="font-body font-normal text-sm sm:text-base leading-[24px] opacity-80">
        [address here]
      </p>

      {/* CTA Button */}
      <button
        className="text-xs sm:text-sm cursor-pointer font-semibold w-full sm:w-[128px] h-[40px] rounded-sm 
        border border-transparent bg-white bg-[length:200%] hover:opacity-30 transition 
        [border-image:linear-gradient(to_bottom,#020919,#074FF7,#6384E9,#074FF7,#020919)_1] 
        [border-image-slice:1] overflow-hidden
        text-transparent bg-clip-text 
        bg-gradient-to-tr from-[#020919] via-[#074FF7] via-[#6384E9] to-[#020919]"
      >
        Explore Products
      </button>
    </div>
  );
}


const Locationpage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4">
      {/* Heading */}
      <em className="playfair bg-gradient-to-r from-black to-[#074FF7] bg-clip-text 
        text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-transparent 
        font-extrabold italic text-center mt-10">
        Locations
      </em>

      {/* Content container */}
      <div className="w-full max-w-[1200px] flex flex-col items-center justify-center mt-10 gap-10">

        {/* Cards */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 w-full">
          <Cards title="Headquarters" />
          <Cards title="Manufacturing" />
          <Cards title="R and D" />
        </div>

        {/* Map */}
        <div className="w-full flex justify-center items-center">
          <Maps />
          {/* Or fallback:
          <img src={map} alt="map" className="w-full rounded-2xl" /> */}
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col items-center justify-center mt-20 max-w-[1200px] w-full px-4 text-center">
        <img src={india} alt="india flag" className="w-[42px] h-[28px]" />
        <p className="font-body font-normal italic text-sm sm:text-md leading-[24px]">
          Proudly designed ❤️ and manufactured ⚙️ in India
        </p>
        <p className="font-body font-normal italic text-sm sm:text-md opacity-80 leading-[24px]">
          for global applications
        </p>
      </div>
    </div>
  );
};

export default Locationpage;
