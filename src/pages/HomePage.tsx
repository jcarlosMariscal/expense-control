import { useState } from "react";
import { HeaderComponent } from "../components/HeaderComponent";
import { Outlet } from "react-router-dom";
import { SidebarComponent } from "../components/SidebarComponents/SidebarComponent";

export const HomePage = () => {
  const [menuMobile, setMenuMobile] = useState(false);
  const toggleMenu = () => setMenuMobile(!menuMobile);
  return (
    <div className="flex">
      <SidebarComponent menuMobile={menuMobile} toggleMenu={toggleMenu} />
      <div className="content-main" id="contentMain">
        <HeaderComponent toggleMenu={toggleMenu} />
        <div className="page-container color-text">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
