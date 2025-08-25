import { useState, useEffect, useRef } from 'react';
import gear1 from "../../assets/images/gear1.png";
import indmap from "../../assets/images/indiamap.png";
import "../../slidecards.css"; // Make sure this CSS file is imported

const Story = () => {
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
    <section className="w-[1000px] mx-auto flex flex-col gap-[128px]">
      {/* Section Heading */}
      <div 
        ref={el => sectionRefs.current['heading'] = el}
        data-sectionid="heading"
        className={`case-study-content case-study-slide-up ${
          visibleSections['heading'] ? 'visible' : ''
        }`}
        style={{ transitionDelay: '0.1s' }}
      >
        <h2 className="playfair bg-gradient-to-r from-white to-[#074FF7] bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold italic text-center">
          Our Story
        </h2>
      </div>

      {/* First Card - Text slides from left, Image slides from right */}
      <div 
        ref={el => sectionRefs.current['first-card'] = el}
        data-sectionid="first-card"
        className="flex md:flex-row items-center gap-[64px]"
      >
        {/* Text Section - slides from left */}
        <div className={`flex items-center w-[476px] case-study-content case-study-slide-left ${
          visibleSections['first-card'] ? 'visible' : ''
        }`}
        style={{ transitionDelay: '0.1s' }}
        >
          <p className="text-left text-xl font-normal worksans text-white leading-relaxed tracking-normal align-middle md:text-left">
            Cipher Energy was founded with a single, urgent mission — to solve one of India's most pressing industrial
            challenges: energy inefficiency.
            <br /><br />
            In a country where electric motors consume over 50% of total electricity, nearly 10–20% of that power is lost
            as heat due to outdated motor technology. Cipher Energy was born out of this realization — that the path to a net-zero
            future starts with smarter, more efficient hardware at the core of India's industries, mobility, and infrastructure.
          </p>
        </div>

        {/* Image Section - slides from right */}
        <div className={`w-full max-w-[468px] md:w-1/2 flex justify-center case-study-image case-study-slide-right ${
          visibleSections['first-card'] ? 'visible' : ''
        }`}
        style={{ transitionDelay: '0.2s' }}
        >
          <img
            src={indmap}
            alt="Map of India"
            className="w-[468px] max-w-md h-auto rounded-2xl object-cover"
          />
        </div>
      </div>

      {/* Second Card - Image slides from left, Text slides from right */}
      <div 
        ref={el => sectionRefs.current['second-card'] = el}
        data-sectionid="second-card"
        className="flex md:flex-row items-center gap-[64px]"
      >
        {/* Image Section - slides from left */}
        <div className={`w-full max-w-[468px] md:w-1/2 flex justify-center case-study-image case-study-slide-left ${
          visibleSections['second-card'] ? 'visible' : ''
        }`}
        style={{ transitionDelay: '0.1s' }}
        >
          <img
            src={gear1}
            alt="Gear mechanism"
            className="w-[468px] max-w-md h-auto rounded-2xl object-cover"
          />
        </div>

        {/* Text Section - slides from right */}
        <div className={`flex items-center w-[476px] case-study-content case-study-slide-right ${
          visibleSections['second-card'] ? 'visible' : ''
        }`}
        style={{ transitionDelay: '0.2s' }}
        >
          <p className="text-left text-xl font-normal worksans text-white leading-relaxed tracking-normal align-middle md:text-left">
            What began as a bold engineering vision has now grown into a deep-tech company building next-generation axial
            flux electric motors—designed and manufactured in India. These motors not only minimize energy loss but also
            deliver high torque, lightweight form, and exceptional power density, making them ideal for electric vehicles,
            defence systems, aerospace, and industrial machinery.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Story;