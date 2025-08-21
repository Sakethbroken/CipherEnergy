import React from "react";
import location from "../../assets/icons/location.png";
import india from "../../assets/icons/india.png";

const locations = [
  { title: "Headquarters", address: "Hyderabad, Telangana" },
  { title: "Manufacturing", address: "Bangalore, Karnataka" },
  { title: "R and D", address: "Pune, Maharashtra" }
];

function Cards({ title, address }) {
  return (
    <div className="flex flex-col gap-9 bg-[white] rounded-[32px] p-[24px] h-[313px] w-[340px] sm:w-[382px] hover:shadow-md transition">
      <div className="flex justify-between h-[36px]">
        <img src={location} alt="" className="w-[36px] h-[36px] rounded-full cursor-pointer" />
        <img src={india} alt="" className="w-[28px] h-[28px] rounded-full cursor-pointer" />
      </div>

     
        <h1 className="font-normal text-[32px]  leading-[120%] text-black tracking-[-2.16%] cursor-pointer">
          {title}
        </h1>
        <p className="font-body font-normal  text-md text-black leading-[27px] opacity-80">
          {address || "[address here]"}
        </p>
        <button className="holo-trans text-black pl-5 self-start text-xs sm:text-sm font-semibold w-[120px] sm:w-[150px]  h-[40px] rounded-md border-2 border-[#074FF7] hover:opacity-30 transition overflow-hidden whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-tr from-[#020919] via-[#074FF7] via-[#6384E9] to-[#020919]">
          Get Directions
        </button>

      </div>
   
  );
}

const Maps = () => {
  return (
    <div className="w-[1000px] mx-auto flex flex-col gap-[64px]">
      <em className="playfair bg-gradient-to-r from-white to-[#074FF7] bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-transparent font-extrabold italic text-center block">
        Locations
      </em>

      {/* Cards */}
      <div className="w-full max-w-[1000px] mx-auto  flex flex-col lg:flex-row gap-[18px] justify-center items-center">
        {locations.map((location, index) => (
          <Cards key={index} title={location.title} address={location.address} />
        ))}
      </div>

      {/* Simple Iframe Map */}
      <div className="w-full flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.701767127!2d72.71412823032124!3d19.082482211550335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1754976320814!5m2!1sen!2sin"
          width="1000"
          height="500"
          style={{ border: 0 }}
          
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-[32px]"
        ></iframe>
      </div>
    </div>
  );
};

export default Maps;
