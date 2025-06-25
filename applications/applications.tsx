import { useState } from "react";
import Header from "../header";
import Mobilesidebar from "../mobilesidebar";
import ev from "../../assets/images/ev.png";
import verified from "../../assets/icons/verified.png";
import Cards from "./cards";
import expand from "../../assets/icons/expand.png";
import { useNavigate } from "react-router-dom";

const Apps = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

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

  const handleCardClick = (productId: string) => {
    navigate(`/${productId}`);
  };

  const downloadPDF = async (docId, docTitle) => {
    try {
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

      const response = await fetch(filePath);
      if (!response.ok) throw new Error('File not found');

      const blob = await response.blob();
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
    { id: "doc1", title: "Product datasheets" },
    { id: "doc2", title: "Installation manuals" },
    { id: "doc3", title: "Maintenance guidelines" },
    { id: "doc4", title: "Technical drawings" },
    { id: "doc5", title: "Safety certifications" },
    { id: "doc6", title: "Efficiency comparison reports" },
  ];

  const cscards = [
    {
      title: "Use Case 001",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      img: "https://via.placeholder.com/352x210",
    },
    {
      title: "Use Case 002",
      desc: "Tempus ut ligula. Proin bibendum sapien eu lorem...",
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
      <div className="w-full relative min-h-[613px] bg-[linear-gradient(to_bottom,_#ffffff_40%,_#074FF7_100%)] overflow-x-hidden">
        <div className="flex flex-col items-center py-20">
          <em className="playfair font-title text-[32px] md:text-[64px] italic bg-gradient-to-r from-black to-[#074FF7] bg-clip-text text-transparent text-center pt-10 font-black">
            Applications
          </em>
          <p className="text-2xl italic max-w-[578px] text-black mt-5 text-center px-4">
            Why our motors are <br /> revolutionary?
          </p>
        </div>

          <div className=" px-4 sm:px-6 lg:px-8 flex justify-center">
       <div className="w-[1200px] h-[187px] flex overflow-x-auto whitespace-nowrap gap-4 hide-scrollbar">
    {applicationCards.map((card, idx) => (
      <div
        key={idx}
        className="flex-shrink-0 flex flex-col items-center w-[100px] sm:w-[120px] md:w-[140px] lg:w-[152px]"
      >
        <div className="w-full aspect-square rounded-md bg-white/20 flex items-center justify-center hover:bg-opacity-30 transition-all">
          {/* Placeholder for icon/image */}
        </div>
        <h1 className="mt-2 text-center opacity-55 text-nowrap font-body text-white text-lg font-medium">
          {card}
        </h1>
      </div>
    ))}
  </div>
      </div>
      </div>

      {/* EV Section */}
      <div className="flex flex-col items-center pt-20 w-full px-4">
        <em className="playfair font-title text-[32px] md:text-[64px] italic bg-gradient-to-r from-black to-[#074FF7] bg-clip-text text-transparent text-center pt-10 font-black">
          Electrical Vehicle
        </em>
        <p className="text-xl italic max-w-[578px] text-black mt-5 text-center">
          Accelerating India's transition to electric mobility with high-efficiency axial flux motors
        </p>
      </div>

      <div className="w-full flex justify-center items-center my-10 px-4">
        <div className="max-w-[1200px] w-full flex flex-col items-center">
          <img src={ev} alt="EV Application" className="w-full rounded-2xl h-auto max-h-[616px] object-cover" />
          <div className="flex flex-col lg:flex-row gap-5 mt-5 w-full justify-center items-center lg:items-stretch">
            {["Weight reduction", "Increased Range", "Superior Torque"].map((label, i) => (
              <div key={i} className="w-full lg:flex-1 h-[96px] flex justify-between px-4 items-center rounded-2xl bg-[#EDEDED]">
                <h1 className="font-bold text-black opacity-80 text-lg">{label}</h1>
                <img src={verified} alt="verified icon" className="w-12 h-12" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommended Models */}
      <div className="w-full flex justify-center px-4">
        <div className="w-full max-w-[1200px]">
          <div className="flex flex-col pb-20 mt-10 gap-12 items-center w-full">
            <h1 className="text-[#020C22] text-xl font-normal">Recommended Models</h1>
            
         <div className="flex flex-col pb-20 mt-15 gap-10 items-center w-[1200px]">
             <Cards title="CEM1" productId="cem1" />

            </div>
            <div className="flex flex-col pb-20 mt-15 gap-10 items-center w-full">
        <Cards title="CEM2" productId="cem2" />
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="w-full flex justify-center px-4">
        <div className="w-full max-w-[1200px]">
          <div className="flex flex-col items-center">
            <em className="playfair font-title text-[32px] md:text-[64px] italic bg-gradient-to-r from-black to-[#074FF7] bg-clip-text text-transparent text-center mt-10 font-black">
              Success stories with <br />Indian EV manufacturers
            </em>

            {cscards.map((card, idx) => (
              <div key={idx} className="flex flex-col lg:flex-row gap-5 mt-10 w-full">
                <div className="w-full h-[210px] lg:w-[482px] lg:h-[316px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#FFFFFF] to-[#999999]">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
                </div>

                <div className="w-full lg:w-[482px] flex flex-col gap-3">
                  <h1 className="font-bold text-lg bg-gradient-to-tr from-[#020919] via-[#074FF7] via-[#6384E9] to-[#020919] text-transparent bg-clip-text">
                    {card.title}
                  </h1>
                  <p className="font-body text-base font-normal leading-6">{card.desc}</p>
                  <button className="relative hidden cursor-pointer lg:flex text-sm h-[36px] w-[100px] font-semibold items-center justify-center rounded-[8px] text-transparent bg-clip-text bg-gradient-to-tr from-[#020919] via-[#074FF7] to-[#020919] before:absolute before:inset-0 before:rounded-[8px] before:p-[2px] before:bg-gradient-to-b before:from-[#020919] before:via-[#074FF7] before:to-[#020919] before:-z-10 after:absolute after:inset-[2px] after:rounded-[6px] after:bg-white after:-z-10">
                    Read more
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Documentation */}
      <div className="w-full flex justify-center px-4">
        <div className="w-full max-w-[1200px]">
          <div className="flex flex-col items-center justify-center mt-10 pb-10">
            <em className="playfair font-title text-[32px] md:text-[64px] italic bg-gradient-to-r from-black to-[#074FF7] bg-clip-text text-transparent text-center font-black">
              Technical Documentation
            </em>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {techDocs.map((doc, idx) => (
                <div
                  key={idx}
                  className="w-full min-h-[144px] rounded-xl border border-gray-200 shadow-sm p-4 flex flex-col justify-between cursor-pointer hover:shadow-md transition"
                  onClick={() => downloadPDF(doc.id, doc.title)}
                >
                  <div className="flex items-center justify-between gap-2">
                    <h1 className="text-[16px] font-semibold">{doc.title}</h1>
                    <div className="cursor-pointer transform transition-transform hover:scale-125">
                      <img src={expand} alt="expand" />
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
