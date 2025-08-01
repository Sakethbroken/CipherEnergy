import { Link } from 'react-router-dom';
import React from "react";
import bluemoon from "../assets/images/bluemoon.png";
import cipherenergy from "../assets/images/CIPHERENERGY.png";
import youtube from "../assets/icons/youtube.png";
import x from "../assets/icons/x.png";
import linkedin from "../assets/icons/linkedin.png";

const Footer1 = () => {
  return (
    <div className="relative w-full bg-gradient-to-b from-[#074FF7] to-[#020919] text-white">
      <div className="max-w-[1340px] pt-10 flex flex-col md:flex-row justify-between mx-auto px-4 sm:px-6">
        <div className="grid w-full md:w-[544px] grid-cols-2 sm:grid-cols-4 gap-3 text-white text-sm mb-8 md:mb-0">
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold pb-1">Products</h4>
         <Link to="/cem1" className="text-left hover:text-blue-300 cursor-pointer">Product 1</Link>
<Link to="/cem2" className="text-left hover:text-blue-300 cursor-pointer">Product 2</Link>
<Link to="/cem3" className="text-left hover:text-blue-300 cursor-pointer">Product 3</Link>

          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold w-fit pb-1 cursor-pointer">Resources</h4>
            <button className="text-left hover:text-blue-300 cursor-pointer">Blogs</button>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold w-fit pb-1">Company</h4>
            <Link to="/aboutus" className="text-left cursor-pointer hover:text-blue-300">About Us</Link>
            <Link to="/career" className="text-left cursor-pointer hover:text-blue-300">Career</Link>
            <Link to="/contactus" className="text-left cursor-pointer hover:text-blue-300">Contact</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold w-fit pb-1">Legal</h4>
            <Link to="/privacypolicy" className="text-left hover:text-blue-300">Privacy Policy</Link>
          </div>
        </div>

        <div className="flex flex-col gap-3 w-full sm:w-[253px] h-[72px] items-center md:items-end">
          <div className="flex gap-5 text-right items-end">
            <button className="cursor-pointer">
              <a
                href="https://www.linkedin.com/company/cipher-energy1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="LinkedIn" />
              </a>
            </button>
            <button className="cursor-pointer">
              <img src={x} alt="X" />
            </button>
            <button className="cursor-pointer">
              <img src={youtube} alt="YouTube" />
            </button>
          </div>
          <div className="">
            <p className="w-full sm:w-[253px] text-sm text-center md:text-right">
              © CipherEnergy. All rights reserved 2025
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1340px] mt-30 mx-auto px-4 sm:px-6 overflow-hidden">
        <img src={cipherenergy} alt="" className="w-full" />
      </div>

      <div className="">
        <img src={bluemoon} alt="" className="w-full h-[100px] sm:h-[120px] md:h-[140px]" />
      </div>
    </div>
  );
};

export default Footer1;
