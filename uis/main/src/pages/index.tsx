import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Home from "./home";
import OrdersPage from "./products";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./products";
import ViewProduct from "./viewproduct/viewproduct";
import Apps from "./applications/applications";
import Aboutpage from "./aboutus/aboutus";
import Privacypage from "./privacypolicy";
import Contactpage from "./contactus";
import Technologypage from "./technology";
import Resourcepage from "./resources";
import Apps1 from "./applications";
import Customization from "./custom/custom";




const Pages = () => {
    return (
          
            
            <div className="flex-1 overflow-auto ">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/viewproduct" element={<ViewProduct />} />
                    <Route path="/products" element={<ProductsPage/>} />
                    <Route path="/aboutus" element={<Aboutpage/>} />
                    <Route path="/privacypolicy" element={<Privacypage/>} />
                    <Route path="/contactus" element={<Contactpage/>} />
                    <Route path="/technology" element={<Technologypage/>} />
                    <Route path="/resources" element={<Resourcepage/>} />
                    <Route path="/applications" element={<Apps1/>} />
                    <Route path="/customization" element={<Customization/>} />

                  
                   
                </Routes>
            </div>
        
    );
};

export default Pages;
