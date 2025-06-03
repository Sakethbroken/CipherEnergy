import { useState } from "react";
import Header from "../header";
import Mobilesidebar from "../mobilesidebar";
import ev from "../../ASSETS/images/ev.png";
import verified from "../../ASSETS/icons/verified.png";
import Cards from "./cards";
import expand from "../../ASSETS/icons/expand.png";

const Apps = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar(prev => !prev);

  const applicationCards = [
    "Aerospace",
    "Defence",
    "Aviation",
    "Industrial Machinery",
    "Renewable Energy",
    "Drones",
    "Marine",
  ];

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

  const cscards = [
    {
      title: "Use Case 001",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id commodo felis. Ut ultrices enim in eros posuere rutrum. Morbi enim nisi, imperdiet sed tempor eu, tempus ut ligula. Proin bibendum sapien eu lorem laoreet rhoncus. Integer a tempus leo. Vivamus mattis at est eu auctor. Suspendisse nec aliquet nunc.",
      img: "https://via.placeholder.com/352x210",
    },
    {
      title: "Use Case 002",
      desc: "Tempus ut ligula. Proin bibendum sapien eu lorem laoreet rhoncus. Integer a tempus leo. Vivamus mattis at est eu auctor. Suspendisse nec aliquet nunc.",
      img: "https://via.placeholder.com/352x210",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full overflow-x-hidden">
      <div className="w-full">
        <Header onHamburgerClick={toggleSidebar} />
        {showSidebar && <Mobilesidebar onClose={toggleSidebar} />}
      </div>

      {/* Hero Section */}
      <div className="w-full relative min-h-[613px] bg-gradient-to-b from-[#ffffff] to-[#074FF7] overflow-x-hidden">
        <div className="flex flex-col items-center py-20">
          <em className="playfair font-title text-[32px] md:text-[64px] leading-tight tracking-[-2%] font-black italic bg-gradient-to-r from-black to-[#074FF7] bg-clip-text text-transparent text-center pt-10">
            Applications
          </em>
          <p className="text-2xl md:text-2xl italic max-w-[578px] text-black mt-5 text-center px-4">
            Why our motors are <br/>revolutionary?
          </p>
        </div>

        {/* Application Cards - Consistent Container */}
        <div className="w-full flex justify-center items-center px-4">
          <div className="w-full max-w-[1200px]">
            <div className="flex justify-center overflow-x-auto gap-3 sm:gap-4 md:gap-5 mx-auto pb-5" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
              {applicationCards.map((card, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 flex flex-col items-center w-[90px] sm:w-[110px] md:w-[130px] lg:w-[140px]"
                >
                  <div className="w-full aspect-square rounded-md bg-white/20 flex items-center justify-center hover:bg-opacity-30 transition-all">
                    {/* Placeholder for icon/image */}
                  </div>
                  <h1 className="mt-2 text-center font-body text-white text-sm sm:text-base md:text-lg font-medium whitespace-normal break-words">{card}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* EV Section */}
      <div className="flex flex-col items-center pt-20 w-full px-4">
        <em className="playfair font-title text-[32px] md:text-[64px] leading-tight tracking-[-2%] font-black italic bg-gradient-to-r from-black to-[#074FF7] bg-clip-text text-transparent text-center pt-10">
          Electrical Vehicle
        </em>
        <p className="text-xl md:text-2xl italic max-w-[578px] text-black mt-5 text-center">
          Accelerating India's transition to electric mobility with high-efficiency axial flux motors
        </p>
      </div>

      <div className="w-full flex justify-center items-center my-10 px-4">
        <div className="max-w-[1200px] w-full flex flex-col items-center">
          <img src={ev} alt="EV Application" className="w-full rounded-2xl h-auto max-h-[616px] object-cover" />

          <div className="flex flex-col lg:flex-row gap-5 mt-5 w-full justify-center items-center lg:items-stretch">
            {["Weight reduction", "Increased Range", "Superior Torque"].map((label, i) => (
              <div
                key={i}
                className="w-full lg:flex-1 h-[80px] md:h-[96px] flex justify-between px-4 items-center rounded-2xl bg-[#EDEDED]"
              >
                <h1 className="font-bold text-black opacity-80 text-base md:text-lg lg:text-xl">{label}</h1>
                <img src={verified} alt="verified icon" className="w-10 h-10 md:w-12 md:h-12" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommended Models - Consistent Container */}
      <div className="w-full flex justify-center px-4">
        <div className="w-full max-w-[1200px]">
          <div className="flex flex-col pb-20 mt-10 gap-12 items-center w-full">
            <h1 className="text-[#020C22] text-xl text-start font-normal">Recommended Models</h1>
            <Cards title={"CEM 2"} />
            <Cards title={"CEM 3"} />
          </div>
        </div>
      </div>

      {/* Success Stories - Consistent Container */}
      <div className="w-full flex justify-center px-4">
        <div className="w-full max-w-[1200px]">
          <div className="flex flex-col items-center">
            <em className="playfair font-title text-[32px] md:text-[64px] leading-tight tracking-[-2%] font-black italic bg-gradient-to-r from-black to-[#074FF7] bg-clip-text text-transparent text-center mt-10">
              Success stories with <br />Indian EV manufacturers
            </em>

            {cscards.map((card, idx) => (
              <div key={idx} className="flex flex-col lg:flex-row gap-5 mt-10 w-full">
                <div className="w-full h-[210px] lg:w-[482px] lg:h-[316px] rounded-2xl overflow-hidden">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover bg-gradient-to-br from-white to-gray-400" />
                </div>

                <div className="w-full lg:w-[482px] flex flex-col gap-3">
                  <h1 className="font-bold text-lg bg-gradient-to-tr from-[#020919] via-[#074FF7] via-[#6384E9] to-[#020919] text-transparent bg-clip-text">
                    {card.title}
                  </h1>
                  <p className="font-body text-base font-normal leading-6">{card.desc}</p>
                  <button className="hidden sm:block cursor-pointer text-xs sm:text-sm font-semibold w-full sm:w-[128px] h-[40px] rounded-sm border border-transparent bg-[length:200%] hover:opacity-30 transition [border-image:linear-gradient(to_bottom,#020919,#074FF7,#6384E9,#074FF7,#020919)_1] [border-image-slice:1] overflow-hidden text-transparent bg-clip-text bg-gradient-to-tr from-[#020919] via-[#074FF7] via-[#6384E9] to-[#020919]">
                    Read more
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Documentation - Consistent Container */}
      <div className="w-full flex justify-center px-4">
        <div className="w-full max-w-[1200px]">
          <div className="flex flex-col items-center justify-center mt-10 pb-10">
            <em className="playfair font-title text-[32px] md:text-[64px] leading-tight tracking-[-2%] font-black italic bg-gradient-to-r from-black to-[#074FF7] bg-clip-text text-transparent text-center">
              Technical Documentation
            </em>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
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
    </div>
  );
};

export default Apps;