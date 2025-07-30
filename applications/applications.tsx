import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header";
import Mobilesidebar from "../mobilesidebar";
import Cards from "./cards";
import ev from "../../assets/images/ev.png";
import verified from "../../assets/icons/verified.png";
import expand from "../../assets/icons/expand.png";

const Apps = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();
  const toggleSidebar = () => setShowSidebar(prev => !prev);

  const applicationCards = [
    "Aerospace", "Defence", "Aviation", "Industrial Machinery",
    "Renewable Energy", "Drones", "Marine"
  ];

  const handleCardClick = (productId: string) => {
    navigate(`/${productId}`);
  };

  const techDocs = [
    { id: "doc1", title: "Product datasheets" },
    { id: "doc2", title: "Installation manuals" },
    { id: "doc3", title: "Maintenance guidelines" },
    { id: "doc4", title: "Technical drawings" },
    { id: "doc5", title: "Safety certifications" },
    { id: "doc6", title: "Efficiency comparison reports" },
  ];

  const downloadPDF = async (docId: string, docTitle: string) => {
    const fileMap = {
      doc1: "/pdfs/product_datasheets.pdf",
      doc2: "/pdfs/installation_manuals.pdf",
      doc3: "/pdfs/maintenance_guidelines.pdf",
      doc4: "/pdfs/technical_drawings.pdf",
      doc5: "/pdfs/safety_certifications.pdf",
      doc6: "/pdfs/efficiency_comparison_reports.pdf"
    };
    try {
      const filePath = fileMap[docId];
      if (!filePath) return alert("Document not available for download");

      const res = await fetch(filePath);
      if (!res.ok) throw new Error("File not found");

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${docTitle.replace(/\s+/g, "_").toLowerCase()}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (e) {
      alert("Error downloading file");
    }
  };

  const cscards = [
    {
      title: "Use Case 001",
      desc: "Lorem ipsum dolor sit amet...",
      img: "https://via.placeholder.com/352x210"
    },
    {
      title: "Use Case 002",
      desc: "Proin bibendum sapien eu lorem...",
      img: "https://via.placeholder.com/352x210"
    }
  ];

  return (
    <div className="w-full overflow-x-hidden">
      <Header onHamburgerClick={toggleSidebar} />
      {showSidebar && <Mobilesidebar onClose={toggleSidebar} />}

      {/* Hero Section */}
      ``````<div className="bg-gradient-to-b from-white/50 to-[#074FF7] min-h-[613px] flex flex-col items-center py-20">``````
        <em className="playfair text-[32px] md:text-[64px] italic bg-gradient-to-r from-black to-[#074FF7] bg-clip-text text-transparent font-black text-center">
          Applications
        </em>
        <p className="text-2xl italic text-black mt-5 text-center px-4">
          Why our motors are <br /> revolutionary?
        </p>

        <div className="px-4 sm:px-6 lg:px-8 mt-10">
          <div className="flex overflow-x-auto gap-4 hide-scrollbar w-full max-w-[1200px]">
            {applicationCards.map((label, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[140px] flex flex-col items-center"
              >
                <div className="w-full aspect-square rounded-md bg-white/20 hover:bg-opacity-30 transition-all" />
                <h1 className="mt-2 text-white text-lg font-medium text-center opacity-55 font-body">
                  {label}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* EV Section */}
      <div className="flex flex-col items-center pt-20 w-full px-4">
        <em className="playfair text-[32px] md:text-[64px] italic bg-gradient-to-r from-black to-[#074FF7] bg-clip-text text-transparent font-black text-center">
          Electrical Vehicle
        </em>
        <p className="text-xl italic text-black mt-5 text-center max-w-[578px]">
          Accelerating India's transition to electric mobility with high-efficiency axial flux motors
        </p>

        <div className="w-full max-w-[1200px] my-10">
          <img src={ev} alt="EV Application" className="w-full rounded-2xl max-h-[616px] object-cover" />
          <div className="flex flex-col lg:flex-row gap-5 mt-5">
            {["Weight reduction", "Increased Range", "Superior Torque"].map((label, i) => (
              <div key={i} className="flex justify-between items-center px-4 h-[96px] w-full bg-[#EDEDED] rounded-2xl">
                <h1 className="font-bold text-black opacity-80 text-lg">{label}</h1>
                <img src={verified} alt="verified icon" className="w-12 h-12" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-col items-center gap-10 py-20">
        <Cards title="CEM1" productId="cem1" />
        <Cards title="CEM2" productId="cem2" />
      </div>

      {/* Case Studies */}
      <div className="max-w-[1200px] px-4 mx-auto">
        <em className="playfair text-[32px] md:text-[64px] italic bg-gradient-to-r from-black to-[#074FF7] bg-clip-text text-transparent font-black text-center mt-10">
          Success stories with <br />Indian EV manufacturers
        </em>

        {cscards.map((card, idx) => (
          <div key={idx} className="flex flex-col lg:flex-row gap-5 mt-10">
            <div className="w-full lg:w-[482px] h-[210px] lg:h-[316px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#FFFFFF] to-[#999999]">
              <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
            </div>
            <div className="w-full lg:w-[482px] flex flex-col gap-3">
              <h1 className="font-bold text-lg bg-gradient-to-tr from-[#020919] via-[#074FF7] to-[#020919] text-transparent bg-clip-text">
                {card.title}
              </h1>
              <p className="font-body text-base font-normal leading-6">{card.desc}</p>
              <button className="hidden lg:flex text-sm h-[36px] w-[100px] font-semibold items-center justify-center rounded-[8px] text-transparent bg-clip-text bg-gradient-to-tr from-[#020919] via-[#074FF7] to-[#020919] relative before:absolute before:inset-0 before:rounded-[8px] before:p-[2px] before:bg-gradient-to-b before:from-[#020919] before:via-[#074FF7] before:to-[#020919] before:-z-10 after:absolute after:inset-[2px] after:rounded-[6px] after:bg-white after:-z-10">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Documentation */}
      <div className="max-w-[1200px] px-4 mx-auto py-20">
        <em className="playfair text-[32px] md:text-[64px] italic bg-gradient-to-r from-black to-[#074FF7] bg-clip-text text-transparent font-black text-center">
          Technical Documentation
        </em>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {techDocs.map((doc, idx) => (
            <div
              key={idx}
              className="min-h-[144px] rounded-xl border border-gray-200 shadow-sm p-4 flex flex-col justify-between cursor-pointer hover:shadow-md"
              onClick={() => downloadPDF(doc.id, doc.title)}
            >
              <div className="flex justify-between">
                <h1 className="text-base font-semibold">{doc.title}</h1>
                <img src={expand} alt="expand" className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-2 mt-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg" alt="PDF icon" className="w-6 h-6" />
                <span className="text-sm">PDF</span>
                <img src="https://cdn-icons-png.flaticon.com/512/724/724933.png" alt="Download" className="ml-auto w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apps;
