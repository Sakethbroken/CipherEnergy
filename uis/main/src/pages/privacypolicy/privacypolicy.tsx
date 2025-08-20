import { useState } from "react";
import Mobilesidebar from "../mobilesidebar";
import Header from "../header";
import Footer1 from "../footer";

const Policy = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <>
      <Header onHamburgerClick={toggleSidebar} />
      {showSidebar && <Mobilesidebar onClose={toggleSidebar} />}

      <div
        className="flex flex-col p-[120px] gap-[80px] text-center"
        style={{
          background:
            "linear-gradient(to bottom, #020919 , #031030 , #041847 , #062774 , #0944CF)",
        }}
      >
        <h1 className="playfair font-black italic text-[64px] leading-[120%] tracking-[-0.02em] bg-gradient-to-r from-[#DEE6FF] to-[#5E8CFB] text-transparent bg-clip-text max-w-[1026px] mx-auto">
          Privacy Policy, Terms & Conditions & Technical Implementation Notes
        </h1>

        {/* Privacy Policy */}
        <section className="text-start flex flex-col gap-[32px]">

          <h2 className="font-body font-bold text-[40px] leading-[100%] tracking-tight mb-6 bg-gradient-to-r from-[#DEE6FF] to-20% to-[#5E8CFB] text-transparent bg-clip-text">
            Privacy Policy
          </h2>

          <h3 className="font-body font-bold lg:text-3xl sm:text-xl text-gray-300">
            At Cipher Energy, we respect your privacy and are committed to
            protecting your personal information. This policy outlines how we
            handle your data:
          </h3>

          <div className="w-[1072px]">
            <p className="text-xl  tracking-normal leading-[27px]  font-bold  worksans  text-white">Data Collection</p>
            <p className=" text-xl leading-[27px] worksans text-white">
              We collect only the necessary information for processing
              inquiries, orders, and service improvements. This includes
              contact details, purchase preferences, and usage analytics.
            </p>
          </div>

          <div>
            <p className="font-bold text-xl  tracking-normal leading-[27px] text-white">Usage of Information</p>
            <p className="text-xl  tracking-normal leading-[27px] text-white">
              Your data is used to provide services, improve user experience,
              and communicate updates. We do not sell or share your data with
              third parties without consent.
            </p>
          </div>

          <div>
            <p className="font-bold text-xl  tracking-normal leading-[27px] text-white">User Rights</p>
            <p className="text-xl  tracking-normal leading-[27px] text-white">
              You have the right to access, update, or request deletion of your
              personal data. You may also opt out of non-essential
              communications.
            </p>
          </div>

          <div>
            <p className="font-bold text-xl  tracking-normal leading-[27px] text-white">
              Data Protection Compliance
            </p>
            <p className="text-xl  tracking-normal leading-[27px] text-white">
              We adhere to the Information Technology Act, 2000 and relevant
              Indian data protection regulations to ensure lawful and secure
              handling of personal information.
            </p>
          </div>
        </section>

        {/* Terms and Conditions */}
        <section className="text-start flex flex-col gap-[32px]">
          <h2 className="font-body font-bold text-[40px] leading-[100%] tracking-tight bg-gradient-to-r from-[#DEE6FF] to-20% to-[#5E8CFB] text-transparent bg-clip-text mb-6">
            Terms and Conditions
          </h2>
          <h3 className="font-body font-bold lg:text-3xl sm:text-xl text-gray-300 mb-6">
            By accessing or using Cipher Energy's website and services, you
            agree to the following terms:
          </h3>

          <div>
            <p className="font-bold text-xl  tracking-normal leading-[27px] text-white">Orders and Purchases</p>
            <p className="text-xl  tracking-normal leading-[27px] text-white">
              All orders are subject to acceptance and availability. Prices and
              specifications are subject to change without prior notice.
            </p>
          </div>

          <div>
            <p className="font-bold text-xl  tracking-normal leading-[27px] text-white">Warranty</p>
            <p className="text-xl  tracking-normal leading-[27px] text-white">
              Products are covered under a limited warranty, details of which
              are provided with each unit. Misuse or unauthorized modification
              may void warranty.
            </p>
          </div>

          <div>
            <p className="font-bold text-xl  tracking-normal leading-[27px] text-white">Intellectual Property</p>
            <p className="text-xl  tracking-normal leading-[27px] text-white">
              All trademarks, logos, designs, and content on this site are the
              property of Cipher Energy and may not be reproduced without
              permission.
            </p>
          </div>

          <div>
            <p className="font-bold text-xl  tracking-normal leading-[27px] text-white">Liability</p>
            <p className="text-xl  tracking-normal leading-[27px] text-white">
              Cipher Energy is not liable for any indirect, incidental, or
              consequential damages arising from the use of our products or
              services.
            </p>
          </div>

          <div>
            <p className="font-bold text-xl  tracking-normal leading-[27px] text-white">Dispute Resolution</p>
            <p className="text-xl  tracking-normal leading-[27px] text-white">
              Any disputes will be subject to the jurisdiction of the courts of
              Hyderabad, India, and shall be resolved through arbitration or
              mediation wherever applicable.
            </p>
          </div>
        </section>

        {/* Technical Implementation Notes */}
        <section className="text-start flex flex-col gap-[32px]">
          <h2 className="font-body font-bold text-[32px] leading-[100%] tracking-tight bg-gradient-to-r from-[#DEE6FF] to-20% to-[#5E8CFB] text-transparent bg-clip-text mb-4">
            Technical Implementation Notes
          </h2>
          <h3 className="font-body font-bold lg:text-3xl sm:text-xl text-gray-300 mb-6">
            To ensure optimal experience and security, Cipher Energy's website
            is built with the following principles:
          </h3>

          <div>
            <p className="font-bold text-xl  tracking-normal leading-[27px] text-white">Responsive Design</p>
            <p className="text-xl  tracking-normal leading-[27px] text-white">
              Works seamlessly across devices—mobile, tablet, and desktop.
            </p>
          </div>

          <div>
            <p className="font-bold text-xl  tracking-normal leading-[27px] text-white">Performance Optimized</p>
            <p className="text-xl  tracking-normal leading-[27px] text-white">
              Fast load times, image compression, and minimal code for speed.
            </p>
          </div>

          <div>
            <p className="font-bold text-xl  tracking-normal leading-[27px] text-white">Data Security</p>
            <p className="text-xl  tracking-normal leading-[27px] text-white">
              Encrypted communication via HTTPS and secure data handling
              practices.
            </p>
          </div>

          <div>
            <p className="font-bold text-xl  tracking-normal leading-[27px] text-white">Multilingual Support</p>
            <p className="text-xl  tracking-normal leading-[27px] text-white">
              Built-in structure to accommodate future Indian language support.
            </p>
          </div>

          <div>
            <p className="font-bold text-xl  tracking-normal leading-[27px] text-white">
              CRM & Analytics Integration
            </p>
            <p className="text-xl  tracking-normal leading-[27px] text-white">
              Enables efficient lead tracking and performance monitoring.
            </p>
          </div>

          <div>
            <p className="font-bold text-xl  tracking-normal leading-[27px] text-white">Accessibility</p>
            <p className="text-xl  tracking-normal leading-[27px] text-white">
              Designed with inclusive navigation and readability in mind.
            </p>
          </div>

          <div>
            <p className="font-bold text-xl  tracking-normal leading-[27px] text-white">Search Functionality</p>
            <p className="text-xl  tracking-normal leading-[27px] text-white">
              Easy access to technical content and documentation.
            </p>
          </div>

          <div>
            <p className="font-bold text-xl  tracking-normal leading-[27px] text-white">Modular CMS</p>
            <p className="text-xl  tracking-normal leading-[27px] text-white">
              Allows flexible content updates without downtime.
            </p>
          </div>
        </section>
      </div>

      <Footer1 />
    </>
  );
};

export default Policy;
