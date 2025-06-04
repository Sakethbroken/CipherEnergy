import { useState } from "react";
import Header from "../header";
import Mobilesidebar from "../mobilesidebar";
import Footer1 from "../footer";
import expand from "../../assets/icons/expand.png"

const Res = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar((prev) => !prev);

  const [showAllCases, setShowAllCases] = useState(false);
  const [expandedCaseStudies, setExpandedCaseStudies] = useState({});

  const toggleCaseStudyReadMore = (caseId) => {
    setExpandedCaseStudies(prev => ({
      ...prev,
      [caseId]: !prev[caseId]
    }));
  };

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
      <div className="w-full pb-15">
          <Header onHamburgerClick={toggleSidebar} />
          {showSidebar && <Mobilesidebar onClose={toggleSidebar} />}
        </div>
    
    <div className="mx-4 md:mx-8 lg:mx-16">
      <div className="flex flex-col items-center justify-center w-full">
        
        {/* Page Title */}
        <div className="flex justify-center">
          <em className="playfair font-title text-[32px] md:text-[64px] leading-tight tracking-[-2%] font-black italic bg-gradient-to-r from-black to-[#074FF7] bg-clip-text text-transparent text-center mt-10">
            Resources
          </em>
        </div>

        {/* 2-Card Section */}
        <div className="w-full max-w-[1000px] flex flex-col items-center justify-center mt-10">
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
            {twoCards.map((card, idx) => (
              <div key={idx} className="flex flex-col gap-2 w-full lg:w-[484px] cursor-pointer hover:opacity-90 transition">
                <img
                  src={card.img}
                  alt={card.title}
                  className="rounded-2xl w-full h-[210px] bg-gradient-to-br from-white to-gray-400"
                />
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-body text-lg font-bold leading-[140%] bg-gradient-to-tr from-[#020919] via-[#074FF7] via-[#6384E9] to-[#020919] text-transparent bg-clip-text">
                    {card.title}
                  </h4>
                  <div className="cursor-pointer transform transition-transform duration-200 hover:scale-125">
                    <img src={expand} alt="" className="src" />
                  </div>
                </div>
                <p className="font-body text-base font-normal leading-6">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* 3-Card Section */}
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 mt-10">
            {threeCards.map((card, idx) => (
              <div key={idx} className="flex flex-col gap-2 w-full lg:w-[312px] cursor-pointer hover:opacity-90 transition">
                <img
                  src={card.img}
                  alt={card.title}
                  className="rounded-2xl w-full h-[210px] bg-gradient-to-br from-white to-gray-400"
                />
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-body text-lg font-bold leading-[140%] bg-gradient-to-tr from-[#020919] via-[#074FF7] via-[#6384E9] to-[#020919] text-transparent bg-clip-text">
                    {card.title}
                  </h4>
                  <div className="cursor-pointer transform transition-transform duration-200 hover:scale-125">
                    <img src={expand} alt="" className="src" />
                  </div>
                </div>
                <p className="font-body text-base font-normal leading-6">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* View All Button */}
         
        </div>

        {/* Case Studies */}
        <em className="playfair font-title text-[32px] md:text-[64px] leading-tight tracking-[-2%] font-black italic bg-gradient-to-r from-black to-[#074FF7] bg-clip-text text-transparent text-center mt-10">
          Case Studies
        </em>

        {visibleCases.map((card, idx) => (
          <div key={idx} className="w-full max-w-[1000px] flex flex-col lg:flex-row gap-5 mt-10">
            <div className="w-full h-[210px] lg:w-[482px] lg:h-[316px] rounded-2xl overflow-hidden cursor-pointer hover:opacity-90 transition">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover bg-gradient-to-br from-white to-gray-400"
              />
            </div>

            <div className="w-full lg:w-[482px] flex flex-col gap-3">
              <div className="flex items-center justify-between gap-2">
                <h1 className="font-bold text-lg bg-gradient-to-tr from-[#020919] via-[#074FF7] via-[#6384E9] to-[#020919] text-transparent bg-clip-text cursor-pointer hover:opacity-90">
                  {card.title}
                </h1>
                <div className="cursor-pointer transform transition-transform duration-200 hover:scale-125">
                  <img src={expand} alt="" className="src" />
                </div>
              </div>
              
              {/* Case study content with conditional expanded text */}
              <p className="font-body text-base font-normal leading-6">
                {expandedCaseStudies[card.id] ? card.fullDesc : card.desc}
              </p>
              
              {/* Read More button that toggles text expansion */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  toggleCaseStudyReadMore(card.id);
                }}
                className="cursor-pointer hidden sm:block text-xs sm:text-sm font-semibold w-full sm:w-[128px] h-[40px] rounded-sm border border-transparent bg-[length:200%] hover:opacity-30 transition [border-image:linear-gradient(to_bottom,#020919,#074FF7,#6384E9,#074FF7,#020919)_1] [border-image-slice:1] overflow-hidden text-transparent bg-clip-text bg-gradient-to-tr from-[#020919] via-[#074FF7] via-[#6384E9] to-[#020919]"
              >
                {expandedCaseStudies[card.id] ? "Show Less" : "Read more"}
              </button>
            </div>
          </div>
        ))}


      

        {/* Technical Documentation */}
        <div className="flex flex-col items-center justify-center w-full mt-10 pb-10">
          <em className="playfair font-title text-[32px] md:text-[64px] leading-tight tracking-[-2%] font-black italic bg-gradient-to-r from-black to-[#074FF7] bg-clip-text text-transparent text-center">
            Technical Documentation
          </em>

          <div className="w-full max-w-[1000px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {techDocs.map((doc, idx) => (
              <div
                key={idx}
                className="w-full h-auto min-h-[144px] rounded-xl border border-gray-200 shadow-sm p-4 flex flex-col justify-between cursor-pointer hover:shadow-md transition"
                onClick={() => downloadPDF(doc.id, doc.title)}
              >
                <div className="flex items-center justify-between gap-2">
                  <h1 className="text-[16px] font-semibold">{doc.title}</h1>
                  <div className="cursor-pointer transform transition-transform duration-200 hover:scale-125">
                    <img src={expand} alt="" className="src" />
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mt-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg"
                    alt="PDF icon"
                    className="w-6 h-6"
                  />
                  <span className="text-[14px] font-normal">PDF</span>
                  <div className="ml-auto cursor-pointer">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/724/724933.png"
                      alt="Download icon"
                      className="w-5 h-5"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
    <Footer1 />
    </>
  );
};

export default Res;