import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import cipherlogo from "../assets/images/Logo.png";

import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

interface HeaderProps {
  onHamburgerClick: () => void;
  bgcolor?: string;
  highlightOnClick?: boolean; // if true, use white color for active item
}

const Header: React.FC<HeaderProps> = ({
  onHamburgerClick,
  bgcolor = "bg-[#020919]",
  highlightOnClick = false,
}) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    { label: "Products", path: "/products" },
    { label: "Technology", path: "/technology" },
    { label: "Applications", path: "/applications" },
    { label: "About Us", path: "/aboutus" },
    { label: "Resources", path: "/resources" },
  ];

  return (
    <div className={`relative h-[92px] ${bgcolor} flex items-center justify-between px-4 sm:px-6 md:px-8 z-50`}>
      {/* Logo */}
      <div className="pl-2 sm:pl-4 md:pl-20">
        <Link to="/">
          <img src={cipherlogo} alt="Logo" className="w-[128px] h-[20px]" />
        </Link>
      </div>

      {/* Center Menu - hidden on mobile */}
      <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block">
        <Menubar className="bg-transparent shadow-none border-none gap-4 lg:gap-8">
          {menuItems.map(({ label, path }) => {
            const isActive = currentPath === path;
            const activeTextColor = isActive
              ? highlightOnClick
                ? "text-white"
                : "text-black"
              : "text-gray-400";

            return (
              <MenubarMenu key={label}>
                <Link to={path}>
<MenubarTrigger
  className={`nav-link worksans whitespace-nowrap ${activeTextColor} 
    hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent`}
>
  {label}
</MenubarTrigger>




                </Link>
              </MenubarMenu>
            );
          })}
        </Menubar>
      </div>

      {/* Right side */}
      <div className="flex items-center pr-2 sm:pr-4 md:pr-20">
        <Link
  to="/contactus"
  className="holographic-link"
>
  REQUEST DEMO
</Link>

        {/* Hamburger - visible on mobile */}
        <div className="block lg:hidden p-2 b`g-transparent">
          <button  onClick={onHamburgerClick}>
            <Menu className="h-6 w-6 text-gray-800" />
          </button>


          
        </div>
      </div>
    </div>
  );
};

export default Header;
