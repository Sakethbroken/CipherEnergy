
import gear1 from "../../assets/images/gear1.png"
import indmap from "../../assets/images/indiamap.png";

const indiaMapImage = "/images/indiamap.png";

const Story = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* Section Heading */}
      <h2 className="playfair bg-gradient-to-r from-black to-[#074FF7] bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-transparent font-extrabold italic text-center mb-8 md:mb-16">
        Our Story
      </h2>
      
      <div className="w-full max-w-7xl mx-auto">
        {/* First card - switches to column on small/medium screens */}
        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 mb-12 md:mb-24">
          {/* Text section */}
          <div className="w-full md:w-1/2">
            <p className="text-base sm:text-lg leading-relaxed">
              Cipher Energy was founded with a single, urgent mission — 
              to solve one of India's most pressing industrial 
              challenges: energy inefficiency.
              <br /><br />
              In a country where electric motors 
              consume over 50% of total electricity, 
              nearly 10–20% of that power is lost 
              as heat due to outdated motor technology. 
              Cipher Energy was born out of this 
              realization — that the path to a net-zero 
              future starts with smarter, more efficient hardware 
              at the core of India's industries, 
              mobility, and infrastructure.
            </p>
          </div>
          
          {/* Image section */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
            <img
              src={indmap}
              alt="Map of India"
              className="w-full max-w-md h-auto rounded-2xl object-cover"
            />
          </div>
        </div>
        
        {/* Second card - switches to column on small/medium screens, 
            with reversed order so image appears first on mobile */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Image section - shows first on mobile, second on desktop */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start order-first md:order-none mt-6 md:mt-0">
            <img
              src={gear1}
              alt="Gear mechanism"
              className="w-full max-w-md h-auto rounded-2xl object-cover"
            />
          </div>
          
          {/* Text section */}
          <div className="w-full md:w-1/2">
            <p className="text-base sm:text-lg leading-relaxed">
              What began as a bold engineering vision 
              has now grown into a deep-tech 
              company building next-generation axial 
              flux electric motors—designed and 
              manufactured in India. These motors not 
              only minimize energy loss but also 
              deliver high torque, lightweight form, 
              and exceptional power density, making them 
              ideal for electric vehicles, defence 
              systems, aerospace, and industrial 
              machinery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;