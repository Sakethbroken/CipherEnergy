import { useState } from "react"
import Mobilesidebar from "../mobilesidebar"
import Header from "../header"
import Footer1 from "../footer";

const Policy = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    
    const toggleSidebar = () => {
      setShowSidebar((prev) => !prev);
    };

    return(
        <>
      <Header onHamburgerClick={toggleSidebar}/>
      {showSidebar && <Mobilesidebar onClose={toggleSidebar} />}

    <div className="relative bg-[#F4F4F4] flex flex-col pb-10 justify-center text-center">
        {/* heading */}
        <div className="mt-30 flex justify-center w-full">
        <h1 className="playfair font-title font-black italic text-[32px] sm:text-[64px] leading-[100%] tracking-[-0.02em] text-center bg-gradient-to-r from-[#022747] to-[#4CACFF] text-transparent bg-clip-text">
        Privacy Policy, Terms & Conditions
        & Technical Implementation Notes
        </h1>
        </div>

        {/* content */}
        <div className="flex w-[368px] lg:w-[1200px] bg-white mt-10 justify-center items-start rounded-2xl shadow-sm py-8 px-4 mx-auto">
  <div className="w-[1072px] rounded-2xl p-8 ">




    <div className="">
    <h1 className="font-body font-bold text-[40px] leading-[100%] tracking-tight text-[#022747] bg-clip-text mb-6 text-left">
      Privacy Policy
    </h1>

    <h3 className="font-body font-bold lg:text-3xl sm:text-xl text-gray-500 mb-6 text-left">
      At Cipher Energy, we respect your privacy and are committed to protecting your personal information. This policy outlines how we handle your data:
    </h3>

    <div className="mb-6 text-left">
      <p className="font-bold text-base text-black mb-1">Data Collection</p>
      <p className="text-base text-gray-700">
        We collect only the necessary information for processing inquiries, orders, and service improvements. This includes contact details, purchase preferences, and usage analytics.
      </p>
    </div>

    <div className="mb-6 text-left">
      <p className="font-bold text-base text-black mb-1">Usage of Information</p>
      <p className="text-base text-gray-700">
        Your data is used to provide services, improve user experience, and communicate updates. We do not sell or share your data with third parties without consent.
      </p>
    </div>

    <div className="mb-6 text-left">
      <p className="font-bold text-base text-black mb-1">User Rights</p>
      <p className="text-base text-gray-700">
        You have the right to access, update, or request deletion of your personal data. You may also opt out of non-essential communications.
      </p>
    </div>

    <div className="text-left">
      <p className="font-bold text-base text-black mb-1">Data Protection Compliance</p>
      <p className="text-base text-gray-700">
        We adhere to the Information Technology Act, 2000 and relevant Indian data protection regulations to ensure lawful and secure handling of personal information.
      </p>
    </div>
    </div>



    <div className="mt-10">
  <h1 className="font-body font-bold text-[40px] leading-[100%] tracking-tight  text-[#022747] bg-clip-text mb-6 text-left">
    Terms and Conditions
  </h1>

  <h3 className="font-body font-bold lg:text-3xl sm:text-xl text-gray-500 mb-6 text-left">
    By accessing or using Cipher Energy’s website and services, you agree to the following terms:
  </h3>

  <div className="mb-6 text-left">
    <p className="font-bold text-base text-black mb-1">Orders and Purchases</p>
    <p className="text-base text-gray-700">
      All orders are subject to acceptance and availability. Prices and specifications are subject to change without prior notice.
    </p>
  </div>

  <div className="mb-6 text-left">
    <p className="font-bold text-base text-black mb-1">Warranty</p>
    <p className="text-base text-gray-700">
      Products are covered under a limited warranty, details of which are provided with each unit. Misuse or unauthorized modification may void warranty.
    </p>
  </div>

  <div className="mb-6 text-left">
    <p className="font-bold text-base text-black mb-1">Intellectual Property</p>
    <p className="text-base text-gray-700">
      All trademarks, logos, designs, and content on this site are the property of Cipher Energy and may not be reproduced without permission.
    </p>
  </div>

  <div className="mb-6 text-left">
    <p className="font-bold text-base text-black mb-1">Liability</p>
    <p className="text-base text-gray-700">
      Cipher Energy is not liable for any indirect, incidental, or consequential damages arising from the use of our products or services.
    </p>
  </div>

  <div className="text-left">
    <p className="font-bold text-base text-black mb-1">Dispute Resolution</p>
    <p className="text-base text-gray-700">
      Any disputes will be subject to the jurisdiction of the courts of Hyderabad, India, and shall be resolved through arbitration or mediation wherever applicable.
    </p>
  </div>
</div>



<div className="mt-10">
  <h1 className="font-body font-bold text-[32px] leading-[100%] tracking-tight text-[#022747] mb-4 text-left">
    Technical Implementation Notes
  </h1>

  <h3 className="font-body font-bold lg:text-3xl sm:text-xl text-gray-500 mb-6 text-left">
    To ensure optimal experience and security, Cipher Energy’s website is built with the following principles:
  </h3>

  <div className="mb-4 text-left">
    <p className="font-bold text-md text-base text-black mb-1">Responsive Design</p>
    <p className="text-base text-gray-700">
      Works seamlessly across devices—mobile, tablet, and desktop.
    </p>
  </div>

  <div className="mb-4 text-left">
    <p className="font-bold text-base text-black mb-1">Performance Optimized</p>
    <p className="text-base text-gray-700">
      Fast load times, image compression, and minimal code for speed.
    </p>
  </div>

  <div className="mb-4 text-left">
    <p className="font-bold text-base text-black mb-1">Data Security</p>
    <p className="text-base text-gray-700">
      Encrypted communication via HTTPS and secure data handling practices.
    </p>
  </div>

  <div className="mb-4 text-left">
    <p className="font-bold text-base text-black mb-1">Multilingual Support</p>
    <p className="text-base text-gray-700">
      Built-in structure to accommodate future Indian language support.
    </p>
  </div>

  <div className="mb-4 text-left">
    <p className="font-bold text-base text-black mb-1">CRM & Analytics Integration</p>
    <p className="text-base text-gray-700">
      Enables efficient lead tracking and performance monitoring.
    </p>
  </div>

  <div className="mb-4 text-left">
    <p className="font-bold text-base text-black mb-1">Accessibility</p>
    <p className="text-base text-gray-700">
      Designed with inclusive navigation and readability in mind.
    </p>
  </div>

  <div className="mb-4 text-left">
    <p className="font-bold text-base text-black mb-1">Search Functionality</p>
    <p className="text-base text-gray-700">
      Easy access to technical content and documentation.
    </p>
  </div>

  <div className="text-left">
    <p className="font-bold text-base text-black mb-1">Modular CMS</p>
    <p className="text-base text-gray-700">
      Allows flexible content updates without downtime.
    </p>
  </div>
</div>








  </div>
</div>


    </div>


    <Footer1/>
    </>
    )
}

export default Policy