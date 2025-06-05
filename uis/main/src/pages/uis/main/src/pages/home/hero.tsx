import leaficon from "../../assets/images/leaficon.png"
import gearmachine from "../../assets/images/gearmachine.png"
import {Link} from "react-router-dom"
import gearmachine1 from "../../assets/images/gearmachine1.png"

const Hero = () => {
  return (
    <>
    <div className="w-full max-w-[1004px] px-4 py-6 md:py-8 mx-auto flex flex-col items-center justify-center gap-4 md:gap-6">
      
      {/* small content */}
      <div className="flex items-center gap-2 md:gap-3 bg-blue-100 rounded-3xl px-2 md:px-3">
        <img src={leaficon} alt="icon" className="w-5 h-5 md:w-6 md:h-6" />
        <p className="text-xs text-black font-medium">
          Saving ₹800+ Billion in Energy Losses While Reducing Carbon Emissions.
        </p>
      </div>
    
      {/* heading */}
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-medium leading-tight">
        <em className="bg-gradient-to-r from-black to-[#074FF7] bg-clip-text text-transparent font-extrabold italic playfair">
          Revolutionary
        </em> Axial Flux
        <br className="hidden sm:block" />
        Electric Motors for India's
        <br className="hidden sm:block" />
        Energy <em className="bg-gradient-to-r from-black to-[#074FF7] bg-clip-text text-transparent font-extrabold italic playfair">
          Future.
        </em>
      </h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-5 sm:gap-8 w-full sm:w-auto">
        <Link
          to="./contactus"
          className="flex justify-center items-center text-xs sm:text-sm font-semibold w-full sm:w-[128px] h-[40px] rounded-sm
            bg-gradient-to-tr from-[#020919] via-[#074FF7] via-40% via-[#6384E9] to-[#020919]
            text-white hover:opacity-30 transition"
        >
          REQUEST DEMO
        </Link>

        <Link
          to="./products"
          className="flex justify-center items-center text-xs sm:text-sm font-semibold w-full sm:w-[128px] h-[40px] rounded-sm 
            border border-transparent bg-[length:200%] hover:opacity-30 transition 
            [border-image:linear-gradient(to_bottom,#020919,#074FF7,#6384E9,#074FF7,#020919)_1] 
            [border-image-slice:1] overflow-hidden
            text-transparent bg-clip-text 
            bg-gradient-to-tr from-[#020919] via-[#074FF7] via-[#6384E9] to-[#020919]"
        >
          Explore Products
        </Link>
      </div>   
    </div>

    <div className="w-full overflow-hidden">
      <img 
        src={gearmachine1} 
        alt="" 
        className="mx-auto transform rotate-28 w-full max-w-[900px] object-contain" 
      />
    </div>
    </>
  );
}
    
export default Hero