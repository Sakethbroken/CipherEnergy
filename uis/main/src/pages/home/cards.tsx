import React, { useState, useEffect, useRef } from "react";
import engine from "../../assets/images/engine.png";
import {Link} from "react-router-dom"
import TiltWrapper from "@/components/ui/TiltWrapper";
import "../../slidecards.css"; // Make sure this CSS file is imported

const Cards = ({ title, isImageRight = false, cardData }) => {
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef({});

  // Intersection Observer for slide animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.dataset.sectionid;
        if (sectionId) {
          setVisibleSections(prev => ({
            ...prev,
            [sectionId]: entry.isIntersecting
          }));
        }
      });
    }, observerOptions);

    // Observe all sections
    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      Object.values(sectionRefs.current).forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-[32px] w-[1272px]">
      {/* Title */}
      <h2
        className="w-[254px] worksans text-white text-nowrap text-center h-[48px]  font-bold opacity-80 text-[40px] leading-[140%] tracking-[0%]"
      >
        {title}
      </h2>

      {/* Main Container - 1272px width */}
      
        {/* Image and Grid Wrapper */}
        <div
          className={` flex gap-[32px] w-full max-w-[1272px]  justify-center ${
            isImageRight ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          {/* Image with animation */}
          <div
            ref={el => sectionRefs.current['image'] = el}
            data-sectionid="image"
            className={`case-study-image card-slide-bottom ${
              visibleSections['image'] ? 'visible' : ''
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            <img
              src={engine}
              alt="Engine"
              className="rounded-[32px] w-full max-w-[636px] h-auto object-cover"
            />
          </div>

          {/* Grid */}
         <div className="w-full flex flex-col gap-[24px] md:w-1/2 flex-shrink-0 max-w-[636px]">
  {[cardData.slice(0, 3), cardData.slice(3, 6)].map((row, i) => (
    <div key={i} className="flex gap-[24px]">
   {row.map((item) => (
  <TiltWrapper
    key={item.id}
    className={`w-[100px] flex flex-col items-start gap-[32px] p-[32px] h-[242px] sm:aspect-square max-w-[190px] sm:w-full rounded-3xl ${
      item.active ? "bg-[#6384E966] shadow-xl" : "bg-[#6384E933]"
    }`}
  >
    <img
      src={item.icon}
      alt={`${item.title} icon`}
      className="w-6 h-6 xs:w-8 xs:h-8 sm:w-auto sm:h-auto"
    />
    <div className="flex flex-col w-[126px] h-[74px] justify-between">
      <div className="font-bold text-white text-sm xs:text-base sm:text-xl">
        {item.value}
      </div>
      <div className="text-gray-500 worksans text-sm sm:text-md">
        {item.description}
      </div>
    </div>
  </TiltWrapper>
))}
    </div>
  ))}
</div>
        </div>

        {/* Explore Button */}
       
      
      <div className="flex flex-col sm:flex-row gap-[32px] w-[484px] mx-auto justify-center items-center">
          <Link
            to="./products"
            className="holo-trans flex justify-center items-center text-xs sm:text-sm font-semibold w-full sm:w-auto px-6 h-[40px] rounded-md border-1 border-[white] transition overflow-hidden whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-tr from-[#020919] via-[#074FF7] via-[#6384E9] to-[#020919]"
          >
            DOWNLOAD DATASHEET
          </Link>

          <Link
            to="./contactus"
            className="holographic-link flex justify-center text-nowrap px-6 py-2 items-center text-xs sm:text-sm font-semibold w-full sm:w-[160px] h-[40px] rounded-sm bg-gradient-to-tr from-[#020919] via-[#074FF7] via-40% via-[#6384E9] to-[#020919] text-white transition"
          >
            REQUEST QUOTE
          </Link>
        </div>
    </div>
  );
};

export default Cards;