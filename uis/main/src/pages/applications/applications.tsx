import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header";
import Mobilesidebar from "../mobilesidebar";
import Cards from "./cards";
import ev from "../../assets/images/ev.png";
import verified from "../../assets/icons/verified.png";
import expand from "../../assets/icons/expand.png";
import industrial from "../../assets/images/industrial.png";
import marine from "../../assets/images/marines.png";
import aerospace from "../../assets/images/aerospace.png";
import defence from "../../assets/images/defence.png";
import drone from "../../assets/images/drones.png";
import renewable from "../../assets/images/renewable.png";
import Hero from "./hero";
import pdf from "../../assets/icons/pdf.png";
import download from "../../assets/icons/download.png";
import Footer1 from "../footer";
const Apps = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();
  const toggleSidebar = () => setShowSidebar(prev => !prev);

  const applicationImages = [
    aerospace,
    defence,
    industrial,
    renewable,
    drone,
    marine
  ];

  const applicationCards = [
    "Aerospace", "Defence", "Industrial Machinery",
    "Renewable Energy", "Drones", "Marines"
  ];

  const handleCardClick = (productId) => {
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

  const downloadPDF = async (docId, docTitle) => {
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
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id commodo felis. Ut ultrices enim in eros posuere rutrum. Morbi enim nisi, imperdiet sed tempor eu, tempus ut ligula. Proin bibendum sapien eu lorem laoreet rhoncus. Integer a tempus leo. Vivamus mattis at est eu auctor. Suspendisse nec aliquet nunc. ",
      img: "https://via.placeholder.com/352x210"
    },
    {
      title: "Use Case 002",
      desc: "Proin bibendum sapien eu lorem tempor, vel cursus nulla dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris viverra venenatat.",
      img: "https://via.placeholder.com/352x210"
    }
  ];

  return (
    <div className="w-full flex flex-col">
    <div className="w-full overflow-x-hidden">
      <Header onHamburgerClick={toggleSidebar} />
      {showSidebar && <Mobilesidebar onClose={toggleSidebar} />}

      {/* Hero Section */}

       
      <div className="bg-gradient-to-b from-[#020919] to-[#074FF7] p-[120px]">
        <Hero />
      </div>




      {/* EV Section */}
      <div className="bg-gradient-to-b flex flex-col from-[#074FF7] to-[#031B51] p-[120px] gap-[80px]">

        <div className="flex flex-col items-center  w-[768px] h-[193px] mx-auto gap-[14px]">
          <em
  className="playfair text-[32px] md:text-[64px] italic 
  bg-gradient-to-r from-[#DEE6FF] to-[#5E8CFB] 
  bg-clip-text text-transparent font-black text-center"
>
  Electric Vehicle
</em>

          <p className="text-xl worksans text-white  text-center w-[344px] h-[102px]">
            Accelerating India's transition to electric mobility with high-efficiency axial flux motors
          </p>
           </div>

          <div className="w-full max-w-[1200px] mx-auto flex flex-col ">
            <img src={ev} alt="EV Application" className="w-full rounded-2xl mx-auto max-h-[616px] object-cover" />
            <div className="flex flex-col lg:flex-row gap-5 mt-5">
              {["Weight reduction", "Increased Range", "Superior Torque"].map((label, i) => (
                <div key={i} className="flex justify-between items-center px-4 h-[96px] w-full bg-[#EDEDED] rounded-2xl">
                  <h1 className="font-bold text-black opacity-80 text-lg">{label}</h1>
                  <img src={verified} alt="verified icon" className="w-12 h-12" />
                </div>
              ))}
            </div>
          </div>
       

        {/* Cards */}
        <div className="flex flex-col items-center gap-10 py-20">
          <Cards title="CEM1" productId="cem1" />
          <Cards title="CEM2" productId="cem2" />
        </div>
      </div>




      {/* Case Studies */}
      <div className="flex flex-col items-center gap-[80px] p-[120px] mx-auto  bg-gradient-to-b from-[#031B51] to-[#020919]">

        <em className="playfair italic font-black text-[64px] md:text-[64px] bg-gradient-to-r from-white to-[#074FF7] bg-clip-text text-transparent leading-[120%] tracking-[-0.02em] text-center max-w-[768px] h-[154px]">
          Success stories with <br />Indian EV manufacturers
        </em>

        <div className="w-full flex flex-col  gap-[80px] max-w-[1000px]">
          {cscards.map((card, idx) => (
            <div key={idx} className="flex flex-col lg:flex-row gap-[36px]">


              <div className="w-full lg:w-[482px] h-[210px] lg:h-[316px] rounded-2xl overflow-hidden bg-gradient-to-tr from-[#999999] to-[#FFFFFF]">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
              </div>


              <div className="w-full lg:w-[482px] flex flex-col gap-[24px]">
                <h1 className="font-bold text-lg bg-gradient-to-tr from-white to-white text-transparent bg-clip-text">
                  {card.title}
                </h1>
                <p className="font-body text-base font-normal text-white leading-6">{card.desc}</p>
                <button className="hidden holo-cards lg:flex text-sm h-[36px] w-[100px] font-semibold p-3 text-nowrap items-center justify-center">
                  Read more
                </button>
              </div>


            </div>
          ))}
        </div>
      </div>

      {/* Documentation */}
      <div className="flex flex-col items-center gap-[80px] p-[120px] mx-auto bg-gradient-to-b from-[#020919] to-[#0944CF]">
        <em className="playfair text-[32px] md:text-[64px] italic bg-gradient-to-r from-white to-[#074FF7] bg-clip-text text-transparent font-black text-center">
          Technical Documentation
        </em>

        <div className="w-full max-w-[1000px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[36px]">
            {techDocs.map((doc, idx) => (
              <div
                key={idx}
                className="min-h-[200px] max-w-[317px] rounded-[32px] border-[2px] border-white bg-[#FFFFFF4D] shadow-sm p-[32px] flex flex-col justify-between cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => downloadPDF(doc.id, doc.title)}
              >
                <div className="flex justify-between">
                  <h1 className="text-base font-semibold text-white/80">{doc.title}</h1>
                  
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                  <span className=" worksans text-lg text-white/30">PDF</span>
                  <img src={pdf} alt="PDF icon" className="w-[32px] h-[32px]" />
                  </div>
                  
                  <img src={download} alt="Download" className="w-[33px] h-[32px]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer1/>

    </div>
  );
};

export default Apps;