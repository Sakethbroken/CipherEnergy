import quote from "../../assets/icons/quot.png";


const VandM = () => {
  return (
    <section className="flex flex-col w-[1000px] mx-auto items-center justify-center gap-[64px] ">
   
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
              className="bg-[#FFFFFF1A] rounded-[32px] p-[64px] gap-[48px]  text-center shadow-sm flex flex-col items-center max-w-[482px] h-[472px]"
            >
              
                <img src={quote} alt="quote" className="w-[52px] h-[38px]" />
                <span className="worksans bg-gradient-to-r from-[#DEE6FF] to-[#5E8CFB] bg-clip-text font-bold text-transparent text-3xl sm:text-4xl md:text-5xl ">
                  {item.title}
                </span>
              
              <p className="text-base sm:text-lg text-white ">{item.description}</p>
            </div>
          ))}
        </div>


    </section>
  );
};

export default VandM;