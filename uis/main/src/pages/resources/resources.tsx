import { useState, useEffect, useRef } from "react";
import Header from "../header";
import Mobilesidebar from "../mobilesidebar";
import Footer1 from "../footer";
import expand from "../../assets/icons/expandwhite.png"
import pdf from "../../assets/icons/pdf.png";
import download from "../../assets/icons/download.png";
import "../../slidecards.css"

const Res = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar((prev) => !prev);

  const [showAllCases, setShowAllCases] = useState(false);
  const [expandedCaseStudies, setExpandedCaseStudies] = useState({});

  // Animation states for case studies
  const [visibleCaseStudies, setVisibleCaseStudies] = useState({});
  const caseStudyRefs = useRef({});

  const toggleCaseStudyReadMore = (caseId) => {
    setExpandedCaseStudies(prev => ({
      ...prev,
      [caseId]: !prev[caseId]
    }));
  };

  // Intersection Observer for case studies
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const caseId = entry.target.dataset.caseid;
        if (caseId) {
          setVisibleCaseStudies(prev => ({
            ...prev,
            [caseId]: entry.isIntersecting
          }));
        }
      });
    }, observerOptions);

    // Observe all case study elements
    Object.values(caseStudyRefs.current).forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      Object.values(caseStudyRefs.current).forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, [showAllCases]); // Re-run when showAllCases changes

  // PDF Download Function for local files
  const downloadPDF = async (docId, docTitle) => {
    try {
      // Map document IDs to actual file paths in your public folder
      const fileMap = {
        'doc1': '/pdfs/product_datasheets.pdf',
        'doc2': '/pdfs/installation_manuals.pdf',
        'doc3': '/pdfs/maintenance_guidelines.pdf',
        'doc4': '/pdfs/technical_drawings.pdf',
        'doc5': '/pdfs/safety_certifications.pdf',
        'doc6': '/pdfs/efficiency_comparison_reports.pdf'
      };

      const filePath = fileMap[docId];
      
      if (!filePath) {
        console.error('File not found for document ID:', docId);
        alert('Document not available for download');
        return;
      }

      // Fetch the file from the public folder
      const response = await fetch(filePath);
      
      if (!response.ok) {
        throw new Error('File not found');
      }

      // Get the file as a blob
      const blob = await response.blob();
      
      // Create download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${docTitle.replace(/\s+/g, '_').toLowerCase()}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

    } catch (error) {
      console.error('Error downloading file:', error);
      alert('Error downloading file. Please try again.');
    }
  };

  const twoCards = [
    {
      id: "efficiency",
      title: "Unmatched Efficiency",
      desc: "Cipher's axial flux motors reduce energy losses by up to 20%, helping industries cut operational costs and achieve sustainability goals.",
      img: "https://via.placeholder.com/352x210",
    },
    {
      id: "compact",
      title: "Compact Design",
      desc: "Our motors offer high torque in a small footprint, enabling better space utilization in various industrial applications.",
      img: "https://via.placeholder.com/352x210",
    },
  ];

  const threeCards = [
    {
      id: "sustainable",
      title: "Sustainable Technology",
      desc: "Built with recyclable materials, our motors support green manufacturing practices and long-term ecological goals.",
      img: "https://via.placeholder.com/352x210",
    },
    {
      id: "integration",
      title: "Seamless Integration",
      desc: "Easily integrate Cipher motors with existing systems using standard mounting and control interfaces.",
      img: "https://via.placeholder.com/352x210",
    },
    {
      id: "proven",
      title: "Industry Proven",
      desc: "Trusted by top-tier industrial partners across automotive, aerospace, and energy sectors worldwide.",
      img: "https://via.placeholder.com/352x210",
    },
  ];

  const cscards = [
    {
      id: "case1",
      title: "Use Case 001",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id commodo felis...",
      img: "https://via.placeholder.com/352x210",
      fullDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id commodo felis. Our implementation of Cipher motors in this industrial setting resulted in 35% energy savings and 40% reduction in maintenance costs over a 12-month period. The client was able to recoup their investment within the first fiscal year and has since expanded deployment to additional production lines. The compact design also freed up valuable floor space that was repurposed for additional production capacity."
    },
    {
      id: "case2",
      title: "Use Case 002",
      desc: "Tempus ut ligula. Proin bibendum sapien eu lorem laoreet rhoncus...",
      img: "https://via.placeholder.com/352x210",
      fullDesc: "Tempus ut ligula. Proin bibendum sapien eu lorem laoreet rhoncus. After deploying our solution, the customer achieved ROI within 8 months of deployment and saw a 22% increase in production efficiency. The implementation went smoothly with minimal disruption to operations, requiring only a 48-hour shutdown for installation and calibration. The system has been operating at peak performance for over 18 months with zero unplanned downtime."
    },
    {
      id: "case3",
      title: "Use Case 003",
      desc: "Vivamus mattis at est eu auctor. Suspendisse nec aliquet nunc...",
      img: "https://via.placeholder.com/352x210",
      fullDesc: "Vivamus mattis at est eu auctor. Suspendisse nec aliquet nunc. By implementing our compact motor technology, the client achieved space savings of 45% in their drivetrain assembly area, which allowed for expanded production capacity without requiring a costly facility expansion. This spatial efficiency combined with reduced energy consumption led to a 27% decrease in per-unit production costs, significantly improving their competitive position in the market."
    },
    {
      id: "case4",
      title: "Use Case 004",
      desc: "Integer a tempus leo. Vivamus mattis at est eu auctor...",
      img: "https://via.placeholder.com/352x210",
      fullDesc: "Integer a tempus leo. Vivamus mattis at est eu auctor. This implementation resulted in a carbon footprint reduction of 120 tons per year while simultaneously improving operational efficiency by 18%. The client was able to meet their environmental sustainability targets two years ahead of schedule and received recognition from industry regulators for their proactive approach to green manufacturing practices. The reduction in energy consumption also provided insulation against rising energy costs in their region."
    },
  ];

  const visibleCases = showAllCases ? cscards : cscards.slice(0, 2);

  const techDocs = [
    {
      id: "doc1",
      title: "Product datasheets",
    },
    {
      id: "doc2",
      title: "Installation manuals",
    },
    {
      id: "doc3",
      title: "Maintenance guidelines",
    },
    {
      id: "doc4",
      title: "Technical drawings",
    },
    {
      id: "doc5",
      title: "Safety certifications",
    },
    {
      id: "doc6",
      title: "Efficiency comparison reports",
    },
  ];

  return (
    <>
    
      <div className="w-full">
        <Header onHamburgerClick={toggleSidebar} />
        {showSidebar && <Mobilesidebar onClose={toggleSidebar} />}
      </div>

      <div className="w-full">
        {/* 2-Card Section */}

        <div className="w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#020919] to-[#031030] p-4 sm:p-8 md:p-16 lg:p-24 xl:p-[120px] gap-8 sm:gap-12 md:gap-16 lg:gap-[80px]">
          
            <em className="playfair font-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] leading-tight tracking-[-2%] font-black italic bg-gradient-to-r from-white to-[#074FF7] bg-clip-text text-transparent text-center">
              Resources
            </em>
        
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[36px] w-full max-w-[1000px] px-4 sm:px-6 lg:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-[32px]">
              {twoCards.map((card, idx) => (
                <div key={idx} className="flex flex-col gap-3 sm:gap-4 lg:gap-[16px] w-full max-w-[484px] mx-auto lg:mx-0 cursor-pointer hover:opacity-90 transition">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="rounded-2xl w-full h-[180px] sm:h-[200px] lg:h-[210px] bg-gradient-to-br from-white to-gray-400"
                  />
                  <div className="flex flex-col gap-2 lg:gap-[8px]">

                    <div className="flex items-center justify-between gap-3 sm:gap-4 lg:gap-[16px]">
                      <h4 className="font-body text-base sm:text-lg font-bold leading-[140%] text-white bg-clip-text">
                        {card.title}
                      </h4>
                      <div className="cursor-pointer transform transition-transform duration-200 hover:scale-125">
                        <img src={expand} alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                    </div>

                    <p className="font-body text-white text-sm sm:text-base font-normal leading-5 sm:leading-6">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 3-Card Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-[32px]">
              {threeCards.map((card, idx) => (
                <div key={idx} className="flex flex-col gap-3 sm:gap-4 lg:gap-[16px] w-full max-w-[312px] mx-auto lg:mx-0 cursor-pointer hover:opacity-90 transition">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="rounded-2xl w-full h-[180px] sm:h-[200px] lg:h-[210px] bg-gradient-to-br from-white to-gray-400"
                  />
                  <div className="flex flex-col gap-2 lg:gap-[8px]">

                    <div className="flex items-center justify-between gap-3 sm:gap-4 lg:gap-[16px]">
                      <h4 className="font-body text-base sm:text-lg font-bold leading-[140%] text-white bg-clip-text">
                        {card.title}
                      </h4>
                    </div>

                    <p className="font-body text-white text-sm sm:text-base font-normal leading-5 sm:leading-6">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="holographic-link w-full max-w-[294px] h-[47px] mx-auto">View All</button>

          </div>
        </div>

        {/* Case Studies */}

        <div className="w-full bg-gradient-to-b from-[#031030] to-[#062774] flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-[64px] items-center pb-16 sm:pb-20 md:pb-24 lg:pb-[120px] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[120px]">
          <em className="playfair font-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] leading-tight tracking-[-2%] font-black italic bg-gradient-to-r from-white to-[#074FF7] bg-clip-text text-transparent text-center pt-6 sm:pt-8 lg:pt-10">
            Case Studies
          </em>

          {visibleCases.map((card, idx) => (
            <div 
              key={idx} 
              className="w-full max-w-[1000px] flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-[36px]"
              ref={el => caseStudyRefs.current[card.id] = el}
              data-caseid={card.id}
            >

              <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-[36px] w-full">
                {/* Image - slides from left */}
                <div className={`w-full lg:w-[482px] h-[200px] sm:h-[250px] lg:h-[316px] rounded-2xl overflow-hidden cursor-pointer hover:opacity-90 transition mx-auto lg:mx-0 case-study-image case-study-slide-left ${
                  visibleCaseStudies[card.id] ? 'visible' : ''
                }`}
                style={{ transitionDelay: '0.1s' }}
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover bg-gradient-to-br from-white to-gray-400"
                  />
                </div>

                {/* Text content - slides from right */}
                <div className={`w-full lg:w-[482px] flex flex-col gap-4 sm:gap-6 lg:gap-[24px] case-study-content case-study-slide-right ${
                  visibleCaseStudies[card.id] ? 'visible' : ''
                }`}
                style={{ transitionDelay: '0.2s' }}
                >

                  <h4 className="font-medium worksans text-xl sm:text-2xl leading-[140%] text-white bg-clip-text cursor-pointer hover:opacity-90">
                    {card.title}
                  </h4>
          
                  {/* Case study content with conditional expanded text */}
                  <p className="font-body worksans text-white text-sm sm:text-base font-normal leading-5 sm:leading-6">
                    {expandedCaseStudies[card.id] ? card.fullDesc : card.desc}
                  </p>
                  
                  {/* Read More button that toggles text expansion */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleCaseStudyReadMore(card.id);
                    }}
                    className="holo-cards flex justify-center items-center text-sm font-semibold px-6 w-[124px] h-[47px] rounded-md border border-white transition overflow-hidden whitespace-nowrap text-transparent bg-clip-text"
                  >
                    {expandedCaseStudies[card.id] ? "Show Less" : "Read more"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Documentation */}
        <div className="flex flex-col items-center gap-8 sm:gap-12 md:gap-16 lg:gap-[80px] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[120px] pb-16 sm:pb-20 md:pb-24 lg:pb-[120px] mx-auto bg-gradient-to-b from-[#062774] to-[#0944CF]">
          <em className="playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] italic bg-gradient-to-r from-white to-[#074FF7] bg-clip-text text-transparent font-black text-center">
            Technical Documentation
          </em>

          <div className="w-full max-w-[1000px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-[36px]">
              {techDocs.map((doc, idx) => (
                <div
                  key={idx}
                  className="min-h-[180px] sm:min-h-[200px] w-full max-w-[317px] mx-auto lg:mx-0 rounded-2xl sm:rounded-[32px] border-[2px] border-white bg-[#FFFFFF4D] shadow-sm p-6 sm:p-8 lg:p-[32px] flex flex-col justify-between cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => downloadPDF(doc.id, doc.title)}
                >
                  <div className="flex justify-between">
                    <h1 className="text-sm sm:text-base font-semibold text-white/80">{doc.title}</h1>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                      <span className="worksans text-base sm:text-lg text-white/30">PDF</span>
                      <img src={pdf} alt="PDF icon" className="w-6 h-6 sm:w-8 sm:h-8 lg:w-[32px] lg:h-[32px]" />
                    </div>
                    
                    <img src={download} alt="Download" className="w-7 h-6 sm:w-8 sm:h-7 lg:w-[33px] lg:h-[32px]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <div className="">
        <Footer1 />
      </div>
    </>
  );
};

export default Res;